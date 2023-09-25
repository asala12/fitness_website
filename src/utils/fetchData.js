
export const exerciseOptions = {
  method: 'GET',
  params: {limit: '100'},

  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key':  process.env.REACT_APP_RAPID_API_KEY 
    
  }
};


export const youtubeOptions = {
  method: 'GET',
  
  headers: {  
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '9f26ffd69dmsh63a3d93cba75b27p12fd79jsnea5228f83605'
  }
};


export const fetchData = async (url, options) =>{
const response = await fetch(url, options);
const data = await response.json();

return data;
}