import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#F5F5F5' }}>
      <Toolbar>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          style={{ color: '#333' }}
        >
          <Grid item>
            <Typography variant="h6">Logo</Typography>
          </Grid>
          <Grid item>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Link to="/">
                <Tab label="Home" />
              </Link>
              <Link to="/connection">
                <Tab label="Connection" />
              </Link>
              <Link to="/profile">
                <Tab label="Profile" />
              </Link>
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
