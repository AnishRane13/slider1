import { h } from 'preact';
import { Slider } from './slider/mod';

const App = () => {
  const handleChange = (value: number) => {
    console.log('Slider value:', value);
  };
            
  return (
    <div>
      <Slider min={0} max={100} step={10} value={0} onChange={handleChange} />
    </div>
  );
};

export default App;
