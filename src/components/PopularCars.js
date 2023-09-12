import React from 'react'
import Container from './Container'
import CardCar from './CardCar'
import { getCars } from '@/lib/api'
export default async function PopularCars() {
    const getCarsData = await getCars()
    const cars = getCarsData.data

    return (
        <div id="popularCars">
            <Container>
                <div className="mb-20 space-y-4 px-6 md:px-0">
                    <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                        Our Famous Car
                    </h2>
                </div>
                <div className='md:columns-2 lg:columns-3 gap-8 space-y-8'>
                    {cars.map((car, key) => <CardCar data={car} key={key}></CardCar>)}
                </div>
            </Container>
        </div>
    )
}
