import React from "react";
import "./Categories.css";

const categories = [
  "All",
  "Music",
  "Gaming",
  "News",
  "Live",
  "Sports",
  "Podcasts",
  "Coding",
  "React JS",
  "JavaScript",
  "Movies",
  "Vlogs",
  "Comedy",
  "Fashion",
  "Bhojpuri",
  "Punjabi",
  "Reactions",
  "Shorts",
];

const Categories = ({fetchVideos}) => {
  return (
    <div className="content">
      <div className="filters">
        {categories.map((item, index) => (
          <button
            key={index}
            className="chip"
            onClick={() => fetchVideos(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
