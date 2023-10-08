function updateHeatData(selectedOption){
    let selectedData;
    if(selectedOption == "live"){
        selectedData = cityData1;
    }else if(selectedOption == "predict"){
        selectedData = cityData2;
    }else if(selectedOption == "warn"){
        selectedData = cityData3;
    }else{
        selectedData = cityData1;
    }
    if (map.hasLayer(heatLayer)) {
        map.removeLayer(heatLayer);
    }

    heatLayer = L.heatLayer(selectedData, {
        radius: 10,
        blur: 15,
        maxZoom: 17
    }).addTo(map);
}