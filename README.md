## Introduction:

# Movie Finder App:

This is an app that allows the user to register and login and add a new movie among other functionalities such as:
- User can view all the added movies.
- User can view all the available movies.
- A user can search a movie through title or year.
- A user can be able to update details of the movie they have added.
- A user can be able to remove details of the movie they have added.
- A user can not update or delete movies they have not added.
- A user has to be logged in to use the application. 

## Created Using:

This is an app that has been created using:
- React: For Front end and User Interface (UI)
- Ruby- Sinatra- Gem- For backend and server interaction

## Steps followed to complete the application:
1. Designed the UI: Before starting the development, I first planned out the user interface (UI) of my application. I Sketched out a few designs to get an idea of how I wanted the app to look and function.

2. Set up the backend: I then Began setting up the backend server using Sinatra. This is a lightweight web framework written in Ruby. I used a tool called Bundler to manage my application's dependencies.

3. Create APIs: The backend of my application needed to expose a few endpoints (APIs) that can be used by the frontend. For example, I needed to create an API that allowed the user to search for movies based on a user's query. I used a Ruby libraries known JSON to make HTTP requests to external movie databases (e.g. IMDb) and parse the JSON response.

4. Set up the frontend: Next, I set up my React project using create-react-app. This gave me a basic React application with a development server and a few other useful tools.

5. Create components: In React, I created reusable UI components that can be used throughout my application. For example, I created a MovieCard component that displayed information about a single movie (e.g. title, poster image, rating, etc.).

6. Connect to the backend: Using the fetch API or a library like axios, I made requests to my backend API endpoints and retrieved data. I then updated my React components with the retrieved data.

7. Build the search functionality: Finally, I implemented the search functionality in my application. When a user enters a search query, he/she can make a request to my backend API and retrieve a list of movies that match the query. The results are displayed in the search results to the user in a list or grid view.

## Running the application:

The best way to use the application is on a web browser, by following these simple steps:

1. Click on the deployed link: https://movie-finder-six-delta.vercel.app/

## Testing the functionalities of the application:

2. Try out each of the following functions:

- User can view all the added movies.

- User can view all the available movies.

- A user can search a movie through title or year.

- A user can be able to update details of the movie they have added.

- A user can be able to remove details of the movie they have added.

- A user can not update or delete movies they have not added.

- A user has to be logged in to use the application. 

3. Congratulations, you have successfully tested out the application. 

## Conclusion:

I have successfully made an application that involves the front end and the backend and is able to perform CRUD operations. For more information about how the backend operates, please visit this link:

## Worked on by:

1. Brian Wahungu.

2. Albert Byrone.

## License:

Apache 2.0 