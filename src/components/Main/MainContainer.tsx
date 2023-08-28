import PlaneChangeCount from './PlaneChangeCount.tsx';
import AirlineCompanyFilter from "./AirlineCompanyFilter.tsx";
import s from './Main.module.scss';
import FlightOfferCard from "./FlightOfferCard.tsx";

function MainContainer() {
    return (
        <div className={s.root}>
            <div className={s.optionsMenu}>
                <PlaneChangeCount />
                <AirlineCompanyFilter />
            </div>
            <div>
                <FlightOfferCard />
            </div>
        </div>
    )
}

export default MainContainer;