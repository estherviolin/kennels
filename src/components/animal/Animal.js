import React from "react"
import "./Animals.css"
import { Link } from "react-router-dom"


export default ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
            <Link to={`/animals/${animal.id}`}>
                { animal.name }
            </Link>
        </h3>
        <div className="animal__breed">{ animal.breed }</div>
    </section>
)

// export const Animal = ({animal, customer, location}) => (
//     <section className="animal">
//         <h3 className="animal__name">{animal.name}</h3>
//         <div className="animal__owner">Owner: {customer.name}</div>
//         <div className="animal__location">Location: {location.name}</div>
//     </section>
// )