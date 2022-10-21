import "./CardInputInfo.css";
import { useState } from "react";

export default function CardInputInfo(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isCardNumberValid, setIsCardNumberValid] = useState(true)
  const [isCardNumberEmpty, setIsCardNumberEmpty] = useState(false)
  const [isNameEmpty, setIsNameEmpty] = useState(false)
  const [isMonthEmpty, setIsMonthEmpty] = useState(false)
  const [isYearEmpty, setIsYearEmpty] = useState(false)
  const [isCvcEmpty, setIsCvcEmpty] = useState(false)

  function cardNumberChangeHandler(event) {
    setCardNumber(event.target.value);
    // console.log(event.target.value);
    console.log(props.cardInfo.cardNumber);
    const newCardInfo = {
      cardNumber: event.target.value,
      name: name,
      month: month,
      year: year,
      cvc: cvc,
    };
    props.cardInfo.cardNumber = event.target.value;
    props.onSetCardInfo(newCardInfo);
  }

  function nameChangeHandler(event) {
    setName(event.target.value);
    const newCardInfo = {
      cardNumber: cardNumber,
      name: event.target.value,
      month: month,
      year: year,
      cvc: cvc,
    };
    props.cardInfo.name = event.target.value;
    props.onSetCardInfo(newCardInfo);
  }

  function monthChangeHandler(event) {
    setMonth(event.target.value);
    const newCardInfo = {
      cardNumber: cardNumber,
      name: name,
      month: event.target.value,
      year: year,
      cvc: cvc,
    };
    props.cardInfo.month = event.target.value;
    props.onSetCardInfo(newCardInfo);
  }

  function yearChangeHandler(event) {
    setYear(event.target.value);
    const newCardInfo = {
      cardNumber: cardNumber,
      name: name,
      month: month,
      year: event.target.value,
      cvc: cvc,
    };
    props.cardInfo.year = event.target.value;
    props.onSetCardInfo(newCardInfo);
  }

  function cvcChangeHandler(event) {
    setCvc(event.target.value);
    const newCardInfo = {
      cardNumber: cardNumber,
      name: name,
      month: month,
      year: year,
      cvc: event.target.value,
    };
    props.cardInfo.cvc = event.target.value;
    props.onSetCardInfo(newCardInfo);
  }

  function clickedConfirm(event) {
    event.preventDefault()

    cardNumber === '' ? setIsCardNumberEmpty(true) : setIsCardNumberEmpty(false)
    name === '' ? setIsNameEmpty(true) : setIsNameEmpty(false)
    month === '' ? setIsMonthEmpty(true) : setIsMonthEmpty(false)
    year === '' ? setIsYearEmpty(true) : setIsYearEmpty(false)
    cvc === '' ? setIsCvcEmpty(true) : setIsCvcEmpty(false)

    if (/^[0-9]+$/.test(cardNumber)) {
        console.log('valid');
        setIsCardNumberValid(true)
    }
    else {
        setIsCardNumberValid(false)
    }
  }


  return (
    <form className="card-info__input">
      <label>CARDHOLDER NAME</label>
      <input
        value={name}
        onChange={nameChangeHandler}
        placeholder="e.g. Jane Appleseed"
      ></input>
      {isNameEmpty ? <p className="red-text">Can't be blank</p> : null}
      <label>CARD NUMBER</label>
      <input
        value={cardNumber}
        onChange={cardNumberChangeHandler}
        placeholder="e.g. 1234 5678 9123 0000"
      ></input>
      {isCardNumberEmpty ? <p className="red-text">Can't be blank</p> : null}
      {!isCardNumberValid ? <p className="red-text">Wrong format, numbers only</p> : null}
      <div className="exp-cvc__container">
        <div className="exp-date">
          <label>EXP. DATE (MM/YY)</label>
          <div className="exp-date-inputs__container">
            <input
              value={month}
              onChange={monthChangeHandler}
              placeholder="MM"
            ></input>
            <input
              value={year}
              onChange={yearChangeHandler}
              placeholder="YY"
            ></input>
          </div>
          {isYearEmpty || isMonthEmpty ? <p className="red-text">Can't be blank</p> : null}
        </div>
        <div className="cvc">
          <label>CVC</label>
          <input
            value={cvc}
            onChange={cvcChangeHandler}
            placeholder="e.g. 123"
          ></input>
          {isCvcEmpty ? <p className="red-text">Can't be blank</p> : null}
        </div>
      </div>
      <div className="confirm-btn__container">
        <button className="confirm__btn" onClick={clickedConfirm}>
          Confirm
        </button>
      </div>
    </form>
  );
}
