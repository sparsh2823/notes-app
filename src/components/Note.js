import {MdDeleteOutline} from 'react-icons/md'

const Note=({handleDeleteNote,id,text,date})=>{
    return(
       <>
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteOutline onClick={()=>handleDeleteNote(id)} className="delete-icons" size="1.3em"/>
            </div>
        </div>
       </>
    )
}

export default Note;