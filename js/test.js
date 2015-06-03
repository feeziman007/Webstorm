(function() {

  "use strict";

  var houseNumber  = 5


  /**
   * This will validate
   *
   * @param {Boolean} validate
   * @param {number} size
   * @param {string} crust
   * @param {Array} toppings
   */
  function documentReady(validate, size, crust, toppings) {
    alert('document is ready')
  }

  $(document).ready(function() {
    documentReady(false, 2333, 'thick', ['sauce', 'cheese', 'mushroom'])
  })

})()