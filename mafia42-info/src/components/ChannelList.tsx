// src/components/ChannelList.tsx
import ChannelCard from "./ChannelCard";
import type { Channel } from "../types/channel";

export default function ChannelList({ channels }: { channels: Channel[] }) {
  return (
    <div className="channels">
      {channels.map((c) => (
        <ChannelCard
          key={c.path}
          to={c.path}
          label={c.label}
          disabled={c.disabled}
        />
      ))}
    </div>
  );
}
