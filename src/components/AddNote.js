import {useState} from 'react'

const AddNote = ({handleAddNote})=>{
    const[noteText,setNoteText]=useState('');
    const characterLimit=180;

    const onChangeHandler=(event)=>{
        if(characterLimit-event.target.value.length >=0){
            setNoteText(event.target.value);
        }
            
           
    }
    const onClickHandler=()=>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('')
        }
     
    }
    return(
        <div className="note new">
            <textarea
              rows='8'
              columns='15'
              placeholder='Type to add a note'
              value={noteText}
              onChange={onChangeHandler}
            ></textarea>
            <div className='note-footer'>
                <small>{characterLimit-noteText.length} remaining</small>
                <button className='save'
                onClick={onClickHandler}
                > Save</button>
            </div>
        </div>
    )
}

export default AddNote;