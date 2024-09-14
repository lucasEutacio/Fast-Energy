import { Fragment } from "react";
import BodyAddress from "./addressStyled.js"
import ProdutoImage from "../assets/wayprotain.png"

function Address(){
return(

<>

<BodyAddress>
    <h3>Checkout</h3>
    <div className="body-radius">
        <div className="step-checkout">
            <div className="step select">
                <span>1</span>
                <div className="step-text">Detalhes da entrega</div>
            </div>
            <div className="step">
                <span>2</span>
                <div className="step-text">Formas de pagamento</div>
            </div>
            <div className="step">
                <span>3</span>
                <div className="step-text">Finalização</div>
            </div>    
        </div>
            <div className="wrap-contain">
                <div className="input-form">
                    <h2>
                        Detalhes da entrega
                    </h2>
                    <form action="">
                        <div className="wrap-form">
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Sobrenome" />
                        </div>
                        <input type="email" placeholder="E-mail" />
                
                    <h2>
                        Endereço
                    </h2>
        
                        <select className="wrap-20" name="estates" id="">
                            <option value="DF">DF</option>
                        </select>
                        <input className="wrap-70" type="text" placeholder="CEP"/>
                        <div className="wrap-form">
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="Bairro"/>
                        </div>
                        <div className="wrap-form">
                        <input type="text" placeholder="Número"/>
                        <input type="text" placeholder="Logradouro"/>
                        </div>
                        <button type="submit">Continuar</button>
                    </form>
                </div>
                
            <div className="product-review">
                <h2>Produtos</h2>

                <div className="product-card">
                    <div className="product-image">
                        <img src={ProdutoImage} alt="" />
                        </div>
                        <div className="product-info">
                            <small>3W Whey Protein -Growth Supplements</small>
                            <h1>R$158,99</h1>
                        </div>  
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src={ProdutoImage} alt="" />
                        </div>
                        <div className="product-info">
                            <small>3W Whey Protein -Growth Supplements</small>
                            <h1>R$158,99</h1>
                        </div>  
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src={ProdutoImage} alt="" />
                        </div>
                        <div className="product-info">
                            <small>3W Whey Protein -Growth Supplements</small>
                            <h1>R$158,99</h1>
                        </div>  
                </div>

                <div className="price">
                    <span>Total</span>
                    <span>R$501,97</span>
                </div>
                
            </div>
        
        </div>
    </div>
</BodyAddress>

</>


);
}

export default Address;