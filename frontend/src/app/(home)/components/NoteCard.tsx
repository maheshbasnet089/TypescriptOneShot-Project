
import { Note } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const NoteCard = ({notes}: {notes : Note[]}) => {
  return (
    <div className="flex px-3 py-3 mt-[70px] space-x-50">
  {
    notes.map((note)=>{
        return ( 
            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={note._id}>
            <Image src={note.file} alt={note.title} width={400} height={200} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{note.title}</div>
                <p className="text-gray-700 text-base">
                    {note.subtitle}
                </p>
            </div>
            <Link href={`/note/${note._id}`}>Read More</Link>
        </div>
        )
    })
  }

    
</div>
  )
}

export default NoteCard