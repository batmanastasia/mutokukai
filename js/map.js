function initMap() {
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    const centerLatLng = new google.maps.LatLng(49.989841, 36.230823);
    // Обязательные опции с которыми будет проинициализированна карта
    const mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 11               // Зум по умолчанию. Возможные значения от 0 до 21
    };
    // Создаем карту внутри элемента #map
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // Добавляем маркер

    addMarker({
        coordinates: {lat: 50.006675, lng: 36.248952},
        info: '<h1></h1>'
    });

    function getDescription(address, time) {
        return new google.maps.InfoWindow({
            content:
                `<h5>${address}</h5>
<h6>${time}</h6>

`
        });
    }

    addMarker({lat: 50.006675, lng: 36.248952},
        getDescription('ул.Пушкинская, 79/7', 'Пн, Ср, Пт 6:30-8:15 <br> Cб 7:00-8:30'));
    addMarker({lat: 49.980001, lng: 36.266240},
        getDescription('ул.Лебединская, 3', 'Пн, Ср, Пт 17:00-18:00'));
    addMarker({lat: 50.003213, lng: 36.233748},
        getDescription('ул.Сумская, 37', 'Пн, Ср, Пт 18:30-20:00'));
    addMarker({lat: 50.015940, lng: 36.220710},
        getDescription('ул.Космическая, 23', 'Пн, Ср, Пт 18:00-19:00'));
    addMarker({lat: 49.960921, lng: 36.103467},
        getDescription('пгт.Песочин, КАРС', 'Вт, Чт 19:00-23:00 <br> Сб 10:00-11:30'));


    function addMarker(coordinates, infoWindow) {
        const marker = new google.maps.Marker({
            position: coordinates,
            map,
        });

        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        })

    }
}

// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
