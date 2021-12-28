import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='text-center mt-5 bg-dark' >
             <h1 className='display-1 text-danger fw-bold'>404 - NOT FOUND</h1>
             <Link to="/" className='text-decoration-none fs-3'>Go Home</Link>
        </div>
    )
}
