import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';

import IconButton from '../IconButton';
import Button from '../Button';

const Transition = React.forwardRef(function Transition(
  props,
  ref,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialogTitle = ({
  children,
  onClose,
  other,
}) => {

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        paddingLeft: '2.3rem',
        paddingRight: '2.3rem',
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        color: '#005AB3',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        button: {
          svg: {
            color: '#005AB3',
          }
        }
      }}
      {...other}
    >
      {children}
      {
        onClose ? (
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null
      }
    </DialogTitle >
  )
}

const DialogModal = ({
  open,
  onClose,
  children,
  actions,
  title,
  width,
  fullScreen
}) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      maxWidth={width}
      fullWidth
      fullScreen={fullScreen}
    // style={{ zIndex: 100000 }} 
    >
      {
        // title &&
        <CustomDialogTitle onClose={onClose} >
          {title}
        </CustomDialogTitle>
      }

      <DialogContent dividers >
        {children}
      </DialogContent>

      {
        actions &&
        <DialogActions>
          {
            actions.map((action, index) => (
              <Button
                key={`action-${index}`}
                variant="text"
                color="primary"
                onClick={action.onClick}
                text={action.text}
                size="medium"
              />
            ))
          }
        </DialogActions>
      }
    </Dialog>
  )
}

export default DialogModal;