// src/pages/Community.tsx
import "./Community.css";
import ChannelList from "../components/ChannelList";
import type { Channel } from "../types/channel";

const channels: Channel[] = [
  { label: "카드", path: "/community/card" },
  { label: "엽서", path: "/community/letter" },
  { label: "스파이비밀문서", path: "/community/spy" },
  { label: "이벤트 듀오", path: "/community/event" },
];

export default function Community() {
  return (
    <div className="community-container">
      <h1>카드, 엽서교환, 스파이비밀문서 커뮤니티</h1>
      <ChannelList channels={channels} />
    </div>
  );
}
