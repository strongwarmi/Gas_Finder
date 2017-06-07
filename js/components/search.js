'use strict';
const estacion = (station,update) =>{
    const contieneItem =  $('<div class="containerItem"></div>');
    const nombre = $('<p><b>' + station.name + '</b></p>');
    const direccion = $('<small>' + station.address + '</small><br>');
    const distrito = $('<small>' + station.district + '</small>');
    const iconMap = $('<i class="fa fa-map"></i>');
    
    contieneItem.append(nombre);
    contieneItem.append(direccion);
    contieneItem.append(distrito);
    contieneItem.append(iconMap);
    
/*    contieneItem.on('click',(e) => {
       e.preventDefault();
        state.selectedStation = movie;
        update();
    });*/
    return contieneItem;
}
const ListadoGas = (update) => {
    const GasContainer = $('<div class="container"></div>');
    state.stations.forEach((station) => {
        GasContainer.append(estacion(station,update));
    });
    return GasContainer;    
}