import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function F1NextRaceCard() {
  const [nextRace, setNextRace] = React.useState(null);

React.useEffect(() => {
    const fetchNextRace = async () => {
      try {
        const response = await fetch('https://api.jolpi.ca/ergast/f1/current/next.json');
        const data = await response.json();
        setNextRace(data.MRData.RaceTable.Races[0]);
      } catch (error) {
        console.error('Error fetching next F1 race:', error);
      }
    };
    
    fetchNextRace();
  }, []);

  if (!nextRace) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Loading next F1 race...
          </Typography>
        </CardContent>
      </Card>
    );
  }
  
  const { raceName, date, time } = nextRace;
  const raceDate = new Date(`${date}T${time}`);

  const now = new Date();
  const timeRemaining = raceDate - now;

  let timeRemainingString = '';

  if (timeRemaining < 0) {
    timeRemainingString = 'Race is happening now!';
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    timeRemainingString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }
  
  return (
    <Card variant="outlined" sx={{
      width: '100%'
    }} >
      <CardContent>
        <Typography variant="h5" component="div" sx = {{color: 'red',
          textAlign: 'center'
        }}>
          Next F1 Race
        </Typography>
        <Typography variant="body1" sx = {{
        color: 'red',
        textAlign: 'center'
        }}>
          Time Remaining: {timeRemainingString}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default F1NextRaceCard;