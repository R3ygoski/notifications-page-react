export default function CardPicture({avatar, name, time, status, children}){
    return (
        <div className="cards">
            <div>
                <img className="cards__image" src={avatar}/>
            </div>
            <div className="cards__status">
                <p className="cards__status-desc">
                    <span className='name'>{name}
                    </span>
                    {status}
                </p>      
                <p className="cards__status-time">{time} ago</p>
            </div>
            <div className="cards__status-image">
                {children}
            </div>  
        </div>
    )
}