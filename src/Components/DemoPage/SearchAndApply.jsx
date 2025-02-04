import React from 'react'
import logojob from '../../assets/Nextjoblogo.png'
const SearchAndApply = () => {
  return (
    <div className='min-h-screen bg-transparent flex flex-col items-center p-6'>
      <nav className='w-full flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg'>
        <div className='text-xl font-bold relative text-blue-700 flex items-center'>
            
            <span className='bg-blue-700 text-white px-2 py-1 rounded-lg mr-2 flex justify-center align-center' >
            <img src={logojob} className='w-12' style={{backgroundSize:"cover",width:"40px"}}/>
            NextJobs
            </span>
        </div>
        {/* <ul className='flex space-x-6 text-gray-700 font-medium'>
            <li className='border-b-2 border-blue-700 pb-1'>Home</li>
            <li>About Us</li>
            <li>Job</li>
            <li>Contact</li>
        </ul> */}
      </nav>
      {/* Hero section */}
      <div className='text-center  mt-12'>
        <h1 className='text-4xl font-bold text-blue-900 '>Search, Find, and Apply!</h1>
        <p className='text-gray-700 mt-4 max-w-2xl text-xl font-semibold mx-auto'> A year from now, you may wish you had started today.
        </p>
      </div>
      {/* search box */}
      <div className='bg-white shadow-md p-6 rounded-lg flex mt-8 space-x-4'>
      <input
        type='text'
        placeholder='job title or keyword'
        className='border px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <input
        type='text'
        placeholder='location'
        className='border px-4 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <button className='bg-blue-700 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800'> Find Now</button>
      </div>
     
    </div>
  )
}

export default SearchAndApply