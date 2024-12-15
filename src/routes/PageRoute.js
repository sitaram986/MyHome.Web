import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Documents from "../pages/Documents";
import AddDocument from "../pages/AddDocument";
import { Suspense } from "react";

const PageRoute = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="Documents" element={<Documents />} />
            <Route path="AddDocument" element={<AddDocument />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default PageRoute;