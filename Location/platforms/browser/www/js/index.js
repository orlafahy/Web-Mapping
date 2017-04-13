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

var map;
var array = [];
var animalContainer = document.getElementById("animal-info");
var btn1 = document.getElementById("1");
var btn2 = document.getElementById("2");
var btn3 = document.getElementById("3");

btn1.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://raw.githubusercontent.com/orlafahy/Web-Mapping/master/data.json?token=AI1Fm7mimnF7AnjY9kmQMJAfb-B0kIOfks5Y-MVEwA%3D%3D');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML1(ourData)
    };
    ourRequest.send();
});

btn2.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://raw.githubusercontent.com/orlafahy/Web-Mapping/master/data.json?token=AI1Fm7mimnF7AnjY9kmQMJAfb-B0kIOfks5Y-MVEwA%3D%3D');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML2(ourData)
    };
    ourRequest.send();
});

btn3.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://raw.githubusercontent.com/orlafahy/Web-Mapping/master/data.json?token=AI1Fm7mimnF7AnjY9kmQMJAfb-B0kIOfks5Y-MVEwA%3D%3D');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML3(ourData)
    };
    ourRequest.send();
});

function renderHTML1(data)
{
    var newlat = [];
    var newlong = [];
    var n = 0;

    for(i = 0 ; i < array.length; i++)
    {
        map.removeLayer(array[i]);
    }
    array = [];

    for(i = 0 ; i < data.length ; i++)
    {
        if(data[i].name == "My House1" || data[i].name == "My House2")
        {
            newlat = data[i].location.lat;
            newlong = data[i].location.long;
            marker = L.marker([newlat, newlong]);
            array.push(marker);
            map.addLayer(array[n]);
            n++;
        }
    }
}
function renderHTML2(data)
{
    var newlat = "";
    var newlong = "";
    var n = 0;

   for(i = 0 ; i < array.length; i++)
   {
       map.removeLayer(array[i]);
   }

   array = [];

    for(i = 0 ; i < data.length ; i++)
    {
        if(data[i].name == "My House2" || data[i].name == "My House3")
        {
            newlat = data[i].location.lat;
            newlong = data[i].location.long;
            marker = L.marker([newlat, newlong]).addTo(map);
            array.push(marker);
            map.addLayer(array[n]);
            n++;
        }
    }
}

function renderHTML3(data)
{
    var newlat = "";
    var newlong = "";
    var n = 0;

   for(i = 0 ; i < array.length; i++)
   {
       map.removeLayer(array[i]);
   }

   array = [];

    for(i = 0 ; i < data.length ; i++)
    {
        if(data[i].name == "My House3" || data[i].name == "My House1")
        {
            newlat = data[i].location.lat;
            newlong = data[i].location.long;
            marker = L.marker([newlat, newlong]).addTo(map);
            array.push(marker);
            map.addLayer(array[n]);
            n++;
        }
    }
}

function getPosition()
{
    var data = data;

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
      map = L.map('map').setView([mylat, mylong], 17);

      //var marker = L.marker([mylat, mylong]).addTo(map);
      //marker.bindPopup("<b>You Are Here!</b>").openPopup();

      // load a tile layer
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
         useCache: true
      }).addTo(map);
   };

   $("#leaflet-copyright").html("Leaflet | Map Tiles &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors");

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}