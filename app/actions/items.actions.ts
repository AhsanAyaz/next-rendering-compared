import { revalidatePath } from "next/cache";
import { ListItem } from "../interfaces/item.interface";

const addedItems: ListItem[] = [];

export const addItemToList = async (formData: FormData) => {
  "use server";
  const text = formData.get("itemText") as string;
  addedItems.push({
    text,
    id: Number(Date.now()),
  });
  revalidatePath("/");
  console.log(formData);
};

export const getItemById = async (
  id: number
): Promise<ListItem | undefined> => {
  const items = await getItems();
  const item = items.find((item) => item.id === id);
  return item;
};

export const getItems = async (): Promise<ListItem[]> => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 1500);
  });
  const resp = await fetch("http://localhost:3000/items.json");
  const items = (await resp.json()) as ListItem[];
  return [...items, ...addedItems];
};
