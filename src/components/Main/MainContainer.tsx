import PlaneChangeCount from './PlaneChangeCount.tsx';
import AirlineCompanyFilter from "./AirlineCompanyFilter.tsx";
import s from './Main.module.scss';
import FlightOfferCard from "./FlightOfferCard.tsx";
import {Ticket} from "../../types.ts";

function MainContainer(flightTicket: Ticket[]) {
    return (
        <div className={s.root}>
            <div className={s.optionsMenu}>
                <PlaneChangeCount />
                <AirlineCompanyFilter />
            </div>
            <div>
                <FlightOfferCard ticket={flightTicket}/>
            </div>
        </div>
    )
}

export default MainContainer;