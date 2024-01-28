import React from "react";
import "./Logo.css";

export const Logo = ({ classes, to }) => {
  return (
    <div class={"logo " + classes}>
      <a href={to}>
        Code<span class="color-effect">GRAPH</span>
      </a>
    </div>
  );
};

Logo.defaultProps = {
  classes: "",
  to: "#"
}
