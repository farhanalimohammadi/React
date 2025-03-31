// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useLocation, Link } from "react-router-dom";
// import { setCurrentPath } from '../Redux/Slices/breadcrumbSlice'

// function Breadcrumb({ params }) {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const { basePath, routes, currentPath } = useSelector((state) => state.breadcrumb);

//   useEffect(() => {
//     const path = location.pathname.replace("/trader/accountoverview/", "");
//     dispatch(setCurrentPath(path));
//   }, [location, dispatch]);

//   const breadcrumbItems = currentPath
//   .split("/")
//   .filter((segment) => segment)
//   .map((segment, index) => {
//     const pathSegment = currentPath
//       .split("/")
//       .slice(0, index + 1)
//       .join("/");
//     const route = routes.find((r) => r.path === pathSegment);

//     return route ? (
//       <span key={index}>
//           {route.name}
//         {index < currentPath.split("/").length - 1 && " / "}
//       </span>
//     ) : null;
//   });


//     const paramsId = params
//     console.log(paramsId , breadcrumbItems);
    
    

//   return (
//     <div className="breadcrumb text-gray-600 text-sm">
//             <div className="">
//                 <Link to="/trader/accountoverview" className="hover:text-blue-500 text-[16px] font-light"> {basePath} / </Link>
//                 <span className="text-white text-[16px] font-bold">
//                     {breadcrumbItems}
//                 </span>
//                 {paramsId ? <span className="text-white text-[16px] font-bold">Account Matrix</span> : null }
//                 <span className="text-white text-[16px] font-bold ml-1">
//                     {paramsId}
//                 </span>
//             </div>

//     </div>
//   );
// }

// export default Breadcrumb;
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { memo } from "react";

function Breadcrumb() {
  const { breadcrumbs } = useSelector((state) => state.route);

  if (!breadcrumbs.length) return null;

  return (
    <nav className="">
      <div className="flex flex-row justify-start items-center gap-x-4 text-[#4D4D4D] text-nameSize">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 12V10"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.71416 1.88023L2.09416 5.58023C1.57416 5.99356 1.24083 6.86689 1.35416 7.52023L2.24083 12.8269C2.40083 13.7736 3.30749 14.5402 4.26749 14.5402H11.7342C12.6875 14.5402 13.6008 13.7669 13.7608 12.8269L14.6475 7.52023C14.7542 6.86689 14.4208 5.99356 13.9075 5.58023L9.28749 1.88689C8.57416 1.31356 7.42083 1.31356 6.71416 1.88023Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.path} className="flex items-center select-none">
            <Link
              to={crumb.path}
              className={`hover:text-blue-600 transition-colors font-medium ${
                index === breadcrumbs.length - 1 ? "text-white" : "text-[#4D4D4D]"
              }`}
            >
              {crumb.name}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <span className="ml-4 text-[#4D4D4D]">/</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

export default memo(Breadcrumb);