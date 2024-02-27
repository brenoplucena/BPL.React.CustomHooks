import React, {useState, useEffect} from 'react';

export const App = () => {
    const [value, setValue] = useState('');
    useEffect(() => {
      console.log('value changed: ', value);
    }, [value])
	return <div>
        	<input type="text" name="username" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
}
