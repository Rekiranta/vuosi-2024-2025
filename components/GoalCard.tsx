export type GoalStatus = "not_started" | "in_progress" | "completed";
export type GoalColor = "terracotta" | "sage" | "amber" | "blue";

export interface Goal {
  id: number;
  title: string;
  description: string;
  emoji: string;
  status: GoalStatus;
  color: GoalColor;
}

interface GoalCardProps {
  goal: Goal;
  index: number;
}

const statusConfig: Record<GoalStatus, { icon: string; label: string; className: string }> = {
  not_started: {
    icon: "🎯",
    label: "Ei aloitettu",
    className: "status-pending",
  },
  in_progress: {
    icon: "🔥",
    label: "Käynnissä",
    className: "status-active",
  },
  completed: {
    icon: "✅",
    label: "Valmis",
    className: "status-done",
  },
};

export default function GoalCard({ goal, index }: GoalCardProps) {
  const status = statusConfig[goal.status];
  const delayClass = `animate-delay-${(index + 1) * 100}`;
  const progressWidth = goal.status === "completed" ? "100%" : goal.status === "in_progress" ? "50%" : "0%";

  return (
    <div className={`journal-card ${goal.color} animate-fade-up ${delayClass}`}>
      {/* Status Badge */}
      <div className={`journal-status ${status.className}`}>
        <span>{status.icon}</span>
        <span>{status.label}</span>
      </div>

      {/* Emoji */}
      <div className="journal-emoji">{goal.emoji}</div>

      {/* Title */}
      <h3 className="journal-title">{goal.title}</h3>

      {/* Description */}
      <p className="journal-description">{goal.description}</p>

      {/* Progress Bar */}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: progressWidth }} />
      </div>
    </div>
  );
}
