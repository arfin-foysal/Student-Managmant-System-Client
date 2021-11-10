import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const studentCentextData = React.createContext();

const StudentContext = ({ children }) => {
  const history = useHistory();

  const [studentsdata, setstudentsdata] = useState([]);
  const [search, setSearch] = useState("")
  const [searchResult, setsearchResult] = useState([])

  useEffect(() => {
    studentData();
  }, []);
  

  const srcHandeler = (search) => {
    setSearch(search)
    if (search !== "") {
      const newStudentList = studentsdata.filter((student) => {
        return Object.values(student)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      })
      setsearchResult(newStudentList)
    } else {
      setsearchResult(studentsdata)
    }
 }


  
  const studentData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/student");

      setstudentsdata(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addStudent = async (info) => {
    const headers = {
      "Content-type": "Application/json",
    };
    try {
      await axios.post("http://localhost:8080/student", info, { headers });
    } catch (error) {
      console.log(error);
    }
    studentData();
    history.push("/");
  };
  const editStudent = async (id, info) => {
    const headers = {
      "Content-type": "Application/json",
    };
    try {
      const data = await axios.put(
        `http://localhost:8080/student/${id}`,
        info,
        { headers }
      );
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
    studentData();
    history.push("/");
  };

  // let atoken = token
  //   console.log(atoken);

  const removeStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/student/${id}`);
    } catch (error) {
      console.log(error);
    }
    studentData();
  };
 
  return (
    <div>
      <studentCentextData.Provider
        value={{searchResult, studentsdata, addStudent, removeStudent, editStudent ,search,srcHandeler}}
      >
        {children}
      </studentCentextData.Provider>
    </div>
  );
};

export default StudentContext;
