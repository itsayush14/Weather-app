import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";



export default function InfoBox({info}){ 
 
     const HOT_URL = "https://plus.unsplash.com/premium_photo-1711662177249-138d96f8c4d6?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const COLD_URL = "https://images.unsplash.com/photo-1766490219860-8b3958d46eb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const RAIN_URL = "https://images.unsplash.com/photo-1601116780183-d2e80a0bd47f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
   
    return ( 
        <div className='InfoBox'> 
        <br />
            <div className='cardinfo'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ info.humidity > 80 
          ? RAIN_URL : info.temp > 30 ? HOT_URL : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Max Temp = {info.temp_max}</p>
          <p>Min Temp = {info.temp_min}</p>
          <p>The weather can be described as {info.weather} and feels like {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
      </div>
        </div>
    )
}