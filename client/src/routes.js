import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AsidePanel from './components/app-page/aside-panel/aside-panel'
import LandingPage from './components/landing-page/landing-page'

export const useRoutes = isAutenticated => {
    if(isAutenticated) {
        return(
            <Routes>
                <Route path='/asidepanel' exact>
                    <AsidePanel/>
                </Route>
                <Route path='*' element={() => "404 not found"}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <LandingPage/>
        </Routes>
    )
}