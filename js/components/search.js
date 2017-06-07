'use strict';
const Buscar = (update) => {    
    const formGroup = $('<div class="form-group"></div>')    
    const iconSearch = $('<i class="fa fa-search"></i>');
    const input = $('<input id="search" type="text" placeholder="Ingresa tu distrito a buscar">');
    const GasContainer = $('<div class="container"></div>');
    
    formGroup.append(iconSearch);
    formGroup.append(input);
    formGroup.append(GasContainer);
    input.on('keyup',() =>{
        const distritosFiltrados = filterByDistrict(state.stations,input.val());
        console.log(distritosFiltrados);
        ListadoGas(GasContainer,distritosFiltrados);
    });
    
    return formGroup;
}

            

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
// esta funcion hace de rerender
const ListadoGas = (GasContainer,distritosFiltrados) => {
    GasContainer.empty();
    distritosFiltrados.forEach((station) => {
        GasContainer.append(estacion(station, _ => (ListadoGas(GasContainer,distritosFiltrados))));
    });
    return GasContainer;    
}