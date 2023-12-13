import React from 'react'
import ExampleList from './ExampleList'
import WithRenderCount from '@/app/components/WithRenderCount'
import NewItemForm from './NewItemForm'
import { addItemToList, getItems } from '@/app/actions/items.actions'

let count = 0;

const ServerActionPage = async () => {
  console.log(`\nServerActionPage rendered ${++count} times so far`);
  const listItems = await getItems();

  return (
    <WithRenderCount compName='ServerActionPage'>
      <div className='bg-blue-200 text-gray-900 min-h-screen flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-2xl'>ServerActionPage</h1>
        <p>This is also SERVER SIDE rendered</p>
        <NewItemForm addItemToList={addItemToList}/>
        <ExampleList listItems={listItems} />
      </div>
    </WithRenderCount>
  )
}

export default ServerActionPage

export const dynamic = 'force-dynamic';
