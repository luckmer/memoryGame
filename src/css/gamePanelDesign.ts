import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Container = styled.section`
  max-width: 700px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  max-width: 150px;
  max-height: 150px;
  height: 15.416238437821171vh;
  width: 11.355034065102195vw;
  padding: 5px;
  border-radius: 2px;
  background: #000;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  flex: 21%;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: 0.6s cubic-bezier(0.38, 0.02, 0.09, 1.66) all;
`;

export const Display = styled.div<{ Open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: #a6acac;
  transform: rotateY(
    ${({ Open }: { Open: boolean }) => (Open ? "0deg" : "180deg")}
  );
  backface-visibility: hidden;
  transition: 0.3s ease all;
  img {
    backdrop-filter: brightness(120%);
    height: 100%;
    width: 100%;
    image-rendering: auto;
    image-rendering: crisp-edges;
    image-rendering: initial;
  }
`;

export const Back = styled.div<{ Open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  background: #3b4949;
  color: #d6aeb5;
  box-shadow: 8px 8px 8px -4px #c8ccd4;
  transform: rotateY(
    ${({ Open }: { Open: boolean }) => (Open ? "180deg" : "0deg")}
  );
  font-size: 100px;
  transition: 0.3s ease all;
`;

export const GameOverContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Spacer = styled.div`
  padding: 20px;
`;

export const OverMoves = styled.div`
  background-color: #a39f8c;

  padding: 20px;
  border-radius: 3px;
  color: #ffff;
`;

export const OverButton = styled.button`
  background-color: #a39f8c;
  color: #ffff;
  border: 0;
  padding: 1vh 2vw 1vh 2vw;
  border-radius: 3px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #a39f8f;
  }
`;

export const Game = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Header = styled.header`
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  color: #a39f8f;
  width: 80%;
  font-size: 30px;
  text-align: left;
`;
