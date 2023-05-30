import style from "./styles.module.css";
import { Dispatch, SetStateAction, memo, useCallback, useContext } from "react";
import Tooltip from "./SidebarTooltip";
import { MenuContext } from "@/hook/menuContext";
import { useRouter } from "next/navigation";

interface IMenuProps {
  list: IItemProps[];
  activeItem: number;
  setActiveItem: Dispatch<SetStateAction<number>>;
}

export interface IItemProps {
  title: string;
  icon: any;
  activeRoute: string;
}

function MenuItems({ list, activeItem, setActiveItem }: IMenuProps) {
  const router = useRouter();
  const { collapsed } = useContext(MenuContext);

  const handleChange = useCallback(
    (el: IItemProps, i: number) => {
      setActiveItem(i);
      router.replace(el.activeRoute);
    },
    [, router, setActiveItem]
  );

  return (
    <ul className={style.menuItems}>
      {list.map((el, i) => (
        <Tooltip title={el.title} disabled={!collapsed} key={i}>
          <li className={activeItem === i ? style.marker : undefined} onClick={() => handleChange(el, i)}>
            <figure>{el.icon}</figure>
            <span className={collapsed ? style.show : undefined}>{el.title}</span>
          </li>
        </Tooltip>
      ))}
    </ul>
  );
}

export default memo(MenuItems);
