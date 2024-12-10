import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

export const getTimeRemaining = (raceDate: Date) => {
  const now = new Date();
  
  if (now >= raceDate) {
    return null;
  }

  const days = differenceInDays(raceDate, now);
  const hours = differenceInHours(raceDate, now) % 24;
  const minutes = differenceInMinutes(raceDate, now) % 60;
  const seconds = differenceInSeconds(raceDate, now) % 60;

  return { days, hours, minutes, seconds };
};