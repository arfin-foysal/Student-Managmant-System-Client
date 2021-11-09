import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { studentCentextData } from '../../Context/StudentContext'
import AllStudent from '../All Student/AllStudent'
import Search from '../Searceh/Search'
import AllshowHeader from './AllshowHeader'

const DitlesHeader = () => {
    const { state } = useContext(studentCentextData)
   
    return (
        <>
            <div className=" container  py-3">
                <div className="row">
                     <div className="col-3"><AllshowHeader student="All Student" value={state.student.length} img="https://img.icons8.com/external-wanicon-flat-wanicon/50/000000/external-students-online-education-wanicon-flat-wanicon.png"/></div>
                     <div className="col-6"><Search/></div>
    
                     <div className="col-3"><Link to="addstudent"><AllshowHeader student="Add Student"img="https://img.icons8.com/color/48/000000/add-user-group-man-man--v1.png" /></Link></div>
                </div>
            </div>
            <AllStudent/>
        </>
    )
}

export default DitlesHeader
