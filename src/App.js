import Description from './components/Description/Description';
import Nav from './components/Navigations/Nav';
import Slider from './components/Slider/Slider';
import './global.css';

export default function App() {
  return(
    <>
      <Nav />
      <div className='d-md-flex container-md p-0 gap-5'>
        <Slider />
        <Description />
      </div>
    </>
  );
}