const filters = `?filter=flight_number,mission_name,launch_year,launch_date_utc,rocket/rocket_name`;

export const fetchLaunchDetails = async () => {
  try{
    const mainEndpoint = `https://api.spacexdata.com/v3/launches`;
    const filteredEndpoint = mainEndpoint + filters;
    
    //double await because we first await the fetch and then we await the conversion to json
    const fetchedLaunches = await (await fetch(filteredEndpoint)).json();
    console.log(fetchedLaunches);
    return fetchedLaunches;
      
  } catch (err){
    console.log(err.message);
  }
}
