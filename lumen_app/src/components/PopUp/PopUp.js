import React from 'react'
import "./PopUp.css"
import { useState } from 'react'




function PopUp (props){
const [title, setTitle] = useState ("");
//const [topic, setTopic] = useState ("");
//const [url, setUrl] = useState ("");
//const [language, setLanguage] = useState ("javascript");
//const [description, setDescription] = useState ("");


return (
<div className="popup">

<button className="close_button" onClick={()=> props.setTrigger(false)}>Close</button>

<div className="form">
<form>
<label>Title</label>
<div className="details_form">
<input type="text"
required
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>



</div>

</form>
</div>


</div>

)
}






export default PopUp
