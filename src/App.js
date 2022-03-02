//import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import GardenProfile from "./pages/GardenProfile";
import Layout from "./components/Layout";
import "./assets/styles/style.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="garden" element={<GardenProfile />} />
        </Route>
      </Routes>
    </div>
  );
}
