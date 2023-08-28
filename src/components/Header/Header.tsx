import plane from '../../assets/plane.png';
import s from './Header.module.scss';

function Header() {
    return (
        <div className={s.root}>
            <img src={plane} alt='plane'/>
            <span>Поиск авиабилетов</span>
        </div>
    )
}

export default Header;