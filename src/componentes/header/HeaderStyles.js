import styled from 'styled-components';

export const HeaderGlobal = styled.div`
background-color: #2C2C2C;
width:100% ;
height: 120px;
display: flex;
align-items: center;
img{
    max-height: 100px;
    padding-left: 5rem;
}

@media(max-width: 576px){
 width: 100vw;
 height: 100px;
  img{
    max-height: 50px;
    padding-left:0 ;
  }  

}
`
export const SearchBox = styled.form`
height: 100%;
width: 900px;
display: flex;
justify-content: center;

input{
        display: flex;
        align-items: center;
        width: 80%;
        height: 55px;
        margin-top: 29px;
        border: none;
        border-radius: 10px;
        background-color: #fff;
        color: #858585;
        padding-left:  40px;
        font-size: 20px;
        &:focus {
          outline: none;
        }
}
button{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 55px;
            width: 40px;
            position: relative;
            top: 30px;
            right: 100px;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }

    @media(max-width: 576px){
    width: 65%;
    input{
        width: 90%;
      height:45px;
      font-size: 15px;
      padding-left: 10px;
    }
    button{
        right: 55px;
        top: 24px;
    }
    }
`

export const BtnLogin = styled.div`
display: flex;
align-items: center;
flex-direction: row;
width: 190px;
gap: 10px;

img{
    display: flex;
    justify-content: start;
    padding:0px;
    max-height: 50px;
    
}
a{
    
    font-family: inter, sans-serif; 
    color: white;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    
    &:hover{
        color:#bdf323 ;
    }
}
span{
    font-family: inter, sans-serif; 
    color: white;
    font-size: 16px;
    padding: 0px 5px;
    
    
}

@media(max-width: 576px){
    display: none;

    }
`

export const CartView = styled.div`
display: flex;
align-items: center;
flex-direction: row;
width: 190px;
gap: 10px;
cursor: pointer;

img{
    display: flex;
    justify-content: start;
    padding-left:20px;
    max-height: 50px;
    
}

span{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -15px;
    right: 18px;
    font-family: inter, sans-serif; 
    width: 13px;
    height: 24px;
    background-color:#bdf323 ;
    border-radius: 100%;
    color: black;
    font-size: 16px;
    padding: 0px 5px;  
    font-weight:600;
    text-align: center;
}
@media(max-width: 576px){
    width: 10%;
    gap: 0px;
    img{
        max-width: 38px;
        padding-left: 0px;
    }
    span{
        width: 10px;
        height: 19px;
        font-size:15px ;
        right: 10px;
    }
}

`

