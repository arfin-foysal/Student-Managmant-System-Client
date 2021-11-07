import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { userContextG } from "../../Context/UserContext";

const SignUp = () => {
  const { signup,serverSms ,setserverSms} = useContext(userContextG);

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [code, setcode] = useState();
  const [error, seterror] = useState();

  
  
  const studentSubmitHandel = (e) => {
    e.preventDefault();
    const signinData = {
      name,
      email,
      password,
    };
    if (code == 4627) {
      signup(signinData);
      setname("");
      setemail("");
      setpassword("");
      setcode("");
      seterror("");
      setserverSms("")
    } else {
      seterror("Your Hash Code wrong! Please Enter Right HashCode");
    }
  };

 
  return (
    <div className="container text-center">
      <div className="d-flex justify-content-center">
        <Card style={{ width: "25rem" }} className="shadow">
          <Card.Body>
            <Card.Title> REGISTRATION</Card.Title>
            <form action="" onSubmit={studentSubmitHandel}>
              <input 
                className="form-control shadow"
                type="text"
               required placeholder="Name"
                onChange={(e) => setname(e.target.value)}
                value={name}
                name=""
              />
              <br />
              <input
                className="form-control shadow"
                type="email"
               required placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                name=""
              />
              <br />
              <input
                className="form-control shadow"
                type="password"
               required placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                name=""
              /> 
              <br/>
              <input
                className="form-control shadow"
                type="text"
               required placeholder="Hash Code"
                onChange={(e) => setcode(e.target.value)}
                value={code}
                name=""
              />
              <br />
              <input
                type="submit"
                value="Sign Up"
                className="form-control btn btn-info shadow"
              />
            </form>
            <p>{error}{serverSms }</p>
          </Card.Body>
          <p>Have an account? Log in now</p>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
