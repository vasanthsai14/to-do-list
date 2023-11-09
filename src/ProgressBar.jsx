
import "./index.css";

// eslint-disable-next-line react/prop-types
export function ProgressBar({ percentage }) {
  return (
    <div className="progress-bar">
      Progress: 
      <div className="progress">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
      {percentage}%
    </div>
  );
}