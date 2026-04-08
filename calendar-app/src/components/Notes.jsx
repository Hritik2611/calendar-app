 import { useEffect, useState } from "react";
 
 function Notes(){
    const [note, setNote] = useState("");

    useEffect(()=> {
        const savedNote = localStorage.getItem("calendar-note");
        if(savedNote){
            setNote(savedNote)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("calendar-note", note)
    }, [note]);

    return(
        <div className="bg-white shadow-xl rounded-2xl p-4 w-[350px]">
         <h2 className="text-lg font-bold mb-2">Notes</h2>
         

         <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Write your notes...."  className="w-full h-32 border rounded-lg p-2 outline-none "/>
        </div>
    );
 }

 export default Notes;