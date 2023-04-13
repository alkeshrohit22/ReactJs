import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import InputControll from "../InputControll/InputControll";

import { auth } from "../../firebase";
import '../../css/SignUp.css'

function SignUp() {
  const navigate = useNavigate(); //navigation
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
      console.log(values);
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
            // console.log(res);
          setSubmitButtonDisabled(false);
          const user = res.user;
          await updateProfile(user, {
            displayName: values.name,
          });
          navigate("/Login");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
  };
  return (
      <div className={'container-signup'}>
        <div className={'innerBox'}>
          <h1 className={'heading'}>Signup</h1>

          <InputControll
              label="Name"
              placeholder="Enter your name"
              onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
              }
          />
          <InputControll
              label="Email"
              placeholder="Enter email address"
              onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
              }
          />
          <InputControll
              label="Password"
              placeholder="Enter password"
              onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
          />

          <div className={'footer'}>
            <b className={'error'}>{errorMsg}</b>
            <button onClick={handleSubmission} disabled={submitButtonDisabled}>
              Signup
            </button>
            <p>
              Already have an account?{" "}
              <span>
              <Link to="/Login">Login</Link>
            </span>
            </p>
          </div>
        </div>
      </div>
  )
}

export default SignUp