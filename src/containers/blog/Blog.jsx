import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { project1, project2, project3, project4, project5 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Our Projects</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={project1} text="" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={project1} text="" />
        <Article imgUrl={project2} text="" />
        <Article imgUrl={project3} text="" />
        <Article imgUrl={project4} text="" />
      </div>
    </div>
  </div>
);

export default Blog;
