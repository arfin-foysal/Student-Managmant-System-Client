import React, { useContext } from "react";
import {Link}from "react-router-dom"
import { studentCentextData } from "../../Context/StudentContext";
const AllStudentDetels = ({ studentD }) => {
   const {removeStudent} = useContext(studentCentextData)
  const { name, studentId, session, images, _id } = studentD
    
  return (
    <>
      <tr className="row ">
        <td className="col-2">Id: {studentId}</td>
        <td className="col-2">{images}</td>
        <td className="col-3">{name}</td>
        <td className="col-3">{session}</td>
        <td className="col-2">
          <Link to={`/singal/${_id}`}>
          <img alt="" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/30/000000/external-view-cyber-security-kiranshastry-lineal-color-kiranshastry-3.png" />
          </Link>
          <Link to={`/edit/${_id}`}>
          <img alt="" className="mx-3" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/30/000000/external-edit-interface-kiranshastry-solid-kiranshastry-1.png"/>
          </Link>
        
        <img alt="" style={{cursor:"pointer"}} onClick={()=>{removeStudent(studentD._id)}} src="https://img.icons8.com/fluency/30/000000/delete-forever.png"/>
        </td>
      </tr>
      <hr />
    </>
  );
};

export default AllStudentDetels;
