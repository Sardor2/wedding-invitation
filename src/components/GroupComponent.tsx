import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.wrapperGroup12Parent, className].join(" ")}>
      <div className={styles.wrapperGroup12}>
        <img
          className={styles.wrapperGroup12Child}
          alt=""
          src="/group-12@2x.png"
        />
      </div>
      <div className={styles.frameChild} />
      <FrameComponent2
        weddingRing="/weddingring.svg"
        weddingCeremony="Регистрация брака"
        putri="/putri.svg"
        prop="26.06.2026 в 12:00"
        rafflesHotel="Qatartol ko'chasi 8a"
        jlTerusanJakartaNo53Cicah="100113, Toshkent, Toshkent, Узбекистан"
      />
    </div>
  );
};

export default GroupComponent;
