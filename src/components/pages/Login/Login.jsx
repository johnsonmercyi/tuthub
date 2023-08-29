import React, { useEffect, useRef, useState } from 'react';

import style from './Login.module.css';
import * as util from '../../../util/util';
import FormSlideContainer from '../../UI/FormSlideContainer/FormSlideContainer';
import TextField from '../../UI/TextField/TextField';
import Button from '../../UI/Button/Button';
import * as icons from '../../../util/icons';
import signUpImage from '../../../resources/images/sign-up.png';
import loginImage from '../../../resources/images/login-image.png';
import { useNavigate } from 'react-router-dom';
import Loader from '../utility/Loader/Loader';

const Login = () => {
  const navigate = useNavigate();

  const shouldLoadApp = useRef(true);
  const selfRef = useRef(null);
  const imageRef = useRef(null);
  const loginSlideFormRef = useRef(null);
  const signUpSlideFormRef = useRef(null);
  const usernameContainerRef = useRef(null);
  const passwordContainerRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const fullnameContainerRef = useRef(null);
  const fullnameRef = useRef(null);
  const regUsernameContainerRef = useRef(null);
  const regUsernameRef = useRef(null);
  const emailContainerRef = useRef(null);
  const emailRef = useRef(null);
  const regPasswordContainerRef = useRef(null);
  const regPasswordRef = useRef(null);

  const [load, setLoad] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [email, setEmail] = useState("");

  const [isUsernameError, setIsUsernameError] = useState(false);
  const [usernameErrorText, setUsernameErrorText] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [isFullnameError, setIsFullnameError] = useState(false);
  const [fullnameErrorText, setFullnameErrorText] = useState("");
  const [isRegUsernameError, setIsRegUsernameError] = useState(false);
  const [regUsernameErrorText, setRegUsernameErrorText] = useState("");
  const [isRegPasswordError, setIsRegPasswordError] = useState(false);
  const [regPasswordErrorText, setRegPasswordErrorText] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");

  const [isHidePasswordToggled, setIsHidePasswordToggled] = useState(false);
  const [isHideRegPasswordToggled, setIsHideRegPasswordToggled] = useState(false);

  const PASSWORD_MIN_LENGTH = 8;

  useEffect(() => {
    if (shouldLoadApp.current) {
      console.log("Splash screen!");
      shouldLoadApp.current = false;
      util.setElementStyle(signUpSlideFormRef.current, "bottom", "-100%");
      display();
    }
  }, []);

  const display = () => {
    util.animate(selfRef.current, 0, 500, 1, "ease-in-out", [
      { opacity: "0" },
      { opacity: "1" },
    ], () => {
      //load new page here...
    });
  }

  const navigateToWelcome = () => {
    setTimeout(() => {
      util.animate(selfRef.current, 0, 500, 1, "ease-in-out", [
        { opacity: "1" },
        { opacity: "0" },
      ], () => {
        //load new page here...
        navigate('/welcome');
      });
    }, 0);
  }

  const usernameChangeHandler = (event) => {
    if (event.target.value) {
      clearError(usernameRef.current, usernameContainerRef.current);
    } else {
      setError(usernameRef.current, usernameContainerRef.current, true, "Username is required.");
    }

    setUsername(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    if (event.target.value) {
      clearError(passwordRef.current, passwordContainerRef.current);
    } else {
      setError(passwordRef.current, passwordContainerRef.current, true, "Password is required.");
    }

    setPassword(event.target.value);
  }

  const loginHandler = () => {
    if (validateLoginField()) {
      console.log("Validation...");
      setLoad(true);//show loading
      /**
       * ⚠️Submit form here for 
       * user authentication.
       */
      setTimeout(() => {
        console.log("You logged in! 😃");
        navigateToWelcome();
      }, util.getRandomTime());
    }
  }

  const registerHandler = () => {
    if (validateSignUpField()) {
      /**
       * ⚠️register user details here
       * and navigate to login page
       */
      console.log("You registered! 😃");
    }
  }

  const validateLoginField = () => {
    let areFilled = false;
    if (username && password) {
      //password is too short
      if (password.length < PASSWORD_MIN_LENGTH) {
        setError(passwordRef.current, passwordContainerRef.current, true, "Password must be at least 8 characters long.");
        areFilled = false;
      } else {
        areFilled = true;
      }

    } else {
      if (!username) {
        //username is not provided
        setError(usernameRef.current, usernameContainerRef.current, true, "Username is required.");
      }

      if (!password) {
        //password is not provided
        setError(passwordRef.current, passwordContainerRef.current, true, "Password is required.");
      }
    }
    return areFilled;
  }

  const validateSignUpField = (event) => {
    let areFilled = false;
    if (!fullname || !regUsername || !email || !regPassword) {
      if (!fullname) {
        //fullname is not provided
        setError(fullnameRef.current, fullnameContainerRef.current, true, "Fullname is required.");
      }

      if (!regUsername) {
        //regUsername is not provided
        setError(regUsernameRef.current, regUsernameContainerRef.current, true, "Username is required.");
      }

      if (!email) {
        //email is not provided
        setError(emailRef.current, emailContainerRef.current, true, "Email is required.");
      }

      if (!regPassword) {
        //regPassword is not provided
        setError(regPasswordRef.current, regPasswordContainerRef.current, true, "Password is required.");
      }
    } else {
      if (regPassword.length < PASSWORD_MIN_LENGTH) {
        //password is too short
        setError(regPasswordRef.current, regPasswordContainerRef.current, true, "Password must be 8 characters minimum.");
        areFilled = false;
      } else {
        areFilled = true;
      }
    }

    return areFilled;
  }

  const hidePasswordToggleHandler = () => {
    setIsHidePasswordToggled((toggled) => !toggled);
  }

  const hideRegPasswordToggleHandler = () => {
    setIsHideRegPasswordToggled((toggled) => !toggled);
  }

  const signUpHandler = () => {
    util.animate(loginSlideFormRef.current, 0, 500, 1, "ease-in-out", [
      { bottom: "0" },
      { bottom: "-100%" },
    ], () => {
      util.animate(signUpSlideFormRef.current, 0, 300, 1, "ease-in-out", [
        { bottom: "-100%" },
        { bottom: "0" },
      ]);
    }, 50);

    //switch images
    util.animate(imageRef.current, 0, 500, 1, "ease-in-out", [
      { opacity: "1" },
      { opacity: "0" },
    ], () => {
      imageRef.current.style.backgroundImage = `url(${signUpImage})`;
      util.animate(imageRef.current, 0, 500, 1, "ease-in-out", [
        { opacity: "0" },
        { opacity: "1" },
      ]);
    });
  }

  const signInHandler = () => {
    util.animate(signUpSlideFormRef.current, 0, 500, 1, "ease-in-out", [
      { bottom: "0" },
      { bottom: "-100%" },
    ], () => {
      util.animate(loginSlideFormRef.current, 0, 300, 1, "ease-in-out", [
        { bottom: "-100%" },
        { bottom: "0" },
      ], () => {
        util.setElementStyle(loginSlideFormRef.current, "overflow-y", "scroll");
      });
    }, 50);

    //switch images
    util.animate(imageRef.current, 0, 500, 1, "ease-in-out", [
      { opacity: "1" },
      { opacity: "0" },
    ], () => {
      imageRef.current.style.backgroundImage = `url(${loginImage})`;
      util.animate(imageRef.current, 0, 500, 1, "ease-in-out", [
        { opacity: "0" },
        { opacity: "1" },
      ]);
    });
  }

  const fullnameChangeHandler = (event) => {
    if (event.target.value) {
      clearError(fullnameRef.current, fullnameContainerRef.current);
    } else {
      setError(fullnameRef.current, fullnameContainerRef.current, true, "Fullname is required.");
    }
    setFullname(event.target.value);
  }

  const regUsernameChangeHandler = (event) => {
    if (event.target.value) {
      clearError(regUsernameRef.current, regUsernameContainerRef.current);
    } else {
      setError(regUsernameRef.current, regUsernameContainerRef.current, true, "Username is required.");
    }
    setRegUsername(event.target.value);
  }

  const emailChangeHandler = (event) => {
    if (event.target.value) {
      clearError(emailRef.current, emailContainerRef.current);
    } else {
      setError(emailRef.current, emailContainerRef.current, true, "Email is required.");
    }
    setEmail(event.target.value);
  }

  const regPasswordChangeHandler = (event) => {
    if (event.target.value) {
      clearError(regPasswordRef.current, regPasswordContainerRef.current);
    } else {
      setError(regPasswordRef.current, regPasswordContainerRef.current, true, "Password is required.");
    }
    setRegPassword(event.target.value);
  }

  function setError(field, container, isError, errorText) {
    util.setElementStyle(container, "border", "1.3px dotted tomato");
    if (field === usernameRef.current) {
      setIsUsernameError(isError);
      setUsernameErrorText(errorText);
    } else if (field === passwordRef.current) {
      setIsPasswordError(isError);
      setPasswordErrorText(errorText);
    } else if (field === fullnameRef.current) {
      setIsFullnameError(isError);
      setFullnameErrorText(errorText);
    } else if (field === regUsernameRef.current) {
      setIsRegUsernameError(isError);
      setRegUsernameErrorText(errorText);
    } else if (field === emailRef.current) {
      setIsEmailError(isError);
      setEmailErrorText(errorText);
    } else if (field === regPasswordRef.current) {
      setIsRegPasswordError(isError);
      setRegPasswordErrorText(errorText);
    }
  }

  function clearError(field, container) {
    util.setElementStyle(container, "border", "none");
    if (field === usernameRef.current) {
      setIsUsernameError(false);
      setUsernameErrorText("");
    } else if (field === passwordRef.current) {
      setIsPasswordError(false);
      setPasswordErrorText("");
    } else if (field === fullnameRef.current) {
      setIsFullnameError(false);
      setFullnameErrorText("");
    } else if (field === regUsernameRef.current) {
      setIsRegUsernameError(false);
      setRegUsernameErrorText("");
    } else if (field === emailRef.current) {
      setIsEmailError(false);
      setEmailErrorText("");
    } else if (field === regPasswordRef.current) {
      setIsRegPasswordError(false);
      setRegPasswordErrorText("");
    }
  }

  return (
    <div className={style.login} ref={selfRef}>
      <Loader load={load} message={"Processing login..."} />
      <div className={style.imageContainer} ref={imageRef}>
        <div className={style.image}></div>
      </div>
      <FormSlideContainer slideRef={loginSlideFormRef} customStyle={{
        height: "90vw"
      }}>
        <TextField
          icon={<icons.mdIcons.MdPerson />}
          isError={isUsernameError}
          errorText={usernameErrorText}
          fieldRef={usernameRef}
          fieldContainerRef={usernameContainerRef}
          name={"username"}
          type={"text"}
          value={username}
          placeHolder={"Enter username or email"}
          onInputChangeHandler={usernameChangeHandler}
          customStyle={{
            borderRadius: "0 2vw 2vw 0"
          }} />

        <TextField
          icon={<icons.ioIcons.IoLockClosedSharp />}
          isError={isPasswordError}
          errorText={passwordErrorText}
          fieldRef={passwordRef}
          fieldContainerRef={passwordContainerRef}
          name={"password"}
          type={"password"}
          value={password}
          placeHolder={"Enter password"}
          onInputChangeHandler={passwordChangeHandler}
          toggled={isHidePasswordToggled}
          toggledhandler={hidePasswordToggleHandler} />

        <Button
          text={"LOGIN"}
          onClickhandler={loginHandler}
          customStyle={{
            marginTop: "2vw"
          }} />

        <Button
          custom
          text={"Continue with"}
          onClickhandler={null}
          clickWave={"darkWaves"}
          customStyle={{
            backgroundColor: "white",
            color: "gray"
          }}
          styleClasses={[style.googleButton]} />

        <div className={style.wrapper}>
          <span className={style.forgotPassword}>Forgot password?</span>
          <span className={style.signUp} onClick={signUpHandler}>Sign up!</span>
        </div>
      </FormSlideContainer>

      <FormSlideContainer slideRef={signUpSlideFormRef}>
        <TextField
          icon={<icons.mdIcons.MdCardMembership />}
          isError={isFullnameError}
          errorText={fullnameErrorText}
          fieldRef={fullnameRef}
          fieldContainerRef={fullnameContainerRef}
          name={"fullname"}
          type={"text"}
          value={fullname}
          placeHolder={"Enter full name"}
          onInputChangeHandler={fullnameChangeHandler}
          customStyle={{
            borderRadius: "0 2vw 2vw 0"
          }} />

        <TextField
          icon={<icons.mdIcons.MdPerson />}
          isError={isRegUsernameError}
          errorText={regUsernameErrorText}
          fieldRef={regUsernameRef}
          fieldContainerRef={regUsernameContainerRef}
          name={"reg_username"}
          type={"text"}
          value={regUsername}
          placeHolder={"Enter username"}
          onInputChangeHandler={regUsernameChangeHandler}
          customStyle={{
            borderRadius: "0 2vw 2vw 0"
          }} />

        <TextField
          icon={<icons.mdIcons.MdEmail />}
          isError={isEmailError}
          errorText={emailErrorText}
          fieldRef={emailRef}
          fieldContainerRef={emailContainerRef}
          name={"email"}
          type={"text"}
          value={email}
          placeHolder={"Enter email address"}
          onInputChangeHandler={emailChangeHandler}
          customStyle={{
            borderRadius: "0 2vw 2vw 0"
          }} />

        <TextField
          icon={<icons.mdIcons.MdLock />}
          isError={isRegPasswordError}
          errorText={regPasswordErrorText}
          fieldRef={regPasswordRef}
          fieldContainerRef={regPasswordContainerRef}
          name={"reg_password"}
          type={"password"}
          value={regPassword}
          placeHolder={"Enter password"}
          onInputChangeHandler={regPasswordChangeHandler}
          toggled={isHideRegPasswordToggled}
          toggledhandler={hideRegPasswordToggleHandler}
          customStyle={{
            borderRadius: "0 2vw 2vw 0"
          }} />

        <Button
          text={"SIGNUP"}
          onClickhandler={registerHandler}
          customStyle={{
            marginTop: "2vw"
          }} />

        <div className={style.wrapper} style={{ justifyContent: "center" }}>
          <span className={style.signUp} onClick={signInHandler}>Already have an account?</span>
        </div>

      </FormSlideContainer>
    </div>
  );
}

export default Login;
