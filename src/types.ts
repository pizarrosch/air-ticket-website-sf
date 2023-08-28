export type TicketTime = {
  startTime: any;
  endTime: any;
}

export type Ticket = {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: 'RUB';
  time: TicketTime;
  duration: number;
  date: string;
  connectionAmount: number | null;
  logo: string
}

// {
//   id: flight.id,
//     company: `${flight.legs[0].carriers.marketing[0].name}`,
//   from: `${flight.legs[0].origin.name}`,
//   to: `${flight.legs[0].destination.name}`,
//   price: Number(flight.price.raw),
//   currency: 'RUB',
//   date: flight.legs[0].departure,
//   connectionAmount: Number(flight.legs[0].stopCount),
//   duration: Number(flight.legs[0].durationInMinutes),
//   time: {
//   startTime: flight.legs[0].departure,
//     endTime: flight.legs[0].arrival
// },
//   logo: `${flight.legs[0].carriers.marketing[0].logoUrl}`
// })