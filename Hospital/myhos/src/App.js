import './App.css';
import {BrowserRouter} from "react-router-dom";
import Sidebar from './ADMIN/Sidebar/sidebar';
import Header from './ADMIN/Header/header';
import AppRouts from './Routs';
import PatientRegistration from './USER/Register-User/register';

function App() {
  return (

    <BrowserRouter>
    <PatientRegistration />
      <Header />
      <Sidebar />
      <AppRouts />
    </BrowserRouter>
      
  );
}

export default App;
