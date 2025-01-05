import { Search } from 'lucide-react'
import React from 'react'

export default function SearchInput() {
  return (
    <div className="search w-full bg-background flex items-center p-4 gap-4">
      <Search className="align-middle" />
      <input
        type="text"
        className="bg-background rounded outline-none"
        placeholder="Search notes..."
      />
    </div>
  )
}
