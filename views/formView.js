(FormView = function() {

  const printSuccess = function(element) {
    element.style.borderColor = RESULT_COLOR.success;
  };

  const printError = function(element) {
    element.style.borderColor = RESULT_COLOR.error;
  };

  const isAmount = function(text) {
    const textLenght = text.lenght
    return textLenght >= 3;
  };

  const getinputNameValue = function() {
    window.document.getElementById('name').addEventListener('change',function(this){
      const name = this.target.value;
      if(this.isAmount(name)) return name;
    });
  }

  const getinputSurnameValue = function() {
    window.document.getElementById('surname').addEventListener('change',function(this){
      const name = this.target.value;
      if(this.isAmount(name)) return name;
    });
  }
  

  return {};
})();
