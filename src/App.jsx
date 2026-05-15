import React, { Suspense } from "react";
import "./assets/tailwind.css";
const Sidebar = React.lazy(() => import("./components/Sidebar"));
const Header = React.lazy(() => import("./components/Header"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Products = React.lazy(() => import("./pages/Products"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/error/400" element={<Error400 />} />
            <Route path="/error/401" element={<Error401 />} />
            <Route path="/error/403" element={<Error403 />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
