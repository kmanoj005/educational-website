import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CardWhatWeDo() {

    let CardWhatWeDo = [
        {
            color: "rgb(240,208,120)",
            icon: <FontAwesomeIcon icon={faSquarePlus} className='text-[40px] pb-4' />,
            head: "Create Account",
            para: "Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo."
        },
        {
            color: "rgb(13, 47, 129)",
            icon: <FontAwesomeIcon icon={faSquarePlus} className='text-[40px] pb-4' />,
            head: "Create Account",
            para: "Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo."
        },
        {
            color: "rgb(0, 97, 255)",
            icon: <FontAwesomeIcon icon={faSquarePlus} className='text-[40px] pb-4' />,
            head: "Create Account",
            para: "Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo."
        },
        {
            color: "rgb(241, 67, 45)",
            icon: <FontAwesomeIcon icon={faSquarePlus} className='text-[40px] pb-4' />,
            head: "Create Account",
            para: "Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo."
        },
    ]

    return (
        <>
            {CardWhatWeDo.map((v, i) => (  
                <div key={i} style={{ backgroundColor: v.color }} className='rounded-[5px] py-[60px] text-white px-[40px] text-left'>
                    {v.icon}
                    <h2 className='pb-4'>{v.head}</h2>
                    <p>{v.para}</p>
                </div>
            ))}
        </>
    )
}

export default CardWhatWeDo
