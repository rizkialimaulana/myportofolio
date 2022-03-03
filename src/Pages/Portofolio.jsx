import React from 'react';
import Porto from '../Component/Porto';
import '../Component/Style/portofolio.scss';
import { portos } from '../data';

const Portofolio = () => {
  return (
    <div className="portofolio">
      <div className="p-wrapper">
        <h1 className="p-title">What have i done?</h1>
        <p className="p-desc">
          This is a project that I have been working on. I managed to work on 10
          web and mobile application projects. Applications that have been
          created are designed by myself using tools such as Figma. Let's check
          my project
        </p>
      </div>
      <div className="p-items">
        {portos.map((item) => (
          <Porto key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default Portofolio