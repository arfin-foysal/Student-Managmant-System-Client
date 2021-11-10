import { useContext } from "react";
import UserContext, { userContextG } from "./Context/UserContext";
import AddStudent from "./Components/Add Studdnts/AddStudent";
import AllStudent from "./Components/All Student/AllStudent";
import DitlesHeader from "./Components/AllShowHeader/DitlesHeader";
import EditStudents from "./Components/Edit Students/EditStudents";
import Header from "./Components/Navbar/Header";
import Login from "./Components/registration/Login";
import SignUp from "./Components/registration/SignUp";
import ViewAllInfo from "./Components/View All info/ViewAllInfo";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";

function App() {
  const { Atoken } = useContext(userContextG);

  let userRoute = null;

  if (Atoken === null) {
    userRoute = (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route path="/login" exact component={Login} />
            <Redirect to="/signup" />
          </Switch>
        </BrowserRouter>
      </>
    );
  } else {
    userRoute = (
      <>
        <BrowserRouter>
          <Route component={Header} />
          <Switch>
            <Route path="/" exact component={DitlesHeader} />
            <Route path="/singal/:id" exact component={ViewAllInfo} />
            <Route path="/edit/:id" exact component={EditStudents} />
            <Route path="/addstudent" exact component={AddStudent} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
  return <>{userRoute}</>;
}

export default App;
