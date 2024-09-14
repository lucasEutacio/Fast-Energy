import { Fragment } from "react";
import Header from "../componentes/header/header";
import Product from "../componentes/produto/product.jsx";
import BannerHome from "/fast-energy/fastEnergy/src/assets/banner-fast.png";
import { Banner, CategorySwiper, ProductArea } from "./homeStyles";
import Footer from "../componentes/footer/footer.jsx";
import Carrinho from "../componentes/carrinho/carrinho.jsx";



function Home(){
    return (
        <>
        
       <Header/>
      
        <Banner>
        <img src={BannerHome} />
        </Banner>

        <CategorySwiper>
        Categorias:
        <div className="container-swiper">
        <span>Whey Protein</span>
        <span>Pré-treino</span>
        <span>Creatina</span>
        <span>Cafeína</span>
        <span>Cafeína</span>
        <span>Cafeína</span>
        </div>
        
        </CategorySwiper>

        <ProductArea>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </ProductArea>

        <Footer/>

         </>


    );
}

export default Home