import { forwardRef, useState, ReactElement, Ref } from 'react';

// material-ui
import List from '@mui/material/List';
import Slide from '@mui/material/Slide';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import { TransitionProps } from '@mui/material/transitions';

// project-imports
import IconButton from 'components/@extended/IconButton';

// assets
import { Add } from 'iconsax-react';

import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';

const Transition = forwardRef((props: TransitionProps & { children: ReactElement }, ref: Ref<unknown>) => (
  <Slide direction="up" ref={ref} {...props} />
));

// ==============================|| DIALOG - FULL SCREEN ||============================== //

export default function FullScreenDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', boxShadow: 'none' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <Add style={{ transform: 'rotate(45deg)' }} />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
              Set Backup Account
            </Typography>
            <Button color="primary" variant="contained" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List sx={{ p: 3 }}>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar src={avatar1} />
            </ListItemAvatar>
            <ListItemText primary="Phone ringtone" secondary="Default" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemAvatar>
              <Avatar src={avatar2} />
            </ListItemAvatar>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItemButton>
        </List>
      </Dialog>
    </>
  );
}
