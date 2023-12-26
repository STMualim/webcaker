import React from 'react'
import { IoSearch } from 'react-icons/io5'


export default function Filter() {
  return (
    <div className='mt-4'>
        <div className='border-2 flex p-2 items-center rounded-md'>
            <input className='w-full text-base border-none outline-none' type="text" placeholder='Search job...' />
            <IoSearch className="cursor-pointer" size={25} />
        </div>
        {/* dropdown 1 */}
        <fieldset className='mt-3 overflow-x-scroll pb-2 flex flex-row gap-3 md:overflow-x-auto'>
            <legend className='font-semibold'>Filter</legend>
            <select name="city" id="city" className='mt-2 p-2 text-sm md:text-base border-2 rounded-md'>
                <option value="all" selected>Kota</option>
                <option value="jakarta" >Jakarta</option>
                <option value="bandung">Bandung</option>
                <option value="bekasi">Bekasi</option>
                <option value="tangerang">Tangerang</option>
            </select>
            <select name="city" id="city" className='mt-2 p-2 text-sm md:text-base border-2 rounded-md'>
                <option value="jakarta" selected>Relevan</option>
                <option value="jakarta">Baru</option>
                <option value="bandung">Remote</option>
            </select>
            <select name="city" id="city" className='mt-2 p-2 text-sm md:text-base border-2 rounded-md'>
                <option value="jakarta" selected>Experience</option>
                <option value="bandung">Senior</option>
                <option value="bekasi">Middle</option>
                <option value="tangerang">Junior</option>
            </select>
        </fieldset>
    </div>
  )
}
