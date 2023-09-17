import React from 'react'
import Profiluser from '@/components/Profiluser'
import { getUsers } from '@/lib/api'
export default async function ProfilUsers() {
    const usersData = await getUsers()
    const users = usersData.data
    return (
        <div>
            <table className="table-fixed w-full border border-slate-400">
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='border border-slate-300 text-left p-2'>name</th>
                        <th className='border border-slate-300 text-left p-2'>email</th>
                        <th className='border border-slate-300 text-left p-2'>created At</th>
                        <th className='border border-slate-300 text-left p-2'>updated At</th>
                        <th className='border border-slate-300 text-left p-2'>status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <Profiluser key={user.id} userData={user} />)}
                </tbody>
            </table>
        </div>
    )
}
