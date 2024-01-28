import React from "react";
import './Footer.css'

export const Footer = () => {
  return (
    <div class="footer">
      <div class="footer-upper">
        <div class="logo">
          <a href="#hero">
            Code<span class="color-effect">GRAPH</span>
          </a>
        </div>
        <div class="feedback container">
          <h3>Feedback? Suggestions? Want a new feature?</h3>
          <p class="color-effect contrast">
            Contact me!
            <span class="icons sub">
              <a href="" target="_blank">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="mailto:moamensaied1@gmail.com" target="_blank">
                <i class="fa fa-envelope"></i>
              </a>
            </span>
          </p>
        </div>
        <div class="connect container" id="contact">
          <h3>Let's Connect!</h3>
          <span class="icons sub color-effect contrast">
            <a href="" target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="https://github.com/Mo2Hefny" target="_blank">
              <i class="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mohefny04/" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
          </span>
        </div>
        <div class="attribution">
          <p>
            Icon made by
            <a target="_blank" href="https://www.flaticon.com/authors/paul-j">
              Paul J.
            </a>
            &nbsp;from
            <a target="_blank" href="https://www.flaticon.com/">
              www.flaticon.com
            </a>
          </p>
          <p>
            Icon made by
            <a target="_blank" href="https://www.flaticon.com/authors/freepik">
              Freepik
            </a>
            &nbsp;from
            <a target="_blank" href="https://www.flaticon.com/">
              www.flaticon.com
            </a>
          </p>
        </div>
      </div>
      <div class="separator"></div>
      <div class="footer-box">
        <p class="sub">
          Made with{" "}
          <span>
            <i class="fa fa-heart"></i>{" "}
          </span>{" "}
          by{" "}<b>Moamen Hefny</b>
        </p>
        <p class="sub copyright">Copyright &copy; 2023 All Rights Reserved</p>
      </div>
    </div>
  );
};
