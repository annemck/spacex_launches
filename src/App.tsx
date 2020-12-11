import React, {useState, useEffect} from 'react';
// import logo from './assets/images/spacex-logo.png';
// import launchImage from './assets/images/launch-home.png';
import LaunchContainer from './components/launches/launchContainer';
import ButtonContainer from './components/buttons/buttonContainer';
import {fetchLaunchDetails, getListOfYears} from './API';

const App = () => {

  const [loaded, setLoaded] = useState<boolean>(true);
  const [launches, setLaunches] = useState<any>([]);
  const [filteredLaunches, setFilteredLaunches] = useState<any>([]);
  const [year, setYear] = useState<number | null>(null);
  const [order, setOrder] = useState('asc');
  const [launchYears, setLaunchYears] = useState<number[]>([]);
  
  
  const getLaunches = async () => {
    setLoaded(false);
    setLaunches(await fetchLaunchDetails());
  }
  
  const handleReload = async() => {
    setLoaded(false);
    await getLaunches();
    
    //keep descending order if originally applied
    if (order === 'desc'){
      await setLaunches(launches.slice(0).reverse());
    }
    
    //keep year filter if originally applied
    if (year !== null){
      let tempArray = [];
      setFilteredLaunches([]);
      
      for (let launch of launches){
        if (launch.launch_year === year){
          tempArray.push(launch);
        }
      }
      setFilteredLaunches(tempArray);
    }
    
    setLoaded(true);
  }
  
  const handleFilter = async (newYear: number | null) => {
    setLoaded(false);
    if (newYear === null || newYear === 0){
      setYear(null);
      setFilteredLaunches([]);
    }
    else {
      setYear(newYear);
      let tempArray = [];
      setFilteredLaunches([]);
      
      for (let launch of launches){
        if (launch.launch_year === newYear){
          tempArray.push(launch);
        }
      }
      
      setFilteredLaunches(tempArray);
      setLoaded(true);
    }
    
  }
  
  const handleSort = () => {
    setLoaded(false);
    if (order === 'asc'){
      setOrder('desc');
    } else {
      setOrder('asc')
    }
    setLaunches(launches.slice(0).reverse());
    if (filteredLaunches.length > 0){
      setFilteredLaunches(filteredLaunches.slice(0).reverse());
    }
    setLoaded(true);
  }
  
  
  useEffect(() => {
    (async () => {
      await getLaunches();
      setLaunchYears(getListOfYears());
      setLoaded(true);
    })()
  }, [])

  
  
  return (
    <div className="App">
      <div>
        <ButtonContainer hasLoaded={loaded} sortOrder={order} sort={handleSort} years={launchYears} selectedYear={year} filter={handleFilter} reload={handleReload}/>
      </div>
      <div>
      {loaded ? <LaunchContainer launches={filteredLaunches.length > 0 ? filteredLaunches : launches}/> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
