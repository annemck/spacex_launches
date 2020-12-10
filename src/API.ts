export type Launch = {
  flight_number: number,
  mission_name: string,
  launch_year: number,
  launch_date_utc: string,
  rocket: {rocket_name: string}
  rocket_name: string,
  launch_date: string
}

export type Props = {
  year: number | null
  sort: string
}

const formatDate = (launchDay: string) => {
  const formatDay = new Date(launchDay).toDateString().substring(4);
  let day = formatDay.substring(4, 6);
  const month = formatDay.substring(0, 3);
  const year = formatDay.substring(7);
  const lastNum = day.substring(1);
  
  if (day.substring(0, 1) === '0'){
    day = day.substring(1);
  }
  
  if (day === '11'){
    return day + 'th ' + month + ' ' + year;
  } else if (lastNum === '1'){
    return day + 'st ' + month + ' ' + year;
  } else if (lastNum === '2'){
    return day + 'nd ' + month + ' ' + year;
  } else if (lastNum === '3'){
    return day + 'rd ' + month + ' ' + year;
  } else {
    return day + 'th ' + month + ' ' + year;
  }
}

const mainEndpoint = `https://api.spacexdata.com/v3/launches?`;
const filters = `filter=flight_number,mission_name,launch_year,launch_date_utc,rocket/rocket_name`;

//https://api.spacexdata.com/v3/launches?launch_year=2006&filter=flight_number,mission_name,launch_year,launch_date_utc,rocket/rocket_name


export const fetchLaunchDetails = async (year: Props["year"], sort: Props["sort"]) => {
  let filteredEndpoint;
  
  if (year){
    filteredEndpoint = mainEndpoint + `launch_year=` + year + `&`;
  } else {
    filteredEndpoint = mainEndpoint + filters;
  }
  
  try{

    //double await because we first await the fetch and then we await the conversion to json
    const fetchedLaunches = await (await fetch(filteredEndpoint)).json();
    
    if (sort === 'desc'){
      return fetchedLaunches.slice(0).reverse().map((launch: Launch) => (
      {
        flight_number: launch.flight_number,
        mission_name: launch.mission_name,
        launch_year: launch.launch_year,
        rocket_name: launch.rocket.rocket_name,
        launch_date: formatDate(launch.launch_date_utc)

      }))
    } else {
      return fetchedLaunches.map((launch: Launch) => (
      {
        flight_number: launch.flight_number,
        mission_name: launch.mission_name,
        launch_year: launch.launch_year,
        rocket_name: launch.rocket.rocket_name,
        launch_date: formatDate(launch.launch_date_utc)

      }))
    }

  } catch (err){
    throw err;
  }
}
