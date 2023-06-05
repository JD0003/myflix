import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const DefaultPage = (props) =>{
    return <section>
        <Header extra={props.button}/>
        {props.conteiner}
        <Footer/>
    </section>
}

export default DefaultPage;