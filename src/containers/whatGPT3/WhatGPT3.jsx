import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="Why Aron?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga saepe reprehenderit commodi provident a iure quo incidunt, libero laboriosam, dolores animi exercitationem accusantium temporibus ducimus facere sit, expedita fugit!s"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Some text you want</h1>
        <p>Explore</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Something"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga saepe reprehenderit commodi provident a iure quo incidunt, libero laboriosam, dolores animi exercitationem accusantium temporibus ducimus facere sit, expedita fugit!s"
        />
        <Feature
          title="Something"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga saepe reprehenderit commodi provident a iure quo incidunt, libero laboriosam, dolores animi exercitationem accusantium temporibus ducimus facere sit, expedita fugit!s"
        />
        <Feature
          title="Something"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga saepe reprehenderit commodi provident a iure quo incidunt, libero laboriosam, dolores animi exercitationem accusantium temporibus ducimus facere sit, expedita fugit!s"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
