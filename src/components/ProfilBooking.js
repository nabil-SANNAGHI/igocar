import React from 'react'
export default function ProfilBooking({ bookingData }) {
    // {
    //     carName: 'dacia duster',
    //     fromSlot: '03/09/2023',
    //     toSlot: '10/09/2023',
    //     totalDay: 7,
    //     dayPrice: 56,
    //     totalPaid: 7 * 56,
    //     status: 'approved'
    // }
    const { carName, fromSlot, toSlot, totalDay, dayPrice, totalPaid, status, id } = bookingData
    return (
        <tr>
            <td className='border border-slate-300 text-left p-2'>
                {carName}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {fromSlot}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {toSlot}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {totalDay}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {dayPrice}
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {totalPaid}$
            </td>
            <td className='border border-slate-300 text-left p-2'>
                {status}
            </td>
        </tr>
    )
}

