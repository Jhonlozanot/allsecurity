import React, { forwardRef, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = (theme) => ({
  root: {
    marginTop: 1,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" align="center">
        {children}
      </Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(() => ({
  root: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    textAlign: "justify",
    fontSize: "16px",
  },
}))(MuiDialogContent);

const DialogServicio = (props) => {
  const { onClose, open, data, lista } = props;

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
    >
      <DialogTitle id="simple-dialog-title">{data.title}</DialogTitle>
      <DialogContent>
        <img src={data.image} alt="" width="100%" />
        <p>{data.complete}</p>
        <h4>{data.subtitle}</h4>
        <ul>
          {lista.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default DialogServicio;
