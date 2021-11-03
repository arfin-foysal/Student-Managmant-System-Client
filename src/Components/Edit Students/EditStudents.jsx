import React from 'react'
import { Card } from 'react-bootstrap'

const EditStudents = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center">
        <form action="">
          <div className="row pt-2">
            <Card style={{ width: "50rem" }} className="py-3 shadow" >
           
              <Card.Body>
                <Card.Title className="text-center" > EDIT STUDENT INFORMATION</Card.Title>
                <div className="row pt-2">
                  <div className="col-2 text-end">
                    <label htmlFor="">Full Name:</label>
                  </div>
                  <div className="col-10">
                    <input
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
                      className="form-control shadow text-start"
                      type="file"
                      placeholder="Images"
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
                    >
                      <option className="text-start" selected>Gender</option>
                      <option className="text-start" value="1">Male</option>
                      <option className="text-start" value="2  ">Femail</option>
                      <option className="text-start" value="3">Other</option>
                    </select>
                  </div>
                </div>
                          </Card.Body>
                          <div className="row">
                              <div className="col-6 text-end">
                                  <button className="btn btn-primary">Cancel</button>
                              </div>
                              <div className="col-6">
                              <input className="btn btn-success"  type="submit" value="Submit" />
                              </div>
                         </div>
            </Card>
          </div>
        </form>
      </div>
        </div>
    )
}

export default EditStudents
