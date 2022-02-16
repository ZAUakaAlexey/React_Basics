window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          slider = require('./modules/slider'),
          forms = require('./modules/forms'),
          calc = require('./modules/calc');
    
    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();

});