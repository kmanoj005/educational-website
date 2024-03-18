import React from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { teachersData } from './TeachersData'


export default function TeachersSlider() {

  let slideTeamData = teachersData

  const setting2 = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
    ],
  }


  return (
    <>
      <Slider {...setting2}>
        {slideTeamData.map((item, index) => (
          <div key={index} className='w-full mb-9 '>
            <div className='w-[150px] m-auto  h-[150px] rounded-[50%] pt-5 overflow-hidden'>
              <img src={item.bg} alt="" />
            </div>
            <ul className='flex justify-center text-[13px] text-yellow-400 gap-2 mt-5 mb-2'>
              <li><FontAwesomeIcon icon={faStar} /></li>
              <li><FontAwesomeIcon icon={faStar} /></li>
              <li><FontAwesomeIcon icon={faStar} /></li>
              <li><FontAwesomeIcon icon={faStar} /></li>
              <li><FontAwesomeIcon icon={faStar} /></li>
            </ul>
            <h1 className='text-[19px] text-center'>Member Name</h1>
          </div>
        ))}
      </Slider>
    </>
  )
}
