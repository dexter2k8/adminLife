import { memo, useCallback, useEffect, useState } from "react";
import style from "./styles.module.scss";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "../Modal";
import { InputAdornment, TextField } from "@mui/material";

interface IFilterProps {
  title: string;
  items: IValueProps[];
}

interface IValueProps {
  id: number;
  value: string;
}

function Filter({ title, items }: IFilterProps) {
  const [open, setOpen] = useState<boolean>(false); // Abre/fecha o modal
  const [list, setList] = useState<string[]>([]); // Controla a lista de filtros ativos
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(items.length).fill(false)); // Controle dos checkboxes
  const [active, setactive] = useState<boolean[]>(new Array(items.length).fill(true)); // Filtra o modal de checkboxes

  // Reverte o estado dos checkboxes se as alterações não forem aplicadas
  useEffect(() => {
    const cancelCheckState = () => {
      if (!open) {
        const updatedState: boolean[] = items.map((el) => (list.includes(el.value) ? true : false));
        if (checkedState !== updatedState) setCheckedState(updatedState);
      }
    };
    cancelCheckState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleOpen = useCallback(() => setOpen(true), []); // Abrir o modal
  const handleClose = useCallback(() => setOpen(false), []); // Fechar o modal

  // Atualiza a variável checkedState, controlada pelos checkboxes
  const handleOnChange = useCallback(
    (position: number) => {
      const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
      setCheckedState(updatedCheckedState);
    },
    [checkedState]
  );
  // Aplica a classe active nos <li> para ocultar os checkboxes, conforme for filtrando no input
  const handleFilter = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const find = e.target.value;
      const filteredList = items.map((el) => el.value.toLowerCase().includes(find.toLowerCase()));
      setactive(filteredList);
    },
    [items]
  );

  // Preenche a lista de filtros
  const checkboxApply = useCallback(
    (state: boolean[]) => {
      const filterList = items.filter((el, i) => state[i]);
      setList(filterList.map((el) => el.value));
      setOpen(false);
    },
    [items]
  );

  // Remove individualmente cada filtro
  const handleRemoveFilter = useCallback(
    (e: React.MouseEvent) => {
      const itemName = e.currentTarget.parentElement?.firstChild?.textContent;
      const index = items.findIndex((el) => el.value === itemName);
      const updatedState = checkedState.map((el, i) => (index === i ? (el = false) : el));
      setCheckedState(updatedState);
      checkboxApply(updatedState);
    },
    [checkboxApply, checkedState, items]
  );

  // Remove todos os filtros
  const handleRemoveAll = useCallback(() => {
    const updatedState: boolean[] = new Array(items.length).fill(false);
    setCheckedState(updatedState);
    checkboxApply(updatedState);
    setOpen(false);
  }, [checkboxApply, items]);

  return (
    <>
      <fieldset className={style.content}>
        <legend>{title}</legend>
        <ul>
          {list.map((el, i) => (
            <li key={i}>
              <span>{el}</span>
              <CloseIcon fontSize="small" onClick={handleRemoveFilter} />
            </li>
          ))}
        </ul>
        <FilterListIcon onClick={handleOpen} />
      </fieldset>

      <Modal open={open} onClose={handleClose} title={`Filter ${title}`}>
        <div className={style.filterList}>
          <TextField
            label={`Search ${title}`}
            onChange={handleFilter}
            sx={{ mt: 2, mb: 2, width: "100%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <ul>
            {items.map((el, i) => {
              return (
                <li key={el.id} className={active[i] ? undefined : style.active}>
                  <input type="checkbox" checked={checkedState[i]} onChange={() => handleOnChange(i)} />
                  <span>{el.value}</span>
                </li>
              );
            })}
          </ul>
          <div className={style.modalButtons}>
            <button onClick={() => checkboxApply(checkedState)}>Apply</button>
            <span onClick={handleRemoveAll}>Clear</span>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default memo(Filter);
