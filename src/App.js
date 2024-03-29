import React from 'react';

import './App.css';
import renderHTML from 'react-render-html';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import Pict1 from './assets/images/1.png'
import Pict2 from './assets/images/2.png'
import Pict3 from './assets/images/3.png'
import Pict4 from './assets/images/4.png'
import Button from '@material-ui/core/Button';

function App() {
  const [playerOne, setPlayerOne] =React.useState('');
  const [playerTwo, setPlayerTwo] =React.useState('');

  const chunkArray = (myArray, chunk_size) =>{
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    var myChunk = []
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
  }

  var colors = ['Blue','Green','Red','Yello', 'Blue','Green','Red','Yello', 'Blue','Green','Red','Yello'];
  var numbers = [1,2,3]


  const onRadom = () => {
    colors = colors.sort(function() { return 0.5 - Math.random() });
    var numbersBlue = numbers.sort(function() { return 0.5 - Math.random() });
    var numbersGreen = numbers.sort(function() { return 0.5 - Math.random() });
    var numbersRed = numbers.sort(function() { return 0.5 - Math.random() });
    var numbersYellow = numbers.sort(function() { return 0.5 - Math.random() });

    const arrColors = chunkArray(colors, 4);
  
    const arrNumber = chunkArray(numbers, 4);
    

    var results = '<table>'
    let nn =0;
    arrColors.forEach((v,i) => {
      let n = arrNumber[i]
      results+='<tr>'
      v.forEach( (vv,ii) => {
       
        switch(vv){
          case 'Blue':
              nn = [...numbersBlue];
              numbersBlue = nn.slice(1)
              results+=`<td> <span style="position: absolute; padding: 50px 64px; color: white; font-size: larger; font-weight: bold;">${nn[0]}</span> <img alt="Remy Sharp" src="${Pict1}" width="140"  /> </td>`
            break;
            case 'Green':
                nn = [...numbersGreen];
                numbersGreen = nn.slice(1)
                results+=`<td> <span style="position: absolute; padding: 45px 57px; color: white; font-size: larger; font-weight: bold;">${nn[0]}</span> <img alt="Remy Sharp" src="${Pict2}" width="120"  /> </td>`
              break;
            case 'Red':
                nn = [...numbersRed];
                numbersRed = nn.slice(1)
                results+=`<td> <span style="position: absolute; padding: 64px 54px; color: white; font-size: larger; font-weight: bold;">${nn[0]}</span> <img alt="Remy Sharp" src="${Pict4}" width="120"  /> </td>`
              break;
            default:
                nn = [...numbersYellow];
                numbersYellow = nn.slice(1)
                results+=`<td> <span style="position: absolute; padding: 47px 47px; color: white; font-size: larger; font-weight: bold;">${nn[0]}</span> <img alt="Remy Sharp" src="${Pict3}" width="100"  /> </td>`
              break;
        }
      
  
      })
      results+='</tr>'
    })
    return results+='</table>'
     
  }

  const onPlay = () => {
    setPlayerOne(onRadom())
    setPlayerTwo(onRadom())
  }

  return (
    <div className="App">
      <header className="App-header">
      <Button variant="contained" onClick={()=>onPlay()}>
      Let Play
      </Button>
        
        <Grid container spacing={3}>
          <Grid item xs align="right">
            
            <Paper style={{padding:'30px'}}>
              <h3>Player One</h3>
              {renderHTML(playerOne)}
            </Paper>
          </Grid>
          <Grid item xs align="left">
            
            <Paper style={{padding:'30px'}}>
            <h3>Player Two</h3>
            {renderHTML(playerTwo)}
            </Paper>
          </Grid>
          
        </Grid>
      
     
       
      </header>
    </div>
  );
}

export default App;
