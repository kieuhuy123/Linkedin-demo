import "./App.css";
import { Outlet } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Login />

      <Outlet></Outlet>
    </>
  );
}

export default App;
