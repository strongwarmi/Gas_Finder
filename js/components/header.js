'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const iconArrow = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
  const title = $("<span>Gas Finder</span>");
  const formGroup = $('<div class="form-group"></div>')    
  const iconSearch = $('<i class="fa fa-search"></i>');
  const input = $('<input id="search" type="text" placeholder="  Ingresa tu distrito a buscar">');
    
  const iconMap = $('<i class="fa fa-map" aria-hidden="true"></i>');
      
  formGroup.append(iconSearch);
  formGroup.append(input);
  header.append(title);
  header.append(formGroup);

  return header;
}