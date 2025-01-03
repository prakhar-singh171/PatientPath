import React from 'react'
import Header from '../components/Header'

import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

export function Home() {
    

    return (
       <div>
        <Header />
        <SpecialityMenu />
        <TopDoctors />
        <Banner />
       
       
       </div>
    )
}
