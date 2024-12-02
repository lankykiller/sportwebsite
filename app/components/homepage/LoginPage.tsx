import React from "react";
import "./LoginPage.css";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="homepage-container">
      <Image
        className="logo-image"
        src="/images/logo.png"
        alt="Logo"
        height={270}
        width={300}
      />
      <h1 className="headline">Your teams. Easily in one place</h1>
      <button className="btn btn-active btn-primary">Test</button>
      <button className="btn btn-active btn-primary">Sign in with gmail</button>
      <Image
       className="lebron-image"
       src="/images/lebron.png"
       alt="Lebron"
       height={465}
       width={295}
        />
         <Image
       className="lamar-image"
       src="/images/lamar.png"
       alt="Lamar"
       height={465}
       width={295}
        />
    </div>
  );
};

export default LoginPage;
