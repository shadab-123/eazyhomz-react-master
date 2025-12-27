import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const IconButtonComponent = ({
  onClick,
  tootlipTitle,
  tooltipPlacement,
  children,
  withTooltip,
  disabled,
}) => {
  return (
    <>
      {
        withTooltip ?
          <Tooltip
            title={<span className="font-small" >{tootlipTitle}</span>}
            placement={tooltipPlacement}
            arrow={true}
          >
            <IconButton
              onClick={onClick}
              disabled={disabled}
            >
              {children}
            </IconButton>
          </Tooltip> :
          <IconButton
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </IconButton>
      }
    </>
  )
}

export default IconButtonComponent;