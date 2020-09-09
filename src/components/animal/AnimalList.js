import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import  Animal  from "./Animal"

import "./Animals.css"



export const AnimalList = (props) => {
    const { animals, getAnimals } = useContext(AnimalContext) //imported from provider


    useEffect(() => {
        getAnimals()
    }, [])

    return (
        <div className="animals">
            <h1>Animals</h1>
            <button onClick={() => props.history.push("/animals/create")}>
                Make Appointment
            </button>
            {
                animals.map(animal => {
                    return <Animal key={animal.id}
                        animal={animal}
                       
                    />
                })
            }

        </div>
    )
}