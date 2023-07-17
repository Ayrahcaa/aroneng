import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Something",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga saepe reprehenderit commodi provident a iure quo incidunt, libero laboriosam, dolores animi exercitationem accusantium temporibus ducimus facere sit, expedita fugit!s",
  },
  {
    title: "Something",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga saepe reprehenderit commodi provident a iure quo incidunt, libero laboriosam, dolores animi exercitationem accusantium temporibus ducimus facere sit, expedita fugit!s",
  },
  {
    title: "Something",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga saepe reprehenderit commodi provident a iure quo incidunt, libero laboriosam, dolores animi exercitationem accusantium temporibus ducimus facere sit, expedita fugit!s",
  },
  {
    title: "Something",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga saepe reprehenderit commodi provident a iure quo incidunt, libero laboriosam, dolores animi exercitationem accusantium temporibus ducimus facere sit, expedita fugit!s",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The servies that we provide</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
