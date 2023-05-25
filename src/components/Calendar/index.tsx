import style from "./styles.module.css";
import { memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { addDays } from "date-fns";
import { formatDate } from "@/utils/lib";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { MenuContext } from "@/hook/menuContext";

export interface ISelectProps {
  title: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
}

// set the initial default date
export const defaultDate: Range = { startDate: addDays(new Date(), -360), endDate: new Date() };

// set default calendar value
const defaultRange: Range[] = [
  {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
];

const Calendar = () => {
  // calendar state
  const [range, setRange] = useState<Range[]>(defaultRange);
  const [open, setOpen] = useState<boolean>(false); // open/close calendar
  const refOne = useRef<HTMLDivElement>(null); // get the target element to toggle calendar
  const { activeDate, setActiveDate } = useContext(MenuContext); // set the active date
  const { selectedDate, setSelectedDate } = useContext(MenuContext); // set the selected date

  // selected date
  const selectDates = useMemo(
    (): ISelectProps[] => [
      { title: formatDate(selectedDate), startDate: selectedDate.startDate, endDate: selectedDate.endDate },
      { title: "7D", startDate: addDays(new Date(), -7), endDate: new Date() },
      { title: "30D", startDate: addDays(new Date(), -30), endDate: new Date() },
      { title: "3M", startDate: addDays(new Date(), -90), endDate: new Date() },
      { title: "6M", startDate: addDays(new Date(), -180), endDate: new Date() },
      { title: "12M", startDate: addDays(new Date(), -360), endDate: new Date() },
    ],
    [selectedDate]
  );

  // event listeners
  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // hide calendar on ESC press
  const hideOnEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  // Hide calendar on outside click
  const hideOnClickOutside = useCallback((e: MouseEvent) => {
    if (refOne.current && !refOne.current.contains(e.target as HTMLElement)) setOpen(false);
  }, []);

  // Change the state of the selected date in the list
  const handleList = useCallback(
    (i: number) => {
      if (i) {
        setActiveDate(i);
        setRange(defaultRange);
        setSelectedDate({ startDate: selectDates[i].startDate, endDate: selectDates[i].endDate });
      } else setOpen(true);
    },
    [selectDates, setActiveDate, setSelectedDate]
  );

  // Apply the custom date
  const handleCustom = useCallback(() => {
    setActiveDate(0);
    setOpen(false);
    setSelectedDate({ startDate: range[0].startDate, endDate: range[0].endDate });
  }, [range, setActiveDate, setSelectedDate]);

  return (
    <div className={style.container}>
      <ul>
        {selectDates.map((el, i) => (
          <li key={i} onClick={() => handleList(i)} className={activeDate === i ? style.active : undefined}>
            {el.title}
            {i === 0 && <DateRangeIcon />}
          </li>
        ))}
      </ul>

      {open && (
        <div className={style.calendarWrap} ref={refOne}>
          <DateRange
            onChange={(item: RangeKeyDict) => setRange([item.selection])}
            editableDateInputs={true}
            ranges={range} // define o range inicialmente selecionado
            minDate={addDays(new Date(), -3660)} // data mínima do select do calendario
            maxDate={new Date()} // data máxima do select do calendario
            // moveRangeOnFirstSelection={true} // move o range para a data inicial
            months={2} // quantidade de meses exibidos
            direction="horizontal" // direção dos meses exibidos
            // className="calendarElement"
            calendarFocus="backwards" // muda o mes que será exibido primeiro
            preventSnapRefocus // evita que o calendário mude o foco ao selecionar uma data
          />
          <div className={style.buttonContainer}>
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button onClick={handleCustom}>Accept</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Calendar);
