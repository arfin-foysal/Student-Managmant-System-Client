import React, { useContext } from "react";
import { userContextG } from "../../Context/UserContext";


const Header = () => {
  const {logOut} = useContext(userContextG)
  return (
      <div className="shadow">
           <div className=" container  py-2">
      <div className="row">
        <div className="col-4">
          <h2>Dashboard</h2>
        </div>
              <div className="col-4">
              
        </div>
              <div className="col-4 text-end">
            <div onClick={() => logOut()} className="row ">
              <div className="col-6 text-end "> <  img alt="Logout"  src="https://img.icons8.com/material-rounded/40/000000/logout-rounded.png" /></div>
              <div className="col-6 pt-2 text-start"> LogOut</div>
                     </div>
                     
        </div>
      </div>
    </div>
   </div>
  );
};

export default Header;
