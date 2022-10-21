import './CardDetailsFront.css'
import { useEffect, useState } from "react";

export default function CardDetailsFront(props) {

    return (
        <div className='card-details-front__container'>
            <div className='card-front'>
                <div className="card-logo">
                    <img src='assets/images/card-logo.svg' height="50" width="90"></img>
                </div>
                <div className='card-number'>
                    {props.cardInfo.cardNumber === '' ? (
                        <p>0000 0000 0000 0000</p>
                    ): <p>{props.cardInfo.cardNumber}</p>}
                </div>
                <div className='card-bottom'>
                    <div>
                        {props.cardInfo.name === '' ? (
                            <p>Jane Appleseed</p>
                        ): <p>{props.cardInfo.name}</p>}
                    </div>
                    <div>
                        {props.cardInfo.month === '' && props.cardInfo.year === '' ? (
                            <p>00/00</p>
                        ): <p>{props.cardInfo.month}/{props.cardInfo.year}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}