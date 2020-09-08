import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employee.css"
import { LocationContext } from "../location/LocationProvider"


export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext) //imported from provider
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getEmployees()
        getLocations()
    }, [])


    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
                {
                    employees.map(employee => {
                        const clinic = locations.find(location => location.id === employee.locationId) || {}

                        return <Employee key={employee.id} employee={employee} location={clinic} />
                    })
                }
            </article>

        </div>
    )
}