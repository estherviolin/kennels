import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animals.css"



export const AnimalList = () => {
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