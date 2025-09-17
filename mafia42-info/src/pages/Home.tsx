// src/pages/Home.tsx
import "./Home.css";
import { useNavigate } from "react-router-dom";

type Channel = { label: string; path?: string };

const Home = () => {
  const navigate = useNavigate();

  const channels: Channel[] = [
    { label: "계산기" },
    { label: "카드강화 시뮬레이션" },
    { label: "컬렉션 & 레벨보상", path: "/rewards" },
    { label: "업데이트 및 게임 내 정보" },
  ];

  const go = (path?: string) => {
    if (!path) return;
    navigate(path);
  };

  return (
    <div className="home-container">
      <h1 className="logo">M42</h1>
      <div className="channels">
        {channels.map((c) => (
          <div
            key={c.path ?? c.label}
            className="channel-card"
            role="button"
            tabIndex={0}
            onClick={() => go(c.path)}
            onKeyDown={(e) => {
              if (!c.path) return;
              if (e.key === "Enter" || e.key === " " || e.code === "Space") {
                e.preventDefault();
                navigate(c.path);
              }
            }}
          >
            {c.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
