import { useState } from "react"

export default function Header({setWasRead}){
    
    const [notfCount, setNofCount] = useState(3)
  
    return (
    <header className="header">
        <h1 className="header__title">Notifications<span className="header__title-unread-msg">{notfCount}</span></h1>
        {notfCount===0?
        <div>
          <p className="header__read-all--off">Mark all as read</p>
        </div>
        :
        <div>
        <p className="header__read-all" onClick={()=>{
          setWasRead(true)
          setNofCount(0)
          }}>Mark all as read</p>
      </div>
        }
    </header>
    )
}