import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import {Customer} from "./Customer"
import "./Customer.css"


export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext) //imported from provider

    useEffect(() => {
        getCustomers()
    }, [])

    useEffect(() => {
    }, [customers])

    return (
        <div className="customers">
            {
                customers.map(customer => <Customer key={customer.id} customer={customer} />)
            }       

        </div>
    )
}