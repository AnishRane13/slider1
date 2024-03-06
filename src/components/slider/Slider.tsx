// Slider.tsx

import { FunctionalComponent, h } from "preact";
import { useState } from 'preact/hooks';

type SliderProps = {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (value: number) => void;
};

const Slider: FunctionalComponent<SliderProps> = (props) => {
    const { min = 0, max = 100, step = 1, value: propValue = 50, onChange: propOnChange } = props;
    const [value, setValue] = useState(propValue);

    const handleChange = (newValue: number) => {
        setValue(newValue);
        if (propOnChange) {
            propOnChange(newValue);
        }
    };

    return (
        <div className="m-4 text-center">
            <input 
                type="range" 
                min={min} 
                max={max} 
                step={step} 
                value={value} 
                onInput={(event) => handleChange(parseInt((event.target as HTMLInputElement).value, 10))}
                className="w-full h-8 rounded-full appearance-none bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 cursor-pointer focus:outline-none"
                style={{
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    marginTop: '1rem',
                }}
            />
            <p className="mt-2 text-sm text-gray-500">Value: {value}</p>
        </div>
    );
};

export default Slider;