'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function ProfilTabs({ isAdminUser }) {
    const pathname = usePathname()
    const activeElementClass = "text-primary font-semibold"
    const normalElementClass = "text-black font-semibold"

    const activeElements = {
        isProfil: pathname == '/profil',
        isCars: pathname == '/profil/cars',
        isUsers: pathname == '/profil/users',
        isBooking: pathname == '/profil/booking'
    }
    return (
        <ul className="flex justify-center gap-x-5 mb-5">
            <li className={activeElements.isProfil ? activeElementClass : normalElementClass}>
                {activeElements.isProfil ? 'general' : <Link href={'/profil'}>general</Link>}
            </li>
            {
                isAdminUser && <li className={activeElements.isCars ? activeElementClass : normalElementClass}>
                    {activeElements.isCars ? 'Cars' : <Link href={'/profil/cars'}>Cars</Link>}
                </li>
            }

            {
                isAdminUser && <li className={activeElements.isUsers ? activeElementClass : normalElementClass}>
                    {activeElements.isUsers ? 'Users' : <Link href={'/profil/users'}>Users</Link>}
                </li>
            }

            <li className={activeElements.isBooking ? activeElementClass : normalElementClass}>
                {activeElements.isBooking ? 'Booking' : <Link href={'/profil/booking'}>Booking</Link>}
            </li>
        </ul>
    )
}
