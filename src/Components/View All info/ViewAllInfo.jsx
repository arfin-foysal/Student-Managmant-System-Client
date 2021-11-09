import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { studentCentextData } from "../../Context/StudentContext";

const ViewAllInfo = () => {
  const { state } = useContext(studentCentextData);
  const { id } = useParams();
  const viewStudent = state.student.filter((std) => std._id === id);

  return (
    <div>
      {viewStudent.map((student) => (
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
                  <Card.Title>Name: {student.name}</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-8">
              <div className="row pt-4">
                <div className="col-6 py-3">
                  <h6>Student Id: {student.studentId}</h6>
                </div>
                <div className="col-6 py-3">
                  <h6>Session: {student.session}</h6>
                </div>
                <div className="col-6 py-3">
                  <h6>Department: {student.department}</h6>
                </div>
                <div className="col-6 py-3">
                  <h6> Email: {student.email}</h6>
                </div>
                <div className="col-6 py-3">
                  <h6> Number: {student.number}</h6>
                </div>
                <div className="col-6 py-3">
                  <h6>Religion: {student.religion}</h6>
                </div>
                <div className="col-6 py-3">
                  <h6>DOB: {student.dob}</h6>
                </div>
                <div className="col-6 py-3">
                  <h6>Gender: {student.gender}</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-4">
            <Link to="/">
              <button className="btn btn-primary">Go Back</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewAllInfo;
