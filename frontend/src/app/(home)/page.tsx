import NoteCard from "./components/NoteCard";

export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}/notes`)
  if(!response.ok){
    throw new Error('Error occured while fetching')
  }
  const {data:notes} = await response.json()
  console.log(notes)
  return (
    <NoteCard notes={notes} />
  );
}


//test dfsdf