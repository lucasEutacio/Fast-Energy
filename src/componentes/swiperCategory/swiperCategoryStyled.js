import styled from 'styled-components';


export  const Swiper = styled.div`

display: flex;
flex-direction: row;
gap: 30px;
font-size: 20px;
font-weight: 900;
width: vw;
height: 20px;
margin: 50px;
align-items: center;


.container-swiper{
    display: flex;
    flex-direction: row;
    gap: 20px;
    
    span{
    display:flex ;
    align-items: center;
    background-color:#BDF321 ;
    padding: 15px 40px;
    border-radius: 50px;
    
        &:hover{
            background-color:#86A921 ;
            cursor: pointer;
        }
    }
}
@media(max-width: 576px){
    flex-direction: column;
    align-items: start;
    margin-bottom: 7em;

    .container-swiper{
        width: 100%;
        background: red;
         overflow-x: scroll;
        
        span{
           
        }
    }
  
    }


`
export default Swiper;