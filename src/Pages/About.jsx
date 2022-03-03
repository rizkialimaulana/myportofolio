import React from 'react'
import '../Component/Style/about.scss';
import foto from '../Component/Images/foto.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-wrapper">
          <h1 className="a-title">Who Am I?</h1>
          <p className="a-desc">
            I was born in Bandung, 18 July 1999. Living in Sumedang, West Java,
            Indonesia. And I'm the eldest of three slibings. I like to try and
            learn new things, pursue a field that I like and I like challenges
            and also things related to problem solving. That's the reason why I
            love programming so much. Because there will always be new
            technology to learn and also challenges that are certainly
            interesting for me
          </p>
          <a href="https://bit.ly/3GWOmON">Download CV</a>
        </div>
      </div>
      <div className="a-right">
        <div className="a-bg">
          <img src={foto} alt="" className="img-about" />
        </div>
      </div>
    </div>
  );
}

export default About