// src/components/ChannelCard.tsx
import { Link } from "react-router-dom";

type Props = {
  to: string;
  label: string;
  className?: string; // 기존 .channel-card 스타일 재사용용
  disabled?: boolean;
};

export default function ChannelCard({ to, label, className, disabled }: Props) {
  if (disabled) {
    return (
      <div className={`channel-card ${className ?? ""} disabled`}>{label}</div>
    );
  }
  return (
    <Link to={to} className={`channel-card ${className ?? ""}`} role="button">
      {label}
    </Link>
  );
}
