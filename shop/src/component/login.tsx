import axios from "axios";
import { useState, useEffect } from "react";
import { addHandle, urlCus } from "../fetch";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState(true);
  const [loginname, setLoginName] = useState("");
  const [loginpass, setLoginPass] = useState("");

  const [signupname, setSignupName] = useState("");
  const [signuppass, setSignupPass] = useState("");
  const [signupemail, setSignupEmail] = useState("");
  const [signupaddress, setSignupAddress] = useState("");
  const [signupphone, setSignupPhone] = useState("");

  const signupHandle = (e: any) => {
    e.preventDefault();
    addHandle(
      {
        customer_name: signupname,
        email: signupemail,
        address: signupaddress,
        phone: signupphone,
        password: signuppass,
      },
      "signup",
      "customer_id",
      (data: any) => {
        setForm(true);
      }
    );
  };

  const loginHandle = (e: any) => {
    e.preventDefault();
    axios
      .post(urlCus + "login", { username: loginname, password: loginpass })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("data", JSON.stringify(response.data[0]));
          navigate("/guest/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div id="card">
      <form id="login" style={{ display: form ? "block" : "none" }}>
        <h2>Log in</h2>
        <input
          className="LoginPage"
          type="text"
          name=""
          id="loginusernameinput"
          placeholder="UserName"
          value={loginname}
          onChange={(e: any) => {
            setLoginName(e.target.value);
          }}
        />
        <input
          className="LoginPage"
          type="password"
          name=""
          id="loginpasswordinput"
          placeholder="Password"
          value={loginpass}
          onChange={(e: any) => {
            setLoginPass(e.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          onClick={(e: any) => loginHandle(e)}
        >
          <span className="fa fa-paper-plane" />
        </button>
        <p>
          <br />
          Create a new one !
          <a id="signupbtn" onClick={() => setForm(false)}>
            Sign up
          </a>
        </p>
      </form>
      <form id="signup" style={{ display: !form ? "block" : "none" }}>
        <h2>Create your free account</h2>
        <input
          className="LoginPage"
          type="text"
          placeholder="UserName"
          id="singupusernameinput"
          value={signupname}
          onChange={(e: any) => {
            setSignupName(e.target.value);
          }}
        />
        <input
          className="LoginPage"
          type="email"
          placeholder="Email"
          value={signupemail}
          onChange={(e: any) => {
            setSignupEmail(e.target.value);
          }}
        />
        <input
          className="LoginPage"
          type="address"
          placeholder="Address"
          value={signupaddress}
          onChange={(e: any) => {
            setSignupAddress(e.target.value);
          }}
        />
        <input
          className="LoginPage"
          type="phone"
          placeholder="Phone"
          id="signupemailinput"
          value={signupphone}
          onChange={(e: any) => {
            setSignupPhone(e.target.value);
          }}
        />
        <input
          className="LoginPage"
          type="password"
          placeholder="Password"
          id="signuppasswordinput"
          value={signuppass}
          onChange={(e: any) => {
            setSignupPass(e.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          onClick={(e: any) => signupHandle(e)}
        >
          <span className="fa fa-paper-plane" />
        </button>
        <p>
          Already have an account?
          <a id="loginbtn" onClick={() => setForm(true)}>
            Log In
          </a>
        </p>
      </form>
    </div>
  );
}
