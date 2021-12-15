import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { getBikeById } from '../../api/bikes';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BikesDetails(props) {
    const router = useRouter()
    const [cargar, setCargar] = useState(false);
    const [details, setDetails] = useState(null);
    const { id } = router.query;
    
    
    useEffect(() => {
        if (id != undefined){
            if (id > 0){
                (async () => {
                    const bikeDetails = await getBikeById(id);
                    setDetails(bikeDetails || []);
                    setCargar(true);
                })();
                
            }
        }
    }, [!cargar])
    
    if (!details) return null;

    return (      
            <div className="contenido">

            {
                details && (
                        <BikesItemDetail bike={details}/>
                )
            }
            </div>
    )
}
function BikesItemDetail(props) {
    const { bike } = props;
    return (
        <div className="bikes">
                <div className="bikes-items">
                    <div className="bikes-items-column">
                        
                        <div className="bikes-images">
                            {
                                bike.large_img ? 
                                <img src={bike.large_img} alt=" " className="bikes-images-fixed"/> : 
                                <img src="no-found.svg" alt=" "   className="bikes-images-fixed"/>
                            }         
                        </div>
                        
                        <div className="bikes-descripcion">
                            <div className="bikes-row"><label className="title">Title:</label><label className="description">{bike.title}</label></div>
                            <div className="bikes-row"><label className="title">Description:</label><label className="description">{bike.description}</label></div>
                            <div className="bikes-row"><label className="title">Distinguishing features:     </label><label className="description">{bike.theft_description}</label></div>
                            <div className="bikes-row"><label className="title">Location:   </label><label className="description">{bike.stolen_location}</label></div>
                            <div className="bikes-row"><label className="title-red">Locking description: </label><label className="description">{bike.locking_description}</label></div>
                            <div className="bikes-row"><label className="title-red">Locking circumvented: </label><label className="description">{bike.lock_defeat_description}</label></div>
                            <div className="bikes-row"><label className="title-red">Police report #: </label><label className="description">{bike.police_report_number}</label></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}