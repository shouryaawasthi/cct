import React from 'react'
import Services from '../components/Services'
import { Helmet } from 'react-helmet'

const Service = () => {
  return (
    <div>
      <Helmet>
        <title>Our Services | CaddCraft Technologies</title>
        <meta
          name="description"
          content="Explore CaddCraft Technologies services including AutoCAD training, Digital Marketing, Web Development, Revit, and other job-ready professional courses in Himachal Pradesh."
        />
        <meta
          name="keywords"
          content="CaddCraft services, AutoCAD training, Digital Marketing services, Web Development training, Revit training, professional courses Himachal Pradesh"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://caddctech.in/services" />
      </Helmet>
      <Services />
    </div>
  )
}

export default Service