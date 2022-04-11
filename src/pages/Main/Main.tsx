import React from 'react';
import * as S from "./styles"
import { GlobalContext } from "../../context/GlobalContext"
import Header from "../../components/organisms/Header"
import { InputFilter } from '../../components/atoms/InputFilter';
import axios from 'axios';



export function Main() {
  
  const { dataUser, setDataUser } = React.useContext( GlobalContext )
  const [currentPage, setCurrentPage] = React.useState(0)

  

  async function getData(page=0, results=50){
    try {
      const {data} = await axios.get(`https://randomuser.me/api/?page=${page}&results=${results}&seed=abc`)
      return data.results
    } catch (error) {
      console.log(error)
    } finally{

    }
  }

  async function updateDataUser() {
    const result = await getData()
    setDataUser(result)
  }


  React.useEffect(()=>{
    updateDataUser()
  }, []) 
  
  

  return (
    <S.Container>
      <Header />
      <S.WrapperContent>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laboriosam omnis a consectetur odio! Nisi repellendus laborum vel optio quas necessitatibus animi consequatur? Sit, eos ullam qui repudiandae deserunt eaque.</h3>
        <InputFilter />
      </S.WrapperContent>
    </S.Container>
  );
}

