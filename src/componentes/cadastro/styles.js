import styled from 'styled-components';


export const ContainPrincipal = styled.div`

   display: flex;
   display: flex;
   margin: auto;
   margin-top: 85px;
   width: 1100px;
   height: 557px;
   border-radius: 15px;
   box-shadow: 4px 2px 27px #8E8E8E;
      .left-bar{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2A2A2A;
    width: 320px;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    h3{
   font-family: Arial, sans-serif;
   font-size: 36px;
   color: #fff;
   text-align: center;
   margin-bottom: 2px;
   padding-bottom:0px ;
  }
  p{
    font-family: Arial, sans-serif;
    color: #939393;
    font-size: 20px;
    font-weight: 100;
    text-align: center ;
    margin-top: 2px;
   padding-top:2px ;
   
  }
  button{
    width: 230px;
    height: 65px;
    margin: 20px;
    background-color: transparent;
    color: #BDF321;
    border: 3px solid #BDF321 ;
    border-radius: 22px;
    font-size: 29px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover{
    background-color: #BDF321;
    color: #2A2A2A;
    cursor: pointer;
     }
  }
  a{
    font-family: Arial, sans-serif;
    color: white;
    font-size: 15px;
    &:hover{
        color: #BDF321;
    }
  }
}

@media (max-width: 576px){
    width: 80%;
    height: 100%;
    
    flex-direction: column-reverse;
    .left-bar{
      width:100%;
      padding: 30px 0px;
      margin-top: -15em;
      border-radius: 15px;
      img{
        width: 200px;
      }
      h3{
        font-size: 27px;
      }

      p{
        font-size: 15px;
      }
      button{
        width: 65%;
        height: 57px;
        font-size: 20px;
      }
      a{
        font-size: 12px;
      }
    }

  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    width: 45%;
    height: 70%;
    margin: auto;
    button{
    width: 230px;
    height: 90px;
    margin: 20px;
    background-color: #BDF321;
    color: #2A2A2A;
    border: 3px solid #BDF321 ;
    border-radius: 15px;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover{
    background-color: transparent;
    color: #2A2A2A ;
    cursor: pointer;
    border: 4px solid #BDF321 ;
     }
    }
    h3{
        font-family: inter, sans-serif;  
        text-align: center;
        font-size: 36px;
        font-weight: bold;
    }input{
        display: flex;
        width: 591px;
        height: 90px;
        margin: 6px;
        border: none;
        border-radius: 10px;
        background-color: #EDEDED;
        padding-left: 20px;
        color: #767676;
        font-size: 15px;

        &:focus {
          outline-color: #80AC00;
        }
   }

   
   @media (max-width: 576px){
    width: 100%;
    height: 100vh;
 h3{
  font-size: 22px;
  padding-top:10px;
 }
  input{
    width: 80%;
  }
  button{
    width: 85%;
    font-size: 20px;
  }
  }
   

`;