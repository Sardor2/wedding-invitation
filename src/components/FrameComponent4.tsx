import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='footerBorderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.meetTheHappyCoupleWrapper}>
            <h2 className={styles.meetTheHappy}>Познакомьтесь с счастливой парой</h2>
          </div>
          <div className={styles.gloryBeTo}>
            Слава Аллаху, создавшему творения парами. О Аллах, прими и
            благослови нас
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-44@2x.png"
            />
            <div className={styles.frameWrapper1}>
              <div className={styles.asepIrawanLotusParent}>
                <div className={styles.asepIrawanLotus}>
                  <h1 className={styles.asepIrawan}>Шахбоз</h1>
                </div>
                <div className={styles.sonOfWrapper}>
                  <div className={styles.sonOf}>Сын</div>
                </div>
                <div className={styles.mrIlhamMrsFatimaWrapper}>
                  <div className={styles.mrIlham}>{`Набижона и Дилором`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.frameWrapper3}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-43@2x.png"
            />
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.asepIrawanLotusWrapper}>
              <div className={styles.asepIrawanLotus1}>
                <h1 className={styles.asepIrawan1}>Мохинур</h1>
              </div>
            </div>
            <div className={styles.daughterOfWrapper}>
              <div className={styles.daughterOf}>Дочь</div>
            </div>
            <div className={styles.mrIbrahim}>{`Шомурода и Шарофат`}</div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper5}>
        <div
          className={styles.buttonOrchidWrapper}
          onClick={onFrameContainerClick}
        >
          <button className={styles.buttonOrchid}>
            <div className={styles.buttonWrapper}>
              <b className={styles.button}>Наша история</b>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
