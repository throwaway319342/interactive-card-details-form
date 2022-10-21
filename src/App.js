import logo from "./logo.svg";
import "./App.css";
import CardInputInfo from "./components/CardInputInfo";
import CardDetailsFront from "./components/CardDetailsFront";
import CardDetailsBack from "./components/CardDetailsBack";
import { useState } from "react";

function App() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    name: '',
    month: '',
    year: '',
    cvc: ''
  });

  const [cardNumber, setCardNumber] = useState()

  return (
    <div className="App page__container">
      {cardNumber}
      <div className="left__column">
        {/* <img src='assets/images/bg-card-front.png'></img> */}
        <CardDetailsFront cardInfo={cardInfo}></CardDetailsFront>
        <CardDetailsBack cardInfo={cardInfo}></CardDetailsBack>
      </div>
      <div className="right__column">
        <CardInputInfo
          cardInfo={cardInfo}
          onSetCardInfo={setCardInfo}
          // onSetCardNumber={setCardNumber}
        ></CardInputInfo>
      </div>
    </div>
  );
}

export default App;
