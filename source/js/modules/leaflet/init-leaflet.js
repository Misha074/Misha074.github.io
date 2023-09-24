import './leaflet';

function initLeaflet() {

  const map = L.map('map')
    .setView({
      lat: 55.81638831185497,
      lng: 37.63691973318728,
    }, 14);
    map.scrollWheelZoom.disable();

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: './img/svg/icon-baloon-filled.svg',
    iconSize: [38, 50],
    iconAnchor: [18, 45],
  });

  const marker = L.marker(
    {
      lat: 55.81638831185497,
      lng: 37.63691973318728,
    },
    {
      icon: mainPinIcon,
    },
  );

  marker.addTo(map);
}

const options = {
  rootMargin: '200px',
  threshold: 0,
};

// const trueCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     const {isIntersecting} = entry;

//     if (isIntersecting) {
//       initLeaflet();
//       observer.unobserve(entry.target);
//     }
//   });
// };

// const observer = new IntersectionObserver(trueCallback, options);

// const target = document.querySelector('.contacts');
// observer.observe(target);



// function initLeaflet() {

//   const map = L.map('map')
//     .setView({
//       lat: 55.81638831185497,
//       lng: 37.63691973318728,
//     }, 14);
//     map.scrollWheelZoom.disable();

//   L.tileLayer(
//     'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//     {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     },
//   ).addTo(map);

//   const mainPinIcon = L.icon({
//     iconUrl: './img/svg/icon-baloon-filled.svg',
//     iconSize: [38, 50],
//     iconAnchor: [18, 45],
//   });

//   const marker = L.marker(
//     {
//       lat: 55.81638831185497,
//       lng: 37.63691973318728,
//     },
//     {
//       icon: mainPinIcon,
//     },
//   );

//   marker.addTo(map);


// }

export {initLeaflet};
