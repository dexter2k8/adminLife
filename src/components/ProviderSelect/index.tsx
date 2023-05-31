import style from "./styles.module.scss";
import { memo, useCallback, useMemo, useState } from "react";
import Modal from "../Modal";
import { providers } from "@/mock/selectProvider";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import LaunchIcon from "@mui/icons-material/Launch";
import Image from "next/image";

interface IProvider {
  label: string;
  value: string;
  image: string;
}

function SelectProvider() {
  const [search, setSearch] = useState<string>(""); // providers input search
  const [providerSelected, setProviderSelected] = useState<IProvider>(providers[3]); //selected provider
  const [open, setOpen] = useState<boolean>(false); // Open/close modal

  const handleOpen = useCallback(() => setOpen(true), []); // Abrir o modal
  const handleClose = useCallback(() => setOpen(false), []); // Fechar o modal
  const handleChangeProvider = useCallback((provider: IProvider) => {
    setProviderSelected(provider);
    setOpen(false);
  }, []);

  // Filtra a lista de providers
  const filteredList = useMemo(
    () => providers.filter((el) => el.label.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  return (
    <div className={style.container}>
      <div className={style.menu} onClick={handleOpen}>
        <figure>
          <Image src={providerSelected.image} alt={providerSelected.label} width={24} height={24} />
          <span>{providerSelected.label}</span>
        </figure>
        <LaunchIcon />
      </div>

      <Modal open={open} onClose={handleClose} title={"Providers"}>
        <div className={style.providers}>
          <TextField
            label="Search providers"
            onChange={(e) => setSearch(e.target.value)} // Altera o filtro de pesquisa conforme digita
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
            {filteredList.map((el, i) => (
              <li
                key={i}
                className={providerSelected.value === el.value ? style.active : ""}
                onClick={() => handleChangeProvider(el)}
              >
                <figure>
                  <Image src={el.image} alt={el.label} width={24} height={24} />
                  {el.label}
                </figure>
                {providerSelected.value === el.value && <CheckIcon />}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default memo(SelectProvider);
