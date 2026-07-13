import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "90vh",
          background: "linear-gradient(to right, #141E30, #243B55)"
        }}
      >
        <div className="text-center text-white">

          <h1
            className="display-2 fw-bold mb-3"
            style={{
              textShadow: "0 0 20px cyan",
              animation: "glow 2s ease-in-out infinite alternate"
            }}
          >
            🚗 Car Rental App
          </h1>

          <p className="lead mb-5">
            Find your perfect ride anytime, anywhere.
          </p>

          <Link to="/add" className="btn btn-warning btn-lg me-3 px-4">
            Add Car
          </Link>

          <Link to="/view" className="btn btn-outline-light btn-lg px-4">
            View Cars
          </Link>

        </div>
      </div>

      <style>
        {`
          @keyframes glow {
            from {
              text-shadow: 0 0 10px #00e5ff;
            }
            to {
              text-shadow: 0 0 30px #00e5ff, 0 0 50px #00e5ff;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home