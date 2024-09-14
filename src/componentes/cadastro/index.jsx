import { Fragment } from "react";
import logoFast from '/fast-energy/fastEnergy/src/assets/logo-fast.png'
import { ContainPrincipal,Form } from './styles'


function Cadastro(){
    return (
        <>
         <ContainPrincipal>
         <div className="left-bar">
            <img src={logoFast} alt="" />
            <h3>Bem-vindo<br/> de volta</h3>
            <p>Acesse sua conta <br /> agora mesmo.</p>
            <button className="btn">Entrar</button>
            <a href="">Esqueci minha senha</a>
          </div>
          <Form action="">
          <h3>Crie sua conta</h3>
            <input type="text" placeholder="Nome:" />
            <input type="email" placeholder="E-mail:"/>
            <input type="tel" placeholder="CPF:"/>
            <button type="submit" className="btn">Cadastrar</button>
          </Form>
         
         </ContainPrincipal>
      </>
      );
    
}


export default Cadastro
