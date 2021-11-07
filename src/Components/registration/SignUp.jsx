import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { userContextG } from "../../Context/UserContext";


const SignUp = () => {
  const { signup,serverSms ,setserverSms,login} = useContext(userContextG);

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [code, setcode] = useState('');
  const [error, seterror] = useState('');
  const [isLogin, setisLogin] = useState(true)

  
  
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
  const studentLoginSubmitHandel = (e) => {
    e.preventDefault();
    const LoginData = {
      email,
      password,
    };
    setemail("");
    setpassword("");
    setserverSms("");

    login(LoginData);
  };
   
  return (
   
    <div className="container text-center">
      {!isLogin ? (
        <div className="d-flex justify-content-center">
        <Card style={{ width: "25rem" }} className="shadow">
          <Card.Body>
            <Card.Title> REGISTRATION</Card.Title>
            <div>
            <form action="" onSubmit={studentSubmitHandel}>
              <input 
                className="form-control shadow"
                type="text"
                required
                placeholder="Name"
                onChange={(e) => setname(e.target.value)}
                value={name}
            
              />
              <br />
              <input
                className="form-control shadow"
                type="email"
                required
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
                value={email}
            
              />
              <br />
              <input
                className="form-control shadow"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
          
              /> 
              <br/>
              <input
                className="form-control shadow"
                type="text"
                required
                placeholder="Hash Code"
                onChange={(e) => setcode(e.target.value)}
                value={code}
          
              />
              <br />
              <input
                type="submit"
                value="Sign Up"
                className="form-control btn btn-info shadow"
              />
            </form>
            </div>
            <p>{error}{serverSms }</p>
          </Card.Body>
            <p>Have an account?<span style={{cursor:"pointer",color:"blue" }} onClick={() => setisLogin(true)} > Log in now</span></p>
         
        </Card>
      </div>
      ) : (
        <div className="d-flex justify-content-center">
        <Card style={{ width: "25rem" }} className="shadow">
          <Card.Body>
            <Card.Title>LOGIN ACCOUNT</Card.Title>
            <form action="" onSubmit={studentLoginSubmitHandel}>
              <input
                className="form-control shadow"
                type="email"
                placeholder="Email"
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
          <p>Don't have an account? <span style={{cursor:"pointer",color:"blue" }}  onClick={()=>setisLogin(false)}>Sign Up</span></p>
        </Card>
      </div>
      )}
      
    </div>
  );
};

export default SignUp;
