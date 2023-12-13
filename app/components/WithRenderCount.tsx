import React from 'react'

const renderCount: Record<string, number> = {};

const WithRenderCount = ({
  children,
  compName
}: {
  children: React.ReactNode,
  compName: string
}) => {
  if (!renderCount[compName]) {
    renderCount[compName] = 1;
  } else {
    renderCount[compName]++;
  }
  return (
    <>
      {children}
      <div className='bg-gray-900 text-center fixed top-0 right-2 bottom-0 my-auto p-2 max-h-fit rounded-md text-white'>
        <h2>{compName}</h2>
        <p>RenderCount: {renderCount[compName]}</p>
      </div>
    </>
  )
}

export default WithRenderCount