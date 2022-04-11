import React from 'react'
import * as S from "./styles"


const Header = () => {
  return (
    <S.Container>
      <S.WrapLogo>
        <img src="assets/imgs/logo_final.png" alt="" />
        <h1>Clinic Fake</h1>
      </S.WrapLogo>
      <img src="assets/imgs/user.png" alt="" />
    </S.Container>
  )
}


export default Header