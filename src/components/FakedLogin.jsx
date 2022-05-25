import { useState } from "react";
import piravid from "../assets/Piravid.png";

const FakedLogin = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const userName = "Piravid";
  const userPassword = "grillkorv";

  const handleLogin = (e) => {
    e.preventDefault();
    if (e.target.userName.value === userName && e.target.Password.value === userPassword) {
      setLoggedIn(true);
    } else {
      alert("Wrong username or password");
    }
  }

  return (
    <div className="App">
      {LoggedIn ? <h1>Welcome back {userName}  <img src={piravid} alt="piravid"/>  </h1> : <h1>Login</h1>} 
      {LoggedIn ? <button onClick={() => setLoggedIn(false)}>Logout</button> : 

      <form onSubmit={handleLogin}>
        <input type="text" name="userName" placeholder="Username" />
        <input type="password" name="Password" placeholder="Password" />
        <button>Login</button>
      </form> }
    </div>
  );
};

export default FakedLogin;
