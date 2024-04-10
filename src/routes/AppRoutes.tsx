import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TimsLogin } from "../components/timsLogin/TimsLogin";
import { EmployeeNumField } from "../components/employeeNumField/EmployeeNumField";
import Reservation from "../components/reservation/Reservation";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TimsLogin />} />
        <Route path="/employee-auth" element={<EmployeeNumField />} />
        <Route path="/reservation/:userId" element={<Reservation/>} />
      </Routes>
    </BrowserRouter>
  );
};
