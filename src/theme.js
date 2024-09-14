import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

body{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    }
`

export const Theme = {
    colors: {
        green: '#BDF321',
        darkGray: '#2A2A2A',
        lightWhite: '#FEFEFE',
        lightGray: '#EDEDED',
        black: '#000000'
    }, 
    fonts:{
        primary: "'Inter', sans-serif",        
    }
}