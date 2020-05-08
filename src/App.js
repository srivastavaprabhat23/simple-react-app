import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Switch from '@material-ui/core/Switch';

//Card
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



function App() {
  const [toggleSpan,setToggleSpan]=useState(true);
  const [servings,setServings]=useState(100);
  const [lollipop,setLollipop]=useState(100);
  const [iceCandy,setIceCany]=useState(200);
  const [savings,setSavings]=useState(100);

  const handletoggleSpan = (event) => {
    setToggleSpan(event.target.checked)
    if(event.target.checked){
      setLollipop(servings*1);
      setIceCany(servings*2);
      setSavings((servings*2)-(servings*1)) 
    }else{      
      setLollipop(servings*0.5);
      setIceCany(servings*1);
      setSavings((servings*1)-(servings*0.5))
    }
  };

    

  function handleServings(newServings){
    setServings(newServings)
    if(toggleSpan){
      setLollipop(newServings*1);
      setIceCany(newServings*2);
      setSavings((newServings*2)-(newServings*1))
    }else{      
      setLollipop(newServings*0.5);
      setIceCany(newServings*1);
      setSavings((newServings*1)-(newServings*0.5))
    }
  }

  return (
    <div className='App'>
      <div className="first-vertical">
        <div className="first-half">
          <p className="looking-for-a-lollip">Looking for a lollipop alternative?</p>
          <p className="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <div style={{float:'left'}}>
            <button className="bg cta-text">Primary CTA</button>{' '}
            <button className="outline second-cta-text">Secondary CTA</button>{' '}
          </div>
        </div>
        <div className="second-half">
          <img src={require('./assets/images/globe.png')}></img>
        </div>      
      </div>
      <div className="second-vertical">
        <img className="central-img" src={require('./assets/images/BG/png/BG.png')}></img>
        <p className="this-is-a-heading-in">This is a heading in <br></br>two lines</p>
        <img className="overlay-img" src={require('./assets/images/Group 6/png/Group_6.png')}></img>
      </div>
      <div className="third-vertical">
        <p className="compare-pricing-toda">Compare pricing today!</p>
        <p className="lorem-ipsum-is-simpl">Lorem Ipsum is simply dummy text of the printing and <strong style={{color:'#0099FF'}}>typesetting.</strong></p>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button className={"btn-group","25"} name="25" component='span' onClick={()=>handleServings(25)}>25 Serving</Button>
          <Button className={"btn-group","25"} name="25" component='span' onClick={()=>handleServings(50)}>50 Serving</Button>
          <Button className={"btn-group","25"} name="25" component='span' onClick={()=>handleServings(100)}>100 Serving</Button>
          <Button className={"btn-group","25"} name="25" component='span' onClick={()=>handleServings(200)}>200 Serving</Button>
        </ButtonGroup>       
       
      </div>
      <div className="fourth-vertical">
        <span className="annual">Annual</span><br></br><span className="fifty-off">50% off</span>
        <Switch
          checked={toggleSpan}
          onChange={handletoggleSpan}
          color="primary"
          name="toggleSpan"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <span className="monthly">Monthly</span>        
      </div>
      <div className="fifth-vertical">
        <Card>
          <CardContent>            
            <p className="lollipop">lollipop</p><br/>
            <span className="dolar-money">${lollipop}</span>
            <span className="per-span">Per {(toggleSpan)?'month':'annum'}</span>
            <p className="for-serving">For {servings}  serving</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>            
            <p className="lollipop">Icecandy</p><br/>
            <span className="dolar-money">${iceCandy}</span>
            <span className="per-span">Per {(toggleSpan)?'month':'annum'}</span>
            <p className="for-serving">For {servings}  serving</p>
          </CardContent>
        </Card>
        <span className="savings-card">
        <Card >
          <CardContent>            
            <p className="lollipop">Your savings
              <br/>with lollipop</p><br/>
              <span className="dolar-money" style={{color:'#0099FF'}}>${savings}</span>
            <p className="per-span" style={{marginTop:0}}>Per {(toggleSpan)?'month':'annum'}</p>
          </CardContent>
        </Card>
        </span>
      </div>
    </div>    
  );
}

export default App;
