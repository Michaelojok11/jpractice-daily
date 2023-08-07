// start with a variable
/*
let myLatitude = 0;
if (myLatitude > 0){
    alert("You are in the Northern hemisphere");    
} else if (myLatitude < 0){
    alert("You are in the Southern Hemisphere");
} else {
    alert("You are exactly on the equator");
}
*/

// 

// Exercise / Day 2 task
/*
    let myLongitude= 20;
    if (myLongitude > 0){
        alert("You are in the eastern hemisphere");    
    } else if (myLongitude < 0){
        alert("You are in the Western Hemisphere");
    } else {
        alert("You are exactly on the prime meridian");
    }
*/
// Object Oriented Programming
let url = "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/imageServer?f=jsapi"
url += "/exportImage"; // script
url += "?f=json";     // parameters
url += "&bbox=-2385104.2057121648,137207.39623946743,2145545.0422571953,3335073.726420532";
url += "&bboxSR=5070";
url += "&imageSR=5070";
url += "&size=1115,787";
url += "&format-jpgpng";
url += "&mosaicRule=%7B%22ascending%22%3Atrue%2C%22mosaicMethod%22%3A%22esriMosaicNorthwest%22%"

document.getElementById("getDataButton").addEventListener("click",function(){
    loadDoc();
});

function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        alert("Data is here");
        let my Response = JSON.parse(this.response);
        document.getElementById("myImage").src = myResponse.href;
    }

    // day 3 - task
    // create a class in javascript or pseudocode for a map and add 2 properties and 2 methods;
    // start with:
    /* class Map:
    property1
    property2
    method1()
    method2()
    Hint: check the ArcGIS API for javascript reference.
    Add your solution to the task section in the guide section.
}
*/

// solution 
class Map {
  constructor(center, zoom) {
    this.center = center; // Property 1: The center coordinates of the map
    this.zoom = zoom;     // Property 2: The initial zoom level of the map
  }

  // Method 1: Initialize and display the map
  initializeMap() {
    // Use a mapping library (e.g., Leaflet) to create and display the map
    this.map = L.map('map-container').setView(this.center, this.zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  // Method 2: Add a marker to the map
  addMarker(latitude, longitude, popupText) {
    if (this.map) {
      const marker = L.marker([latitude, longitude]).addTo(this.map);
      if (popupText) {
        marker.bindPopup(popupText).openPopup();
      }
    } else {
      console.error('Map has not been initialized. Call initializeMap() first.');
    }
  }
}

// Create an instance of the Map class
const mapInstance = new Map([51.505, -0.09], 13);

// Initialize the map
mapInstance.initializeMap();

// Add a marker to the map
mapInstance.addMarker(51.505, -0.09, 'Hello, this is a marker!');
