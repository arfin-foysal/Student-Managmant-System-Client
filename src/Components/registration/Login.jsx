import React from 'react'
import { Card } from 'react-bootstrap'

const Login = () => {
    return (
        <div>
            <div className="container text-center">
             <div className="d-flex justify-content-center" >
      <Card style={{ width: "25rem" }} className="shadow">
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <form action="">
           
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
            
            <br />
            <input
              type="submit"
              value="Login"
              className="form-control btn btn-info shadow"
            />
          </form>
              </Card.Body>
              <p>Don't have an account? Sign Up</p>
      </Card>
    </div>
 </div>
        </div>
    )
}

export default Login
