import React, { useEffect, useState } from "react";
import axios from "axios";

export const userContextG = React.createContext();

const UserContext = ({ children }) => {
  const [Atoken, setToken] = useState(null);
  const [serverSms, setserverSms] = useState();
  const [sucessSms, setsucessSms] = useState();

  const signup = async (signinInfo) => {
    const headers = {
      "Content-type": "Application/json",
    };
    try {
      const res = await axios.post(
        "http://localhost:8080/api/signup",
        signinInfo,
        { headers }
      );
      setsucessSms(res.data);
    } catch (Error) {
      setserverSms(Error.response.data.messages);
    }
  };

  const login = async (loninInfo) => {
    const headers = {
      "Content-type": "Application/json",
    };
    try {
      const res = await axios.post(
        "http://localhost:8080/api/login",
        loninInfo,
        { headers }
      );
      localStorage.setItem("login", JSON.stringify({ token: res.data.token }));
      storeCollection();
    } catch (Error) {
      setserverSms(Error.response.data.messages);
    }
  };
  useEffect(() => {
    storeCollection();
  }, []);

  const storeCollection = () => {
    let store = JSON.parse(localStorage.getItem("login"));
    if (store) {
      setToken(store.token);
    }
  };

  const logOut = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  setTimeout(function () {
    localStorage.clear();
    window.location.reload(false);
   },2*60*60*1000);

  return (
    <div>
      <userContextG.Provider
        value={{
          signup,
          login,
          serverSms,
          sucessSms,
          setserverSms,
          Atoken,
          logOut,
        }}
      >
        {children}
      </userContextG.Provider>
    </div>
  );
};

export default UserContext;
