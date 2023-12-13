import { getItems } from '@/app/actions/items.actions';
import WithRenderCount from '@/app/components/WithRenderCount';
import React from 'react'

let count = 0;

const ServerPage = async () => {
  console.log(`\nServerPage rendered ${++count} times so far`);

  const listItems = await getItems();
  return (
    <WithRenderCount compName='ServerPage'>
      <div className='bg-red-200 text-gray-900 min-h-screen flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-2xl'>ServerPage</h1>
        <p>This is also SERVER SIDE rendered</p>
        <ul>
          {
            listItems.map((item) => {
              return <li key={item.id}>
                {item.text}
              </li>
            })
          }
        </ul>
      </div>
    </WithRenderCount>
  )
}

export default ServerPage

export const dynamic = 'force-dynamic';