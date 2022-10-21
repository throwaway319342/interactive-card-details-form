import './CardDetailsBack.css'
import { useState } from "react";

export default function CardDetailsBack(props) {

    return (
        <div className='card-back'>
            {props.cardInfo.cvc === '' ? (
                <p>000</p>
            ): <p>{props.cardInfo.cvc}</p>}
        </div>
    )
}