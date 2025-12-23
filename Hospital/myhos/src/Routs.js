import { Routes, Route, Navigate } from "react-router-dom";

/* Pages */
// import Dashboard from './ADMIN/Dashboard/dashboard.js';
import Patient from './ADMIN/Patients/Patient.js';
import Doctor from './ADMIN/Doctors/doctor.js';


const AppRoutes = () => {
  return (
    <Routes>
      {/* Default Route */}
      {/* <Route path="/" element={<Dashboard />} /> */}

      {/* Core Modules */}
      <Route path="/patient" element={<Patient />} />
      <Route path="/doctor" element={<Doctor />} />
      

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;