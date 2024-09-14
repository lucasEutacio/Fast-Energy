import React from 'react'
import ReactDOM from 'react-dom/client'
import Cadastro from './componentes/cadastro/index.jsx'
import Login from './componentes/login/index.jsx'
import  Header  from './componentes/header/header.jsx'
import Carrinho from './componentes/carrinho/carrinho.jsx'
import Product from './componentes/produto/product.jsx'
import Home from './paginas/home.jsx'
import Address from './paginas/address.jsx'
import Payment from './paginas/payment.jsx'

import SwiperCategory from './componentes/swiperCategory/swiperCategory.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Payment/>

    
    
  </React.StrictMode>,
)
