import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
}));

export default function Drawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='open drawer'
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor='left'
        open={open}
        onOpen={() => {}}
        onClose={() => setOpen(false)}
      >
        <div className={classes.list}>
          <Box textAlign='center' p={2}>
            Components
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={() => router.push('/tutorial/container')}>
              <ListItemText primary='Container' />
            </ListItem>
            <ListItem button onClick={() => router.push('/tutorial/grid')}>
              <ListItemText primary='Grid' />
            </ListItem>
            <ListItem button onClick={() => router.push('/tutorial/box')}>
              <ListItemText primary='Box' />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                router.push('/tutorial/cards');
                setOpen(false);
              }}
            >
              <ListItemText primary='Cards' />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
