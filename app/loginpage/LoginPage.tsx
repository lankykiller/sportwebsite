import React from "react";
import "./LoginPage.css";
import Image from "next/image";
import SignIn from "../components/SignIn";


const Logo = () => (
  <Image
    className="logo-image"
    src="/images/logo.png"
    alt="Logo"
    height={270}
    width={300}
  />
);

const Headline = () => (
  <h1 className="headline">Your teams. Easily in one place</h1>
);


const Images = () => (
  <div className="image-section">
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

const LoginPage = () => {
  return (
    <div className="homepage-container">
      <Logo />
      <Headline />
      <SignIn />
      <Images />
    </div>
  );
};

export default LoginPage;
