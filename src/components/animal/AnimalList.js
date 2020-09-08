import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animals.css"



export const AnimalList = (props) => {
    const { animals, getAnimals } = useContext(AnimalContext) //imported from provider
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getAnimals()
        getLocations()
        getCustomers()
    }, [])

    return (
        <div className="animals">
            <h1>Animals</h1>
            <button onClick={() => props.history.push("/animals/create")}>
                Make Appointment
            </button>
            {
                animals.map(animal => {
                    const owner = customers.find(customer => customer.id === animal.customerId) || {}
                    const clinic = locations.find(location => location.id === animal.locationId) || {}


                    return <Animal key={animal.id}
                        animal={animal}
                        location={clinic}
                        customer={owner}
                    />
                })
            }

        </div>
    )
}