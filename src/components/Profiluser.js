import { getFormattedDate } from '@/helpers/helpers'
import React from 'react'
export default function ProfilCar({ userData }) {
    const { name, email, createdAt, updatedAt, isActive } = userData
    return (
        <tr>
            <td className='border border-slate-300 text-left p-2'>
                {name}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {email}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {getFormattedDate(createdAt)}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {getFormattedDate(updatedAt)}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {isActive === true ? "active" : "unActive"}
            </td>
        </tr>
    )
}