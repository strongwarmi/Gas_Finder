'use strict';

const render = (root) => {
  root.empty();
  /*const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));*/
  root.append(Header(_ => render(root)));
    root.append(Buscar(_ => render(root)));
   // root.append(ListadoGas(_ => render(root)));
}

const state = {
  stations: null,
  selectedStation: null
};

$( _ => {

  getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    const root = $('.root');
    render(root);
  });

});
