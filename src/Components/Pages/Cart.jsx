import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import { Add, PauseCircleOutline, ArrowCircleRightOutlined, DeleteOutline } from '@mui/icons-material'

import Box from '@mui/material/Box';

function Cart() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const current = new Date();
  const date = new Date().toLocaleString();

  return (
    <div>

      <Box className="flex  items-center justify-center rounded-xl" sx={{ width: 500, height: 250, backgroundColor: 'white', }}>
        <Box className="rounded-xl" sx={{ width: 450, height: 200, backgroundColor: '#e0e0e0', }}>
          <div className="flex flex-row items-start justify-between px-3 py-2 gap-30 ">
            <p>subtotal</p>
            <strong>$200.00</strong>
          </div>
          <div className="flex flex-row items-start justify-between px-3 py-2 gap-30 ">
            <p>Tax</p>
            <strong>$45.00</strong>
          </div>
          <div className="flex flex-row items-start justify-between px-3 py-2 gap-30 ">
            <strong>Payable Amount</strong>
            <strong>$195.00</strong>
          </div>
          <div className="flex flex-row items-end justify-center  py-2 pb-5 gap-4 rounded-xl">
            <Button className="flex items-center flex-row justify-center py-3 px-12" variant="contained" type="submit" onClick={handleClickOpen} style={{ backgroundColor: "orange", padding: "10" }} startIcon={<PauseCircleOutline />} >
              Hold Cart </Button>
            <Button className="flex items-center flex-row justify-center py-3 px-12" variant="contained" type="submit" onClick={handleClickOpen} style={{ backgroundColor: "green", padding: "10" }} startIcon={<ArrowCircleRightOutlined />} >
              Proceed </Button>
          </div>
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Vincent Lobo : T-34"}
          <p><small>{date}</small></p>
        </DialogTitle>

        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="warning" icon={false}>
            <AlertTitle color='orange'>Note</AlertTitle>
            Waiting for friends.
          </Alert>
        </Stack>

        <div className="flex flex-row items-start justify-between px-3 py-2 gap-30 ">
          <strong>Schezwan Egg Noodles</strong>
          <strong>1</strong>
        </div>
        <div className="flex flex-row items-start justify-between px-3 py-2 gap-30 ">
          <strong>Spicy Shrimp Soup </strong>
          <strong>1</strong>
        </div>
        <div className="flex flex-row items-start justify-between px-3 py-2 gap-30 ">
          <strong>Frid Basils </strong>
          <strong>3</strong>
        </div>
        <div className="flex flex-row items-start justify-between px-3 py-2 gap-30 ">
          <strong>Thai Style Friend Noodles </strong>
          <strong>1</strong>
        </div>

        <DialogActions>
          <Button className="flex items-center flex-row justify-center py-3 px-12" variant="contained" type="submit" onClick={handleClose} style={{ backgroundColor: "green", padding: "10" }} startIcon={<ArrowCircleRightOutlined />} >
            Resume </Button>
          <Button className="flex items-center flex-row justify-center py-3 px-12" variant="outlined" type="submit" onClick={handleClose} color="warning" style={{ color: "orange", padding: "10" }} startIcon={< DeleteOutline />} >
            Remove </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default Cart