import logo from './logo.svg';
import './App.css';
import Subcard from './components/Subcard';

function App() {

  const contents = [
    {
      'img':'/images/icon-sedans.svg',
      'title':'sedans',
      'description':'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      'color':'bright-orange',
    },
    {
      'img':'/images/icon-suvs.svg',
      'title':'suvs',
      'description':'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      'color':'dark-cyan',
    },
    {
      'img':'/images/icon-luxury.svg',
      'title':'luxury',
      'description':'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      'color':'very-dark-cyan',
    }
  ]

  return (
    <div className="App">
      <div className='card'>
        {
          contents.map((content, i) => {
            return (
              <Subcard
                key={i}
                img={content.img}
                title={content.title}
                description={content.description}
                color={content.color}
                position={i}
                dataLength={contents.length}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
