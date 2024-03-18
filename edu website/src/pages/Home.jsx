
import Header from '../common/Header'
import HomeSlider from '../common/HomeSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import CardWhatWeDo from '../common/CardWhatWeDo'
import React, { useState } from 'react'
import TeachersSlider from '../common/TeachersSlider'
import bgimg from '../images/2 (2).png'
import Footer from '../common/Footer'




export default function Home() {

  const courseCategories = [1, 2, 3, 4, 5, 6, 7, 8];
  const [activeTab, setActiveTab] = useState(1);
  const handleClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <Header />
      <HomeSlider />

      {/* // ------------------CARD SECTION BEGINS HERE------------------// */}

      <section className=' w-[1320px] justify-center mx-auto  '>
        <div >
          <h1 className=' text-[34px] mx-auto justify-center text-center  mt-14 font-semibold ' >Via School Categories Courses</h1>
          <p className=' text-center text-[17px]  '>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>

          <div className='grid grid-cols-4 gap-6 mt-7'>
            {courseCategories.map((category) => (
              <div key={category} class="p-6 py-12 mt-5 bg-white border text-center  hover:border-blue-600 duration-[1s]  rounded-[5px] border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                <FontAwesomeIcon icon={faPenToSquare} className='text-[35px] ' style={{ color: "#2441E7" }} />
                <h2 className='text-[20px] font-bold my-3' style={{ color: "#2441E7" }}> Design</h2>
                <p className='text-[17px]'>Over 800 Courses</p>
              </div>
            ))}
          </div>

          <div className='flex my-12 justify-center items-center mb-[60px]'>
            <button className='border-blue-700 border-[2px] text-[#2441E7] py-3 px-[60px] rounded-[40px]'>View All Courses</button>
          </div>
        </div>
      </section>

      {/* // ------------------SECTION ( What We Do ) BEGINS HERE------------------// */}

      <section>
        <hr />
        <div className=' w-[1320px] justify-center mx-auto  '>
          <h1 className=' text-[34px] mx-auto justify-center text-center  mt-14 font-semibold ' >What We Do</h1>
          <p className=' text-center text-[17px]  '>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>

          <div className='grid grid-cols-4 gap-6 mt-9 pb-12'>
            <CardWhatWeDo />
          </div>
        </div>
      </section>

      {/* // ------------------SECTION ( Browse Our Top Courses ) BEGINS HERE------------------// */}

      <section>
        <div className=' w-full justify-center mx-auto bg-gray-100 '>
          <h1 className=' text-[34px] mx-auto justify-center text-center  pt-14 font-semibold ' >Browse Our Top Courses</h1>
          <p className=' text-center text-[17px] w-[700px] py-4 mx-auto items-center '>Cum doctus civibus efficiantur in imperdiet deterruisCum doctus civibus efficiantur in imperdiet deterruisset.</p>

          <div className="p-8">
            <div className="max-w-md mx-auto">
              <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
                <button
                  className="flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300"
                  onClick={() => handleClick(1)}
                  style={{ backgroundColor: activeTab === 1 ? '#2b6777' : '#f0f0f0', color: activeTab === 1 ? 'white' : 'black' }}
                >
                  All
                </button>
                <button
                  className="flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300"
                  onClick={() => handleClick(2)}
                  style={{ backgroundColor: activeTab === 2 ? '#2b6777' : '#f0f0f0', color: activeTab === 2 ? 'white' : 'black' }}
                >
                  Design
                </button>
                <button
                  className="flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300"
                  onClick={() => handleClick(3)}
                  style={{ backgroundColor: activeTab === 3 ? '#2b6777' : '#f0f0f0', color: activeTab === 3 ? 'white' : 'black' }}
                >
                  3D + Animation
                </button>
              </div>


            </div>
            <div className='w-[1320px] justify-center mx-auto '>
              {activeTab === 1 && (
                <div className="transition-all duration-300 bg-white p-4 rounded-lg ">

                </div>
              )}
              {activeTab === 2 && (
                <div className="transition-all duration-300 bg-white p-4 rounded-lg ">
                  <h2 className="text-2xl font-semibold mb-2 text-blue-600">Section 2 Content</h2>
                  <p className="text-gray-700">Proin non velit ac purus malesuada venenatis sit amet eget lacus. Morbi quis purus id ipsum ultrices aliquet Morbi quis.</p>
                </div>
              )}
              {activeTab === 3 && (
                <div className="transition-all duration-300 bg-white p-4 rounded-lg ">
                  <h2 className="text-2xl font-semibold mb-2 text-blue-600">Section 3 Content</h2>
                  <p className="text-gray-700">Fusce hendrerit urna vel tortor luctus, nec tristique odio tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                </div>
              )}
            </div>
          </div>
          );
        </div>
      </section>

      {/* // ------------------SECTION ( Teachers ) BEGINS HERE------------------// */}

      <section title='teachers'>
        <div className=' w-[1320px] justify-center mx-auto  '>
          <h1 className=' text-[34px] mx-auto justify-center text-center  mt-14 font-semibold ' >Teachers</h1>
          <p className=' text-center text-[17px]  '>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          <TeachersSlider />
        </div>
      </section>


      {/* // ------------------SECTION ( SIGNUP TO NEWSLETTER TO GET IT) BEGINS HERE------------------// */}

      <section title='SIGNUP TO NEWSLETTER TO GET IT' className=' w-full bg-no-repeat lg:h-[550px]  relative'>
        <div className='bg-[#192675] lg:py-[100px] py-[50px] px-[20px] lg:h-full w-full  lg:absolute top-0 left-0'>
          <img src={bgimg} alt="" className='absolute top-[10px] opacity-[0.2] lg:block hidden' />
          <div className='lg:max-w-[1300px] w-full m-auto font-["Nunito"]'>
            <div className='grid lg:grid-cols-2 gap-10 relative z-[99]'>
              <div className='text-white'>
                <p className=' text-center lg:text-left pb-3 lg:pb-0 '>Get 100 Online Courses for Free</p>
                <h3 className='font-bold lg:text-[43px] text-[28px] text-center lg:text-left tracking-[3px]'>REGISTER TO GET IT</h3>

                <div className='grid lg:grid-cols-4 grid-cols-2 text-center gap-8 mt-[50px] lg:mt-[100px] lg:mb-[50px] '>
                  <div className=' border-2 py-2 lg:py-0 rounded-lg'>
                    <h3 className='lg:text-[36px] text-[25px]'>52</h3>
                    <h2 className='lg:text-[25px] text-[25px]'>Days</h2>
                  </div>
                  <div className=' border-2 py-2 lg:py-0 rounded-lg'>
                    <h3 className='lg:text-[36px] text-[25px]'>04</h3>
                    <h2 className='lg:text-[25px] text-[25px]'>Hours</h2>
                  </div>
                  <div className=' border-2 py-2 lg:py-0 rounded-lg'>
                    <h3 className='lg:text-[36px] text-[25px]'>52</h3>
                    <h2 className='lg:text-[25px] text-[25px]'>Minutes</h2>
                  </div>
                  <div className=' border-2 py-2 lg:py-0 rounded-lg'>
                    <h3 className='lg:text-[36px] text-[25px]'>52</h3>
                    <h2 className='lg:text-[25px] text-[25px]'>Seconds</h2>
                  </div>
                </div>
              </div>
              <div className='text-white text-center lg:text-left'>
                <p className='pb-3 lg:pb-0 '>SIGNUP TO NEWSLETTER TO GET IT</p>
                <h3 className=' lg:text-[25px] text-[30px] tracking-[1px]'>THE COMPLETE WEB DEVELOPER COURSE</h3>
                <form action="" className='lg:w-[85%] mt-[40px] lg:mt-[70px]'>
                  <input type="text" className='border-b-2 mb-[40px] bg-inherit w-full focus:outline-0 text-white placeholder:text-white pb-3 ' placeholder='Your Name' />
                  <input type="text" className='border-b-2 bg-inherit w-full focus:outline-0 text-white placeholder:text-white pb-3 ' placeholder='Email address' />
                  <input type="submit" value="Get it Now" className='border-[3px] duration-500 hover:bg-white hover:text-[#192675] px-[45px]  mt-[50px] py-[10px] text-[17px] rounded-[50px]' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer/>
    </>
  )
}
