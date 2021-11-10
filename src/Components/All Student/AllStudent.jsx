import React, { useContext } from "react";
import { studentCentextData } from "../../Context/StudentContext";
import AllStudentDetels from "./AllStudentDetels";
import "./Student.css";
const AllStudent = () => {
  const { searchResult,search, studentsdata} = useContext(studentCentextData);
  return (
    <div className="container">
      <div className="shadow container rounded py-3">
        <tr className="row shadow  py-2 ">
          <th className="col-2">ID</th>
          <th className="col-2">Images</th>
          <th className="col-3">Name</th>
          <th className="col-3">Session</th>
          <th className="col-2">Action</th>
        </tr>

        <div className="over container pt-4">

          {search.length< 1 ? studentsdata.map(stud=><AllStudentDetels key={stud._id}  studentD={stud}/>) : searchResult.map(stud=><AllStudentDetels key={stud._id}  studentD={stud}/>)}
       
        </div>
      </div>
    </div>
  );
};

export default AllStudent;
