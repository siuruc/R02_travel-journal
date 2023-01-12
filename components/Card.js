import React from "react"

export default function Card(props){
    return (
        <section className="card">
            <img src={props.imageUrl} alt={props.title} className="locImg"/>
            <div className="info">
            <div className="card-location">
                <i className="fa fa-map-marker"></i>
                <h3 className="country">{props.location}</h3>
                <a href={props.googleMapsUrl} className="link">View on Google Maps</a>
            </div>
            <div className="card-details">
                <h3 className="title">{props.title}</h3>
                <h3 className="date">{props.startDate} - {props.endDate}</h3>
                <h3 className="description">{props.description}</h3>
            </div>
            </div>
        </section>
    )
}