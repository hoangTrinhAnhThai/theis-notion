import { Check, FolderKanban, NotepadText, Plus, Settings } from 'lucide-react'
import React from 'react'
import ItemList from './ItemList'
import SearchInput from '../formElement/Search'
import Logo from '../Logo'

export default function Sidebar() {
  return (
    <div className="sidebar gap-2 bg-[#fbfbfb] p-4 h-[100vh] max-h-[100vh] grid grid-rows-10 scroll-auto fixed">
      <div className="top-list row-span-8">
        <Logo />
        <SearchInput />
        <ul className="list-item gap-2 max-h-[80%] overflow-y-auto">
          <ItemList icon={<NotepadText />} label="My note" isLink={true} />
          <ItemList icon={<Check />} label="Todo list" isLink={true} />
          <ItemList icon={<FolderKanban />} label="Project" isLink={true} />
          <ItemList icon={<FolderKanban />} label="Project" isLink={true} />
          <ItemList icon={<FolderKanban />} label="Project" isLink={true} />
        </ul>
      </div>
      <ul className="bottom-list">
        <ItemList icon={<Plus />} label="Add new folder" />
        <ItemList icon={<Settings />} label="Setting" isLink={true} />
      </ul>
    </div>
  )
}
