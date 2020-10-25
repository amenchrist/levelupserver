const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const fs = require('fs');

const INBOX_ITEM = 'INBOX_ITEM';
const UNPROCESSED = 'UNPROCESSED';
const TASK = 'TASK';
const LOW = 'LOW';
const DAILY = 'DAILY';
const PROJECT = 'PROJECT';
const UNPLANNED = 'UNPLANNED';

let records = JSON.parse(fs.readFileSync('./tempDB.txt', {encoding: 'utf-8', flag: 'r'}));

const app = express();
app.use(bodyParser.json());

app.use(cors());


//console.log(records);
//console.log(1);



function updateDB() {
    fs.writeFileSync('tempDB.txt', JSON.stringify(records))
        //console.log('Hello World > helloworld.txt');
    
}



const user = {
  name: "amenchrist",
  class: "developer",
  level: 1
}
//console.log(db)
app.get('/',(req, res) => res.send(records));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.post('/amen', (req, res) => {
	const package  = req.body;
    console.log(package);
    let indx;
	switch(package.action){
		case 'ADD':
          records[package.list].unshift(package.item);
          updateDB();
          //console.log('Package added');
          //console.log('New Records: ', records[package.list])
		break;
		case 'REMOVE':
        
        for (i=0; i<records[package.list].length; i++){
            if (records[package.list][i].id === package.item.id){
                indx = i;
            }
        }
        console.log('Package to be removed is at location: ', indx);
          records[package.list].splice(indx,1);
          //console.log('Package removed');
          //console.log('New Records: ', records[package.list])

          if (package.list === "Inbox"){
            records.Processed.unshift(package.item);
            //console.log("All Records: ", records);
          }
          updateDB();
		break;
		case 'UPDATE':
        //console.log(package)
            for (i=0; i<records[package.list].length; i++){
                if (records[package.list][i].id === package.item.id){
                    indx = i;
                }
            }  
          records[package.list][indx] = package.item;
          updateDB();
          //console.log('Record Updated');
         // console.log('New Records: ', records[package.list])
		break;
		default:
	}
	res.json(records);
})





/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send(user))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/

  //.get('/', (req, res) => res.render('pages/index'))