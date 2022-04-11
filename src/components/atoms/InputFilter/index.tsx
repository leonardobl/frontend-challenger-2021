import React from 'react'
import { Container } from './styles'
import {MdPersonSearch} from "react-icons/md"

export const InputFilter = () => {
  return (
    <Container className='input-search-container'>
      <input type="text" placeholder='Searching'/>
      <MdPersonSearch />
    </Container>
  )
}
