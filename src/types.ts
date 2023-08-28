export interface TicketTime {
  startTime: any;
  endTime: any;
}

export interface Ticket {
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