import { useState, useEffect } from "react";

const Signup = () => {
  return (
    <div className="sign-up">
      <form action="" method="POST" className="sign-up-form">
        <input type="text" id="username" name="username" />
        <input type="text" id="name" name="name" />
        <input type="email" id="email" name="email" />
        <input type="sem" id="sem" name="sem" />
        <input type="text" id="branch" name="branch" />
        <button className=""></button>
      </form>
    </div>
  );
};

export default Signup;
