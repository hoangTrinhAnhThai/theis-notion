import { convertNameToLink } from '@/app/_utils/convertNameToLink'
import { Ellipsis } from 'lucide-react'
import Link from 'next/link'
import React, { ReactElement } from 'react'

type ItemProps = {
  icon: ReactElement
  label: string
  isLink?: boolean
}
export default function ItemList({
  icon,
  label,
  isLink = false
}: Readonly<ItemProps>) {
  const isActive = label === 'My Note'
  return (
    <li
      className={`item bg-white p-4 rounded mt-2 grid grid-cols-6 hover:text-black ${isActive && 'text-black'}`}
    >
      {isLink === true ? (
        <Link
          href={`/tasks/${convertNameToLink(label)}`}
          className="col-span-5 text-left flex gap-4"
        >
          {icon}
          <span>{label}</span>
        </Link>
      ) : (
        <button className="col-span-5 text-left flex gap-4">
          {icon}
          <span>{label}</span>
        </button>
      )}

      <Ellipsis />
    </li>
  )
}
