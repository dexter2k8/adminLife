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
            background: "var(--sidebar-bg-color)",
            color: "var(--font-secondary-color)",
            fontSize: "inherit",
            fontWeight: "400",
            padding: "8px 16px",
          },
          "& .MuiTooltip-arrow": {
            color: "var(--sidebar-bg-color)",
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
}

export default memo(CustomTooltip);
