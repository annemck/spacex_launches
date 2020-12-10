import React, {useState, useEffect} from 'react';
// import logo from './assets/images/spacex-logo.png';
// import launchImage from './assets/images/launch-home.png';
import LaunchContainer from './components/launches/launchContainer';
import ButtonContainer from './components/buttons/buttonContainer';
import {fetchLaunchDetails} from './API';

const App = () => {

  const [loaded, setLoaded] = useState(true);
  const [launches, setLaunches] = useState<any>([]);
  const [year, setYear] = useState<number | null>(null);
  let [sort, setSort] = useState<string>('asc');
  
  useEffect(() => {
    setLoaded(false);
    (async () => {
      //sorts asc with no year by default
      setLaunches(await fetchLaunchDetails(year, sort));
      setLoaded(true);
    })()
  }, []);

  
  
  return (
    <div className="App">
      <div>
        <ButtonContainer/>
      </div>
      <div>
      {loaded ? <LaunchContainer launches={launches}/> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
