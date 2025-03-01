import { Outlet } from "react-router-dom";
import useUpdatePath from "../hooks/useUpdatePath";
import Sidebar from "../staticElems/sidebar";
import FirstHeader from "../staticElems/header-1";


function TraderLayout() {
  useUpdatePath(); 

  return (
      <div className="flex flex-col min-h-screen bg-componentBg-primeryBg justify-start w-full box-border">
        <FirstHeader/>
        <div className="flex flex-row w-full min-h-screen">
            <Sidebar/>
            <Outlet/>
        </div>

      </div>
  );
}

export default TraderLayout;