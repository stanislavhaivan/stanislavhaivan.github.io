let watchId = null;

// координати коледжу (приклад)
const collegeCoords = {
  latitude: 48.94321,
  longitude: 24.73380
};

// ===== ЧАСТИНА 1 =====
function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      displayLocation,
      displayError
    );
  } else {
    alert("Geolocation не підтримується");
  }
}

function displayLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let acc = position.coords.accuracy;

  document.getElementById("location").innerText =
    `Широта: ${lat}, Довгота: ${lon}
Точність: ${acc} м`;

  let km = computeDistance(
    { latitude: lat, longitude: lon },
    collegeCoords
  );

  document.getElementById("distance").innerText =
    `Відстань до коледжу: ${km.toFixed(2)} км`;
}

function displayError(error) {
  const errors = {
    0: "Невідома помилка",
    1: "Доступ заборонено",
    2: "Місцезнаходження недоступне",
    3: "Час очікування вичерпано"
  };
  document.getElementById("location").innerText =
    errors[error.code];
}

// формула гаверсинуса
function computeDistance(start, end) {
  const R = 6371;
  let dLat = toRad(end.latitude - start.latitude);
  let dLon = toRad(end.longitude - start.longitude);

  let a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(start.latitude)) *
    Math.cos(toRad(end.latitude)) *
    Math.sin(dLon / 2) ** 2;

  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg) {
  return deg * Math.PI / 180;
}

// ===== ЧАСТИНА 2 =====
function watchLocation() {
  if (navigator.geolocation) {
    watchId = navigator.geolocation.watchPosition(
      displayLocation,
      displayError
    );
  }
}

function clearWatch() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
}
