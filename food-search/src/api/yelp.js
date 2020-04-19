import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer dvRGQCDsbevKj95LKIYt7e8HZiv3TFVFck6_5vwMwPvaMdAJ1QRIsLaVFvIubo43Ei8KWlu204-_SFZHu3mJVQYE3Emyb1H8aMW_LkE6_eeoCQwNn53KUo5o4CWcXnYx",
  },
});
