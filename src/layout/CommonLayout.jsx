import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

export default function CommonLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}