import s from './Main.module.scss';
import check from '../../assets/check.svg';
import {useContext} from "react";
import {Context} from "../../App.tsx";

function PlaneChangeCount() {
    const {isChecked, onClick, changeOptions} = useContext(Context);

    return (
        <div className={s.menuCard}>
            <span className={s.title}>Количество пересадок</span>
                <div className={s.flightOptionsContainer}>
                    {
                        changeOptions.map(option => {
                            return (
                                <div className={s.checkboxContainer} key={option.id} data-id={option.id} onClick={onClick}>
                                    <div className={s.checkbox} data-id={option.id} onClick={onClick}>
                                        <img src={check} className={option.isChecked ? s.check : s.hide} data-id={option.id}/>
                                    </div>
                                    <span data-id={option.id} onClick={onClick}>{option.title}</span>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default PlaneChangeCount;