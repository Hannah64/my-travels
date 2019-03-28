// import React, { Component } from 'react';

// class Travel extends Component {
//     constructor(props){
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//                 <h1>
//                 {this.props.destination} 
//                 {this.props.country} 
//                 </h1>
//                 <p>Cette destination est à une distance de {this.props.distance} de Saint Jean de Luz</p>
//                 <img src={this.props.photo} />
                
//             </div>
//         );
//     }
// };


// export default Travel;

// ******************** quête React 1 ************************

// src/Travel.js
import React, {Component} from 'react';

const travels = [
    {
        "id": "1",
        "destination": "Chichiriviche",
        "country": "Venezuela",
        "distance": "7287 kms",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/5/5c/20160630_175251_Amanecer_desde_Chichiriviche.png"
    },
    {
        "id": "2",
        "destination": "London",
        "country": "United Kingdom",
        "distance": "776 km",
        "photo": "https://cdn.pixabay.com/photo/2016/06/07/11/02/london-1441427_960_720.png"
    },
    {
        "id": "3",
        "destination": "Malaga",
        "country": "Spain",
        "distance": "800 km",
        "photo": "https://blog.fuertehoteles.com/wp-content/uploads/2017/04/malaga-sunset.jpg"
    },
    {
        "id": "4",
        "destination": "Ho Chi Min",
        "country": "Vietnam",
        "distance": "4200 km",
        "photo": "https://www.fr.lastminute.com/vol/lastminute/img/ho_chi_minh_ville.jpg"
    },
    {
        "id": "5",
        "destination": "New York",
        "country": "U.S.A",
        "distance": "2100 km",
        "photo": "https://images.musement.com/cover/0002/49/thumb_148242_cover_header.jpeg?&q=60&fit=crop&h=400&lossless=true&auto=format&w=1398"
    }
]

const Travel = (props) => (
    <div class="travel">
        <p>
            {travels.map(travel => (
                <div>
                    <p>Destination: {travel.destination}, country: {travel.country}, distance: {travel.distance}</p>
                    <img src={travel.photo} alt="building" />
                </div>
            ))}
        </p>
        <hr />
    </div>
);

export default Travel;