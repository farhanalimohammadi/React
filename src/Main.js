
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { lazy, Suspense } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NotFound from "./NotFound/NotFound";
// import { Provider } from "react-redux";
// import store from "./Redux/store";
// import ProtectedRoute from "./signUp-signIn-pages/componets/prodacted-Routes";

// const Homepage = lazy(() => import("./Main-page-or-Home/index-of-Main"));
// const SignUpIn = lazy(() => import("./signUp-signIn-pages/sign-Up-In"));
// const Account = lazy(() => import("./Accounts-Page/index-Of-Account"));

// function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Homepage />} />
//             <Route path="/users/:sign" element={<SignUpIn />} />
            

//             <Route path="/trader/accountoverview/*" element={<ProtectedRoute><Account/></ProtectedRoute>} />


//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </Provider>
//   );
// }

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// src/routes/index.js
// import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useEffect, lazy, Suspense  } from 'react';
// import { setCurrentPath } from './Redux/Slices/routeSlice';
// import Trader from '../pages/Trader';
// import Layout from '../components/Layout';
// import FreeShoppingPage from "../Free-Shopping-pege/index-of-page";
// import ShoppingPage from "../Shopping-page/index-of-Shopping-page";
// import Analisys from "../Analisys-page/index-of-AnalisysPage";
// import NotFound from "../NotFound/NotFound";
// import PaymentPage from "../Payment-Page/index-Of-Payment";
// import NotFound from "./NotFound/NotFound";
// import { Provider } from "react-redux";
// import store from "./Redux/store";
// import ProtectedRoute from "./signUp-signIn-pages/componets/prodacted-Routes";


// const Router = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const Homepage = lazy(() => import("./Main-page-or-Home/index-of-Main"));
//   const SignUpIn = lazy(() => import("./signUp-signIn-pages/sign-Up-In"));
//   const Account = lazy(() => import("./Accounts-Page/index-Of-Account"));


//   useEffect(() => {
//     const pathArray = location.pathname.split('/').filter(Boolean);
//     dispatch(setCurrentPath(pathArray));
//   }, [location, dispatch]);

//   return (
//     <Provider store={store}>
//         <BrowserRouter>
//           <Suspense fallback={<div>Loading...</div>}>
//             <Routes>
//               <Route path="/trader" element={<Layout />}>
//                 <Route index element={<Trader />} />
//                 <Route path="accountoverview">
//                   <Route index element={<Account/>}/>
//                   <Route path="shopping" element={<ShoppingPage />} />
//                   <Route path="freeshopping" element={<FreeShoppingPage />} />
//                   <Route path="analysis/:id" element={<Analisys />} />
//                   <Route path="shopping/payment" element={<PaymentPage />} />
//                 </Route>
//                 <Route path="profile">
//                   <Route path="personalinfo" element={<PersonalInfo />} />
//                 </Route>
//               </Route>
//               <Route path='*' element={<NotFound/>} />
//               <Route path='/' element={<Homepage/>} />
//               <Route path='/users/:sign' element={<SignUpIn/>} />
//             </Routes>
//           </Suspense>
//         </BrowserRouter>
//     </Provider>
//   );
// };

// export default Router;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import { useEffect, lazy, Suspense } from "react";
// import { setCurrentPath } from "./Redux/Slices/routeSlice";
// import TraderLayout from "./Trader/layout";
// import NotFound from "./NotFound/NotFound";
// import store from "./Redux/store";

// // Lazy-loaded pages
// const Home = lazy(() => import("./Main-page-or-Home/index-of-Main"));
// const Login = lazy(() => import("./signUp-signIn-pages/sign-Up-In"));
// const Trader = lazy(() => import("./Trader/Trader"));
// const AccountOverview = lazy(() => import("./Accounts-Page/index-Of-Accounts2"));
// const Shopping = lazy(() => import("./Shopping-page/index-of-Shopping-page"));
// const FreeShopping = lazy(() => import("./Free-Shopping-pege/index-of-page"));
// const Analysis = lazy(() => import("./Analisys-page/index-of-AnalisysPage"));
// const Payment = lazy(() => import("./Payment-Page/index-Of-Payment"));
// const Profile = lazy(() => import("./Profile-page/index-of-profile"));


// export default function MainApp(){

//     const location = useLocation();
//     const dispatch = useDispatch();

//     useEffect(() => {
//       const pathArray = location.pathname.split("/").filter(Boolean);
//       dispatch(setCurrentPath(pathArray));
//     }, [location, dispatch]);
  
