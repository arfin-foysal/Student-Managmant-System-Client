import React, { useContext, useRef } from 'react'
import { studentCentextData } from '../../Context/StudentContext'

const Search = () => {
    const { search,srcHandeler } = useContext(studentCentextData)
     const inputEl = useRef()
    const getOnSerch=() => {
        srcHandeler(inputEl.current.value)
    }
    return (
        <div >
            <div className="shadow">
                <input type="search" placeholder="Search" name="" value={search}
                   onChange={getOnSerch} ref={inputEl} className="form-control" id="" />
            </div>
        </div>
    )
}

export default Search
