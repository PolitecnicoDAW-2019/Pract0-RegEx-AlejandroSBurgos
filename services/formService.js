class FormService {
  validateName(name) {
    return Regex.name.test(name);
  }

  validateSurname(surname) {
    return Regex.surname.test(surname);
  }

  validateEmail(email) {
    return Regex.email.test(email);
  }

  validateAddress(address) {
    return Regex.address.test(address);
  }

  _isDefaultCountry(country) {
    return country === DEFAULT_COUNTRY;
  }

  _validateSpanishBirth(birth) {
    return Regex.spanish.birth(birth);
  }
  _validateAmericanBirth(birth) {
    return Regex.american.birth.test(birth);
  }
  validateBirth(birth, country) {
    return this.isDefaultCountry(country)
      ? this.validateSpanishBirth(birth)
      : this.validateAmericanBirth(birth);
  }

  _validateSpanishPostCode(postCode) {
    return Regex.spanish.postCode.test(postCode);
  }
  _validateAmericanPostCode(postCode) {
    return Regex.american.postCode.test(postCode);
  }
  validatePostCode(postCode, country) {
    return this.isDefaultCountry(country)
      ? this.validateSpanishPostCode(postCode)
      : this.validateAmericanPostCode(postCode);
  }

  _validateSpanishPhone(phone) {
    return Regex.spanish.phone.test(phone);
  }
  _validateAmericanPhone(phone) {
    return Regex.american.phone.test(phone);
  }
  validatePhone(phone, country) {
    return this.isDefaultCountry(country)
      ? this.validateSpanishPhone(phone)
      : this.validateAmericanPhone(phone);
  }

  _validateSpanishMobilePhone(mobilePhone) {
    return Regex.spanish.mobilePhone.test(mobilePhone);
  }
  _validateAmericanMobilePhone(mobilePhone) {
    return Regex.american.mobilePhone.test(mobilePhone);
  }
  validateMobilePhone(mobilePhone, country) {
    return this.isDefaultCountry(country)
      ? this.validateSpanishMobilePhone(mobilePhone)
      : this.validateAmericanMobilePhone(mobilePhone);
  }
}
