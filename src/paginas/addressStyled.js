import styled from "styled-components";

const BodyAddress =styled.div`
background: #E9E9E9;
width: 100vw;
height: 100vh;
overflow-x: hidden;
h3{
    font-size: 2rem;
    margin-left: 3rem;
    margin-bottom: 20px;
}
    .body-radius{
        background-color: #fff;
        padding: 3rem;
        margin: 1em;
        border-radius: 20px;
    }

    .step-checkout{
        display: flex;
        gap: 15px;
        .step{
            display: flex;
            gap:5px;
            color: #ccc;

            span{
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #CCCCCC;
                width: 20px;
                height: 20px;
                color:#fff ;
                border-radius: 100%;
            }
        }
        .select{
            span{
                background-color:#BDF321 ;
                color: #000;
                font-weight: 600;
            }
            .step-text{
                color: #000;
                font-weight: 600;
            }
        }
    }
    .wrap-contain{
        display: flex;
        flex: 1;
    .input-form{
        width: 65%;
        padding-top: 20px;
        form{
            select{
                width: 79%;
                height: 58px;
                border-radius: 10px;
                border: none;
                box-shadow:2px 2px 20px 1px rgba(0, 0, 0, 0.3) ;
                padding-left: 2em;
                gap: 5px;
                margin: 8px;
                font-size: 15px;
            &:focus {
          outline-color: #80AC00;
        }

            }
            input{
                width: 79%;
                height: 58px;
                border-radius: 10px;
                border: none;
                box-shadow:2px 2px 20px 1px rgba(0, 0, 0, 0.3) ;
                padding-left: 2em;
                gap: 5px;
                margin: 8px;
                font-size: 15px;
            &:focus {
          outline-color: #80AC00;
        }
            }
            .wrap-form{
                display: flex;
                flex-direction: row;
                input{
                    
                    width: 37%;
                }
                

            }
            .wrap-20{
                width: 10.3%;
                padding-left: 10px;
            }
            .wrap-70{
                width: 67%;
            }
            button{
                width: 230px;
                height: 65px;
                margin: 1em 0px 0px 2px;
                background-color: #BDF321;
                color: #000;
                border: none;
                border-radius: 15px;
                font-size: 22px;
                font-weight: 600;
                text-transform: uppercase;
                &:hover{
                background-color: #A0CF1A;
                color: #000;
                cursor: pointer;
                }
            }
        }
    }
    .product-review{
        width: 32%;
        padding-top: 20px;
        border-left: solid 1px #C0C0C0;
        padding-left: 2rem;
        
        
        .product-card{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            flex-wrap: wrap;
            width: 100%;
            height: 146px;
            background-color: #ECECEC;
            padding: 0px 10px 0px 10px;
            border-radius: 10px;
            margin-bottom: 1em;
            .product-image{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 25%;
                img{
                
                width: 100px;
                }
            }
            .product-info{
                width: 66%;
                small{
                    font-size: 18px;
                }
                h1{
                    margin: 15px 0px 3px 0px;
                    font-size: 22px;
                }
            }
        }
        .price{
            display: flex;
            justify-content: space-between;
            margin-top: 2em;
            margin-left: 10px;
            span{
                font-size: 25px;
                font-weight: 800;
            }
        }
    }
}
@media (max-width: 576px){

.body-radius{
    padding: 2em;
    .step-checkout{
        display: none;
    }
    .product-review{
        display: none;
    }
    .wrap-contain{
        width: 100%;
        .input-form{
            width:90%;
            form{
                width: 100%;
                input{
                    width: 100%;  
                }
                .wrap-form{
                    flex-direction: column;
                   width: 100%;
                   input{
                    width: 100%;
                   }
                    
                }
                .wrap-20{
                    width: 30%;
                }
            }
        }
    }
}

}

`

export default BodyAddress;