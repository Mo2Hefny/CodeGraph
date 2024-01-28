import React from "react";
import { useNavigate } from "react-router-dom";

export const Topics_Item = ({ imgPath, imgAlt, topicTitle }) => {
  const topics = ["Sorting", "Trees", "Graph"];
  const available = !topics.includes(topicTitle);
  const navigate = useNavigate();
  const changePath = () => {
    if (!available) return;
    navigate("/pathfinding");
  };
  return (
    <div
      onClick={changePath}
      class={"container topics-items" + (available ? "" : " coming-soon")}
    >
      <img src={imgPath} alt={imgAlt} />
      <h3 class="topic-type">{topicTitle}</h3>
    </div>
  );
};
