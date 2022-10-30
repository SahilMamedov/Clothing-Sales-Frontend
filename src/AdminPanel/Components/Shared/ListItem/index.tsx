import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import CategoryIcon from '@mui/icons-material/Category';
import { StyledNavlink } from 'Views/Category/styles';
import { AppLinks } from 'AdminPanel/Routes/AppLinks';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export const mainListItems = (
  <React.Fragment>
   <StyledNavlink to={AppLinks.dashboard}>
   <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
   
   </StyledNavlink>
    
    
<StyledNavlink to={AppLinks.orders}>
<ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
</StyledNavlink>
   
<StyledNavlink to={AppLinks.product}>
<ListItemButton>
      <ListItemIcon>
      <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>
</StyledNavlink>
   


<StyledNavlink to={AppLinks.categoryAndBrand}>
<ListItemButton>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Category And Brand" />
    </ListItemButton>
</StyledNavlink>


    <StyledNavlink to={AppLinks.users}>
    <ListItemButton>
      <ListItemIcon>
      <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    </StyledNavlink>

    <StyledNavlink to={AppLinks.login}>
    <ListItemButton>
      <ListItemIcon>
      <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Exit" />
    </ListItemButton>
    </StyledNavlink>

  </React.Fragment>
);

