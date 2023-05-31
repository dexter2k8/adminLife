import style from "./styles.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { memo, useCallback, useEffect, useRef } from "react";

interface IModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ open, onClose, title, children }: IModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // quando clicar na div container, ou seja, fora do modal, este fechará
  // useCallback memoriza a função para não renderizá-la a cada clique
  const backdropClick = useCallback(
    (e: MouseEvent) => {
      if (e.target === modalRef.current) onClose();
    },
    [onClose]
  );
  //captura os clicks e chama a função backdropClick
  useEffect(() => window.addEventListener("click", backdropClick), [backdropClick]);

  return (
    // armazena a div container no modalRef
    <div ref={modalRef} className={`${style.container} ` + `${open ? "" : style.close}`}>
      <div className={style.body}>
        <header>
          <h2>{title}</h2>
          <CloseIcon onClick={onClose} />
        </header>
        {children}
      </div>
    </div>
  );
}

export default memo(Modal);
