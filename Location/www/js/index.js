/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getPosition() {

   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }

   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position)
   {
      var mylat = position.coords.latitude;
      var mylong = position.coords.longitude;
      // initialize the map
      var map = L.map('map').setView([mylat, mylong], 17);

      var marker = L.marker([mylat, mylong]).addTo(map);
      marker.bindPopup("<b>You Are Here!</b>").openPopup();


      // load a tile layer
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
         useCache: true
      }).addTo(map);

      // load GeoJSON from an external file
      $.getJSON("rodents.geojson",function(data){
          var ratIcon = L.icon({
              iconUrl: 'http://andywoodruff.com/maptime-leaflet/rat.png',
              iconSize: [60,50]
          });
          L.geoJson(data,{
              pointToLayer: function(feature,latlng){
                  return L.marker(latlng,{icon: ratIcon});
              }
          }).addTo(map);
      });
   };

   $("#leaflet-copyright").html("Leaflet | Map Tiles &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors");

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}

function CreateMap()
{
  // initialize the map
  var map = L.map('map').setView([42.35, -71.08], 13);

  // load a tile layer
  L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
    {
      attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
      maxZoom: 17,
      minZoom: 9
    }).addTo(map);
}