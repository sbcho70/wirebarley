import "./App.css";
import { Wrapper } from "./styled/common.js";

const COUNTRY = ["한국", "일본", "필리핀"];
const CODES = {
  한국: "KRW",
  일본: "JPY",
  필리핀: "PHP",
};

const App = () => {
  return (
    <Wrapper className="App">
      <div className="title">환율 계산</div>
      <div className="sub">송금국가: 미국(USD)</div>
      <div className="sub">
        수취국가:{" "}
        <select>
          {COUNTRY.map((country) => (
            <option>{`${country}(${CODES[country]})`}</option>
          ))}
        </select>
      </div>
      <div className="sub">환율: 1,119.93 KRW/USD</div>
      <div className="sub">
        송금액: <input type="number"></input> USD
      </div>
    </Wrapper>
  );
};

export default App;
