import React, { useEffect, useRef, useState } from 'react';

import style from './Login.module.css';
import * as util from '../../../util/util';
import FormSlideContainer from '../../UI/FormSlideContainer/FormSlideContainer';
import TextField from '../../UI/TextField/TextField';
import Button from '../../UI/Button/Button';
import * as icons from '../../../util/icons';

const Login = () => {
  const shouldLoadApp = useRef(true);
  const selfRef = useRef(null);
  const loginSlideFormRef = useRef(null);
  const signUpSlideFormRef = useRef(null);
  const usernameContainerRef = useRef(null);
  const passwordContainerRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);

  const [isUsernameError, setIsUsernameError] = useState(false);
  const [usernameErrorText, setUsernameErrorText] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");

  const [isHidePasswordToggled, setIsHidePasswordToggled] = useState(false);

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
      //⚠️submit form here...
      console.log("Submit form here... 😃!!!");
    }
  }

  const validateLoginField = () => {
    let areFilled = false;
    if (username) {
      clearError(usernameRef.current, usernameContainerRef.current);
      if (password) {
        if (password.length >= PASSWORD_MIN_LENGTH) {
          clearError(passwordRef.current, passwordContainerRef.current);
          areFilled = true;
        } else {
          //password is shorter than is allowed
          setError(passwordRef.current, passwordContainerRef.current, true, "Password must be 8 characters minimum.");
          areFilled = false;
        }
      } else {
        //password is not provided
        setError(passwordRef.current, passwordContainerRef.current, true, "Password is required.");
        areFilled = false;
      }
    } else {
      //username is not provided
      setError(usernameRef.current, usernameContainerRef.current, true, "Username is required.");
      areFilled = false;

      if (password) {
        if (password.length >= PASSWORD_MIN_LENGTH) {
          clearError(passwordRef.current, passwordContainerRef.current);
          areFilled = true;
        } else {
          //password is shorter than is allowed
          setError(passwordRef.current, passwordContainerRef.current, true, "Password must be 8 characters minimum.");
          areFilled = false;
        }
      } else {
        //password is not provided
        setError(passwordRef.current, passwordContainerRef.current, true, "Password is required.");
        areFilled = false;
      }
    }
    return areFilled;
  }

  const hidePasswordToggleHandler = () => {
    setIsHidePasswordToggled((toggled)=> !toggled);
  }

  const signUpHandler = () => {
    util.animate(loginSlideFormRef.current, 0, 500, 1, "ease-in-out", [
      { bottom: "0" },
      { bottom: "-100%" },
    ], ()=> {
      util.animate(signUpSlideFormRef.current, 0, 300, 1, "ease-in-out", [
        { bottom: "-100%" },
        { bottom: "0" },
      ], ()=> {
        util.setElementStyle(signUpSlideFormRef.current, "overflow-y", "scroll");
      });
    }, 50);
  }

  function setError(field, container, isError, errorText) {
    util.setElementStyle(container, "border", "1.3px dotted tomato");
    if (field === usernameRef.current) {
      setIsUsernameError(isError);
      setUsernameErrorText(errorText);
    } else if (field === passwordRef.current) {
      setIsPasswordError(isError);
      setPasswordErrorText(errorText);
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
    }
  }

  return (
    <div className={style.login} ref={selfRef}>
      <div className={style.imageContainer}>
        <div className={style.image}></div>
      </div>
      <FormSlideContainer slideRef={loginSlideFormRef}>
        <TextField
          icon={<icons.mdIcons.MdPerson/>}
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
          text={"Login"}
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
        Sign Up Here...
      </FormSlideContainer>
    </div>
  );
}

export default Login;
