import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
  
const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet/>
      <Footer />
    </>
  );
};

// const appRouter=createBrowserRouter([
//   {
//     path:"/",
//     element:<AppLayout/>,
//     errorElement:<Error/>
//   },
//   {
//     path:"/about",
//     element:<About/>
//   }
// ]);

// nested Routing
// all children will go to outlet
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
