import React from 'react'
import { map } from "lodash";
import { FORMAT_DATE } from '../../utils/constants';
import Link from 'next/link';


export default function Bikes(props) {
    
    const { bike } = props;
    
    if (bike) {
        return (<BikesItems key={bike.id} bike={bike} />);
    }else{
        return (<div>No Results!</div>);
    }
}
function BikesItems(props) {
    const { bike } = props;
    const date_stolen = FORMAT_DATE(bike.date_stolen);
    const url = "/details";
    return (
        <div className="bikes">
                <div className="bikes-items">
                    <div className="bikes-items-column">
                        <Link href={{
                                    pathname : url,
                                    query: {
                                        id : bike.id}
                                    }}>
                        <div className="bikes-images">
                            {
                                bike.large_img ? 
                                <img src={bike.large_img} alt=" " className="bikes-images-fixed"/> : 
                                <img src="no-found.svg" alt=" "   className="bikes-images-fixed"/>
                            }         
                        </div>
                        </Link>
                        <div className="bikes-descripcion">
                            <div className="bikes-row"><label className="title">Title:      </label><label className="description">{bike.title}</label></div>
                            <div className="bikes-row"><label className="title">Description:</label><label className="description">{bike.description}</label></div>
                            <div className="bikes-row"><label className="title">Location:   </label><label className="description">{bike.stolen_location}</label></div>
                            <div className="bikes-row"><label className="title">Serial:     </label><label className="description">{bike.serial}</label></div>
                            <div className="bikes-row"><label className="title-red">Stolen: </label><label className="description">{date_stolen}</label></div>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}
