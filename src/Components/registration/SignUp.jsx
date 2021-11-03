import React from "react";
import { Card } from "react-bootstrap";

const SignUp = () => {
  return (
      <div className="container text-center">
             <div className="d-flex justify-content-center" >
      <Card style={{ width: "25rem" }} className="shadow">
        <Card.Body>
          <Card.Title>Registration</Card.Title>
          <form action="">
            <input
              className="form-control shadow"
              type="text"
              placeholder="Name"
              name=""
              id=""
            />{" "}
            <br />
            <input
              className="form-control shadow"
              type="email"
              placeholder="Email"
              name=""
              id=""
            />{" "}
            <br />
            <input
              className="form-control shadow"
              type="password"
              placeholder="Password"
              name=""
              id=""
            />{" "}
            <br />
            <input
              className="form-control shadow"
              type="text"
              placeholder="Hash Code"
              name=""
              id=""
            />{" "}
            <br />
            <input
              type="submit"
              value="Sign Up"
              className="form-control btn btn-info shadow"
            />
          </form>
              </Card.Body>
              <p>Have an account? Log in now</p>
      </Card>
    </div>
 </div>
  );
};

export default SignUp;
