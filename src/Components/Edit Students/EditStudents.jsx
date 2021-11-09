import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { studentCentextData } from '../../Context/StudentContext'

const EditStudents = () => {
  const { editStudent,state } = useContext(studentCentextData)
  const { id } = useParams();
 const history= useHistory()

  const [user, setuser] = useState({
    name: "",
    studentId: "",
    email: "",
    number:"",
    session: "",
    department: "",
    religion: "",
    images:"",
    dob: "",
    gender:""
  })
  
  useEffect(() => {
    loadUser()
  }, [])

  const { name, studentId, email, number, session, department, religion, images, dob, gender } = user

  const onInfoHandel = (e) => {                                
    setuser({ ...user, [e.target.name]: e.target.value })
  }
  
  const loadUser= async ()=>{
    const result =await axios.get(`http://localhost:8080/student/${id}`)
     setuser(result.data)

}


    const onInfoSubmitHandel = (e) => {
      e.preventDefault();
      editStudent(id, user)
      history.push('/')
    };




    return (
      <div>
      
            <div className="container d-flex justify-content-center">
        <form action="" onSubmit={onInfoSubmitHandel}>
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
                           onChange={(e) => {
                            onInfoHandel(e);
                          }}
                      className="form-control shadow text-start "
                      type="text"
                      placeholder="Full Name"
                      name="name"
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
                            onInfoHandel(e);
                          }}
                      className="form-control shadow text-start"
                      type="text"
                      placeholder="Student Id"
                      name="studentId"
                      Value={studentId}
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
                            onInfoHandel(e);
                          }}
                      className="form-control shadow text-start"
                      type="email"
                      placeholder="Email"
                      name="email"
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
                            onInfoHandel(e);
                          }}
                      className="form-control shadow text-start"
                      type="number"
                      placeholder="Number"
                      name="number"
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
                          onInfoHandel(e);
                            }}
                      className="form-control shadow text-start"
                      type="text"
                      placeholder="Session"
                      name="session"
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
                          onInfoHandel(e);
                            }}
                      className="form-control shadow text-start"
                      type="text"
                      placeholder="Department"
                      name="department"
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
                            onInfoHandel(e);
                          }}
                      className="form-control shadow text-start"
                      type="text"
                      placeholder="religion"
                      name="religion"
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
                      className="form-control shadow text-start"
                      type="file"
                      placeholder="Images"
                      name="images"
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
                          onInfoHandel(e);
                            }}
                      className="form-control shadow text-start"
                      type="date"
                      placeholder="Dath of Barth"
                      name="dob"
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
                            onInfoHandel(e);
                          }}
                          name="gender"
                          value={gender}
                    >
                          <option className="text-start" selected>Gender</option>
                      <option className="text-start" value="Male">Male</option>
                      <option className="text-start" value="Femail">Femail</option>
                      <option className="text-start" value="Other">Other</option>
                    </select>
                  </div>
                </div>
                          </Card.Body>
                          <div className="row">
                              <div className="col-6 text-end">
                                 <Link to="/"> <button className="btn btn-primary">Cancel</button></Link>
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
