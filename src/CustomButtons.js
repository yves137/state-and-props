export function CustomButtons({handleClick}){
   return <button
        onClick={() => handleClick()}
        className="border border-black bg-slate-300 py-2 px-5 hover:bg-slate-200 rounded-md"
      >
        Click Me
      </button>
}