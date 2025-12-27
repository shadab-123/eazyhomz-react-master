import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckboxComponent = ({
  checked,
  classes,
  color,
  disabled,
  id,
  name,
  onChange,
  size,
  label,
  className,
  value,
}) => {

  return (
    <FormControlLabel
      className={className}
      control={
        <Checkbox
          checked={checked}
          classes={classes}
          color={color}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          size={size}
          value={value}
        />
      }
      label={label}
    />
  )
}

export default CheckboxComponent;