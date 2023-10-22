/* eslint-disable react/prop-types */
function ItemList({ id, label, onDeleteHandler }) {
    const deleteHandler = () => {
        onDeleteHandler(id)
    }

    return (
        <button className="text-left px-2 py-1 border border-1 border-white rounded" onClick={deleteHandler}>{label}</button>
    )
  }
  
  export default ItemList
  