import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our Gaming Blog, Gaming Alchemy! We are a passionate team of gamers and tech enthusiasts dedicated to bringing you the latest news, reviews, and updates from the world of gaming.
      </p>
      <p>
        Our mission is to create a comprehensive resource for gamers of all levels, from casual players to hardcore enthusiasts. We cover a wide range of topics, including:
      </p>
      <ul>
        <li>Breaking news in the gaming industry</li>
        <li>In-depth game reviews and previews</li>
        <li>Guides and tutorials to help you level up your gaming skills</li>
        <li>Latest gaming gear and product reviews</li>
        <li>Community events and eSports coverage</li>
      </ul>
      <p>
        Our team of dedicated writers and editors are committed to providing insightful and engaging content to help you stay informed and entertained. Whether you're looking for the latest game releases, tips and tricks, or product recommendations, GamingHub has got you covered.
      </p>
      <p>
        Thank you for being a part of our community. We look forward to sharing our love of gaming with you!
      </p>
      <div className="about-image">
        <img src="https://media.istockphoto.com/id/1132282369/photo/men-playing-video-games.jpg?s=612x612&w=0&k=20&c=ePO9aFEWk9QsV0oXHpHtWJ46A7Vj5sy7T_bZ56DZ4zI=" alt="Gaming" />
      </div>
    </div>
  );
};

export default About;
