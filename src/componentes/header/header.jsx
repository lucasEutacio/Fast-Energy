import { Fragment } from "react";
import logoFast from '/fast-energy/fastEnergy/src/assets/logo-fast.png'
import User from '/fast-energy/fastEnergy/src/assets/user.svg'
import Cart from '/fast-energy/fastEnergy/src/assets/cart.svg'
import SearchIcon from '/fast-energy/fastEnergy/src/assets/search-icon.svg'
import { HeaderGlobal, SearchBox,BtnLogin,CartView } from './HeaderStyles'
import { GlobalStyle } from '/fast-energy/fastEnergy/src/theme'

function Header(){
    return (
        <>
            <HeaderGlobal>
            <img src={logoFast} alt="" />

            <SearchBox >
            <input className="search-box"  type="text" placeholder="Pesquise aqui o melhor suplemento!"/>
            <button className="btn-search"><img src={SearchIcon}/></button>
            </SearchBox>
            
            <BtnLogin>
                <img src={User} alt="" />
                <div className="wrap">
                <a href="">Cadastre-se</a> 
                <span>ou</span> 
                <a href="">Faça login</a>
                </div>
            </BtnLogin>
            <CartView>
                <img src={Cart} alt="" />
                <span>2</span>
            </CartView>

           
            </HeaderGlobal>
        
      </>
      );
    
}

export default Header
