class FormService {
  isValidName(name) {
    return Regex.name.test(name);
  }

  isValidSurname(surname) {
    return Regex.surname.test(surname);
  }

  isValidEmail(email) {
    return Regex.email.test(email);
  }

  _isDefaultCountry(country) {
    return country === DEFAULT_COUNTRY;
  }

  _isValidSpanishBirth(birth) {
    return Regex.spanish.birth(birth);
  }
  _isValidAmericanBirth(birth) {
    return Regex.american.birth.test(birth);
  }
  isValidBirth(birth, country) {
    return this._isDefaultCountry(country)
      ? this._isValidSpanishBirth(birth)
      : this._isValidAmericanBirth(birth);
  }

  _isValidSpanishZipCode(zipCode) {
    return Regex.spanish.zipCode.test(zipCode);
  }
  _isValidAmericanZipCode(zipCode) {
    return Regex.american.zipCode.test(zipCode);
  }
  isValidZipCode(zipCode, country) {
    return this._isDefaultCountry(country)
      ? this._isValidSpanishZipCode(zipCode)
      : this._isValidAmericanZipCode(zipCode);
  }

  _isValidSpanishPhone(phone) {
    return Regex.spanish.phone.test(phone);
  }
  _isValidAmericanPhone(phone) {
    return Regex.american.phone.test(phone);
  }
  isValidPhone(phone, country) {
    return this._isDefaultCountry(country)
      ? this._isValidSpanishPhone(phone)
      : this._isValidAmericanPhone(phone);
  }

  _isValidSpanishMobilePhone(mobilePhone) {
    return Regex.spanish.mobilePhone.test(mobilePhone);
  }
  _isValidAmericanMobilePhone(mobilePhone) {
    return Regex.american.mobilePhone.test(mobilePhone);
  }
  isValidMobilePhone(mobilePhone, country) {
    return this._isDefaultCountry(country)
      ? this._isValidSpanishMobilePhone(mobilePhone)
      : this._isValidAmericanMobilePhone(mobilePhone);
  }
}
