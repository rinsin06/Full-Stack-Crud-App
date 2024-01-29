import axios from 'axios'

export const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

const USER_BASE_REST_API_URL = 'http://localhost:8080';

export const listEmployees = () => {
    return axios.get(EMPLOYEE_BASE_REST_API_URL)
};

export const createEmployee = (employee) => {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
}

export const getEmployeeById = (employeeId) => {
    return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
}

export const updateEmployee = (employeeId, employee) => {
    return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId, employee);
}

export const deleteEmployee = (employeeId) => {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
}

export const loginUser = (input) => {
    return axios.post(USER_BASE_REST_API_URL+'/auth/login' ,input);
}

export const addNewUser = (input) => {
    return axios.post(USER_BASE_REST_API_URL+'/auth/addNewUser' ,input);
}

// export const uploadProfileImage = (token,input) => {
//     const request =  {
//         input,
//         token
//     };
//     return axios.post(USER_BASE_REST_API_URL+`/auth/image-upload` ,formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//             'Authorization': `Bearer ${token}`, // Include your JWT token if required
//         },
//     });
// }


export const verifyToken = (input) => {
    return axios.post(USER_BASE_REST_API_URL+'/auth/verify-token' ,input);
}

