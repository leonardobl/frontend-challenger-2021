import React, { ReactElement } from 'react'

interface IDataProps {
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  },
  name: {
    first: string,
    last: string,
    title: string
  },
  email: string,
  gender: string,
  dob: {
    age: number,
    date: string
  },
  cell: string,
  phone: string,
  nat: string,
  location: {
    city: string,
    coordinates: {
      latitude: string,
      longitude: string
    },
    country: string,
    postcode: number,
    state: string,
    street: {
      name: string,
      number: number
    },
  },
  id: {
    name: string,
    value: string
  },
  login: {
    username: string,
    uuid: string
  }
}


interface IContextProps {
  dataUser: IDataProps[] | []
  setDataUser: (data: IDataProps[] | [])=> void
}


export const GlobalContext = React.createContext<IContextProps>({} as IContextProps)


const GlobalContextProvider = ({children}:{children: React.ReactNode}) => {
  const [ dataUser, setDataUser ] = React.useState<IDataProps[] | []>([])
  
  return <GlobalContext.Provider value={{dataUser, setDataUser}} >{children}</ GlobalContext.Provider>
}

export default GlobalContextProvider