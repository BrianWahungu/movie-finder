require 'sinatra'
require 'sinatra/namespace'
require 'bcrypt'
require 'sequel'

DB = Sequel.connect('sqlite://movie_app.db')

require_relative 'models/user'
require_relative 'models/movie'

namespace '/api' do
  before do
    content_type 'application/json'
    headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE']
  end

  options '/*' do
    200
  end

  post '/login' do
    user = User.where(email: params[:email]).first

    if user && BCrypt::Password.new(user.password_digest) == params[:password]
      { token: user.api_key }.to_json
    else
      halt 401
    end
  end

  post '/register' do
    user = User.new(email: params[:email], password: params[:password])

    if user.save
      { token: user.api_key }.to_json
    else
      halt 400
    end
  end

  namespace '/movies' do
    before do
      authenticate!
    end

    get do
      @movies = current_user.movies.all
      @movies.to_json
    end

    post do
      @movie = current_user.movies.new(params)
      if @movie.save
        @movie.to_json
      else
        halt 400
      end
    end

    get '/all' do
      @movies = Movie.all
      @movies.to_json
    end

    get '/search' do
      @movies = Movie.where(Sequel.ilike(:title, "%#{params[:q]}%"))
      @movies.to_json
    end

    get '/:id' do |id|
      @movie = current_user.movies.where(id: id).first
      if @movie
        @movie.to_json
      else
        halt 404
      end
    end

    put '/:id' do |id|
      @movie = current_user.movies.where(id: id).first
      if @movie.update(params)
        @movie.to_json
      else
        halt 400
      end
    end

    delete '/:id' do |id|
      @movie = current_user.movies.where(id: id).first
      if @movie.destroy
        200
      else
        halt 400
      end
    end
  end
end

def authenticate!
  halt 401 unless current_user
end

def current_user
  @current_user ||= User.where(api_key: request.env['HTTP_AUTHORIZATION']).first
end
