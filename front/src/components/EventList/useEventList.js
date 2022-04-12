import { useState, useEffect } from 'react';


const useEventList = url => { 
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect( () => {    
         fetch('http://localhost:3000/api/events')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsLoaded(true);
            });
    }, []);

    return { error, isLoaded, data };

}

export default useEventList;