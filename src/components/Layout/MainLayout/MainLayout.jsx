import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

import style from './mainLayout.module.css'

function MainLayout() {
    return (
        <div className={style.mainLayout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout