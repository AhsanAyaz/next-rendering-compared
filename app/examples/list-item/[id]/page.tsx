import { getItemById } from '@/app/actions/items.actions';
import WithRenderCount from '@/app/components/WithRenderCount';
import { NextPage } from 'next';
import { notFound } from 'next/navigation';

let count = 0;

const ListItemPage: NextPage<{params: {id: string}}> = async ({
  params: {
    id
  }
}) => {
  console.log(`\nListItemPage rendered ${++count} times so far`);

  const listItem = await getItemById(Number(id));
  if (!listItem) {
    return notFound();
  }
  return (
    <WithRenderCount compName='ListItemPage'>
      <div className='bg-green-200 text-gray-900 min-h-screen flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-2xl'>ListItemPage</h1>
        <p>This is also SERVER SIDE rendered</p>
        <p>{listItem.text}</p>
      </div>
    </WithRenderCount>
  )
}

export default ListItemPage