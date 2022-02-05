import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: #fff;
  border: 10px solid #aaaaaa;
  border-radius: 10px;

  div {
    widht: 100%;
    text-align: left;
  }

  .title {
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 50px;
  }

  .sub {
    font-size: 25px;
    padding-bottom: 10px;

    input[type="number"] {
      width: 150px;
      border: 1px solid #999999;
      height: 25px;
    }
  }
`;
