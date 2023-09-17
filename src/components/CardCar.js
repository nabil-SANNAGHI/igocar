import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CardCar({ data }) {
    const { name, rentPerDay, transmission, seatingCapacity, brand, fuelType, carImage, _id } = data
    return (
        <div key={_id} className="aspect-auto p-4 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className='mb-4 pt-[60%] relative'>
                <Image className="absolute top-0 left-0 w-full h-full object-cover" src={carImage} alt={name} width="634" height="423"></Image>
            </div>
            <div className='flex justify-between gap-2 mb-2'>
                <h5 className='text-xl font-semibold text-gray-700 dark:text-white'>{name}</h5>
                <p className='font-semibold text-primary'>${rentPerDay}/day</p>
            </div>
            <div className='flex flex-wrap gap-y-2 mb-2'>
                <div className='basis-1/2 pr-2 flex items-center'>
                    <span className='mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" fill="none" viewBox="0 0 14 15"><path fill="#9333EA" d="M7.875 7.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875Zm.574.957 1.696.547a3.413 3.413 0 0 1-2.735 1.969V9.445c.438-.11.82-.383 1.04-.738Zm.301-.957c0-.41-.164-.793-.41-1.094l1.039-1.449c.684.656 1.121 1.559 1.121 2.543 0 .246-.027.465-.082.684l-1.695-.575c0-.027.027-.054.027-.109ZM7.629 6.137A1.622 1.622 0 0 0 7 6c-.246 0-.465.055-.656.137l-1.04-1.45a3.446 3.446 0 0 1 3.364 0l-1.04 1.45Zm-1.996.52c-.246.3-.383.683-.383 1.093v.11l-1.695.574C3.5 8.214 3.5 7.996 3.5 7.75c0-.984.41-1.887 1.094-2.543l1.039 1.45Zm.902 2.788v1.778a3.411 3.411 0 0 1-2.707-1.97l1.695-.546c.22.355.602.629 1.012.738ZM0 7.75c0-3.855 3.117-7 7-7 3.855 0 7 3.145 7 7 0 3.883-3.145 7-7 7-3.883 0-7-3.117-7-7Zm7 4.375a4.37 4.37 0 0 0 4.375-4.375A4.388 4.388 0 0 0 7 3.375 4.37 4.37 0 0 0 2.625 7.75 4.353 4.353 0 0 0 7 12.125Z"></path></svg>
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>{transmission}</span>
                </div>
                <div className='basis-1/2 pr-2 flex items-center'>
                    <span className='mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" fill="none" viewBox="0 0 18 15"><path fill="#9333EA" d="M6.125 7.75c1.914 0 3.5-1.559 3.5-3.5 0-1.914-1.586-3.5-3.5-3.5a3.507 3.507 0 0 0-3.5 3.5 3.49 3.49 0 0 0 3.5 3.5Zm1.367 1.313H4.73C2.105 9.063 0 11.194 0 13.82c0 .52.41.93.93.93h10.363c.52 0 .957-.41.957-.93a4.761 4.761 0 0 0-4.758-4.758Zm5.606.437h-2.024a5.6 5.6 0 0 1 2.051 4.32c0 .356-.11.657-.273.93h3.773a.881.881 0 0 0 .875-.875c0-2.406-1.969-4.375-4.402-4.375Zm-1.286-1.75a3.075 3.075 0 0 0 3.063-3.063c0-1.667-1.395-3.062-3.063-3.062-.71 0-1.34.246-1.832.629.301.601.52 1.285.52 1.996 0 .984-.328 1.887-.875 2.598.547.574 1.313.902 2.188.902Z"></path></svg>
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>{seatingCapacity} seatingCapacity</span>
                </div>
                <div className='basis-1/2 pr-2 flex items-center'>
                    <span className='mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" fill="none" viewBox="0 0 14 15"><path fill="#9333EA" d="M0 7.75c0-3.855 3.117-7 7-7 3.855 0 7 3.145 7 7 0 3.883-3.145 7-7 7-3.883 0-7-3.117-7-7Zm4.594.875h-2.79a5.289 5.289 0 0 0 4.321 4.32v-2.379L4.594 8.625Zm3.281 1.941v2.38a5.29 5.29 0 0 0 4.293-4.321h-2.79l-1.503 1.941Zm1.75-3.691h2.543C11.758 4.415 9.598 2.5 7 2.5a5.267 5.267 0 0 0-5.195 4.375h2.57l.191-.383A.841.841 0 0 1 5.332 6h3.309c.328 0 .629.191.765.492l.219.383Z"></path></svg>
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>{brand}</span>
                </div>
                <div className='basis-1/2 pr-2 flex items-center'>
                    <span className='mr-2'>
                        <svg fill="#9333EA" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <path d="M 13.324219 4.199219 L 9.78125 1.523438 C 9.269531 0.617188 8.296875 0 7.179688 0 L 3.417969 0 C 1.769531 0 0.429688 1.339844 0.429688 2.988281 L 0.429688 13.386719 C 0.429688 13.726562 0.703125 14 1.042969 14 L 9.550781 14 C 9.890625 14 10.167969 13.726562 10.167969 13.386719 L 10.167969 12.9375 C 11.609375 12.726562 12.71875 11.480469 12.71875 9.980469 L 12.71875 5.257812 C 12.796875 5.289062 12.875 5.304688 12.957031 5.304688 C 13.140625 5.304688 13.328125 5.21875 13.449219 5.058594 C 13.652344 4.789062 13.597656 4.402344 13.324219 4.199219 Z M 3.417969 1.230469 L 7.179688 1.230469 C 8.148438 1.230469 8.9375 2.019531 8.9375 2.988281 L 8.9375 5.777344 L 7.207031 5.777344 C 6.1875 4.769531 4.597656 3.742188 4.195312 3.488281 C 4.027344 3.382812 3.820312 3.363281 3.636719 3.4375 C 3.453125 3.511719 3.316406 3.671875 3.269531 3.863281 C 3.203125 4.136719 3.023438 4.902344 2.886719 5.777344 L 1.660156 5.777344 L 1.660156 2.988281 C 1.660156 2.019531 2.445312 1.230469 3.417969 1.230469 Z M 6.867188 8.457031 C 6.792969 8.636719 6.679688 8.796875 6.542969 8.929688 L 5.929688 7.574219 C 5.789062 7.265625 5.425781 7.125 5.117188 7.265625 C 4.808594 7.40625 4.671875 7.769531 4.8125 8.082031 L 5.386719 9.351562 C 4.792969 9.3125 4.253906 8.9375 4.027344 8.386719 C 3.816406 7.878906 4.015625 6.324219 4.273438 5.015625 C 5.402344 5.789062 6.664062 6.796875 6.875 7.308594 C 7.027344 7.683594 7.027344 8.089844 6.867188 8.457031 Z M 1.660156 12.769531 L 1.660156 7.007812 L 2.742188 7.007812 C 2.6875 7.734375 2.710938 8.417969 2.890625 8.851562 C 3.324219 9.90625 4.339844 10.585938 5.484375 10.585938 C 5.632812 10.585938 5.78125 10.570312 5.929688 10.546875 L 6.160156 11.0625 C 6.265625 11.289062 6.488281 11.421875 6.722656 11.421875 C 6.808594 11.421875 6.894531 11.40625 6.976562 11.367188 C 7.285156 11.226562 7.421875 10.863281 7.28125 10.554688 L 7.070312 10.085938 C 7.476562 9.800781 7.796875 9.40625 8 8.941406 C 8.261719 8.324219 8.289062 7.644531 8.070312 7.007812 L 8.9375 7.007812 L 8.9375 12.769531 Z M 10.167969 11.683594 L 10.167969 3.367188 L 11.492188 4.359375 L 11.492188 9.980469 C 11.492188 10.800781 10.925781 11.492188 10.167969 11.683594 Z M 10.167969 11.683594 " />
                        </svg>
                    </span>
                    <span className='text-gray-600 dark:text-gray-300'>{fuelType}</span>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Link href={`/cars/${_id}`} className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                    <span className="relative text-base font-semibold text-white"
                    >Get started</span>
                </Link>
            </div>
        </div>
    )
}
