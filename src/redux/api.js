import axios from "axios";
import { setData, setError, setLoading } from "./Store";
import { EMPLOYEE_BASE_REST_API_URL } from "../EmployeeService";

function getDataInfo(){

   return function (dispatch){

        dispatch(setLoading(true));
    
        axios.get(EMPLOYEE_BASE_REST_API_URL).then((respose)=>{
    
            dispatch(setData(respose.data))
    
            dispatch(setLoading(false));
        }).catch(()=>{
            dispatch(setLoading(false));
    
            dispatch(setError("An Error Occured"))
        })
    }

}



export default getDataInfo;