import React from 'react'

class ActionBar extends React.Component
{
    render()
    {
        return (
            <form className="ActionButtons">
                <input type="button" id="RAG" value="Send Reminder Email" onClick={this.sendRemEmail.bind(this)}/>
            </form>
        );
    }
   
    sendRemEmail()
    {
        alert("Reminder email has been sent");
    }

}




export default ActionBar;