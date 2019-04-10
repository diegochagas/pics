import axios from 'axios';

const Unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 259eb6d059a3901ac577ddead09b8c4d3aacf9c039c787efd76ed641384f14ae"
  }
});

export default Unsplash;