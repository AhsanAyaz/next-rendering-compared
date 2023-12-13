'use client'

import { useRef } from "react"

const NewItemForm = ({
  addItemToList,
}: {
  addItemToList: (form: FormData) => void
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form ref={formRef} action={async (formData: FormData) => {
      await addItemToList(formData);
      // here
      formRef.current!.reset();
    }} className="flex gap-4 items-center">
      <input className="text-gray-900 px-2 py-1.5 rounded-md" name="itemText" placeholder='new list item' type='text' />
      <button type="submit">Submit</button>
    </form>
  )
}
export default NewItemForm