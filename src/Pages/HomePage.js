import React from 'react'
import Home from '../Components/Home/Home'
import EmployeeComponent from '../Components/EmployeeComponent/EmployeeComponent'
import ListEmployeeComponent from '../Components/ListEmployee/ListEmployeeComponent'

const HomePage = () => {
  return (
    <div>
      <Home/>
     <ListEmployeeComponent/>
    </div>
  )
}

export default HomePage
