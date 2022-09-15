import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import signUpImg from "../images/Signup.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const style = {
    textDecoration: "none",
    color: "#1db5e5",
  };
  return (
    <div className="login">
      <div className="nav">
        <div className="logo">
          <h2>
            Connect <div>in</div>
          </h2>
        </div>
      </div>
      <div className="login-container">
        <form
          action="localhost:5000/login"
          className="login-form"
          method="POST"
        >
          <p>Welcome back!</p>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Addmission No. ex: 21CS***"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-links">
            <Link to="/sign-up" style={style}>
              Sign Up ?
            </Link>
            <p className="forget-pass">Forget Password ?</p>
          </div>
          <button className="submit" type="submit">
            Login
          </button>
        </form>
        <div className="signup-img">
          <img src={signUpImg} />
        </div>
      </div>
    </div>
  );
};

export default Login;
