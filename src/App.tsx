import React, {useState, useEffect} from 'react';
// import logo from './assets/images/spacex-logo.png';
// import launchImage from './assets/images/launch-home.png';
import LaunchContainer from './components/launches/launchContainer';
import ButtonContainer from './components/buttons/buttonContainer';
import {fetchLaunchDetails} from './API';

const App = () => {

  const [loaded, setLoaded] = useState(true);
  const [launches, setLaunches] = useState<any>([]);
  
  useEffect(() => {
    setLoaded(false);
    (async () => {
      setLaunches(await fetchLaunchDetails(null, 'asc'));
      setLoaded(true);
    })()
  }, []);

  
  
  return (
    <div className="App">
      <div>
        <ButtonContainer/>
      </div>
      <div>
      <p>it is working</p>
      {loaded ? <LaunchContainer launches={launches}/> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
