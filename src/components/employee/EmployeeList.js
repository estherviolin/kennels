import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employee.css"
import { LocationContext } from "../location/LocationProvider"


export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext) //imported from provider
  

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
                        return <Link key={employee.id} to={`/employees/${employee.id}`}>
                            <h3>{employee.name}</h3>
                        </Link>
                    })
                }
            </article>

        </div>
    )
}

// employees.map(employee => {
//     const clinic = locations.find(location => location.id === employee.locationId) || {}

//     return <Employee key={employee.id} employee={employee} location={clinic} />
// })