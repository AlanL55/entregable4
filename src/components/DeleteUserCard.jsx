

const DeleteUserCard = ({ closeDelete, setCloseDelete, }) => {

    const handleCloseDelete = () => {
        setCloseDelete(true)
    }
  return (
    <div onClick={handleCloseDelete} className={`user__delete__card ${closeDelete && 'closeDelete'}`}>
        <div className="user__delete__content">
            <h3 className="user__delete__message">El usuario fue eliminado</h3>
            <div onClick={setCloseDelete} className="user__delete_x">X</div>
        </div>
    </div>
  )
}

export default DeleteUserCard