import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import DeleteUserCard from './components/DeleteUserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [close, setClose] = useState(true)
  const [closeDelete, setCloseDelete] = useState(true)

  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUsers, deleteUsers, updateUsers ] = useFetch(baseUrl, setClose)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users);

  const handleOpenForm = () => {
    setClose(false)
  }
  const handleCardDelete = () => {
    setCloseDelete(false)
  }
  return (
    <div className='user__group'>
      <h1>Usuarios</h1>
      <DeleteUserCard
        closeDelete={closeDelete}
        setCloseDelete={setCloseDelete}
      />
      <FormUser 
      createUsers={createUsers}
      infoUpdate={infoUpdate}
      updateUsers={updateUsers}
      setInfoUpdate={setInfoUpdate}
      close={close}
      setClose={setClose}
      />
      <div className='users__cardnames'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUsers={deleteUsers}
              setInfoUpdate={setInfoUpdate}
              handleOpenForm={handleOpenForm}
              handleCardDelete={handleCardDelete}
            />
          ))
        }
        
      </div>
      <button onClick={handleOpenForm} className='user__button create'>Create New User</button>
    </div>
  )
}

export default App
