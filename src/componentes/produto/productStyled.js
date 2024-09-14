import styled from 'styled-components';

 const ProductBox = styled.div`
    margin: 40px;
    width: 270px;
    
    &:hover {
        color: #384C00;
        cursor: pointer;
        
        .product {
            opacity: 0.89;
        }
    }

    .product {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 270px;
        border-radius: 15px;
        background-color: #EDEDED;
        img{
            margin: auto;
            width: 250px;
            height: 250px;
            object-fit: contain;   
             }
    }

    .description {
        width: 100%;
        font-weight: 500;
        font-size: 17px;
        margin-top: 10px;
    }

    .wrap-price {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 15px;

        .price {
            font-weight: 800;
            font-size: 24px;
            color: #2A2A2A;
        }

        .rate {
            margin-right: 10px;

            svg {
                fill: #FFC300;
                width: 28px;
            }

            span {
                font-weight: 800;
                font-size: 24px;
                color: #2A2A2A; 
            }
        }
    }
`;
export default ProductBox;