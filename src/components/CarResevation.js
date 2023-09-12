'use client'
import React from 'react'
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Link from 'next/link';
import { useRouter } from "next/navigation";
export default function CarResevation() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: 'selection'
        }
    ]);
    const router = useRouter();
    function handelChange(item) {
        setState([item.selection])
    }
    function handelSubmit() {
        router.push('/confirmation')
    }
    return (
        <div className='flex justify-center flex-wrap'>
            <div className="basis-full mb-5 flex justify-center">
                <DateRangePicker
                    onChange={handelChange}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    minDate={addDays(new Date(), 0)}
                />
            </div>
            <div className="basis-full flex justify-center mb-10">
                <button className='relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max' onClick={handelSubmit}>
                    <span className="relative text-base font-semibold text-white"
                    >Book now</span>
                </button>
            </div>
            <div className="basis-full flex justify-center mb-10">
                <Link href={`/cars`} className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-secondary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                    <span className="relative text-base font-semibold text-white"
                    >Explore card</span>
                </Link>
            </div>

        </div>
    )
}
