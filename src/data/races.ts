import { Race } from '../types/race';

export const races: Race[] = [
  {
    name: "Australian Grand Prix",
    circuit: "Albert Park Circuit",
    date: new Date("2024-03-24T05:00:00Z"),
    location: "Melbourne",
    flagCode: "au"
  },
  {
    name: "Japanese Grand Prix",
    circuit: "Suzuka International Racing Course",
    date: new Date("2024-04-07T05:00:00Z"),
    location: "Suzuka",
    flagCode: "jp"
  },
  {
    name: "Chinese Grand Prix",
    circuit: "Shanghai International Circuit",
    date: new Date("2024-04-21T07:00:00Z"),
    location: "Shanghai",
    flagCode: "cn"
  },
  {
    name: "Miami Grand Prix",
    circuit: "Miami International Autodrome",
    date: new Date("2024-05-05T19:00:00Z"),
    location: "Miami",
    flagCode: "us"
  }
];