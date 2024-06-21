import React, {useState} from 'react'
import { MdClose } from "react-icons/md";

const AddEditNotes = () => {

    const [error, setError] = useState(null);


  return (
    <div className="relative">
    <button
      className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
    
    >
      <MdClose className="text-xl text-slate-400" />
    </button>

    <div className="flex flex-col gap-2">
      <label className="input-label">TITLE</label>
      <input
        type="text"
        className="text-2xl text-slate-950 outline-none"
        placeholder="Go To Gym At 5"

      />
    </div>

    <div className="flex flex-col gap-2 mt-4">
      <label className="input-label">CONTENT</label>
      <textarea
        type="text"
        className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
        placeholder="Content"
        rows={10}

      />
    </div>

    <div className="mt-3">
      <label className="input-label">TAGS</label>
    </div>

    {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

    <button
      className="btn-primary font-medium mt-5 p-3"
    >
        ADD
    </button>
  </div>
  )
}

export default AddEditNotes