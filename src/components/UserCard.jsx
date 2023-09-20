
const UserCard = ({ user, deleteUsers, setInfoUpdate, handleOpenForm, handleCardDelete }) => {

    const handleDelete = () => {
        deleteUsers('/users', user.id)
        handleCardDelete()
    }

    const handleEdit = () => {
        setInfoUpdate(user)
        handleOpenForm()
    }

    return (
    <div className="user__card__container">
        <article className="user__card"> 
            <h3 className="user__title">#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
            <ul>
                <li className="user__list__item"><span className="user__email">Email: </span><span>{user.email}</span></li>
                <li className="user__list__item"><span className="user__birthday">Birthday: </span><span>{user.birthday}</span></li>
            </ul>
            <button className="user__button__delete" onClick={handleDelete}><img className="user__thrash" src="https://i.pinimg.com/1200x/ee/0a/dd/ee0add0c12866117dc5d9f0e24c790f7.jpg" alt="" /></button>
            <button className="user__button__edit" onClick={handleEdit}><img className="user__edit" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsNPW2Spyv3TEfd_V4SwOyT_hzxgz89mOvg&usqp=CAU" alt="" /></button>
        </article>
    </div>
)
}

export default UserCard