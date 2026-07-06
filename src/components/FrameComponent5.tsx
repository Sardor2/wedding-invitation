import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.yaAllahTheMostLovingWrapper}>
          <b className={styles.yaAllahThe}>О Аллах, самый милостивый</b>
        </div>
        <div className={styles.withYourBlessing}>
          С твоим благословением ты привёл нас к священному союзу брака
        </div>
      </div>
      <div className={styles.theWeddingOfWrapper}>
        <h1 className={styles.theWeddingOf}>Приглашаем вас на нашу свадьбу</h1>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper1}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-73.svg"
              />
            </div>
            <h1 className={styles.asepPutri}>{`Шахбоза и Мохинур`}</h1>
            <div className={styles.frameWrapper2}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-74.svg"
              />
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameParent1}>
              <div className={styles.attendanceLotusWrapper}>
                <div className={styles.attendanceLotus} />
              </div>
              <div className={styles.sendNow}>
                <div className={styles.asepWrapper}>
                  <div className={styles.asep}>18.07.2026</div>
                </div>
              </div>
              <div className={styles.ellipseWrapper}>
                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.arrowWrapper}>
        <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent5;
