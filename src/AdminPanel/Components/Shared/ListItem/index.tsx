import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { StyledNavlink } from 'Views/Shop/styles';
import { AppLinks } from 'AdminPanel/Routes/AppLinks';

export const mainListItems = (
  <React.Fragment>
   <StyledNavlink to={AppLinks.base}>
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
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>
</StyledNavlink>
   


<StyledNavlink to={AppLinks.categoryAndBrand}>
<ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Category And Brand" />
    </ListItemButton>
</StyledNavlink>


    <StyledNavlink to={AppLinks.users}>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    </StyledNavlink>

  </React.Fragment>
);

