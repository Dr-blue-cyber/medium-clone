import React from 'react'
import { Dashboard } from '../pages/Dashboard/Dashboard'

export const Layout = ({ children }) => {
    return (
        <Dashboard>
            <Grid>
                {children}
            </Grid>
        </Dashboard>
    )
}
