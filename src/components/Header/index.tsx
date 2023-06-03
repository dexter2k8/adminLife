import styles from "./styles.module.scss";
import { memo } from "react";

interface IHeaderProps {
  title: string;
  subtitle?: React.ReactNode | string;
}

function Header({ title, subtitle }: IHeaderProps) {
  return (
    <div className={styles.container}>
      <section>
        <div>
          <h2>{title}</h2>
          <div>{subtitle}</div>
        </div>
      </section>
    </div>
  );
}

export default memo(Header);
