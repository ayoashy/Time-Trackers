import React from 'react'
import ellipsis from '../assets/icon-ellipsis.svg'
import exercise from '../assets/icon-exercise.svg'
import play from '../assets/icon-play.svg'
import self from '../assets/icon-self-care.svg'
import socials from '../assets/icon-social.svg'
import study from '../assets/icon-study.svg'
import work from '../assets/icon-work.svg'
import favicon from '../assets/favicon-32x32.png'
import jeremy from '../assets/image-jeremy.png'

const TimeTracker = () => {
  // Returning Div
  return (
    <div>
      {/* Div Root */}
      <div className='bg-[#0d1323]  py-5  grid h-auto   md:h-screen md:flex font-mont text-slate-50 md:justify-center  md:py-0 md:px-0 z-20 '>
        {/* first card */}
        <div className='bg-[#1d204b] h-[200px] w-[330px] rounded-xl mx-auto md:h-[350px] md:w-[230px] md:my-auto '>
          {/* profile card */}
          <div className='bg-[#5746ea] h-[150px] w-[330px] rounded-xl flex justify-center items-center space-x-6 md:h-[250px] md:w-[230px] md:flex-col md:text-2xl md:space-y-4 md:items-start'>
            <div>
              <img
                src={jeremy}
                alt=''
                className='w-[50px] md:w-[70px] md:ml-6 '
              />
            </div>
            <div className='text-slate-100 md:my-auto '>
              <h3 className='text-xl font-medium md:text-base md:font-thin md:ml-1'>
                Report for
              </h3>
              <h1 className=' font-bold text-2xl md:text-5xl md:font-thin'>
                Jeremy Robson
              </h1>
            </div>
          </div>
          <div className='flex justify-between mt-3 px-6 text-gray-500 md:flex-col md:space-y-1  '>
            <h1 className='hover:text-slate-200'>Daily</h1>
            <h1 className='text-slate-200'>Weekly</h1>
            <h1 className='text-gray-500 hover:text-slate-200'>Monthly</h1>
          </div>
        </div>
        {/* second div holder */}
        <div className='grid gap-8 mt-8 mx-auto lg:h-[350px]  md:grid-cols-2 md:gap-0 md:gap-x-6 md:gap-y-4  lg:grid-cols-3 md:mt-auto md:my-auto md:h-auto text-gray-500 '>
          {/* first of second */}
          <div className='bg-[#ff8b64] group relative h-[175px] w-[330px] rounded-xl md:h-[165px] md:w-[230px]  hover:text-gray-100   '>
            <div className='bg-[#1d204b] h-[140px] w-[330px] rounded-xl absolute bottom-0 z-10 px-6 flex space-x-4 items-center justify-between md:h-[130px] md:w-[230px] '>
              <div className='flex flex-col space-y-1 md:space-y-0 '>
                <h3 className=' font-bold md:mt-[-16px] md:font-light md:text-sm group-hover:scale-105 '>
                  Work
                </h3>
                <h1 className='text-3xl md:text-5xl md:translate-y-[-5px] group-hover:scale-110 '>
                  32hrs
                </h1>
              </div>
              <div className='flex flex-col space-y-4 '>
                <div>
                  <img
                    src={ellipsis}
                    alt=''
                    className='h-[6px] ml-[120px] md:h-[5px] md:ml-[25px] md:mt-[-16px] '
                  />
                </div>
                <h3 className='font-bold md:text-xs md:font-thin  md:w-auto md:translate-y-8 md:ml-[-136px] group-hover:scale-105 '>
                  Last Week - 36hrs
                </h3>
              </div>
            </div>
            <div className='absolute right-4 w-12'>
              <img src={work} alt='' />
            </div>
          </div>
          {/* second of second */}
          <div className='bg-[#56c2e6] relative h-[175px] w-[330px] rounded-xl md:h-[165px] md:w-[230px] group   hover:text-gray-100 '>
            <div className='bg-[#1d204b] h-[140px] w-[330px] rounded-xl absolute bottom-0 z-10 px-6 flex space-x-4 items-center justify-between md:h-[130px] md:w-[230px]'>
              <div className='flex flex-col space-y-1 md:space-y-0 '>
                <h3 className=' font-bold  md:mt-[-16px] md:font-light md:text-sm group-hover:scale-105 '>
                  Play
                </h3>
                <h1 className='text-3xl md:text-5xl md:translate-y-[-5px] group-hover:scale-110'>
                  10hrs
                </h1>
              </div>
              <div className='flex flex-col space-y-4 '>
                <div>
                  <img
                    src={ellipsis}
                    alt=''
                    className='h-[6px] ml-[120px] md:h-[5px] md:ml-[25px] md:mt-[-16px] '
                  />
                </div>
                <h3 className='font-bold md:text-xs md:font-thin  md:w-[100px] md:translate-y-8 md:ml-[-136px] group-hover:scale-105'>
                  Last Week - 8hrs
                </h3>
              </div>
            </div>
            <div className='absolute right-4 w-12'>
              <img src={play} alt='' />
            </div>
          </div>
          {/* third of second */}
          <div className='bg-[#ff5e7d] relative h-[175px] w-[330px] rounded-xl md:h-[165px] md:w-[230px] group  hover:text-gray-100 '>
            <div className='bg-[#1d204b] h-[140px] w-[330px] rounded-xl absolute bottom-0 z-10 px-6 flex space-x-4 items-center justify-between md:h-[130px] md:w-[230px]'>
              <div className='flex flex-col space-y-1 md:space-y-0 '>
                <h3 className=' font-bold md:mt-[-16px] md:font-light md:text-sm group-hover:scale-105'>
                  Study
                </h3>
                <h1 className='text-3xl md:text-5xl md:translate-y-[-5px] group-hover:scale-110'>
                  4hrs
                </h1>
              </div>
              <div className='flex flex-col space-y-4 '>
                <div>
                  <img
                    src={ellipsis}
                    alt=''
                    className='h-[6px] ml-[120px] md:h-[5px] md:ml-[25px] md:mt-[-16px] '
                  />
                </div>
                <h3 className='font-bold md:text-xs md:font-thin  md:w-[100px] md:translate-y-8 md:ml-[-136px] group-hover:scale-105'>
                  Last Week - 7hrs
                </h3>
              </div>
            </div>
            <div className='absolute right-4 w-12'>
              <img src={study} alt='' />
            </div>
          </div>
          {/* fourth of second */}
          <div className='bg-[#4bcf83] relative h-[175px] w-[330px] rounded-xl md:h-[165px] md:w-[230px] group  hover:text-gray-100'>
            <div className='bg-[#1d204b] h-[140px] w-[330px] rounded-xl absolute bottom-0 z-10 px-6 flex space-x-4 items-center justify-between md:h-[130px] md:w-[230px]'>
              <div className='flex flex-col space-y-1 md:space-y-0 '>
                <h3 className=' font-bold md:mt-[-16px] md:font-light md:text-sm group-hover:scale-105'>
                  Exercise
                </h3>
                <h1 className='text-3xl md:text-5xl md:translate-y-[-5px] group-hover:scale-110'>
                  4hrs
                </h1>
              </div>
              <div className='flex flex-col space-y-4 '>
                <div>
                  <img
                    src={ellipsis}
                    alt=''
                    className='h-[6px] ml-[120px] md:h-[5px] md:ml-[25px] md:mt-[-16px] '
                  />
                </div>
                <h3 className='font-bold md:text-xs md:font-thin  md:w-[100px] md:translate-y-8 md:ml-[-136px] group-hover:scale-105'>
                  Last Week - 5hrs
                </h3>
              </div>
            </div>
            <div className='absolute right-4 w-12'>
              <img src={exercise} alt='' />
            </div>
          </div>
          {/* fifth of second */}
          <div className='bg-[#7235d1] relative h-[175px] w-[330px] rounded-xl md:h-[165px] md:w-[230px] group hover:text-gray-100 '>
            <div className='bg-[#1d204b] h-[140px] w-[330px] rounded-xl absolute bottom-0 z-10 px-6 flex space-x-4 items-center justify-between md:h-[130px] md:w-[230px]'>
              <div className='flex flex-col space-y-1 md:space-y-0 '>
                <h3 className=' font-bold md:mt-[-16px] md:font-light md:text-sm group-hover:scale-105'>
                  Social
                </h3>
                <h1 className='text-3xl md:text-5xl md:translate-y-[-5px] group-hover:scale-110'>
                  5hrs
                </h1>
              </div>
              <div className='flex flex-col space-y-4 '>
                <div>
                  <img
                    src={ellipsis}
                    alt=''
                    className='h-[6px] ml-[120px] md:h-[5px] md:ml-[25px] md:mt-[-16px] '
                  />
                </div>
                <h3 className='font-bold md:text-xs md:font-thin  md:w-auto md:translate-y-8 md:ml-[-136px] group-hover:scale-105'>
                  Last Week - 10hrs
                </h3>
              </div>
            </div>
            <div className='absolute right-4 w-12'>
              <img src={socials} alt='' />
            </div>
          </div>
          {/* sixth of second */}
          <div className='bg-[#f1c75b] relative h-[175px] w-[330px] rounded-xl md:h-[165px] md:w-[230px] group  hover:text-gray-100'>
            <div className='bg-[#1d204b] h-[140px] w-[330px] rounded-xl absolute bottom-0 z-10 px-6 flex space-x-4 items-center justify-between md:h-[130px] md:w-[230px]'>
              <div className='flex flex-col space-y-1 md:space-y-0 '>
                <h3 className=' font-bold md:mt-[-16px] md:font-light md:text-sm group-hover:scale-105'>
                  Self Care
                </h3>
                <h1 className='text-3xl md:text-5xl md:translate-y-[-5px] group-hover:scale-110'>
                  2hrs
                </h1>
              </div>
              <div className='flex flex-col space-y-4 '>
                <div>
                  <img
                    src={ellipsis}
                    alt=''
                    className='h-[6px] ml-[120px] md:h-[5px] md:ml-[25px] md:mt-[-16px] '
                  />
                </div>
                <h3 className='font-bold md:text-xs md:font-thin  md:w-[100px] md:translate-y-8 md:ml-[-136px] group-hover:scale-105'>
                  Last Week - 2hrs
                </h3>
              </div>
            </div>
            <div className='absolute right-4 w-12'>
              <img src={self} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeTracker
