import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Wrapper } from "./styled/common.js";
import { numberWithCommas } from "./lib/utils";

const ACCESS_KEY = "c28af27c7c1beb4f431d254e64619b24";

const DEFAULT_COUNTRY = "미국";
const DEFAULT_COUNTRY_CODE = "USD";
const COUNTRY = ["한국", "일본", "필리핀"];
const CODES = {
  한국: "KRW",
  일본: "JPY",
  필리핀: "PHP",
};

const App = () => {
  const [country, setCountry] = useState("한국"); //수취국가
  const [remittance, setRemittance] = useState(); //송금액
  const [exchange, setExchange] = useState({}); //환율정보
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios
      .get(`http://api.currencylayer.com/live?access_key=${ACCESS_KEY}`)
      .then((res) => {
        const { data } = res;
        const { success } = data;
        if (success) {
          setExchange(data);
        } else {
          alert("환율정보 호출에 실패하였습니다. 새로고침 후 이용해주세요.");
        }
      });
  }, []);

  const onChangeCountry = ({ target }) => {
    const { value } = target;
    setCountry(value);
    setFlag(false);
  };
  const onChangeRemittance = ({ target }) => {
    const { value } = target;
    setRemittance(value);
    setFlag(false);
  };

  const onKeyPress = ({key}) => {
    if (key === "Enter") {
      setFlag(true);
    }
  }

  const { quotes = {} } = exchange;
  const rate = quotes[`${DEFAULT_COUNTRY_CODE}${CODES[country]}`];

  return (
    <Wrapper className="App">
      <div className="title">환율 계산</div>
      <div className="sub">
        {`송금국가: ${DEFAULT_COUNTRY}(${DEFAULT_COUNTRY_CODE})`}
      </div>
      <div className="sub">
        {`수취국가: `}
        <select onChange={onChangeCountry}>
          {COUNTRY.map((d, index) => (
            <option key={index} value={d}>{`${d}(${CODES[d]})`}</option>
          ))}
        </select>
      </div>
      <div className="sub">
        {`환율: ${numberWithCommas(Math.round(rate * 100) / 100)} ${
          CODES[country]
        }/${DEFAULT_COUNTRY_CODE}`}
      </div>
      <div className="sub">
        {`송금액: `}
        <input type="number" value={remittance === undefined ? "" : remittance} onChange={onChangeRemittance} onKeyPress={onKeyPress} />
        {` ${DEFAULT_COUNTRY_CODE}`}
      </div>
      <div className="button-area">
        <button onClick={() => setFlag(true)}>Submit</button>
      </div>

      {flag ? (
        <div className="answer-area">
          {`수취금액은 ${numberWithCommas(
            ((Math.round(rate * 100) / 100) * (remittance === undefined ? 0 : remittance)).toFixed(2)
          )} ${CODES[country]} 입니다.`}
        </div>
      ) : null}
    </Wrapper>
  );
};

export default App;
