import React, {useState} from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BikesDetails from '../../components/BikesDetails';
import BikesSearch from '../../components/BikesSearch/BikesSearch';

export default function PrincipalLayout(props) {
    console.log(props);
    const { pagina } = props;
    console.log(pagina);
    return (
        <div className="principal-layout">
            <Header origen="principal"/>

            <div className="contenido">

                <div className="content">
                  
                  <OpcionMenu pagina={pagina}/>
                    
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

function OpcionMenu(props) {
    const { pagina } = props;
    console.log(pagina);
    switch (pagina) {
      case 'details':
        return <BikesDetails/>;
      case 'search':
        return <BikesSearch/>;
      default:
        return <BikesSearch/>;
    }
}

