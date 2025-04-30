import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{box-sizing:border-box}
body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, select, table, td, textarea, th, ul {margin:0;padding:0}
body, button, input, select, table, textarea {font-size:14px;line-height:16px;color:#3B3B3B;font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, sans-serif}
h1, h2, h3, h4, h5, h6 {font-size:inherit;line-height:inherit}
textarea {-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:transparent;border:0;word-break:keep-all;word-wrap:break-word}
button, input {-webkit-border-radius:0;border-radius:0;border:0}
button {background-color:transparent}
fieldset, img {border:0}
img {vertical-align:top}
ol, ul {list-style:none}
address, em {font-style:normal}
a {display:flex;text-decoration:none;cursor:pointer;}
iframe {overflow:hidden;margin:0;border:0;padding:0;vertical-align:top}
mark {background-color:transparent}
i {font-style:normal}


#root {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
}

@font-face {
    font-family: "Pretendard";
    src: url("/fonts/PretendardVariable.woff2") format('woff2-variations');
	font-display: swap;
}




// 초기 html 설정
html {
	background-color: #ffffff;	
	display: flex;
	justify-content: center;
	align-items: center;
	-webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth;
	&::-webkit-scrollbar {
    display: none;
  } 
}

body {
	width: 100%;
	max-width: 390px;
	overflow-x: hidden;
	background-color: #ffffff;
}

`;

export default GlobalStyle;
