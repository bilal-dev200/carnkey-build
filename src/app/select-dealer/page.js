"use client"
import PrequalifiedCard from '@/components/FinancingComponents/PrequalifiedCard';
import Dealer from '@/components/WebsiteComponents/MyGarageComponents/Dealer';
import VechicleDetail from '@/components/WebsiteComponents/MyGarageComponents/VechicleDetail';
// import Dealer from '@/components/WebsiteComponents/MyGarageComponents/dealer';
// import VechicleDetail from '@/components/WebsiteComponents/MyGarageComponents/vechicleDetail';
import React, { useState } from 'react'


const page = () => {

  return (
    <>
    {/* <Dealer/> */}
    <Dealer/>
    {/* <VechicleDetail/> */}
    <VechicleDetail/>
    </>
  )
}

export default page