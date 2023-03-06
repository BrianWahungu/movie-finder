// import React, {useState } from 'react';
// import './index.css';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [submitted, setSubmitted] = useState(false)


// 	function handleSubmit(event) {
// 		event.preventDefault();
// 		setSubmitted(true);
// 	  }
    

// 	  if (submitted) {
// 		// Redirect the user to the home page
// 		window.location.href = '/home';
// 		return null;
// 	  }
	
//   return (
//     <div className="login-box">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="user-box">
//           <input type="text" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
//           <label>Username</label>
//         </div>
//         <div className="user-box">
//           <input type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
//           <label>Password (5 letters)</label>
//         </div>
//     <a href="#">
//       <span></span>
//       <span></span>
//       <span></span>
//       <span></span>
//       Submit
//     </a>
//   </form>
// </div>
//   );
// }

// export default LoginForm;
