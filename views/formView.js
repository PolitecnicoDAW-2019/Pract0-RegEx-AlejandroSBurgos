class FormView {
  _printSuccess(element) {
    element.style.borderColor = RESULT_COLOR.success;
  }

  _printError(element) {
    element.style.borderColor = RESULT_COLOR.error;
  }

  _isLength(text) {
    const textLength = text.length;
    return textLength >= 3;
  }

  _printFieldResult(isValue, element) {
    isValue ? this._printSuccess(element) : this._printError(element);
  }

  getInputsValue() {
    return {
      name: GUI.inputName.value,
      surname: GUI.inputSurname.value,
      email: GUI.inputEmail.value,
      birth: GUI.inputBirth.value,
      zipCode: GUI.inputZipCode.value,
      phone: GUI.inputPhone.value
    };
  }

  startInputNameEvent(isName) {
    GUI.inputName.addEventListener('keyup', () => {
      const nameValue = GUI.inputName.value;
      if (this._isLength(nameValue)) {
        this._printFieldResult(isName, GUI.inputName);
      }
    });
  }

  startInputSurnameEvent(isSurname) {
    GUI.inputSurname.addEventListener('keyup', () => {
      const surnameValue = GUI.inputSurname.value;
      if (this._isLength(surnameValue)) {
        this._printFieldResult(isSurname, GUI.inputSurname);
      }
    });
  }

  startInputEmailEvent(isEmail) {
    GUI.inputEmail.addEventListener('keyup', () => {
      const emailValue = GUI.inputEmail.value;
      if (this._isLength(emailValue)) {
        this._printFieldResult(isEmail, GUI.inputEmail);
      }
    });
  }

  startInputBirthEvent(isBirth) {
    GUI.inputBirth.addEventListener('keyup', () => {
      const birthValue = GUI.inputBirth.value;
      if (this._isLength(birthValue)) {
        this._printFieldResult(isBirth, GUI.inputBirth);
      }
    });
  }

  startInputZipCodeEvent(isZipCode) {
    GUI.inputZipCode.addEventListener('keyup', () => {
      const zipCodeValue = GUI.inputZipCode.value;
      if (this._isLength(zipCodeValue)) {
        this._printFieldResult(isZipCode, GUI.inputZipCode);
      }
    });
  }

  startInputPhoneEvent(isPhone) {
    GUI.inputPhone.addEventListener('keyup', () => {
      const phoneValue = GUI.inputPhone.value;
      if (this._isLength(phoneValue)) {
        this._printFieldResult(isPhone, GUI.inputPhone);
      }
    });
  }

  getCurrentRadioCountryValue() {
    for (const country in GUI.radio) {
      GUI.radio[country].addEventListener('click', function() {
        return GUI.radio[country].value;
      });
    }
  }

  changePlaceholders(country) {
    if (country === 'spanish') {
      GUI.inputBirth.setAttribute('placeholder', placeholders.spanish.birth);
      GUI.inputZipCode.setAttribute(
        'placeholder',
        placeholders.spanish.zipCode
      );
      GUI.inputPhone.setAttribute('placeholder', placeholders.spanish.phone);
    }
    if (country === 'american') {
      GUI.inputBirth.setAttribute('placeholder', placeholders.american.birth);
      GUI.inputZipCode.setAttribute(
        'placeholder',
        placeholders.american.zipCode
      );
      GUI.inputPhone.setAttribute('placeholder', placeholders.american.phone);
    }
  }
}
