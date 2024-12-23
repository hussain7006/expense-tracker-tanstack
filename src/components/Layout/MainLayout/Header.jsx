import style from './header.module.css';
export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.logoBox}>
                <img src="/images/expense-tracker.png" alt="logo" />
            </div>
            <div className={style.headerTitle}>Expense Tracker</div>
        </header>

    )
}
