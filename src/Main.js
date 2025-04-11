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

import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ProtectedRoute from "./signUp-signIn-pages/componets/prodacted-Routes";

//Main branches of Trader :
const Trader = lazy(() => import("./Trader/Trader"));
   //Pages of Account-overview branch
const Accounts = lazy(() => import("./Accounts-Page/index-Of-Account"));
const ShoppingPage = lazy(() => import("./Shopping-page/index-of-Shopping-page"));
const FreeShopping = lazy(() => import("./Free-Shopping-pege/index-of-page"));
const Analysis = lazy(() => import("./Analisys-page/index-of-AnalisysPage"));
const Payment = lazy(() => import("./Payment-Page/index-Of-Payment"));
const AccountIndex = lazy(() => import("./Accounts-Page/index-Of-Accounts2"));
   //Pages of Profile branch
const AllProfile = lazy(() => import("./Profile-page/index-of-allProfile"));
const Profile = lazy(() => import("./Profile-page/Nav-Indexs/index-of-profile"));
const ProfileAccount = lazy(() => import("./Profile-page/Nav-Indexs/index-of-account"))
const ProfileSecurity = lazy(() => import("./Profile-page/Nav-Indexs/index-of-security"))
const ProfileIdentity = lazy(() => import("./Profile-page/Nav-Indexs/index-of-identity"))
const ProfileLetters = lazy(() => import("./Profile-page/Nav-Indexs/index-of-NewLetters"))
const ProfilePoints = lazy(() => import("./Profile-page/Nav-Indexs/index-of-points"))
const Dashbord = lazy(() => import("./Dashbord-Of-Admin/index-of-Dashbord"))
const DashbordLayout = lazy(() => import("./Dashbord-Of-Admin/components/layout/Dashbord-Layout"))
const User = lazy(() => import("./Dashbord-Of-Admin/components/user/user"))
const DashbordProfile = lazy(() => import("./Dashbord-Of-Admin/components/user/user-Profile"))
const UsersLayout = lazy(() => import("./Dashbord-Of-Admin/components/user/users-Layout"))
const DashbordOrder = lazy(() => import("./Dashbord-Of-Admin/components/user/users-Order"))
const BillingPage = lazy(() => import("./billing-page-Admin-User/index-Of-User-billing"))
const AdminBillingPage = lazy(() => import("./billing-page-Admin-User/index-Of-Admin-Billing"))
const DownloadPage = lazy(() => import("./Download-Page/index-Of-Download"))
const Ticket = lazy(() => import("./Ticket-Page/index-Of-Ticket"))
const Frequently = lazy(() => import("./FAQ-Pages/index-of-faq"))
const FrequentlyLayout = lazy(() => import("./FAQ-Pages/layout"))
const FrequentlysPages = lazy(() => import("./FAQ-Pages/components/faq-pages"))

const traderRoutes = [
  { index: true , element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><Trader/></ProtectedRoute></Suspense> },
  {
    path: "accountoverview",
    element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><Accounts /></ProtectedRoute></Suspense> ,
    children: [
      {index: true , element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><AccountIndex /></ProtectedRoute></Suspense> },
      { path: "shopping", element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><ShoppingPage /></ProtectedRoute></Suspense> },
      { path: "freeshopping", element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><FreeShopping /></ProtectedRoute></Suspense> },
      { path: "analisys/:id", element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><Analysis /></ProtectedRoute></Suspense> },
      { path: "shopping/payment", element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><Payment /></ProtectedRoute></Suspense> },
    ],
  },
  {
  path: "profile",
  element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><AllProfile /></ProtectedRoute></Suspense> ,
  children: [
    {index: true  , element: <Navigate to="personalinformation" replace/>},
    {path : "personalinformation" , element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><Profile /></ProtectedRoute></Suspense>},
    {path : "accountinformation" , element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><ProfileAccount /></ProtectedRoute></Suspense>},
    {path : "security" , element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><ProfileSecurity/></ProtectedRoute></Suspense>},
    {path : "identity" , element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><ProfileIdentity /></ProtectedRoute></Suspense>},
    {path : "newsletters" , element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><ProfileLetters /></ProtectedRoute></Suspense>},
    {path : "points" , element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><ProfilePoints /></ProtectedRoute></Suspense>},
  ]
  },
  {
    path: "billing",
    element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><BillingPage/></ProtectedRoute></Suspense> ,
  },
  {
    path : "download",
    element : <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><DownloadPage/></ProtectedRoute></Suspense>
  },
  {
    path : "ticket",
    element : <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><Ticket/></ProtectedRoute></Suspense>
  },
];

const dashbordRoutes = [
  { index: true , element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><Dashbord/></ProtectedRoute></Suspense> },
  {
    path: "user",
    element : <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><UsersLayout/></ProtectedRoute></Suspense> ,
    children : [
      {index : true , element : <User/>},
      {path : "profile/:name" , element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><DashbordProfile/></ProtectedRoute></Suspense>},
      {path : "order" , element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><DashbordOrder/></ProtectedRoute></Suspense>},
    ]
  }
  ,
  {
    path : "billing",
    element : <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><AdminBillingPage/></ProtectedRoute></Suspense>
  },

] 

const faq = [
  {index : true , element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><Frequently /></ProtectedRoute></Suspense>},
  {path: ":name", element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute><FrequentlysPages /></ProtectedRoute></Suspense>},
];
const Home = lazy(() => import("./Main-page-or-Home/index-of-Main"));
const Login = lazy(() => import("./signUp-signIn-pages/sign-Up-In"));
const TraderLayout = lazy(() => import("./Trader/layout"));
const NotFound = lazy(() => import("./NotFound/NotFound"));

const router = createBrowserRouter([
  { path: "/", element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense> },
  { path: "/users/:sign", element: <Suspense fallback={<div>Loading...</div>}><Login /></Suspense> },
  { path: "/trader",
    element: <Suspense fallback={<div>Loading...</div>}><TraderLayout /></Suspense> ,
    children: traderRoutes,
  },
  { path: "/dashboard",
    element: <Suspense fallback={<div>Loading...</div>}><DashbordLayout /></Suspense> ,
    children: dashbordRoutes,
  },
  {
    path : "/faq",
    element: <Suspense fallback={<div>Loading...</div>}><FrequentlyLayout /></Suspense> ,
    children: faq,
  },
  { path: "*", element: <Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense> },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}