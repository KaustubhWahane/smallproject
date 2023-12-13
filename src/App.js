import './App.css';
import Data from './component/Data';
import MountFuji from '../src/Images/MountFuji.jpg'
import info from './component/Locations';

function App() {
  return (
    <div className="App">
      {info.map((location) => (
        <Data
          key={location.id}
          title={location.title}
          startDate={location.startDate}
          endDate={location.endDate}
          locationDescription={location.locationDescription}
          image={MountFuji} 
        />
      ))}
    </div>
  );
  //This is just to test one Card
  // return (
  //   <div className="App">
  //      <Data
  //       title= {'Mount Fuji'}
  //       startDate = {'2023-12-15'}
  //       endDate ={'2023-12-18'}
  //       locationDescription = {'Mount Fuji is an iconic stratovolcano in Japan, standing at 3,776 meters (12,389 feet). It is not only a symbol of Japan but also a UNESCO World Heritage Site.'}
  //       image ={MountFuji}
  //      />
  //   </div>
  // );
}

export default App;
