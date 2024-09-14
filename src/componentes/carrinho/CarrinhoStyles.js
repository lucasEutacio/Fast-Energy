import styled from 'styled-components';

export const Overlay = styled.div`
position: fixed;
width: 100%;
height: 100vh;
background-color: #00000080;
z-index: 2;
`

export const ContainPrincipal = styled.div`
display: flex;
flex-direction: column;
position: fixed;
right: 0;
top: 0;
width: 32%;
height: 100vh;
overflow: hidden;
background-color: #ffffff ;
animation: animationEnter 0.5s ease-out forwards;

@keyframes animationEnter {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}


z-index: 3;
.cartContain{
     
    display: flex;
    font-weight: 800;
    font-size: 20px;
    margin: 10px 25px;
    margin-top: 20px;
    text-transform: uppercase;
    flex-direction: row;
    #cartnumber{
        color:#80AC00 ;
        margin-left: 20px;
    }
    svg{
        margin-left: auto;
        width: 28px;
        height: 28px;
        margin-right: 10px;
            &:hover{
                fill: red;
        } 
    }
}
.product-area{
    
    height: 580px;
    overflow: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }

    .cartProducts{
            margin-top: 1em;
            background-color:#ECECEC;
            display: flex;
            flex-direction: row;
            align-content: center;
            align-items: normal;
            justify-content: center;
            margin-left:20px;
            width: 95%;
            height:190px;
            border-radius: 10px;
            img{
                width: 170px;
                height: 170px;
                object-fit: contain;
                padding: 10px;
            }

            .wrap{
                margin-left: 10px;
                display: flex;
                flex-direction:column ;
                
                span{
                font-size:20px ;
                padding:0;
                margin-top: 35px;
                height: 50px;
                    .wrap-line{
                        display: flex;
                        flex-direction: row;
                    }
                }
                h2{
                    margin-right: 15px;
                    display: flex;
                    align-self: flex-start;
                    display: inline-flex;
                    color: #2A2A2A;
                    font-size: 30px;
                }
                button{
                    border-radius: 100%;
                    width: 30px;
                    height: 30px;
                    color: #000;
                    font-weight: 900;
                    font-size: 20px;
                    background-color:#BDF321 ;
                    border: none;
                    &:hover{
                        background-color: #80AC00;
                    }
                    svg{
                    padding-left:2px ;
                    padding-top: 6px;
                        width: 12px;
                    }
                }
                .qtd-products{
                    margin: 0px 10px;
                    font-weight: 800;
                }
            }
        
        }
}

.resume{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    overflow: hidden;
    width: 100%;
    height: 200px;
    border-radius: 25px 25px 0px 0px;
    position: relative;
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 1);
    
    

    small{
        color: #454545;
        font-size: 18px;
        font-weight: 500;
        padding-left: 2em;
    }
    h2{
        padding-top:4px;
        padding-left: 1em;
        margin: 0;
        font-size: 35px;
    }
    button{
    width: 90%;
    height: 65px;
    margin: 20px;
    background-color: #BDF321;
    
    color: #000;
   border: none;
    border-radius: 15px;
    font-size: 25px;
    font-weight: bold;
    text-transform: capitalize;
    &:hover{
    background-color: #88AF16;
    color: #2A2A2A;
    cursor: pointer;
    }
}
}
`