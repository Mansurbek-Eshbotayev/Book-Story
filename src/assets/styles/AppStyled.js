import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const ContainerStyle = styled.div`
width: 100%;
max-width: 1300px;
margin: 0 auto;
padding: 0 20px;
position: relative;
`

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Aclonica';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../fonts/aclonica-v18-latin-regular.woff2') format('woff2'), 
       url('../fonts/aclonica-v18-latin-regular.woff') format('woff'); 
}

html {
	height: 100%;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: inherit;
	scroll-behavior: smooth;
}


body {
	font-family:'Aclonica' , 'Arial', 'sans-serif';
	margin: 0;
	padding: 0;
	background-color: ${({theme}) => (theme === "false"? '#191919' : "#FFFFFF")};
}

.unActive{
text-decoration: none;
	font-weight: 400;
font-size: 16px;
line-height: 144.4%;
color: #0D0D0D;
margin-right: 42px;
opacity: 0.6;
}

.activ_header{
	text-decoration: none;
	font-weight: 400;
font-size: 16px;
line-height: 144.4%;
color: #0D0D0D;
margin-right: 42px;
	opacity: 1;
}

.unActive_dark{
	text-decoration: none;
	font-weight: 400;
font-size: 16px;
line-height: 144.4%;
margin-right: 42px;
color: #FFFFFF;
opacity: 0.6;
}

.activ_header_dark{
	text-decoration: none;
	font-weight: 400;
font-size: 16px;
line-height: 144.4%;
margin-right: 42px;
color: #FFFFFF;
opacity: 1;
}

.ganerDark{
	font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #C9AC8C;
text-decoration: none;
}

.unganerDark{
	font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: rgba(255, 255, 255, 0.6);
text-decoration: none;
}

.activ_ganer{
	font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #C9AC8C;
text-decoration: none;
}

.unactiv_ganer{
	font-weight: 400;
font-size: 18px;
line-height: 27px;
color: rgba(13, 13, 13, 0.6);
text-decoration: none;
}

.css-6hp17o-MuiList-root-MuiMenu-list {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
     padding-top: 0px !important; 
    padding-bottom: 0px !important; 
    outline: 0;
}

.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
	margin-top: 5px !important;
	width: 120px !important;
border-radius: 0 !important;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
}

img {
	vertical-align: middle;
}

hr{
	margin: 0;
}


`