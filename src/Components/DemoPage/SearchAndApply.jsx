import React from 'react';
import logojob from '../../assets/Nextjoblogo.png';

const SearchAndApply = () => {
  return (
    <div className='min-h-screen bg-transparent relative flex flex-col items-center p-6' style={{marginBottom:"16rem"}}>
      {/* Navbar */}
      <nav className='w-full max-w-7xl flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg'>
        <div className='text-xl font-bold relative text-blue-700 flex items-center'>
          <span className='bg-blue-700 text-white px-3 py-2 rounded-lg flex items-center space-x-2'>
            <img src={logojob} alt='NextJobs Logo' className='w-8 h-8' />
            <span>NextJobs</span>
          </span>
        </div>
        <ul className='hidden md:flex space-x-6 text-gray-700 font-medium'>
          <li className='hover:text-blue-700 cursor-pointer'>Home</li>
          <li className='hover:text-blue-700 cursor-pointer'>About Us</li>
          <li className='hover:text-blue-700 cursor-pointer'>Jobs</li>
          <li className='hover:text-blue-700 cursor-pointer'>Contact</li>
        </ul>
        <button className='md:hidden text-blue-700 focus:outline-none'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <div className='text-center mt-12 max-w-4xl px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-blue-900'>Search, Find, and Apply!</h1>
        <p className='text-gray-700 mt-4 text-lg md:text-xl font-semibold'>
          A year from now, you may wish you had started today.
        </p>
      </div>

      {/* Search Box */}
      <div className='bg-white shadow-md p-6 rounded-lg mt-8 w-full max-w-3xl'>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
          <input
            type='text'
            placeholder='Job title or keyword'
            className='border px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type='text'
            placeholder='Location'
            className='border px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button className='bg-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition duration-300'>
            Find Now
          </button>
        </div>
      </div>

      {/* Additional Features (Optional) */}
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6  max-w-7xl w-full px-4'>
        <div className='bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300'>
          <h2 className='text-xl font-bold text-blue-900'>Easy Apply</h2>
          <p className='text-gray-700 mt-2'>Apply to jobs with just one click.</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300'>
          <h2 className='text-xl font-bold text-blue-900'>Job Alerts</h2>
          <p className='text-gray-700 mt-2'>Get notified about new job openings.</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300'>
          <h2 className='text-xl font-bold text-blue-900'>Career Advice</h2>
          <p className='text-gray-700 mt-2'>Expert tips to boost your career.</p>
        </div>
      </div>
    </div>
  );
};

export default SearchAndApply;