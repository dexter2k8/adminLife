import styles from "./styles.module.scss";
import { memo, useContext } from "react";

interface IHeaderProps {
  title: string;
  subtitle?: string;
}

function Header({ title, subtitle }: IHeaderProps) {
  return (
    <div className={styles.container}>
      <section>
        <div>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
        </div>
      </section>
    </div>
  );
}

export default memo(Header);
