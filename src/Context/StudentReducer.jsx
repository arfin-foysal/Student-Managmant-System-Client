
const StudentReducer = (state,action)=> {
    switch (action.type) {
        case "GET_DATA":
            return {
           student: action.payload
            }
        
        default: return state
    }
}

export default StudentReducer
