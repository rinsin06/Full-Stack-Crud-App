import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {listEmployees, deleteEmployee} from '../../EmployeeService'
import {useSelector,useDispatch} from 'react-redux'
import getDataInfo from '../../redux/api'

const ListEmployeeComponent = () => {

    const employees = useSelector(state => state.dataInfo.data)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [role,setRole] = useState('');

    useEffect(() => {
        // getAllEmployees();

       setRole(localStorage.getItem("role")) 

        dispatch(getDataInfo())
    }, [])

    // const getAllEmployees = () => {
    //     listEmployees().then((response) => {
    //         setEmployees(response.data)
    //         console.log(response.data);
    //     }).catch(error =>{
    //         console.log(error);
    //     })
    // }

    const removeEmployee = (employeeId) => {
       deleteEmployee(employeeId).then((response) =>{
        // getAllEmployees();
        dispatch(getDataInfo())

       }).catch(error =>{
           console.log(error);
       })
        
    }

    function addNewEmployee() {
        navigate('/add-employee')
    }

    const updateEmployee = (id) => {
        navigate(`/edit-employee/${id}`)
    }

    return (
        <div className = "container">
            <br /><br />
            <h2 className = "text-center"> List Employees </h2>
            {/* <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link> */}
            {role === 'ROLE_ADMIN' &&(<button className = "btn btn-primary mb-2" onClick={addNewEmployee }>Add Employee</button>)}
            <table className="table table-bordered table-striped">
                {/* <thead className="table-dark"> */}
                <thead>   
                    <tr>
                        <th> Employee Id </th>
                        <th> Employee First Name </th>
                        <th> Employee Last Name </th>
                        <th> Employee Email Id </th>
                        <th> Employee Adress</th>
                        {role === 'ROLE_ADMIN' &&(<th> Actions </th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.adress}</td>
                                
                              { role === 'ROLE_ADMIN' && ( <td>
                                    <button className="btn btn-info" onClick={() => updateEmployee(employee.id)} >Update</button>
                                    <button className = "btn btn-danger" onClick = {() => removeEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>)}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent