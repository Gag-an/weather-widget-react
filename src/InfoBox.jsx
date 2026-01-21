import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({info}){
  const INIT_URL= "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
  const  HOT_URL ="https://images.unsplash.com/photo-1632652507598-a6773059c6fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL="https://plus.unsplash.com/premium_photo-1674684222755-98a35d94cdfa?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 

    return (
      <div className="InfoBox">
        <h2>Weather Info</h2>
        <div className='BoxContent'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity >80?  RAIN_URL:info.temp> 15? HOT_URL:COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} 
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"} className='Content'>
              <div>
                 Tempature: {info.temp}&deg;C
              </div>
              <div>
                 Humidity: {info.humidity}
              </div>
            
              <div>
                 Min Temp: {info.tempMin}&deg;C
              </div>
              <div>
                 Max Temp: {info.tempMax}&deg;C
              </div>
              <div>
                The weather can be described as <i>{info.weather}</i> and feels like <b>{info.feelsLike}&deg;C</b>
              </div>
            </Typography>
          </CardContent>
        
        </Card>
        </div>
      </div>
    );
}