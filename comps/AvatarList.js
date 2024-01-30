import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const UserList = () => {
    const [userNames, setUserNames] = useState([]);

    useEffect(() => {
        fetch(/**********/)
          .then((response) => response.json())
          .then((data) => setUserNames(data))
          .catch((error) => console.error('Error fetching user names:', error));
      }, []); // The empty dependency array ensures that the effect runs only once on mount
      
      return (
        <Grid container spacing={2}>
          {userNames.map((user, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar sx={{ bgcolor: 'red', color: 'white' }}>{user.name.charAt(0)}</Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="h6">{user.name}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      );
    };
    
    export default UserList;


