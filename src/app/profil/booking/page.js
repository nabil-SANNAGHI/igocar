import React from 'react'
import ProfilBooking from '@/components/ProfilBooking'
// import { booking } from '@/helpers/data'
import { bookings } from '@/lib/api'
import { cookies } from 'next/headers'
import { getUserIdFromCookie } from '@/helpers/helpers'

export default async function BookingList() {
    const userId = await getUserIdFromCookie(cookies())
    const bookingsData = await bookings(userId)
    return (
        <div>
            <table className="table-fixed w-full border border-slate-400">
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='border border-slate-300 text-left p-2'>booking ID</th>
                        <th className='border border-slate-300 text-left p-2'>From</th>
                        <th className='border border-slate-300 text-left p-2'>To</th>
                        <th className='border border-slate-300 text-left p-2'>Total days</th>
                        <th className='border border-slate-300 text-left p-2'>Price/day</th>
                        <th className='border border-slate-300 text-left p-2'>Total paid</th>
                        <th className='border border-slate-300 text-left p-2'>status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingsData.data.map((booked) => <ProfilBooking key={booked._id} bookingData={booked} />)}
                </tbody>
            </table>
        </div>
    )
}
