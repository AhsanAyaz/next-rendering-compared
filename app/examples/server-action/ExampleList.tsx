'use client'

import { ListItem } from '@/app/interfaces/item.interface'
import Link from 'next/link'
import React from 'react'

const ExampleList = ({
  listItems
}: {
  listItems: ListItem[]
}) => {
  console.log('ExampleList rendered')
  
  const listItemClick = (item: ListItem) => {
    console.log('I was clicked:', item);
  }

  return (
    <>
      <p>This is client side rendered </p>
      <ul className='flex flex-col gap-2 w-full max-w-xs mx-auto text-center'>
        {
          listItems.map((item) => {
            return <li className='max-w-xs py-1 px-3 border border-gray-600 rounded-md hover:bg-gray-200' onClick={() => {
              listItemClick(item);
            }} key={item.id}>
              <Link className='w-full h-full block' href={`/examples/list-item/${item.id}`}>{item.text}</Link>
            </li>
          })
        }
      </ul>
    </>
  )
}

export default ExampleList