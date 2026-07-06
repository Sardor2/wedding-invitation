import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.wrapperEllipse5Parent}>
          <div className={styles.wrapperEllipse5}>
            <img
              className={styles.wrapperEllipse5Child}
              alt=""
              src="/ellipse-5.svg"
            />
          </div>
          <div className={styles.asepMarkerWrapper}>
            <div className={styles.asepMarker}>
              <img
                className={styles.asepMarkerChild}
                loading="lazy"
                alt=""
                src="/vector-31.svg"
              />
              <img
                className={styles.asepMarkerItem}
                loading="lazy"
                alt=""
                src="/vector-41.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameGroup}>
          <div className={styles.asepWrapper}>
            <h1 className={styles.asep}>Шахбоз</h1>
          </div>
          <div className={styles.asepDivider}>
            <h1 className={styles.putri}>Мохинур</h1>
          </div>
        </div>
      </div>
      <div className={styles.borderFooter}>
        <img
          className={styles.borderFooterIcon}
          loading="lazy"
          alt=""
          src="/frame-367@2x.png"
        />
        <img
          className={styles.borderFooterIcon1}
          loading="lazy"
          alt=""
          src="/vector-20.svg"
        />
        <img className={styles.borderFooterIcon2} alt="" src="/vector-21.svg" />
        <img
          className={styles.borderFooterChild}
          loading="lazy"
          alt=""
          src="/frame-46@2x.png"
        />
        <img
          className={styles.borderFooterIcon3}
          loading="lazy"
          alt=""
          src="/vector-22.svg"
        />
        <img className={styles.borderFooterIcon4} alt="" src="/vector-23.svg" />
        <img
          className={styles.borderFooterIcon5}
          loading="lazy"
          alt=""
          src="/frame-365@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
