"use strict"

let jsonData = require('./partners.json')
const {greatCircleDistance} = require("great-circle-distance");

let data = (Longitude = '51.5144636',Lattitude='-0.142571',Distance) => {
        let NewDataArray = [];
        jsonData.forEach((item)=>{
        if(item.offices.length > 0){
            item.offices.forEach((office) => {
                let newItem = Object.assign({},item);
                var officeCoordsArray = office.coordinates.split(',');
                let coords = {
                    lat1: Lattitude,
                    lng1: Longitude,
                    lat2: officeCoordsArray[0],
                    lng2: officeCoordsArray[1]
                };
                let CircDist = greatCircleDistance(coords);
                office.distance = CircDist; 
                newItem.office = office;
                delete newItem.offices;
                NewDataArray.push(newItem);
            })
        }
    })
    if(Distance > 0){
        NewDataArray = NewDataArray.filter(item => {
            return item.office.distance <= Distance;
        })
    }
    NewDataArray = NewDataArray.sort(function(a, b) {
        return parseFloat(a.office.distance) - parseFloat(b.office.distance);
    });
    
    return NewDataArray;
}
//data();
exports.data = data;