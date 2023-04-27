import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

// console.log("Welcome to food ordering app");

// High level App layout
/*
 *   header
 *       -title(logo)
 *       -nav items(home,about, contact,cart)
 *   body
 *       -search bar
 *       -restaurant list
 *           -restaurant card
 *               -image
 *               -name
 *               -rating
 *               -cuisines
 *   footer
 *       -links
 *       -coyright
 *
 */
  
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
