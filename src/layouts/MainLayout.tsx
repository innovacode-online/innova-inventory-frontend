import React, { FC } from 'react'

interface Props{
    children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            {/* APPBAR */}
            <nav>AppBar</nav>
            {/* SIDEMENU */}
            {/* MAIN */}
            <main>
                { children }
            </main>
        </>
    )
}
