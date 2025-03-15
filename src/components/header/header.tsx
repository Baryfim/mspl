import classesHeader from './header.module.css'


export default function Header() {
    return (
        <header className={classesHeader.header_wrapper}>
            <div className={classesHeader.container}>
                <div className={classesHeader.header__inner}>
                    <div className={classesHeader.header__logo}>
                        <img src='/logo.svg' alt='Логотип' width={218} height={50} />
                    </div>
                    <nav className={classesHeader.header__nav}>
                        <ul className={classesHeader.header__nav_inner}>
                            <li>
                                <a href="#">О лиге</a>
                            </li>
                            <li>
                                <a href="#">Виды спорта</a>
                            </li>
                            <li>
                                <a href="#">Документы</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}