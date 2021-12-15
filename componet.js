
window.onload = () => { 
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';
    var latUser = 0;
    var longUser = 0;
    if (window.navigator.geolocation) {
        // Geolocation available
        navigator.geolocation.getCurrentPosition(function(position) {
            latUser = position.coords.latitude;
            longUser = position.coords.longitude;
        
    });
    }

    let places = staticLoadPlaces(latUser,longUser);
    renderPlaces(places);
};

function staticLoadPlaces(latUser,longUser) {
    return [
        {
            name: 'BasketBoard',
            location: {
                lat: latUser,
                lng: longUser,
            },
        },
    ];
}

var models = [
    {
        url: './assets/magnemite/scene.gltf',
        scale: '0.2 0.2 0.2',
    }
];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[modelIndex], model);

        scene.appendChild(model);
    });
}