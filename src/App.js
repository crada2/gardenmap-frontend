import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import GardenProfile from "./pages/GardenProfile";
import Layout from "./components/Layout";
import RegisterForm from "./components/Auth/RegisterForm";
import Login from "./pages/Login";
import AuthProvider from "./components/Auth/AuthProvider";
import useAutoLogin from "./components/Auth/useAutoLogin";

const AutoLogin = () => {
  useAutoLogin();
  return null;
};

export default function App() {
  return (
    <div>
      <AuthProvider>
        <AutoLogin />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="form" element={<Form />} />
            <Route path="garden" element={<GardenProfile />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}
