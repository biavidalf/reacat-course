/* eslint-disable react/prop-types */
import ItemList from './ItemList/ItemList'

function List({ users, onDeleteHandler }) {      
    return (
        <div className="w-1/2 bg-gray-700 shadow-lg rounded flex flex-col justify-center p-6 mt-6 gap-3">
        {
            users && users.map(user => {
                return (<ItemList onDeleteHandler={onDeleteHandler} id={user.id} key={user.id} label={`${user.username} (${user.age} years old)`} />)
            })
        }
        </div>
    )
  }
  
  export default List
  