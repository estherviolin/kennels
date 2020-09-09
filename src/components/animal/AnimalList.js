import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import  Animal  from "./Animal"
import "./Animals.css"



export const AnimalList = (props) => {
    const { animals, getAnimals, searchTerms } = useContext(AnimalContext) //imported from provider

    const [ filteredAnimals, setFiltered ] = useState([])

    useEffect(() => {
        getAnimals()
    }, [])

    useEffect(() => {
        const matchingAnimals = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
        setFiltered(matchingAnimals)
        }, [searchTerms])

    useEffect(() => {
        setFiltered(animals)
    }, [animals]) //could be combined into one useEffect with if else statement

    return (
        <div className="animals">
            <h1>Animals</h1>
            <button onClick={() => props.history.push("/animals/create")}>
                Make Appointment
            </button>
            {
                filteredAnimals.map(animal => {
                    return <Animal key={animal.id}
                        animal={animal}
                       
                    />
                })
            }

        </div>
    )
}