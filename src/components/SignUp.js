import React from "react";

function SignUp() {
    return (
      <div>
        <h1>SignUp</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>
    );

}

export default SignUp;