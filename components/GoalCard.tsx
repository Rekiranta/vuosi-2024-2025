export type GoalStatus = "not_started" | "in_progress" | "completed";
export type GoalColor = "coral" | "mint" | "sky" | "yellow";

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
    className: "status-not-started",
  },
  in_progress: {
    icon: "🔥",
    label: "Käynnissä",
    className: "status-in-progress",
  },
  completed: {
    icon: "✅",
    label: "Valmis",
    className: "status-completed",
  },
};

const colorClasses: Record<GoalColor, string> = {
  coral: "goal-card-coral",
  mint: "goal-card-mint",
  sky: "goal-card-sky",
  yellow: "goal-card-yellow",
};

export default function GoalCard({ goal, index }: GoalCardProps) {
  const status = statusConfig[goal.status];
  const delayClass = `animate-delay-${(index + 1) * 100}`;

  return (
    <div className={`goal-card ${colorClasses[goal.color]} animate-fade-up ${delayClass}`}>
      {/* Status Badge */}
      <div className={`goal-status ${status.className}`}>
        <span>{status.icon}</span>
        <span>{status.label}</span>
      </div>

      {/* Emoji */}
      <div className="goal-emoji">
        {goal.emoji}
      </div>

      {/* Content */}
      <h3 className="goal-title">{goal.title}</h3>
      <p className="goal-description">{goal.description}</p>

      {/* Progress Bar */}
      <div className="goal-progress">
        <div
          className="goal-progress-bar"
          style={{
            width: goal.status === "completed" ? "100%" : goal.status === "in_progress" ? "50%" : "0%"
          }}
        />
      </div>
    </div>
  );
}
