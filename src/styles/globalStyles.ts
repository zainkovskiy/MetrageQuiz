import { createGlobalStyle } from 'styled-components';
import CeraCY_TTF from '../assets/fonts/CeraCYRegular.ttf';
import CeraCY_WOFF from '../assets/fonts/CeraCYRegular.woff';
import CeraCY_WOFF2 from '../assets/fonts/CeraCYRegular.woff2';
import CeraCYBold_TTF from '../assets/fonts/CeraCYBold.ttf';
import CeraCYBold_WOFF from '../assets/fonts/CeraCYBold.woff';
import CeraCYBold_WOFF2 from '../assets/fonts/CeraCYBold.woff2';

export const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
  }
  @font-face {
    font-family: 'CeraCY';
    src: local('CeraCY'), local('CeraCY'),
    url(${CeraCY_TTF}) format('ttf'),
    url(${CeraCY_WOFF2}) format('woff2'),
    url(${CeraCY_WOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'CeraCYBold';
    src: local('CeraCYBold'), local('CeraCYBold'),
    url(${CeraCYBold_TTF}) format('ttf'),
    url(${CeraCYBold_WOFF}) format('woff2'),
    url(${CeraCYBold_WOFF2}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
  #root{
    font-family: 'CeraCY';
  }
`;
