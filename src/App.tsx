import React, {useState, useEffect} from 'react';
// import logo from './assets/images/spacex-logo.png';
// import launchImage from './assets/images/launch-home.png';
import LaunchContainer from './components/launches/launchContainer';
import {fetchLaunchDetails} from './API';

const App = () => {

  const [loaded, setLoaded] = useState(true);
  const [launches, setLaunches] = useState<any>([]);
  
  useEffect(() => {
    setLoaded(false);
    (async () => {
      setLaunches(await fetchLaunchDetails());
      setLoaded(true);
    })()
  }, []);

  
  
  return (
    <div className="App">
      {loaded ? <LaunchContainer launches={launches}/> : <p>Loading...</p>}
    </div>
  );
}

export default App;
