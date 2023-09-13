import React from 'react'
import Container from '@/components/Container'
import CardCar from '@/components/CardCar'
import { getCars } from '@/lib/api'

async function Catalog() {
    const getCarsData = await getCars()
    const cars = getCarsData.data
    return (
        <div className='pt-32 pb-32'>
            <Container>
                <div className='md:columns-2 lg:columns-3 gap-8 space-y-8'>
                    {cars.map((car) => <CardCar data={car} key={car.id}></CardCar>)}
                </div>
            </Container>
        </div>
    )
}
export default Catalog
