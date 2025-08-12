import React from 'react'
import Services from '../components/Services'
import { Helmet } from 'react-helmet'

const Service = () => {
  return (
    <div>
       <Helmet>
                  <title>Our Services | CaddCraft Technologies</title>
                  <meta name="description" content="CaddCraft the best company in Himachal Pradesh" />
                  <meta name="keywords" content="autocad , digital marketing , Web devlopment" />
            </Helmet>
      <Services />
          </div>
  )
}

export default Service