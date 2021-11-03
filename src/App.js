import AllStudent from "./Components/All Student/AllStudent";
import DitlesHeader from "./Components/AllShowHeader/DitlesHeader";
import Header from "./Components/Navbar/Header";
import Login from "./Components/registration/Login";
import SignUp from "./Components/registration/SignUp";


function App() {
  return <div >
    <Header />
    <DitlesHeader />
    <AllStudent />
    <SignUp />
    <Login/>
  </div>;
}

export default App;
