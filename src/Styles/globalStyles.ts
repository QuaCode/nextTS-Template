import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
margin: 0;
padding: 0;
border: 0;
box-sizing: border-box;
font-family: 'Fira Code', sans-serif;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

::-webkit-scrollbar {
    width: 10px;
    height: 4px;
    display: absolute;
}

::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-thumb:active {
    background-color: #999999;
  }
}

input[type="file" i] {
 width: 0.1px;
 height: 0.1px;
 opacity: 0;
 overflow: hidden;
 position: absolute;
 z-index: -1;
}


  body {
    margin: 0;
    padding: 0;
    background: #F8F8F8;
    font-family: 'Fira Code', sans-serif;
  }
`
