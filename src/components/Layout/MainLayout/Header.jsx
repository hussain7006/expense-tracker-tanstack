import ThemeButton from '../../ThemeButton/ThemeButton';
import style from './header.module.css';

export default function Header() {
    return (
        <header className={`${style.header} dark:bg-gray-800 dark:border-gray-700 dark:text-white`}>
            <div className={style.headerLeftContent}>
                <div className={style.logoBox}>
                    <img src="/images/expense-tracker.png" alt="logo" />
                </div>
                <div className={`${style.headerTitle} dark:text-white`}>Expense Tracker</div>
            </div>
            <div className={`${style.themeRightContent}`}><ThemeButton /></div>
        </header>

    )
}
