import React, { useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

const AddStudent = () => {
  const [name, setname] = useState("");
  const [studentId, setstudentId] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState();
  const [session, setsession] = useState("");
  const [department, setdepartment] = useState("");
  const [religion, setreligion] = useState("");
  const [images, setimages] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");

  const onInfoSubmitHandel = (e) => {
    e.preventDefault();
    const allInfo = {
      name,
      studentId,
      email,
      number,
      session,
      department,
      religion,
      images,
      dob,
      gender,
    };
    const headers = { 
      'Content-type': 'Application/json',
      // 'Authorization': 'Bearer my-token'
  };
    axios
      .post("http://localhost:8080/student",allInfo,{headers})
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <form action="" onSubmit={onInfoSubmitHandel}>
          <div className="row pt-2">
            <Card style={{ width: "50rem" }} className="py-3 shadow">
              <Card.Body>
                <Card.Title className="text-center">
                  ADD STUDENT INFORMATION{" "}
                </Card.Title>
                <div className="row pt-2">
                  <div className="col-2 text-end">
                    <label htmlFor="">Full Name:</label>
                  </div>
                  <div className="col-10">
                    <input
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                      className="form-control shadow text-start "
                      type="text"
                      placeholder="Full Name"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-2 text-end">
                    <label htmlFor="">Student Id:</label>
                  </div>
                  <div className="col-10">
                    <input
                      onChange={(e) => {
                        setstudentId(e.target.value);
                      }}
                      className="form-control shadow text-start"
                      type="text"
                      placeholder="Student Id"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-2 text-end ">
                    <label htmlFor="">Email:</label>
                  </div>
                  <div className="col-10">
                    <input
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                      className="form-control shadow text-start"
                      type="email"
                      placeholder="Email"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-2 text-end">
                    <label htmlFor="">Number:</label>
                  </div>
                  <div className="col-10">
                    <input
                      onChange={(e) => {
                        setnumber(e.target.value);
                      }}
                      className="form-control shadow text-start"
                      type="number"
                      placeholder="Number"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-2 text-end">
                    <label htmlFor="">Session:</label>
                  </div>
                  <div className="col-10">
                    <input
                      onChange={(e) => {
                        setsession(e.target.value);
                      }}
                      className="form-control shadow text-start"
                      type="text"
                      placeholder="Session"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-2 text-end">
                    <label htmlFor="">Department:</label>
                  </div>
                  <div className="col-10">
                    <input
                      onChange={(e) => {
                        setdepartment(e.target.value);
                      }}
                      className="form-control shadow text-start"
                      type="text"
                      placeholder="Department"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-2 text-end">
                    <label htmlFor="">Religion:</label>
                  </div>
                  <div className="col-10">
                    <input
                      onChange={(e) => {
                        setreligion(e.target.value);
                      }}
                      className="form-control shadow text-start"
                      type="text"
                      placeholder="Religion"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-2 text-end">
                    <label htmlFor="">Images:</label>
                  </div>
                  <div className="col-10">
                    <input
                      onChange=""
                      className="form-control shadow text-start"
                      type="file"
                      placeholder="Images"
                      filename="images"
                      onChang={(e) => {
                        setimages(e.target.value);
                      }}
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-2 text-end">
                    <label htmlFor="">DOB:</label>
                  </div>
                  <div className="col-10">
                    <input
                      onChange={(e) => {
                        setdob(e.target.value);
                      }}
                      className="form-control shadow text-start"
                      type="date"
                      placeholder="Date Of Birth"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-2 text-end">
                    <label htmlFor="">Gender:</label>
                  </div>
                  <div className="col-10">
                    <select
                      className="custom-select mr-sm-2 text-end form-control shadow "
                      id="inlineFormCustomSelect"
                      onChange={(e) => {
                        setgender(e.target.value);
                      }}
                    >
                      <option className="text-start" selected>
                        Gender
                      </option>
                      <option className="text-start" value="male">
                        Male
                      </option>
                      <option className="text-start" value="femail">
                        Femail
                      </option>
                      <option className="text-start" value="Other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>
              </Card.Body>
              <div className="row">
                <div className="col-6 text-end">
                  <button className="btn btn-primary">Cancel</button>
                </div>
                <div className="col-6">
                  <input
                    className="btn btn-success"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
