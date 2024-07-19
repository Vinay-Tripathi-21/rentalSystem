import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import {WhatsappShareButton, WhatsappIcon} from 'react-share';
import { userInfo } from './services/dataStore';



export default function ProductItem(props) {
  const [like, setlike]= React.useState(false);
  const [showDaialog , setShowDialog]= React.useState(false);
  const refFavIcon =React.useRef(null);
  const {item}=props;
  
  const changeLikeButton = ()=>{
    if (!like) {
      refFavIcon.current.style.fill='red';
    }
    else {
      refFavIcon.current.style.fill='gray';
    }
    setlike(!like);
  }



  const addItemToRent =async ()=>{
    try{
      const res = await fetch(`http://localhost:8080/rent`,{
          headers:{
              'Content-Type':'application/json',
              'Authorization': "Token " + userInfo.token
          },
          method:'POST',
          body:JSON.stringify({item})
          
      }
    )
    console.log(userInfo.token);
      console.log(res);

  }catch(err){
      console.log({'msg':err});
  }
}

  return (
    <Card sx={{ maxWidth: 380 }} className='mb-2'>
      <CardHeader
        avatar={
          <Link to={'/profile'}>
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
          </Link>
        }
        title={item.productName}
      //  subheader= {item.item}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.productImage}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {item.Description}
        </Typography>
        <Typography color="text.success">
          Price: {item.productPrice}
          {/* <Rating className='m-0 p-0' name='half-rating-read' defaultValue={2.5} precision={0.5} value={4.5} readOnly size='small'/> */}
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={changeLikeButton}>
          <FavoriteIcon ref={refFavIcon} />
        </IconButton>
        <IconButton aria-label="share" onClick={()=>{setShowDialog(!showDaialog)}}>
          <ShareIcon  />
        </IconButton>
        
           <Dialog  open={showDaialog} onClose={()=>setShowDialog(!showDaialog)}>
            <div className=' flex flex-row p-2 m-2'>
             <WhatsappShareButton url='https://imgd.aeplcdn.com/1280x720/n/cw/ec/135863/royalenfield-super-meteor-650-right-side-view7.jpeg?isig=0&wm=3&q=75'>
              <WhatsappIcon className='px-2'/>
             </WhatsappShareButton>

             <WhatsappShareButton url='https://imgd.aeplcdn.com/1280x720/n/cw/ec/135863/royalenfield-super-meteor-650-right-side-view7.jpeg?isig=0&wm=3&q=75'>
              <WhatsappIcon className='px-2'/>
             </WhatsappShareButton>

             <WhatsappShareButton url='https://imgd.aeplcdn.com/1280x720/n/cw/ec/135863/royalenfield-super-meteor-650-right-side-view7.jpeg?isig=0&wm=3&q=75'>
              <WhatsappIcon className='px-2'/>
             </WhatsappShareButton>
             </div>
         </Dialog>
        
       
 <Button variant='contained'onClick={addItemToRent}
    >{
      /*
      disabled= {item.status != 'active'? true:false }
      item.status == 'active'? 'Rent':'Unavilable'*/}Rent
</Button>

      </CardActions>
    </Card>
  );
}

  
