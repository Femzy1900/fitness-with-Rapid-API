export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    params: {limit: '100'},
    headers: {
      'X-RapidAPI-Key': '8dd3ac619cmsh98fc45df9af76cep13bc14jsn301bc3f036ee',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}