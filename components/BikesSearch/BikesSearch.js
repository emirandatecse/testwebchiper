import { map } from 'lodash';
import React, { useState } from 'react'
import { getBikes, getBikesStolen } from '../../api/bikes';
import BikesEntity from '../../api/bikes-entity';
import Bikes from '../Bikes/Bikes';

export default function BikesSearch() {
    const [loading, setLoading] = useState(false);
    const [bikes, setBikes] = useState(null);
    const [stolen, setStolen] = useState(null);
    const [formState, setFormState] = useState({
        location    : 'Berlin',
        description : '',
        title       : '',
        date_ini    : '',
        date_fin    : ''
    })
    const {location, description, title, date_ini, date_fin} = formState;

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    async function searchBikes (){
        const entity = new BikesEntity()
              .setPage(1)
              .setPerPage(200)
              .setLocation(location)
              .setTitle(title)
              .setDescription(description)
              .build();


        setLoading(true);

            const bikesList = await getBikes(entity);
            const stolenList = await getBikesStolen(entity);
    
            if (bikesList) {
                setBikes(bikesList);
            }
            if (stolenList) {
                setStolen(stolenList);
            }
        
        setLoading(false);

    }
    return (
        <>
            <p className="titulo">SEARCH FOR NEARBY STOLEN BIKES</p>
                  {
                      stolen && (<StolenCount stolen={stolen} />)
                  }
                  <div className="filtros">
                      <input type="text" placeholder="Search bike descriptions"  value={description} name= "description" onChange={ handleInputChange } />
                  </div>
                  <div className="filtros">
                    <input type="text" placeholder="Search for title"  value={title}  name= "title"  onChange={ handleInputChange } />
                  </div>
                  <div className="filtros">
                    <input type="text" placeholder="Search for area" value={location}  name= "location"  onChange={ handleInputChange } />
                  </div>
                  <div className="busqueda">
                    <button className="btn-buscar"
                            onClick={searchBikes}>
                        Search Bikes
                    </button>
                  </div>
                  {
                      loading && (<img className="loading" 
                                       src="loading.gif" 
                                       alt="cargando..."/>)
                  }
                  
                  {   !loading && ( 
                                map(bikes, item =>{
                                    return (<Bikes key={item.id} bike={item}/>)
                                })
                            )
                  }
        </>
    )
}

function StolenCount(props) {
    
    const {stolen} = props;

    return (<p className="titulo">Total of stolenes: {stolen.proximity}</p>);
}