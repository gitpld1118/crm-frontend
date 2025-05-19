import React, { useState } from "react";
import { LoginForm } from "../../components/login/Login.comp";
import "./entry.styles.css";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Fill up all the form!");
    }

    console.log(email, password);
  };
  
  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Fill up the email!");
    }

    console.log(email);
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-info">
      <div className="form-box p-4 mb-5 bg-light rounded-3">
        {frmLoad === "login" && (
          <LoginForm
            handleOnchange={handleOnchange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        )}

        {frmLoad === "rest" && (
          <ResetPassword
            handleOnchange={handleOnchange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </div>
    </div>
  );
};
