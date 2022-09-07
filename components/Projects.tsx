import React from "react";

const Projects = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center align-middle mb-9">
        <h1 className="text-2xl font-bold underline underline-offset-1">
          Projects
        </h1>
      </div>
      <div className="grid gap-8 pb-20 content-between">
        <div className="mx-60 flex">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Agriculture Automation System
            </h1>
          </div>
          <div className="flex-1">
            <p>
              Me and my 2 friends made this project in high school, with some
              IoT devices and ANDROID STUDIO. We made a one Android application
              where you can see the live temprature, humadity, and soil moisture
              of your farm. In this app, we used Java, Arduino languages.
            </p>
          </div>
        </div>

        <div className="mx-60 flex">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Certificate Management App</h1>
          </div>
          <div className="flex-1">
            <p>
              In this app, I made a web app with the use of Next.js and add
              functionality of Blockchain. User can store their certificate on
              our web app and can see anytime, anywhere with the security of
              blockchain. In this app, Solidity, Javascript, are used. This app
              is currently in progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
