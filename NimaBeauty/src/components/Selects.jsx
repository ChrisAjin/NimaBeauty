import React from 'react'

import Microshading from '../assets/Microshading.jpg'
import Microblading from '../assets/Microblading.jpg'
import Magiclips from '../assets/Magiclips.jpg'
import Rehaussementdecils from '../assets/Rehaussementdecils.jpg'
import Rehaussementetteinturedescils from '../assets/Rehaussementetteinturedescils.jpg'
import Microblading2 from '../assets/Microblading2.jpg'
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={Microshading} text='Microshading' />
    <SelectsCard bg={Microblading} text='Microblading' />
    <SelectsCard bg={Magiclips} text='Magiclips' />
    <SelectsCard bg={Rehaussementdecils} text='Rehaussement de cils' />
    <SelectsCard bg={Rehaussementetteinturedescils} text='Rehaussement et teinture des cils' />
    <SelectsCard bg={Microblading2} text='Microblading2' />


    </div>
  )
}

export default Selects