//     return (
//       <Provider store={store}>
//         <BrowserRouter>
//           <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/trader" element={<TraderLayout />}>
//                 <Route index element={<Trader />} />
//                 <Route path="accountoverview">
//                   <Route index element={<AccountOverview />} />
//                   <Route path="shopping" element={<Shopping />} />
//                   <Route path="freeshopping" element={<FreeShopping />} />
//                   <Route path="analisys/:id" element={<Analysis />} />
//                   <Route path="shopping/payment" element={<Payment />} />
//                 </Route>
//                 <Route path="profile">
//                   <Route index element={<Profile/>} />
//                 </Route>
//               </Route>
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </Suspense>
//         </BrowserRouter>
//       </Provider>
//     );

// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React , { lazy , Suspense} from "react";
import { Navigate } from "react-router-dom";

//Main branches of Trader :
const Trader = React.lazy(() => import("./Trader/Trader"));
   //Pages of Account-overview branch
const Accounts = React.lazy(() => import("./Accounts-Page/index-Of-Account"));
const ShoppingPage = React.lazy(() => import("./Shopping-page/index-of-Shopping-page"));
const FreeShopping = React.lazy(() => import("./Free-Shopping-pege/index-of-page"));
const Analysis = React.lazy(() => import("./Analisys-page/index-of-AnalisysPage"));
const Payment = React.lazy(() => import("./Payment-Page/index-Of-Payment"));
const AccountIndex = React.lazy(() => import("./Accounts-Page/index-Of-Accounts2"));
   //Pages of Profile branch
const AllProfile = React.lazy(() => import("./Profile-page/index-of-allProfile"));
const Profile = React.lazy(() => import("./Profile-page/Nav-Indexs/index-of-profile"));
const ProfileAccount = React.lazy(() => import("./Profile-page/Nav-Indexs/index-of-account"))
const ProfileSecurity = React.lazy(() => import("./Profile-page/Nav-Indexs/index-of-security"))
const ProfileIdentity = React.lazy(() => import("./Profile-page/Nav-Indexs/index-of-identity"))
const ProfileLetters = React.lazy(() => import("./Profile-page/Nav-Indexs/index-of-NewLetters"))
const ProfilePoints = React.lazy(() => import("./Profile-page/Nav-Indexs/index-of-points"))

const traderRoutes = [
  { index: true , element: <Suspense fallback={<div>Loading...</div>}><Trader /></Suspense> },
  {
    path: "accountoverview",
    element: <Suspense fallback={<div>Loading...</div>}><Accounts /></Suspense> ,
    children: [
      {index: true , element: <Suspense fallback={<div>Loading...</div>}><AccountIndex /></Suspense> },
      { path: "shopping", element: <Suspense fallback={<div>Loading...</div>}><ShoppingPage /></Suspense> },
      { path: "freeshopping", element: <Suspense fallback={<div>Loading...</div>}><FreeShopping /></Suspense> },
      { path: "analisys/:id", element: <Suspense fallback={<div>Loading...</div>}><Analysis /></Suspense> },
      { path: "shopping/payment", element: <Suspense fallback={<div>Loading...</div>}><Payment /></Suspense> },
    ],
  },
  {
  path: "profile",
  element: <Suspense fallback={<div>Loading...</div>}><AllProfile /></Suspense> ,
  children: [
    {index: true  , element: <Navigate to="personalinformation" replace/>},
    {path : "personalinformation" , element: <Suspense fallback={<div>Loading...</div>}><Profile /></Suspense>},
    {path : "accountinformation" , element: <Suspense fallback={<div>Loading...</div>}><ProfileAccount /></Suspense>},
    {path : "security" , element: <Suspense fallback={<div>Loading...</div>}><ProfileSecurity /></Suspense>},
    {path : "identity" , element: <Suspense fallback={<div>Loading...</div>}><ProfileIdentity /></Suspense>},
    {path : "newsletters" , element: <Suspense fallback={<div>Loading...</div>}><ProfileLetters /></Suspense>},
    {path : "points" , element: <Suspense fallback={<div>Loading...</div>}><ProfilePoints /></Suspense>},
  ]
  },
];

const Home = React.lazy(() => import("./Main-page-or-Home/index-of-Main"));
const Login = React.lazy(() => import("./signUp-signIn-pages/sign-Up-In"));
const TraderLayout = React.lazy(() => import("./Trader/layout"));
const NotFound = React.lazy(() => import("./NotFound/NotFound"));

const router = createBrowserRouter([
  { path: "/", element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense> },
  { path: "/users/:sign", element: <Suspense fallback={<div>Loading...</div>}><Login /></Suspense> },
  { path: "/trader",
    element: <Suspense fallback={<div>Loading...</div>}><TraderLayout /></Suspense> ,
    children: traderRoutes,
  },
  { path: "*", element: <Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense> },
]);



export default function Routes() {
  return <RouterProvider router={router} />;
}