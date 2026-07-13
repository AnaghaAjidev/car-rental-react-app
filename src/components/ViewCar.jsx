import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewCars = () => {

    const [cars, changeCars] = useState([])
    const [city, changeCity] = useState("")
    const [vehicleType, changeVehicleType] = useState("")
    const [loading, setLoading] = useState(true)

    const fetchData = () => {

        axios.get(`https://host-demo-app.onrender.com/api/cars?city=${city}&vehicle_type=${vehicleType}`).then(
            (response) => {
                changeCars(response.data)
                setLoading(false)
            }
        ).catch()
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
        <NavBar/>
        <div className="container mt-4">

            <h2 className="text-center mb-4">View All Cars</h2>

            <div className="row mb-3">

                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter City"
                        value={city}
                        onChange={(event) => changeCity(event.target.value)}
                    />
                </div>

                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={vehicleType}
                        onChange={(event) => changeVehicleType(event.target.value)}
                    >
                        <option value="">Select Vehicle Type</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="MUV">MUV</option>
                        <option value="Luxury">Luxury</option>
                    </select>
                </div>

                <div className="col-md-2">
                    <button className="btn btn-primary" onClick={fetchData}>
                        Filter
                    </button>
                </div>

            </div>

            {loading ? (
                <h4 className="text-center">Loading...</h4>
            ) : (

                <table className="table table-bordered table-striped">

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

                        {cars.map((car, index) => {
                            return (
                                <tr key={index}>
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
                        })}

                    </tbody>

                </table>

            )}

        </div>
        </>
    )
}

export default ViewCars