import React from 'react'
import ExampleList from './ExampleList'
import WithRenderCount from '@/app/components/WithRenderCount'
import { getItems } from '@/app/actions/items.actions';

let count = 0;

const ServerClientPage = async () => {
  console.log(`\nServerClientPage rendered ${++count} times so far`);
  const listItems = await getItems();

  return (
    <WithRenderCount compName='ServerClientPage'>
      <div className='bg-blue-200 text-gray-900 min-h-screen flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-2xl'>ServerClientPage</h1>
        <p>This is also SERVER SIDE rendered</p>
        {/* client side */}
        <ExampleList listItems={listItems} />
      </div>
    </WithRenderCount>
  )
}

export default ServerClientPage

export const dynamic = 'force-dynamic';