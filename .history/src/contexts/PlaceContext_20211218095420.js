import placesService from '../services/placesService';
import React, { useEffect , useState } from 'react';

const PlaceContext=React.createContext();
function PlaceProvider({children}) {

    const [places,setPlaces] = useState({});
    useEffect( ()=>{
        const fethApi = async ()=>{
            const response= await placesService.getAll();    
            setPlaces(response.data);
        }
        fethApi();
        },[])
   
    return (
        <PlaceContext.Provider value={{places:places}}>
            {children}
        </PlaceContext.Provider>
    )
}

export  {PlaceProvider,PlaceContext};
