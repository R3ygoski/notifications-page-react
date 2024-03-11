import Header from './components/Header'
import Card from './components/Card'
import CardComment from './components/CardComment'
import CardPicture from './components/CardPicture'

import { useState } from 'react'

import {status, target, avatar, images} from './data.js'

export default function App() {

  const [wasRead, setWasRead] = useState(false)
  
  return (
    <>
    <main className="main">
      <Header setWasRead={setWasRead}/>
      <article className='main__article'>
        <Card avatar={avatar.mark} name="Mark Webber" time={'1m'} 
        status={status.react} target={target.tournament} 
        read={wasRead} />
        
        <Card avatar={avatar.angela} name="Angela Gray" time={'5m'} 
        status={status.follow} 
        read={wasRead} />

        <Card avatar={avatar.jacob} name="Jacob Thompson" time={'1 day'} 
        status={status.joinGp} group={target.chessGroup}
        read={wasRead} />

        <CardComment avatar={avatar.rizky} name="Rizky Hasanuddin" time={'5 days'} 
        status={status.message} read={true} >
          {"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'am already having lots of fun and improving my game."}
        </CardComment>

        <CardPicture avatar={avatar.kimberly} name="Kimberly Smith" time={'1 week'} 
        status={status.comment} read={true}>
          <img src={images.chess} />
        </CardPicture>

        <Card avatar={avatar.nathan} name="Nathan Peterson" time={'2 weeks'} 
        status={status.react} target={target.strategy}
        read={true} />

        <Card avatar={avatar.anna} name="Anna Kim" time={'2 weeks'} 
        status={status.leftGp} group={target.chessGroup}
        read={true} />
      </article>
    </main>
    </>
  )
}