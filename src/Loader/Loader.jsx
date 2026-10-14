import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

import "./loader.scss";

export default function Loader() {
  const { progress, active } = useProgress();

  const [visible, setVisible] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    setDisplayProgress((previous) => Math.max(previous, progress));
  }, [progress]);

  useEffect(() => {
    if (!active && progress === 100) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [active, progress]);

  if (!visible) return null;

  return (
    <div className="loader">
      <div className="loader__content">
        <p className="loader__label">Loading experience</p>

        <p className="loader__percentage">
          {Math.round(displayProgress)}%
        </p>

        <div className="loader__track">
          <div
            className="loader__bar"
            style={{ width: `${displayProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}