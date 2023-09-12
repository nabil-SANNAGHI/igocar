'use client'
import React, { useEffect, useState } from 'react'
import ProfilCar from '@/components/ProfilCar'
// import carsData from '@/helpers/data'
import AddNewCar from '@/components/AddNewCar'
import CarNewEdit from '@/components/CarNewEdit'
import { getCars } from '@/lib/api'
export default function ProfilCars() {
    const [carsData, setCarsData] = useState([])
    const [updateData, setUpdateData] = useState(false)
    useEffect(() => {
        async function getdata() {
            const data = await getCars();
            setCarsData(data.data)
        }

        getdata();
    }, [updateData])
    return (

        <div>
            <AddNewCar />
            <table className="table-fixed w-full border border-slate-400">
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='border border-slate-300 text-left p-2'>Car Image</th>
                        <th className='border border-slate-300 text-left p-2'>Car Name</th>
                        <th className='border border-slate-300 text-left p-2'>Brand</th>
                        <th className='border border-slate-300 text-left p-2'>Fuel Type</th>
                        <th className='border border-slate-300 text-left p-2'>Price/day</th>
                        <th className='border border-slate-300 text-left p-2'>Passengers</th>
                        <th className='border border-slate-300 text-left p-2'>Transmission</th>
                        <th className='border border-slate-300 text-left p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {carsData && carsData.map((car) => <ProfilCar updateDataAction={{ updateData, setUpdateData }} key={car._id} carData={car} />)}
                </tbody>
            </table>
        </div>

    )
}
