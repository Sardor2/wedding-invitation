import { FunctionComponent, useEffect, useState } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  const targetDate = new Date("2026-07-18T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = Date.now();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        window.clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  const formatValue = (value: number) => value.toString().padStart(2, "0");

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.wrapper}>
            <div className={styles.div}>{formatValue(timeLeft.days)}</div>
          </div>
          <div className={styles.messageInput}>
            <h3 className={styles.h}>H</h3>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.container}>
            <div className={styles.div1}>{formatValue(timeLeft.hours)}</div>
          </div>
          <div className={styles.dWrapper}>
            <h3 className={styles.d}>D</h3>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.frameParent1}>
          <div className={styles.frame}>
            <div className={styles.div2}>{formatValue(timeLeft.minutes)}</div>
          </div>
          <div className={styles.mWrapper}>
            <h3 className={styles.m}>M</h3>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.frameParent2}>
          <div className={styles.wrapper1}>
            <div className={styles.div3}>{formatValue(timeLeft.seconds)}</div>
          </div>
          <div className={styles.sWrapper}>
            <h3 className={styles.s}>S</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
