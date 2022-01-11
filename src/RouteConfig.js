import React from 'react'
import { Navigate } from 'react-router-dom'
// import { SignOut } from './functions/SignOut'

// Pages
import { HomeScreen } from './screens/Pages/Home/HomeScreen'
import { InstallScreen } from './screens/Pages/Install/InstallScreen'
import { HistoryScreen } from './screens/Pages/History/HistoryScreen'

// Error pages
import { LoginScreen } from './screens/Pages/Auth/LoginScreen'


export const RouteConfig = ({isAuth}) => [
	{
		path: '/',
		children: [
			{
				index: true,
				element: isAuth ? <HomeScreen /> : <Navigate to='/login' />
			},
			{
				path: '/install',
				element: isAuth ? <InstallScreen /> : <Navigate to='/login' />
			},
			{
				path: '/history',
				element: isAuth ? <HistoryScreen /> : <Navigate to='/login' />
			},
			{
				path: '/login',
				element: isAuth ? <Navigate to='/' /> : <LoginScreen />
			},
			// {
			// 	path: '/signout',
			// 	element: isAuth ? <SignOut /> : <Navigate to='/login' />
			// }
		],
	},
	{
		path: '*',
		element: isAuth ? <HomeScreen /> : <Navigate to='/login' />
	}
];
