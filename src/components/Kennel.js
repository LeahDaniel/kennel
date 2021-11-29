import React from "react"
import { LocationList } from "./location/LocationList.js"
import "./Kennel.css"
import { AnimalProvider } from "./animal/AnimalProvider.js"
import { AnimalList } from "./animal/AnimalList.js"

export const Kennel = () => (
    <>
        <h1>Nashville Kennels</h1>
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>

        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <EmployeeProvider>
            <EmployeeList />
        </EmployeeProvider>

        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
    </>
)
