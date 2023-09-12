import React from 'react'
import carsData from '@/helpers/data'
import Container from '@/components/Container';
import Image from 'next/image'
import DecorationBlock from '@/components/DecorationBlock';
export default function Confirmation() {
    const { carName, price, transmission, passengers, brand, feul, imageUrl, id } = carsData[1]
    return (
        <div className='pt-32 pb-32'>
            <DecorationBlock />
            <Container>
                <div className='max-w-2xl mx-auto'>
                    <div className="p-5 shadow-xl relative rounded-lg border border-slate-200">
                        <h1 className='text-xl font-semibold text-black text-primary text-center mb-10'>Booking Confirmation</h1>
                        <h2 className='text-lg font-semibold text-black text-center mb-10'>Your are booked : {carName}, {brand}</h2>
                        <div className="mb-10">
                            <Image src={imageUrl} alt={carName} width="634" height="423"></Image>
                        </div>
                        <p className='text-xl text-center'>from: <b className='text-primary'>23 sep 2023</b>, to: <b className='text-secondary'>25 sep 2023</b></p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
