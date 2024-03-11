export default function Card({avatar, name, time, status, group, target, read}){

    return (
    <>
        {read?
        <div className="cards">
            <div>
                <img className="cards__image" src={avatar}/>
            </div>
            <div className="cards__status">
                <p className="cards__status-desc">
                    <span className='name'>{name}
                    </span>
                    {status}
                    {target?
                    <span className='target'>{target}</span>
                    :
                    <span className='group'>{group}</span>
                    }
                </p>           
                <p className="cards__status-time">{time} ago</p>
            </div>
        </div>
        :
        <div className="unread">
            <div>
            <img className="cards__image" src={avatar}/>
            </div>
            <div className="cards__status">
            <p className="cards__status-desc">
                <span className='name'>{name}
                </span>
                {status}
                {target?
                    <span className='target'>{target}
                        <span className="read-status">
                        </span>
                    </span>
                    :
                    <span className='group'>{group}
                        <span className="read-status">
                        </span>
                    </span>
                    }
            </p>            
            <p className="cards__status-time">{time} ago</p>
            </div>
        </div>}
    </>
    )
}