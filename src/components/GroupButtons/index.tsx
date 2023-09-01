import { ISelectProps } from "@/interfaces";
import style from "./styles.module.css";
import { Dispatch, SetStateAction, memo, useCallback } from "react";

interface IGroupButtonProps {
  activeItem: number;
  setActiveItem: Dispatch<SetStateAction<number>>;
  selectItems: ISelectProps[];
}

function GroupButtons({ activeItem, setActiveItem, selectItems }: IGroupButtonProps) {
  return (
    <div className={style.container}>
      <ul>
        {selectItems.map((el, i) => (
          <li
            key={i}
            onClick={() => setActiveItem(i)}
            className={activeItem === i ? style.active : undefined}
          >
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(GroupButtons);
