import FormControl from '@mui/material/FormControl';
import {TextField} from '@mui/material';

const InputComponent = ({
  color,
  classes,
  value,
  label,
  onChange,
  type,
  disabled,
  size,
  variant,
  placeholder,
  name,
  error,
  helperText,
  fullWidth,
  className,
  onClick,
  rows,
  multiline,
  required
}) =>{

  return (
    <FormControl fullWidth={fullWidth} className={className} >
      <TextField
        id={`outlined-input-${placeholder}`}
        name={name}
        color={color}
        classes={classes}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
        label={label}
        size={size}
        variant={variant}
        helperText={helperText}
        error={error}
        fullWidth={fullWidth}
        placeholder={placeholder}
        onClick={onClick}
        rows={rows}
        multiline={multiline}
        required={required}
        InputProps={{
          sx: {
            '&::placeholder': {
              fontSize: '0.8rem', // Adjust this value as needed
            },
          },
        }}
      />
    </FormControl>
  );
}

export default InputComponent;