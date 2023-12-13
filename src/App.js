import './App.css';
import Data from './component/Data';
import MountFuji from '../src/Images/MountFuji.jpg'
import Sydney from '../src/Images/Sydney.jpg'

function App() {
  return (
    <div className="App">
       <Data
        title= {'Mount Fuji'}
        startDate = {'2023-12-15'}
        endDate ={'2023-12-18'}
        locationDescription = {'Mount Fuji is an iconic stratovolcano in Japan, standing at 3,776 meters (12,389 feet). It is not only a symbol of Japan but also a UNESCO World Heritage Site.'}
        image ={MountFuji}
       />
       <Data
        title= {'Sydney Opera House'}
        startDate = {'2023-12-20'}
        endDate ={'2023-12-23'}
        locationDescription = {'The Sydney Opera House is a masterpiece of modern architecture. Located in Sydney, Australia, it is a multi-venue performing arts center and an iconic symbol of the city.'}
        image ={Sydney}
       />
       <Data
        title= {'Geirangerfjord'}
        startDate = {'2023-12-25'}
        endDate ={'2023-12-28'}
        locationDescription = {'Geirangerfjord is a breathtaking fjord in Norway, known for its stunning landscapes, waterfalls, and picturesque villages. It is a UNESCO World Heritage Site and a popular destination for nature lovers.'}
        image ={MountFuji}
       />
    </div>
  );
}

export default App;
