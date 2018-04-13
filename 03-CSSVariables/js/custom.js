var inputs = document.querySelectorAll('input');

var events = ['change', 'mousemove'];

events.forEach(function(e) {

  inputs.forEach(handleInputs);

  function handleInputs(input) {
    input.addEventListener(e, function(){
      var suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
    });
  };

});
