import React from "react";

const AllshowHeader = ({ student, value ,img}) => {
  return (
    <>
          <div className="shadow container py-4 rounded">
          <div className="row h-auto">
        <div className="col-8">
          <h6>{student}</h6>
          <h6>{value}</h6>
        </div>
        <div className="col-4">
            <img alt="Student" src={img}/>
        </div>
      </div>
     </div>
    </>
  );
};

export default AllshowHeader;
