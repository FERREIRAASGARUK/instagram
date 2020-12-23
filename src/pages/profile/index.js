import classes  from './estilo.js'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';



export default function( ){

   const estilo = classes()

    return(
        
        <div className={estilo.total}>
        <nav className={estilo.navegar}>
            <img style={{height:33}}src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'/>
            <input type='text' autocapitalize='none' placeholder='Pesquisar' style={{marginLeft:333,marginBottom:10,borderRadius:5, border:'solid 1px rgba(var(--b6a,219,219,219),1)' }}/>
        </nav>
        <header className={estilo.header}>
                 <div className={estilo.div1}>
                    <Avatar style={{width:'100%', height:'100%'}} src='https://scontent-for1-1.cdninstagram.com/v/t51.2885-19/s320x320/121110721_421561845496105_3902681336265837145_n.jpg?_nc_ht=scontent-for1-1.cdninstagram.com&_nc_ohc=oDYRjKJGP4gAX_5ItLS&tp=1&oh=24c01c75bdabba269b9e4df706767e56&oe=600D5B31'/>
                 </div>
                 <container className={estilo.container} >
                    <div className={estilo.div01}>

                        <span style={{fontWeight:500,fontSize:25, fontStyle:'unset',fontFamily:'monospace', margin:20}}>ferreira_.k</span>

                        <button className={estilo.botao}>Editar perfil</button>

                        <Avatar style={{ background:'white' , width:40, height:40 , margin:20}}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhlEChXZL93YJRWhDTmfvpWk2we7yHwzYzA&usqp=CAU'/>
                    </div>
                    <div className={estilo.div02}>
                        <span style={{font:'inherit', fontSize:20, fontWeight:300}}><span style={{ fontWeight:'bold'}}>0</span>publicações</span>  
                        <span style={{font:'inherit', fontSize:20, fontWeight:300}}><span style={{ fontWeight:'bold'}}>124</span>seguidores</span>   
                        <span style={{font:'inherit', fontSize:20, fontWeight:300}}><span style={{ fontWeight:'bold'}}>1540</span>seguindo</span>    
                    </div>

                    <div className={estilo.div03}>
                        <h3 style={{ marginTop:50, marginBottom:5}}>ferreira_.k</h3>
                        <span>✡️👑⚖️🗡️🗝️</span>
                        <a target="_blank" style={{ fontSize:20, color:'darkblue', textDecoration:'none'}} href='https://www.facebook.com/Byte-Operacional-106695057743669/'>bit.ly/3olpoAM</a>

                    </div>
               
                 </container> 
                

            </header>

        <galeria0>
        <div className={estilo.histories}>
                        <Avatar style={{width:100, margin: 33, height:100 }} src='https://scontent-for1-1.cdninstagram.com/v/t51.2885-15/e35/c60.473.779.779a/s150x150/121601703_791646698341577_8482536445756180645_n.jpg?_nc_ht=scontent-for1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=pCq2J27X31YAX9Ct3CZ&tp=1&oh=d537e614010a1a9c46d0d9a34bf289d2&oe=5FE5E52D' />
                        <Avatar style={{width:100, margin: 33, height:100 }} src='https://scontent-for1-1.cdninstagram.com/v/t51.12442-15/e35/c0.241.720.720a/s150x150/70493349_1667526466727952_231120591386425618_n.jpg?_nc_ht=scontent-for1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=WV5dSfl9FAIAX8bkLL0&tp=1&oh=aa71fad133e4fc22fc39262e3214980c&oe=5FE5455B'/>
                        <Avatar style={{width:100, margin: 33, height:100 }} src='https://scontent-for1-1.cdninstagram.com/v/t51.12442-15/e35/c0.329.720.720a/s150x150/66642687_2392731347674382_4565997791410209521_n.jpg?_nc_ht=scontent-for1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=axc66WPj8XYAX82gs0B&tp=1&oh=18cb35938a31406e850452aa7aff7a55&oe=5FE584A1'/>
                        <Avatar style={{width:100, margin: 33, height:100 }} src='https://scontent-for1-1.cdninstagram.com/v/t51.12442-15/e35/c192.459.469.469a/s150x150/68948851_138664030698039_8009947126800598657_n.jpg?_nc_ht=scontent-for1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=usAqzWEaMkUAX_xOJHC&tp=1&oh=0e37946212ecacbef10c186432562f10&oe=5FE58ECB'/>
                    </div>
        </galeria0>
        </div>
             
    )
}
    
   