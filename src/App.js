import AddStudent from "./Components/Add Studdnts/AddStudent";
import AllStudent from "./Components/All Student/AllStudent";
import DitlesHeader from "./Components/AllShowHeader/DitlesHeader";
import EditStudents from "./Components/Edit Students/EditStudents";
import Header from "./Components/Navbar/Header";
import Login from "./Components/registration/Login";
import SignUp from "./Components/registration/SignUp";
import ViewAllInfo from "./Components/View All info/ViewAllInfo";


function App() {
  return <div >
    <Header />
 
    {/* <DitlesHeader />
    <AllStudent />
    <SignUp />
    <Login /> 
   <AddStudent />
    <EditStudents/>  */}
    <ViewAllInfo/>
  </div>;
}

export default App;
