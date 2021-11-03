import React from 'react'

const AddStudent = () => {
    return (
        <div>
            <div className="container">
                <form action="">
                    <input type="text" placeholder="Full Name" name="" id="" />
                    <input type="number" placeholder="Number" name="" id="" />
                    <input type="email"placeholder="Email"  name="" id="" />
                    <input type="text" placeholder="Department" name="" id="" />
                    <input type="text" placeholder="Session" name="" id="" />
                    <input type="text" placeholder="Student Id" name="" id="" />
                    <input type="text" placeholder="Religion" name="" id="" />
                    <input type="file" placeholder="Images" name="" id="" />
                    <input type="date"placeholder="Date Of Birth"  name="" id="" />
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Femaul</option>
                    <option value="3">Other</option>
                    </select>
                    </form>
            </div>
        </div>
    )
}

export default AddStudent
