import Button from "@mui/material/Button";

const ButtonComponent = ({
  size,
  variant,
  color,
  disabled,
  onClick,
  fullWidth,
  href,
  classes,
  text,
  type,
  Icon,
  className,
}) => {

  return (
    <Button
      size={size}
      variant={variant}
      color={color}
      disabled={disabled}
      disableElevation={true}
      onClick={onClick}
      fullWidth={fullWidth}
      href={href}
      classes={classes}
      type={type}
      endIcon={Icon}
      className={className}
    >
      {text}
    </Button>
  )
}

export default ButtonComponent