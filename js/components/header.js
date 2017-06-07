'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const iconArrow = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
  const title = $("<span>Gas Finder</span>");          

  header.append(title);    
  
  return header;
}
