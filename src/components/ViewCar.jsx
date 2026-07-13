import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewCars = () => {

    const [cars, changeCars] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = () => {

        axios.get(" https://host-demo-app.onrender.com/api/cars").then(
            (response) => {
                changeCars(response.data)
                setLoading(false)
            }
        ).catch(
            () => {
                setLoading(false)
            }
        )

    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div className="container mt-5">

            <h2 className="text-center mb-4">View All Cars</h2>

            {loading ? (
                <h4 className="text-center">Loading...</h4>
            ) : (

                <div className="table-responsive">

                    <table className="table table-bordered table-hover table-striped">

                        <thead className="table-dark">
                            <tr>
                                <th>Reg No</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Type</th>
                                <th>Fuel</th>
                                <th>Transmission</th>
                                <th>Seats</th>
                                <th>Rent/Day</th>
                                <th>City</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>

                            {cars.map(
                                (car, index) => {
                                    return (
                                        <tr key={car.id}>

                                            <td>{car.registration_number}</td>
                                            <td>{car.brand}</td>
                                            <td>{car.model}</td>
                                            <td>{car.vehicle_type}</td>
                                            <td>{car.fuel_type}</td>
                                            <td>{car.transmission}</td>
                                            <td>{car.seating_capacity}</td>
                                            <td>₹{car.rent_per_day}</td>
                                            <td>{car.city}</td>
                                            <td>{car.availability_status}</td>

                                        </tr>
                                    )
                                }
                            )}

                        </tbody>

                    </table>

                </div>

            )}

        </div>
    )
}

export default ViewCars