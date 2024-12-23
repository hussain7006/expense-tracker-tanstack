import React from 'react'
import style from './footer.module.css'

export default function Footer() {
    return (
        <footer className={style.footer} >
            <img className={style.footerLogoImg} src="/images/expense-tracker.png" />
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </footer>
    )
}
