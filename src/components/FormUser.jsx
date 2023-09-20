import React, { useEffect} from 'react'
import { useForm } from "react-hook-form";


const FormUser = ({
    createUsers,
    infoUpdate,
    updateUsers,
    setInfoUpdate,
    close, 
    setClose
}) => {



    const { handleSubmit, register, reset,  } = useForm()

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])

    const submit = (data) => {
        if(infoUpdate){
            // Editar
            updateUsers('/users', data, infoUpdate.id)
            setInfoUpdate()

        }else {
            // Crear
            createUsers('/users', data)
        }
        
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday:''
        })
    }

    const handleClose = () => {
        setClose(true)
    }

return (
    <div onClick={handleClose} className={`user__container ${close && 'close'}`}>
        <form onClick={e => e.stopPropagation()} className='user__form' onSubmit={handleSubmit(submit)}>
            <h2 className='user__title'>{infoUpdate ? "Update" : "New User"} </h2>
            <div onClick={handleClose} className='user__x'>X</div>
            <div className='user__group'>
                <label className='user__label' htmlFor="email">Email</label>
                <input className='user__input' {...register('email')} type="email" id="email" />
            </div>
            <div className='user__group'>
                <label className='user__label' htmlFor="password">Password</label>
                <input className='user__input' {...register('password')} type="password" id="password" />
            </div>
            <div className='user__group'>
                <label className='user__label' htmlFor="first_name">First name</label>
                <input className='user__input' {...register('first_name')}type="text" id="first_name" />
            </div>
            <div className='user__group'>
                <label className='user__label' htmlFor="last_name">Last name</label>
                <input className='user__input' {...register('last_name')} type="text" id="last_name" />
            </div>
            <div className='user__group'>
                <label className='user__label' htmlFor="birthday">Birthday</label>
                <input className='user__input' {...register('birthday')} type="date" id="birthday" />
            </div>
            <button className='user__button'>{ infoUpdate ? 'Update' : 'Create'}</button>
        </form>
    </div>
    )
}

export default FormUser