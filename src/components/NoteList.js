import Note from "./Note.js"
import AddNote from "./AddNote.js";


const NoteList=({handleDeleteNote,handleAddNote,notes})=>{
    return(
        <div className="note-list" >
            {notes.map((note)=>(
                <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
            ))}
        <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}
export default NoteList;