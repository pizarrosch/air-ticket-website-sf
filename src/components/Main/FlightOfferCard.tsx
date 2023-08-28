import s from './Main.module.scss';
import pobeda from '../../assets/pobeda.png';

function FlightOfferCard() {
    return (
        <div className={s.flightOfferCard}>
            <div className={s.flightOfferCard_firstColumn}>
                <span className={s.price}>12680 P</span>
                <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    <span>SVO - LED</span>
                    <span className={s.flightTime}>12:00 - 16:30</span>
                </div>
            </div>
            <div className={s.flightOfferCard_secondColumn}>
                <span>В пути</span>
                <span className={s.flightTime}>4 ч 30 мин</span>
            </div>
            <div className={s.flightOfferCard_thirdColumn}>
                <img src={pobeda} alt='pobeda-airlines-logo'/>
                <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    <span>Пересадки</span>
                    <span className={s.flightTime}>1 пересадка</span>
                </div>
            </div>
        </div>
    )
}

export default FlightOfferCard;