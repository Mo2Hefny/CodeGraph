import React from "react";
import "./Topics.css";
import { Topics_Item } from "./Topics_Item";
import { CapitalizeString } from "../../utils/textUtils";

export const Topics = () => {
  const topics = ["pathfinding", "sorting", "trees", "graph"]
  return (
    <div class="topics" id="topics">
      <h1 class="diamond underline">Topics</h1>
      <div class="topics-container">
      {topics.map(topic => (
        <Topics_Item 
          imgPath={"../src/assets/img/"+ topic +".png"}
          imgAlt={topic + "icon"}
          topicTitle={CapitalizeString(topic)}
        />
      ))}
      </div>
    </div>
  );
};
