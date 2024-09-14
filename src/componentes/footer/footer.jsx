import { Fragment } from "react";
import BodyFooter from "./footerStyles"
import logoFast from '/fast-energy/fastEnergy/src/assets/logo-fast.png'

function Footer(){
    return (
        <>
        <BodyFooter>
        <img src={logoFast} alt="" />
        <div className="links">
            <span>Links</span>
            <a href="">Termos e condições</a>
            <a href="">Trabalhe conosco</a>
            <a href="">Formas de pagamento</a>
            <a href="">Políticas de Entregas</a>
        </div>

        <div className="contacts">

        <div className=" contact">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        <div className="wrap-contact">
        <span>E-mail:</span>
        <a href="">atendimento@fastenergy.com</a>
        </div>
        </div>

        <div className=" contact ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
        <div className="wrap-contact">
        <span>Telefone para atendimento:</span>
        <a href="">(61) 0000-0000</a>
        </div>
        </div>

        </div>

        <button className="top-button" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg></button>
        </BodyFooter>

         </>


    );
}

export default Footer