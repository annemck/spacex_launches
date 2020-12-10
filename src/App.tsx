import React, {useState, useEffect} from 'react';
// import logo from './assets/images/spacex-logo.png';
// import launchImage from './assets/images/launch-home.png';
import LaunchContainer from './components/launches/launchContainer';
import ButtonContainer from './components/buttons/buttonContainer';
import {fetchLaunchDetails, getListOfYears} from './API';

const App = () => {

  const [loaded, setLoaded] = useState(true);
  const [launches, setLaunches] = useState<any>([]);
  const [year, setYear] = useState<number | null>(null);
  const [order, setOrder] = useState('asc');
  const [launchYears, setLaunchYears] = useState<number[]>([]);
  
  
  const getLaunches = async () => {
    setLoaded(false);
    setLaunches(await fetchLaunchDetails(year));
    setLoaded(true);
  }
  
  const handleSort = () => {
    if (order === 'asc'){
      setOrder('desc');
    } else {
      setOrder('asc')
    }
    setLaunches(launches.slice(0).reverse());
  }
  
  
  useEffect(() => {
    (async () => {
      await getLaunches();
      setLaunchYears(getListOfYears());
    })()
  }, [])

  
  
  return (
    <div className="App">
      <div>
        <ButtonContainer loaded={loaded} sortOrder={order} sort={handleSort} years={launchYears}/>
      </div>
      <div>
      {loaded ? <LaunchContainer launches={launches}/> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
