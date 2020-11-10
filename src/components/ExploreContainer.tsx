import React from "react";
import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{" "}
        <a
          rel="noopener noreferrer"
          href="https://ionic-pic-app.herokuapp.com/tab2"
        >
          This app by going to tab 2
        </a>
      </p>
      <p>
        Or see the source code{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kayyali18/ionic-app"
        >
          here
        </a>
      </p>
      <p>
        Built following the Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/react"
        >
          React Tutorial{" "}
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
