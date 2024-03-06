import React from 'react'
import { Navigate } from 'react-router-dom'

export const Protected = ({ child }) => {
    const state = 0
    return (
        <>

            {state ? <Navigate to='/login'>Protected</Navigate> : <Navigate to='/'>Protected</Navigate>}
        </>

    )
}
