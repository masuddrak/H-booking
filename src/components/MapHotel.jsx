import { Map, Marker } from "pigeon-maps"


const MapHotel = () => {
 
    return (
        <div className='h-[500px]'>
            <Map height={500} defaultCenter={[23.8159,90.4089]} defaultZoom={11}>
                <Marker width={50} anchor={[23.8159,90.4089]} />
            </Map>
        </div>
    );
};

export default MapHotel;