import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, ssetFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    ssetFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form onSubmit={onSubmit}>
          <input
            autoComplete="off"
            type="email"
            placeholder="Email"
            id="email"
            onChange={onChange}
            value={email}
            className="emailInput"
          />
          <div className="passwordInputDiv">
            <input
              autoComplete="off"
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img
              className="showPassword"
              src={visibilityIcon}
              alt="show password"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>
          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>
        {/*Google auth*/}

        <Link to="/sign-up" className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </>
  );
}

export default Signin;
