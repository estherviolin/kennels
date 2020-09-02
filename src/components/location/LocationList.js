import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"


export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext) //imported from provider

    useEffect(() => {
        getLocations()
    }, [])

    useEffect(() => {
    }, [locations])

    return (
        <article className="locations">
            {
                locations.map(location => {
                    return <section key={location.id} className="location">
                                <div><h3>{location.name}</h3></div>
                                <div>{location.address}</div>
                            </section>
                })
            }


        </article>
    )
}