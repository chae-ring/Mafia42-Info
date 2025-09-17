import "./Home.css";

const Home = () => {
  const channels = [
    "계산기",
    "카드강화 시뮬레이션",
    "컬렉션 & 레벨보상",
    "업데이트 및 게임 내 정보",
  ];

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
