import { makeStyles } from '@material-ui/styles'

const classes =  makeStyles({
    total:{
            

    },
    navegar:{
        width:'100%',
        height:50,
        paddingLeft:40,
        paddingTop:20,
        display:'flex',
        flexDirection:'row',
        position:"relative",
        borderBottom:'1px solid rgba(var(--b6a,219,219,219),1)',
        paddingBottom:2,
        
    },


    header:{
        width:'100%',
        height:300,
        display:'flex',
        flexDirection:'row'

        
    },
        

    div1:{
        
        width:200,
        height:200,
        marginLeft:100,
        marginRight:100,
        marginTop:50
        
        
    },


    container:{
        marginTop:33,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        marginBotton:50
    },

    div01:{
        display:'flex',
        flexDirection:'row',

        

    },
        botao:{ margin:20, fontWeight:'bold', fontSize:15, border:'solid 0.1px black', borderRadius: 4, background:'white', width:110, height: 35 },
        
    div02:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        

    },
    div03:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-Start',
        marginBottom:50



    },
    histories:{
        position:'relative',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        marginLeft:150
        
    }



})

export default classes;