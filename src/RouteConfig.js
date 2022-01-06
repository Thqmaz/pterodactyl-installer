import React from 'react'

// Pages
import { HomeScreen } from './screens/Pages/Home/HomeScreen'

import { InstallScreen } from './screens/Pages/Install/InstallScreen'
import { HistoryScreen } from './screens/Pages/History/HistoryScreen'

// Error pages
import { PageNotFound } from './screens/Errors/404/PageNotFound'
// import { ServerError } from './screens/Errors/500/ServerError'

export const RouteConfig = [
    {
        path: "/",
        children: [
            {
                index: true,
                element: <HomeScreen />
            },
            {
                path: "/install",
                element: <InstallScreen />
            },
            {
                path: "/history",
                element: <HistoryScreen />
            },
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
]