// import React from "react";

// import FreeShoppingPage from "../Free-Shopping-pege/index-of-page";
// import ShoppingPage from "../Shopping-page/index-of-Shopping-page";
// import Analisys from "../Analisys-page/index-of-AnalisysPage";
// import PaymentPage from "../Payment-Page/index-Of-Payment";
// import Accounts2 from "./index-Of-Accounts2";

// import { Routes, Route, useParams } from "react-router-dom";

// export default function Accounts(){

//     const {pages} = useParams()

//     return (
//         <Routes>
//             <Route path="/shopping" element={<ShoppingPage />} />
//             <Route path="/freeshopping" element={<FreeShoppingPage />} />
//             <Route path="/analysis/:id" element={<Analisys />} />
//             <Route path="/shopping/payment" element={<PaymentPage />} />
//             <Route path="/" element={<Accounts2 />} />
//         </Routes>
//     )
// }
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";

// import FreeShoppingPage from "../Free-Shopping-pege/index-of-page";
// import ShoppingPage from "../Shopping-page/index-of-Shopping-page";
// import Analisys from "../Analisys-page/index-of-AnalisysPage";
// import NotFound from "../NotFound/NotFound";
// import Accounts2 from "./index-Of-Accounts2";
// import PaymentPage from "../Payment-Page/index-Of-Payment";
// import ProtectedRoute from "../signUp-signIn-pages/componets/prodacted-Routes";
// import Profile from "../Profile-page/index-of-profile";

// export default function TraderAccountOverview() {
//   const { routes = [] } = useSelector((state) => state.breadcrumb);

//   const componentsMap = {
//     Analisys: Analisys,
//     ShoppingPage: ShoppingPage,
//     FreeShoppingPage: FreeShoppingPage,
//     PaymentPage: PaymentPage,
//   };

//   return (
//     <div>
//       <Routes>
//         {routes.map((route) => {
//           const Component = componentsMap[route.address];
//           return (
//             <Route key={route.path} path={route.path} element={<ProtectedRoute><Component/></ProtectedRoute>} />
//           );
//         })}
//         <Route path="/" element={<Accounts2 />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

import React from "react";

import Sidebar from "../staticElems/sidebar";
import FirstHeader from "../staticElems/header-1";
import TraderLayout from "../Trader/layout";



export default function Accounts2(){

    return (
        <div className="flex flex-col min-h-screen bg-componentBg-primeryBg justify-start w-full box-border">
            <FirstHeader/>
            <div className="flex flex-row w-full min-h-screen">
                <Sidebar/>
                <TraderLayout/>
            </div>

        </div>
    )
}