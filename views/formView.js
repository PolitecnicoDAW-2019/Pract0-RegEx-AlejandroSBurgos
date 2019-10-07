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

  getInputNameValue() {
    GUI.inputName.addEventListener('change', function() {
      const nameValue = GUI.inputName.value;
      if (this._isLenght(nameValue)) return nameValue;
    });
  }

  printNameValidation(isName) {
    isName
      ? this._printSuccess(GUI.inputName)
      : this._printError(GUI.inputName);
  }

  getInputSurnameValue() {
    GUI.inputSurname.addEventListener('change', function() {
      const surnameValue = GUI.inputSurname.value;
      if (this._isLenght(surnameValue)) return surnameValue;
    });
  }

  printSurnameValidation(isSurname) {
    isSurname
      ? this._printSuccess(GUI.inputSurname)
      : this._printError(GUI.inputSurname);
  }

  getInputEmailValue() {
    GUI.inputEmail.addEventListener('change', function() {
      const emailValue = GUI.inputEmail.value;
      if (this._isLenght(emailValue)) return emailValue;
    });
  }

  printEmailValidation(isEmail) {
    isEmail
      ? this._printSuccess(GUI.inputEmail)
      : this._printError(GUI.inputEmail);
  }

  getInputBirthValue() {
    GUI.inputBirth.addEventListener('change', function() {
      const birthValue = GUI.inputBirth.value;
      if (this._isLenght(birthValue)) return birthValue;
    });
  }

  printBirthValidation(isBirth) {
    isBirth
      ? this._printSuccess(GUI.inputBirth)
      : this._printError(GUI.inputBirth);
  }

  getInputZipCodeValue() {
    GUI.inputZipCode.addEventListener('change', function() {
      const zipCodeValue = GUI.inputZipCode.value;
      if (this._isLenght(zipCodeValue)) return zipCodeValue;
    });
  }

  printZipCodeValidation(isZipCode) {
    isZipCode
      ? this._printSuccess(GUI.inputZipCode)
      : this._printError(GUI.inputZipCode);
  }

  getInputPhoneValue() {
    GUI.inputPhone.addEventListener('change', function() {
      const phoneValue = GUI.inputPhone.value;
      if (this._isLenght(phoneValue)) return phoneValue;
    });
  }

  printPhoneValidation(isPhone) {
    isPhone
      ? this._printSuccess(GUI.inputPhone)
      : this._printError(GUI.inputPhone);
  }

  getCurrentRadioCountryValue() {
    for (const country in GUI.radio) {
      GUI.radio[country].addEventListener('click', function() {
        return GUI.radio[country].value;
      });
    }
  }
}
