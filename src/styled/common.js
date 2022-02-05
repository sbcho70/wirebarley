import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: #fff;
  border: 10px solid #f6f8fa;
  border-radius: 10px;
  padding-bottom: 15px;

  div {
    widht: 100%;
    text-align: left;
    padding-left: 20px;
  }

  .title {
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 40px;;
  }

  .sub {
    font-size: 25px;
    padding-bottom: 10px;

    input[type="number"] {
      width: 150px;
      border: 1px solid #999999;
      height: 25px;
      padding-left: 5px;
    }

    select {
      width: 120px;
      height: 25px;
    }
  }

  .button-area {
    button {
      margin-left: 15px;
      width: 150px;
      height: 50px;
      background-color: #E7E7E7;
      border: 3px solid #AFAFAF;
      font-size: 20px;
      font-weight: bold;
    }

    button:hover {
      color: rgba(255, 255, 255, 0.85);
      background-color: #C5C5C5;
    }
  }

  .answer-area {
    padding-top: 30px;
    font-size: 20px;
  }
`;
