import styled from 'styled-components';

const BodyFooter = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 340px;
background-color: #2C2C2C;
margin-top: 6em;
    img{
    margin-right: 10em;
    width: 300px;
    height: 300px;
    object-fit: contain;
    }

.links{
    
    display: flex;
    flex-direction: column;
    width: 33%;
    justify-content: center;
    color: #fff;
    span{
        font-weight: 900;
        font-size: 25px;
        margin-bottom: 10px;

    }
    a{
        
        align-self: flex-start;
        display: inline-flex;
        padding: 0;
        text-decoration: none;
        color: #fff;
        font-size: 20px;
        margin-top: 10px;
        &:hover{
            color: #BDF321;
            cursor: pointer;
        }
    }
}

.contacts{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
   
    .contact{
        
        display: flex;
        flex-direction: row;
        gap: 15px;
        .wrap-contact{
            gap: 5px;
            span{
                font-size: 23px;
                font-weight: 700;
                color: #fff;
            }
            a{
                text-decoration: none;
                color: #fff;
                font-size: 19px;
                
                     &:hover{
                     color: #BDF321;
                    }
            }
            display: flex;
            flex-direction: column;
        }
        svg{
            width: 50px;
            fill: #BDF321;
           
        }
    }
}
button{
    position: absolute;
    right: 25px;
    margin-top:-30px;
    border-radius: 100px;
    border: none;
    width: 80px;
    height: 80px;
    background-color: #BDF321;
    &:hover{
        background-color:#86A921 ;
        cursor: pointer;
    }
    svg{
        width: 30px;
    }

}
`

export default BodyFooter