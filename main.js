let latitude= 52.6369, longitude=1.1398;

mapboxgl.accessToken ='pk.eyJ1IjoibmVoYWwtMTYiLCJhIjoiY2xuMXdmemJnMDM3bjJxbnd3YWw1ZjY0OSJ9.f4O1EEO9ZaMTUSnas4l_5w'

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center: [longitude,latitude],
    zoom:16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'top-left'
);