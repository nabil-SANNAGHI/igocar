import moment from 'moment'
import React from 'react'

export default function ProfilBooking({ bookingData }) {
    // {
    //     carName: 'dacia duster',
    //     fromSlot: '03/09/2023',
    //     toSlot: '10/09/2023',
    //     totalDays: 7,
    //     dayPrice: 56,
    //     totalPaid: 7 * 56,
    //     status: 'approved'
    // }
    const { _id, fromSlot, toSlot, totalDays, totalAmount, status } = bookingData
    return (
        <tr>
            <td className='border border-slate-300 text-left p-2 overflow-hidden'>
                {_id}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {moment(fromSlot).format("DD/MM/YYYY")}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {moment(toSlot).format("DD/MM/YYYY")}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {totalDays}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {totalAmount / totalDays}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {totalAmount}$
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {status}
            </td>
        </tr>
    )
}

