import React from "react"
import "./Kennel.css"
import {Employee} from "./employee/Employee"
import {Customer} from "./customer/Customer"
import {LocationList} from "./location/LocationList"
import {LocationProvider} from "./location/LocationProvider"
import {AnimalList} from "./animal/AnimalList"
import {AnimalProvider} from "./animal/AnimalProvider"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>   
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider>        
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)