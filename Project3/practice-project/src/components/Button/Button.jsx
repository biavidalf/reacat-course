/* eslint-disable react/prop-types */

function Button({ label, onClick }) {
    return (
        <button onClick={onClick} className="w-fit px-10 py-2 bg-violet-500 text-white rounded shadow-lg font-medium hover:bg-violet-400">{label}</button>
    )
  }
  
  export default Button
  