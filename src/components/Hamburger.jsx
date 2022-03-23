import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'

export default function Hamburger() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 150 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       
          <ListItem button >
                        
            <div 
            style={{
              display:"flex", 
              justifyContent: "center", 
              backgroundColor:"#E9F3F4", 
              flexDirection:'column',
              margin:10,
              alignItems:'center'
            }}>
                <Button style={{margin:10}}  component={Link} to='/' variant='contained' color='primary' ><HomeIcon/></Button>
                <Button style={{margin:10}} component={Link} to='/contact' variant='contained' color='primary' ><MessageIcon/></Button>
                <Button style={{margin:10}} component={Link} to='/cv' variant='contained' color='primary' ><AccountBoxIcon/></Button>
            </div>        
            <ListItemText  />
          </ListItem>
      
      </List>
    </Box>
  );

  return (
    <div>
      {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}