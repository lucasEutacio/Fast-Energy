import { Fragment } from "react";
import logoFast from '/fast-energy/fastEnergy/src/assets/logo-fast.png'
import { ContainPrincipal,Form } from './LoginStyles'


function Login(){
    return (
        <>
         <ContainPrincipal>
         <div className="left-bar">
            <img src={logoFast} alt="" />
            <h3>Cadastre-se <br/> hoje!</h3>
            <p>Cadastre-se e fique <br/>por dentro das novidades!</p>
            <button className="btn">Cadastra-se</button>
           
          </div>
          <Form action="">
          <h3>Entre na sua conta</h3>
            <input type="email" placeholder="E-mail:"/>
            <input type="password" placeholder="Senha:"/>
            <button type="submit" className="btn">Entrar</button>
            <a href="">Esqueci minha senha</a>
          </Form>
         
         </ContainPrincipal>
      </>
      );
    
}


export default Login
