import React from 'react'
import Lottie from 'lottie-web'
import { Container } from "./styles"

const AnimateClinicLogo = () => {

  const container = document.querySelector(".lottie-container") as HTMLDivElement

  React.useEffect( ()=>{
    Lottie.loadAnimation({
      container,
      autoplay: true,
      loop: true,
      renderer: "svg",
      path: "assets/imgs/doctor_lottie.json"
    })
  }, [] )

  return <Container className='lottie-container' />
}

export default AnimateClinicLogo
