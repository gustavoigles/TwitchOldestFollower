import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../api'

const Followers = () => {
  const [canal, setCanal] = useState('');
  const [follow, setFollow] = useState([]);
  const [año, guardarAño] = useState(0);
  const [mes, guardarMes] = useState(0);


    
        const fetchData = async () => {
            
            const result = await api.get(`https://api.twitch.tv/kraken/users?login=${canal}`)

            const user = result.data.users[0]._id;

            const finalresult = await api.get(`https://api.twitch.tv/kraken/channels/${user}/follows?direction=asc&limit=100`)
          
           setFollow(finalresult.data.follows);
   
      
        }
     
    

    const cambiaState = (e) => {
      setCanal(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      fetchData();
    }

    let elemento;
    let objeto;

    if(follow.length > 1) {

      elemento = follow.map( (user,index) => (
        <tr><td>{index+1}</td><td>{user.user.display_name}</td><td>{user.created_at.slice(0,10)}
      </td></tr>
      ));

      objeto =    <table class="uk-table uk-table-divider">
                  <tr>
                   <th>Nº</th>
                    <th>User</th>
                    <th>Following since</th>
                    </tr>
                    <tbody>
                  {elemento}
                      </tbody>
                      </table>

      
    }
    else {
       objeto = null;
    }

    return (
      <div className="contenedor">
        <div>
          <h1>Check the oldests followers of your channel!</h1>
           <form onSubmit={handleSubmit}>
             <input className="uk-input uk-form-width-large" type="text" placeholder="Insert channel name" onChange={cambiaState}/>
             <input class="uk-button uk-button-default" type="submit" value="Search" placeholder="Search"/>
           </form>
        </div>
        <div>
     {objeto}
        </div>
        <div className="creditos">Created by Gustavo Iglesias</div>
        </div>
      );
}

export default Followers;