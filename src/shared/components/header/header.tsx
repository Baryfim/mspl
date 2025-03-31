"use client"
import { usePathname, useRouter } from 'next/navigation'
import classesHeader from './header.module.css'
import Link from 'next/link'
import { useState } from 'react'


export default function Header() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    
    const pathname = usePathname();
    const isCPRoute = pathname.startsWith("/cp");
    if (isCPRoute) return null;

    return (
        <header className={classesHeader.header_wrapper}>
            <div className={classesHeader.container}>
                <div className={classesHeader.header__inner}>
                    <div onClick={() => router.push("/")} className={classesHeader.header__logo}>
                        <img src='/logo.svg' alt='Логотип' width={218} height={50} />
                    </div>
                    <nav className={`${classesHeader.header__nav} ${isOpen && classesHeader.header__nav_open }`}>
                        <ul className={classesHeader.header__nav_inner}>
                            <li>
                                <Link href="/about">О лиге</Link>
                            </li>
                            <li>
                                <Link href="/sports">Виды спорта</Link>
                            </li>
                            <li>
                                <Link href="/docs">Документы</Link>
                            </li>
                            <li>
                                <Link href="/contacts">Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={`${classesHeader.header_burger_menu} ${isOpen && classesHeader.header_burger_open}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}