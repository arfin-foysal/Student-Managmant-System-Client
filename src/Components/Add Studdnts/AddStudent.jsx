import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { studentCentextData } from "../../Context/StudentContext";

const AddStudent = () => {
  const {addStudent} = useContext(studentCentextData)
  const [name, setname] = useState("");
  const [studentId, setstudentId] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
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
      addStudent(allInfo)
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
                     value={name}
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
                      value={studentId}
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
                     value={email}
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
                      value={number}
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
                     value={session}
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
                  value={department}
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
                     value={religion}
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
                     value={images}
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
                      value={dob}
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
                  <Link to="/"><button className="btn btn-primary">Cancel</button></Link>
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
