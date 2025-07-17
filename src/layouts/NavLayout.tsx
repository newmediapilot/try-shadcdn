import { Outlet } from "react-router";
import { NavGlobal } from "@/components/NavGlobal.tsx";

function NavLayout() {
  return (
    <>
      <NavGlobal />
      <Outlet />
    </>
  );
}

export default NavLayout;
