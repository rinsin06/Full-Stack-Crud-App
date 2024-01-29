import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './Components/Footer/Footer';
import HeaderComponent from './Components/Header/Header';
import ListEmployeeComponent from './Components/ListEmployee/ListEmployeeComponent';
import EmployeeComponent from './Components/EmployeeComponent/EmployeeComponent';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage'; 
import HomePage from './Pages/HomePage'
import{Provider} from 'react-redux'
import store from './redux/Store'
function App() {
  return (

    
    <div>
     <Provider store={store}>
      <BrowserRouter>
        <HeaderComponent />
        <div className= "container">
          <Routes>
          <Route path = "/" element = { <HomePage />}></Route>
              <Route path = "/" element = { <ListEmployeeComponent /> }></Route>
              <Route path = "/employees" element = { <ListEmployeeComponent /> }></Route>
              <Route path = "/add-employee" element = { <EmployeeComponent />} ></Route>
              <Route path = "/edit-employee/:id" element = { <EmployeeComponent />}></Route>
              <Route path = "/login" element = { <LoginPage />}></Route>
              <Route path = "/register" element = { <RegisterPage />}></Route>

            </Routes>
        </div>
        <FooterComponent />
        </BrowserRouter>
        </Provider>
    </div>

    
  );
}

export default App;