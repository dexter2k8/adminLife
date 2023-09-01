import styles from "./styles.module.scss";
import { Dispatch, SetStateAction, memo, useCallback, useContext } from "react";
import Tooltip from "./SidebarTooltip";
import { MenuContext } from "@/hook/menuContext";
// import { useRouter } from "next/navigation";

export interface IMenuProps {
  list: IItemProps[];
  activeItem: number;
  setActiveItem: Dispatch<SetStateAction<number>>;
}

export interface IItemProps {
  title: string;
  icon: string | React.ReactNode;
  activeRoute: string;
}

function MenuItems({ list, activeItem, setActiveItem }: IMenuProps) {
  // const router = useRouter();
  const { collapsed } = useContext(MenuContext);

  // router replaced with tag "a" (line 40) due to MirageJS conflict. next/link also doesn't work.
  const handleChange = useCallback(
    (el: IItemProps, i: number) => {
      setActiveItem(i);
      // router.replace(el.activeRoute);
    },
    [/* router, */ setActiveItem]
  );

  return (
    <ul className={styles.menuItems}>
      {list.map((el, i) => (
        <Tooltip title={el.title} disabled={!collapsed} key={i}>
          <li onClick={() => handleChange(el, i)}>
            <a className={activeItem === i ? styles.marker : undefined} href={el.activeRoute}>
              <figure>{el.icon}</figure>
              <span className={collapsed ? styles.show : undefined}>{el.title}</span>
            </a>
          </li>
        </Tooltip>
      ))}
    </ul>
  );
}

export default memo(MenuItems);
