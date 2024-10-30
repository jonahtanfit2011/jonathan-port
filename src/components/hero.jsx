import React from 'react';

const Hero = () => {
  return (
    <section className = "heroBox" id="hero">
            <div className="textHero">
                <h1>Hi, I'm Jonathan Zaspa of<br /> Westren Institute of Technology</h1>
                <p>
                "Welcome to my digital showcase! <br />As a passionate front-end web developer, <br />I'm dedicated to crafting visually stunning <br />and user-friendly websites. <br />Explore my projects to see how I combine <br />creativity with technical <br />expertise to bring ideas to life."
                </p>
            </div>
        <img src="jonathanPic.jpg" alt="Carl Arjhon Minor" style={{ width: '370px', height: 'auto' }} />
    </section>
  );
};

export default Hero;