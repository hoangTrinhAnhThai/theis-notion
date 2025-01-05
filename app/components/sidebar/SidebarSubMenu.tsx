import { FilePenLine, Trash2 } from 'lucide-react'
import React from 'react'

export default function SidebarSubMenu() {
  return (
    <div className="style-none gap-2 border w-24 rounded flex flex-col absolute top-2 left-0 bg-white">
      <button className="item flex gap-2 items-center pt-2 py-1 px-3 rounded hover:bg-gray-100 w-full">
        <FilePenLine size={16} />
        <span>Edit</span>
      </button>
      <button className="item  flex gap-2 items-center  py-1 px-3 rounded hover:bg-gray-100 hover:text-red-500 w-full">
        <Trash2 size={16} />
        <span>Delete</span>
      </button>
    </div>
  )
}
