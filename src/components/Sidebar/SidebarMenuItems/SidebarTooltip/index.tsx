import { ReactElement, ReactNode, memo } from "react";
import Tooltip from "@mui/material/Tooltip";

interface ICustomTooltipProps {
  title: string;
  children: ReactElement;
  disabled?: boolean;
}

function CustomTooltip({ title, children, disabled = false }: ICustomTooltipProps) {
  return (
    <Tooltip
      disableHoverListener={disabled}
      title={title}
      arrow
      placement="right"
      PopperProps={{
        sx: {
          "& .MuiTooltip-tooltip": {
            background: "var(--sidebar-bg)",
            fontSize: "inherit",
            fontWeight: "400",
            padding: ".5rem",
          },
          "& .MuiTooltip-arrow": {
            color: "var(--sidebar-bg)",
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
}

export default memo(CustomTooltip);
