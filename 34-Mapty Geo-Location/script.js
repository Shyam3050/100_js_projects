'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map,mapEvent;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      const coords = [latitude, longitude];
     
      map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords).addTo(map)
          .bindPopup('workout')
          .openPopup();
          // map Event

      map.on('click', function (mapE) {
        mapEvent = mapE;
       form.classList.remove('hidden')
       inputDistance.focus();
        
      });
    },
    () => console.log('Error')
  );
}

// form submit
form.addEventListener("submit", e => {
  e.preventDefault()
        const { lat, lng } = mapEvent.latlng;
        const coords = [lat, lng];
        L.marker(coords)
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent(inputType.value)
          .openPopup();
          console.log("form");
})
