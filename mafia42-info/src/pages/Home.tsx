import React from "react";
import "./Home.css"; // CSS 따로 분리

const Home = () => {
  const channels = ["Channel 1", "Channel 2", "Channel 3", "Channel 4"];

  return (
    <div className="home-container">
      <h1 className="logo">M42</h1>
      <div className="channels">
        {channels.map((channel, idx) => (
          <div key={idx} className="channel-card">
            {channel}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
