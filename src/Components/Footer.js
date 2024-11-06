import Image from "next/image";
import React from "react";
import logo from "../Components/Images/Logo.png";
const Footer = () => {
  return (
    <div className="h-svh grid grid-cols-4">
      <div className="pl-9 mt-6">
        <Image src={logo} alt="no logo"></Image>
        <h1 className="mt-6"></h1>
        <h1>Vestibulum molestie mattis ante</h1>
        <h1>magnis eget eget egestas diam</h1>
        <h1>sapien. Felis ultrices sollicitudin nec</h1>
        <h1>lectus ornare ut proin. Proin</h1>
        <h1>interdum enim id proin.</h1>
      </div>
      <div className="mt-7">
        <h1>Quick links</h1>
        <p className="mt-6">Account</p>
        <p className="mt-3">Course</p>
        <p className="mt-3">Checkout</p>
      </div>
      <div className="mt-7">
      <h1>Company</h1>
        <p className="mt-6">Blog</p>
        <p className="mt-3">About</p>
        <p className="mt-3">Policy</p>
        <p className="mt-3">Support</p>
      </div>
      <div  className="mt-7" >
      <h1>Contact Us</h1>
        <p className="mt-6">Ph: +(123) 456-7890</p>
        <p className="mt-3">Email: first.last@demos.com</p>
        <p className="mt-3">Loc: Moon Street, 446 Jupiter</p>
        <p className="mt-3">Open: 9AM - 6PM ( Mon - Fri)</p>
      </div>
    </div>
  );
};

export default Footer;
