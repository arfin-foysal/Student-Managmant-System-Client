import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useHistory } from "react-router";
import StudentReducer from "./StudentReducer";
import jwt_decode from 'jwt-decode'
export const studentCentextData = React.createContext();

const initialState = {
  student: [],
};

const StudentContext = ({ children }) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(StudentReducer, initialState);
  useEffect(() => {
    studentData();
  }, []);

  const studentData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/student");
      dispatch({ type: "GET_DATA", payload: res.data });
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
        value={{ state, addStudent, removeStudent, editStudent }}
      >
        {children}
      </studentCentextData.Provider>
    </div>
  );
};

export default StudentContext;
