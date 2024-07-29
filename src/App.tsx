import { Outlet } from "react-router-dom";
import Header from "./features/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
