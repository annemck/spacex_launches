import React, {useState, useEffect} from 'react';
import logo from './assets/images/spacex-logo.png';
import launchImage from './assets/images/launch-home.png';
import './assets/styles/App.css';
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
    await getLaunches();
    setFilteredLaunches([]);
    setYear(null);
    setOrder('asc');
    setLaunchYears(getListOfYears());
    setLoaded(true);
  
  
    // setLoaded(false);
    // await getLaunches();
    // setLaunchYears(getListOfYears());
    //
    // //keep descending order if originally applied
    // if (order === 'desc'){
    //   setLaunches(launches.slice(0).reverse());
    // }
    //
    // //keep year filter if originally applied
    // if (year !== null){
    //   let tempArray = [];
    //   setFilteredLaunches([]);
    //
    //   for (let launch of launches){
    //     if (launch.launch_year === year){
    //       tempArray.push(launch);
    //     }
    //   }
    //   setFilteredLaunches(tempArray);
    // }
    //
    // setLoaded(true);
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
    document.title = 'SpaceX Launches';
    (async () => {
      await getLaunches();
      setLaunchYears(getListOfYears());
      setLoaded(true);
    })()
  }, [])

  
  
  return (
    <div className="App">
      <div className="logo_div">
        <img src={logo} alt="Space X Logo" className="spacex_logo"/>
        <p className="logo_text">LAUNCHES</p>
      </div>
    
      <div>
        <ButtonContainer hasLoaded={loaded} sortOrder={order} sort={handleSort} years={launchYears} selectedYear={year} filter={handleFilter} reload={handleReload}/>
      </div>
      
      <div className="main_container">
        {/* <div className="rocket_img_container">*/}
        <img src={launchImage} alt="rocket launching" className="launch_img"/>
        {/* </div>*/}
    
        {/* <div className="container">*/}
          {loaded ?
            <LaunchContainer launches={filteredLaunches.length > 0 ? filteredLaunches : launches}/>
            : <p className="list_loading">Loading...</p>}
        {/* </div>*/}
      </div>
    </div>
  );
}

export default App;
