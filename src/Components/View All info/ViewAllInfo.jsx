import React from "react";
import { Card } from "react-bootstrap";

const ViewAllInfo = () => {
  return (
    <div>
      <div className="container">
        <div className="row shadow pt-5">
          <div className="text-center">
            <h2>ALL INFORMATION</h2>
            <hr />
          </div>
          <div className="col-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://icon-library.com/images/icon-avatar/icon-avatar-9.jpg"
              />
              <Card.Body>
                <Card.Title>Name:{}</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-8">
            <div className="row pt-4">
              <div className="col-6 py-3">
                <h6>Student Id:{}</h6>
              </div>
              <div className="col-6 py-3">
                <h6>Session:{}</h6>
              </div>
              <div className="col-6 py-3">
                <h6>Department:{}</h6>
              </div>
              <div className="col-6 py-3">
                <h6> Email:{}</h6>
              </div>
              <div className="col-6 py-3">
                <h6> Number:{}</h6>
              </div>
              <div className="col-6 py-3">
                <h6>Religion:{}</h6>
              </div>
              <div className="col-6 py-3">
                <h6>DOB:{}</h6>
              </div>
              <div className="col-6 py-3">
                <h6>Gender:{}</h6>
              </div>
            </div>
          </div>
              </div>
              <div className="text-center pt-4">
                  <button className="btn btn-primary">Go Back</button>
              </div>
      </div>
    </div>
  );
};

export default ViewAllInfo;
