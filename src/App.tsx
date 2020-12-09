import React, {useState, useEffect} from 'react';
// import logo from './assets/images/spacex-logo.png';
// import launchImage from './assets/images/launch-home.png';
import LaunchContainer from './components/launches/launchContainer';
import {fetchLaunchDetails} from './API';



const App = () => {

  const [loaded, setLoaded] = useState(true);
  //const [launches, setLaunches] = useState([]);
  
  // useEffect(() => {
  //   console.log('we are in useeffect');
  //   const launchList = async () => {
  //     try{
  //       console.log('this is fetch');
  //       setLoaded(false);
  //       const launchList = await fetchLaunchDetails();
  //       console.log(launchList);
  //       setLoaded(true);
  //     } catch(err){
  //       console.log(err.message);
  //     }
  //   }
  // }, []);
  
  useEffect(() => {
    setLoaded(false);
    (async () => {
      const launches = fetchLaunchDetails();
      setLoaded(true);
    })()
  }, []);

  
  
  return (
    <div className="App">
      {loaded ? <LaunchContainer/> : <p>Loading...</p>}
    </div>
  );
}

export default App;
