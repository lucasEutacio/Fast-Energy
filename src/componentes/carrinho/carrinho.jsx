import { Fragment } from "react";
import { ContainPrincipal, Overlay } from './CarrinhoStyles'
import ProductImage from '/fast-energy/fastEnergy/src/assets/wayprotain.png'
function Carrinho(){
    return (
        <>
       <Overlay>
        
        <ContainPrincipal>
        <div className="cartContain">
        
        Itens no carrinho <div id="cartnumber">3</div>
        
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </div>

        <div className="product-area">

        <div className="cartProducts">
        <img  src={ProductImage} className="product-image"/>
        <div className="wrap">
        <span>3W Whey Protein 1kg -Growth Supplements</span>
        <div className="wrap-line">
        <h2>R$158,99</h2> 
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></button>
        <span className="qtd-products" id="productNumber">1</span>
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></button>
        </div>
        </div>
        </div>

        <div className="cartProducts">
        <img  src={ProductImage} className="product-image"/>
        <div className="wrap">
        <span>3W Whey Protein 1kg -Growth Supplements</span>
        <div className="wrap-line">
        <h2>R$158,99</h2> 
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></button>
        <span className="qtd-products" id="productNumber">1</span>
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></button>
        </div>
        </div>
        </div>

        <div className="cartProducts">
        <img  src={ProductImage} className="product-image"/>
        <div className="wrap">
        <span>3W Whey Protein 1kg -Growth Supplements</span>
        <div className="wrap-line">
        <h2>R$158,99</h2> 
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></button>
        <span className="qtd-products" id="productNumber">1</span>
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></button>
        </div>
        </div>
        </div>
        
        </div>

        <div className="resume">
            <small>Valor total</small>
            <h2>R$ 158,99</h2>
            <button>Comprar Agora</button>

        </div>
        

  
        </ContainPrincipal>
        </Overlay>
      </>
      );
    
}


export default Carrinho
