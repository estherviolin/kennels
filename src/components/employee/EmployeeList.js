import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import {Employee} from "./Employee"
import "./Employee.css"


export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext) //imported from provider

    useEffect(() => {
        getEmployees()
    }, [])

    useEffect(() => {
    }, [employees])

    return (
        <div className="employees">
            {
                employees.map(employee => <Employee key={employee.id} employee={employee} />)
            }       

        </div>
    )
}