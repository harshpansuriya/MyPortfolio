import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-24 w-full items-center justify-center border-t text-white bg-black">
      <h1>
        Made with ❤️ by{" "}
        <code className="animate-pulse text-blue-500">Harsh</code>.
      </h1>
      <p>
        {"Copyright "} &copy; {""}
        {new Date().getFullYear()}
        {"."}
      </p>{" "}
    </div>
  );
};

export default Footer;
