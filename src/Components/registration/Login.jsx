import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { userContextG } from "../../Context/UserContext";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const { login ,serverSms,sucessSms,setserverSms,} = useContext(userContextG);

  const studentLoginSubmitHandel = (e) => {
    e.preventDefault();
    const LoginData = {
      email,
      password,
    };
    setemail("");
    setpassword("");
    setserverSms("")

    login(LoginData);
  };

  return (
    <div>
      <div className="container text-center">
        <div className="d-flex justify-content-center">
          <Card style={{ width: "25rem" }} className="shadow">
            <Card.Body>
              <Card.Title>LOGIN ACCOUNT</Card.Title>
              <form action="" onSubmit={studentLoginSubmitHandel}>
                <input
                  className="form-control shadow"
                  type="email"
                  placeholder="Email"
                  name=""
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  value={email}
                />
                <br />
                <input
                  className="form-control shadow"
                  type="password"
                  placeholder="Password"
                  name=""
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  value={password}
                />
                <br />

                <br />
                <input
                  type="submit"
                  value="Login"
                  className="form-control btn btn-info shadow"
                />
              </form>
            </Card.Body>
            <p>{serverSms}</p>
            <p>Don't have an account? Sign Up</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
