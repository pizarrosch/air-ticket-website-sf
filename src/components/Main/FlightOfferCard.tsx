import s from './Main.module.scss';
import pobeda from '../../assets/pobeda.png';
import {useContext} from "react";
import {Context} from "../../App.tsx";
import {Ticket} from "../../types.ts";

function FlightOfferCard(ticket: Ticket[]) {

  ticket.map(flight => (
      <div className={s.flightOfferCard}>
        <div className={s.flightOfferCard_firstColumn}>
          <span className={s.price}>{flight.price}</span>
          <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
            <span>`${flight.from} - ${flight.to}`</span>
            <span className={s.flightTime}>{flight.time.startTime} - {flight.time.endTime}</span>
          </div>
        </div>
        <div className={s.flightOfferCard_secondColumn}>
          <span>В пути</span>
          <span className={s.flightTime}>{flight.duration}</span>
        </div>
        <div className={s.flightOfferCard_thirdColumn}>
          <img src={flight.logo} alt={flight.company}/>
          <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
            <span>Пересадки</span>
            <span className={s.flightTime}>
                      {flight.connectionAmount} {
              flight.connectionAmount === 1 ? 'пересадка' :
                flight.connectionAmount === 0 ? 'пересадок' : 'пересадки'}
                    </span>
          </div>
        </div>
      </div>
    )
  )

}

export default FlightOfferCard;