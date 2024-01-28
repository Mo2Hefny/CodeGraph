import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <div class="hero" id="hero">
      <div class="hero-text">
        <h1>
          Experience the power of
          <span class="color-effect"> visual learning</span> with CodeGRAPH.
        </h1>
        <p class="subtitles">
          CodeGRAPH is an interactive assistant that lets you visualize data
          structures using real-time input. Start experimenting now!
        </p>
        <div class="hero-buttons">
          <a href="#topics" class="primary-button">Get Started</a>
          <a href="" class="secondary-button">Learn More!</a>
        </div>
      </div>
      <div class="hero-img">
        <img src="../src/assets/img/unstructured-data.png" alt="unstructured data" />
      </div>
    </div>
  )
}
