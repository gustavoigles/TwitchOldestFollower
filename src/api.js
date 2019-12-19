
import axios from 'axios';

let api = axios.create({
    headers: {
        "Accept": "application/vnd.twitchtv.v5+json",
        "Client-ID": "frbwmbjud8eknl6xh34n7ox8vsjvn1"
       
    }
});

export default api;