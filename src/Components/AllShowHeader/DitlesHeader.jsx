import React from 'react'
import AllStudent from '../All Student/AllStudent'
import Search from '../Searceh/Search'
import AllshowHeader from './AllshowHeader'

const DitlesHeader = () => {
    return (
        <>
            <div className=" container  py-3">
                <div className="row">
                     <div className="col-3"><AllshowHeader student="All Student" value="100" img="https://img.icons8.com/external-wanicon-flat-wanicon/50/000000/external-students-online-education-wanicon-flat-wanicon.png"/></div>
                     <div className="col-6"><Search/></div>
    
                     <div className="col-3"><AllshowHeader student="Add Student 👉" img="https://img.icons8.com/color/48/000000/add-user-group-man-man--v1.png"/></div>
                </div>
            </div>
            <AllStudent/>
        </>
    )
}

export default DitlesHeader
