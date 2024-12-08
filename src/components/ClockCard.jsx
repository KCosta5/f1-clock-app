import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

function ClockCard() {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <Card variant='outlined' sx={{ 
    color: 'red',
    alignItems: 'center',
    width: '100%'
    
    }}>
      <CardContent>
        <Typography variant="h5" component="div" sx = {{textAlign: 'center'}}>
          Local Time
        </Typography>
        <Typography variant="h5" sx={{ textAlign: 'center' }} color="red">
          {formattedTime}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ClockCard;