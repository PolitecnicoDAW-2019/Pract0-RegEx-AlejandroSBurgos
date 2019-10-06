class FormView {
  _printSuccess(element) {
    element.style.borderColor = RESULT_COLOR.success;
  }

  _printError(element) {
    element.style.borderColor = RESULT_COLOR.error;
  }

  _isLenght(text) {
    const textLenght = text.lenght;
    return textLenght >= 3;
  }

  getinputNameValue() {
    window.document
      .getElementById('name')
      .addEventListener('change', function(event) {
        const name = event.target.value;
        if (this.isAmount(name)) return name;
      });
  }

  getinputSurnameValue() {
    window.document
      .getElementById('surname')
      .addEventListener('change', function(event) {
        const name = event.target.value;
        if (this.isAmount(name)) return name;
      });
  }
}
