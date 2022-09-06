import React from "react";

const Skills = () => {
  return (
    <div className="text-white cursor-default">
      <div className="flex justify-center align-middle mb-9">
        <h1 className="text-2xl font-bold underline underline-offset-1">
          Skills
        </h1>
      </div>
      <div className="grid gap-8 pb-20 content-between">
        <div className="mx-60 flex">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Web Development</h1>
          </div>
          <div className="flex-1">
            <p>
              I know certain programming languages which are use in web
              developemnet such as{" "}
              <code className="animate-pulse text-blue-500">
                HTML, CSS, PYTHON, JAVASCRIPT, TYPESCRIPT, TAILWINDCSS,
              </code>{" "}
              As well as some technology and framework such as{" "}
              <code className="animate-pulse text-blue-500">
                REACT.JS, NEXT.JS, MONGODB, EXPRESS.JS, FIREBASE, C#,
              </code>{" "}
              and so on. I've build many project in this field.
            </p>
          </div>
        </div>

        <div className="mx-60 flex">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Blockchain Development</h1>
          </div>
          <div className="flex-1">
            <p>
              One of my favorite area is blockchain development. I've knowledge
              of{" "}
              <code className="animate-pulse text-blue-500">
                SOLIDITY, JAVASCRIPT, PYTHON
              </code>{" "}
              which are use in blockchain developemnet. As well as I've build
              project with blockchain functionality using other technologies
              such as{" "}
              <code className="animate-pulse text-blue-500">
                TRUFFLE, GANACHE, METAMASK.
              </code>
            </p>
          </div>
        </div>

        <div className="mx-60 flex">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">App Development</h1>
          </div>
          <div className="flex-1">
            <p>
              I've build few projects in this field, using{" "}
              <code className="animate-pulse text-blue-400">ANDROID,</code> and{" "}
              <code className="animate-pulse text-blue-500">REACT-NATIVE</code>{" "}
              Technology. I know{" "}
              <code className="animate-pulse text-blue-500">
                JAVA, XML, JAVASCRIPT
              </code>{" "}
              languages which are use in these field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
