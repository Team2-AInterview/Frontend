import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('/fonts/NotoSansKR-VariableFont_wght.ttf') format('truetype');
    font-style: normal;
  }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR';
    }

    li {
    list-style: none;
    }

    a {
    text-decoration: none;
    }

    button {
    cursor: pointer;        
    }


body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0; // 연한 회색 배경
    margin:0;
    font-family: 'Noto Sans KR'
  }

  .app-container {
    width: 100%;
    min-height: 100vh;
    max-width: 391px;
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: auto;
    

   // 데스크탑 화면
  @media (min-width: 391px) {

      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }

  // 모바일 화면
  @media (max-width: 390px) {
      max-width: 100%;
      box-shadow: none; 
  }

}
`;
export default GlobalStyle;