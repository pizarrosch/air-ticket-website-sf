import s from "./Main.module.scss";
import check from "../../assets/check.png";
import {useContext} from "react";
import {Context} from "../../App.tsx";

function AirlineCompanyFilter() {

    const {airlines} = useContext(Context);

    return (
        <div className={s.menuCard}>
            <span className={s.title}>Компании</span>
            <div className={s.flightOptionsContainer}>
                {
                    airlines.map(option => {
                        return (
                            <div className={s.checkboxContainer} key={option.id} data-id={option.id}>
                                <input type='radio' className={s.radioInput}/>
                                <span data-id={option.id} >{option.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AirlineCompanyFilter;