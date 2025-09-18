// src/pages/Home.tsx
import "./Home.css";
import ChannelList from "../components/ChannelList";
import type { Channel } from "../types/channel";

const channels: Channel[] = [
  { label: "계산기", path: "/calculator" },
  { label: "각종 커뮤니티", path: "/community" },
  { label: "장착 도감", path: "/collection" },
  { label: "업데이트 및 게임 내 정보", path: "/info" },
];

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="logo">M42</h1>
      <ChannelList channels={channels} />
    </div>
  );
}
