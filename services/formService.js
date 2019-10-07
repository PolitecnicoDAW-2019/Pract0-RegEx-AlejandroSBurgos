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

  isValidAddress(address) {
    return Regex.address.test(address);
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
    return this.isDefaultCountry(country)
      ? this.isValidSpanishBirth(birth)
      : this.isValidAmericanBirth(birth);
  }

  _isValidSpanishZipCode(zipCode) {
    return Regex.spanish.zipCode.test(zipCode);
  }
  _isValidAmericanZipCode(zipCode) {
    return Regex.american.zipCode.test(zipCode);
  }
  isValidZipCode(zipCode, country) {
    return this.isDefaultCountry(country)
      ? this.isValidSpanishZipCode(zipCode)
      : this.isValidAmericanZipCode(zipCode);
  }

  _isValidSpanishPhone(phone) {
    return Regex.spanish.phone.test(phone);
  }
  _isValidAmericanPhone(phone) {
    return Regex.american.phone.test(phone);
  }
  isValidPhone(phone, country) {
    return this.isDefaultCountry(country)
      ? this.isValidSpanishPhone(phone)
      : this.isValidAmericanPhone(phone);
  }

  _isValidSpanishMobilePhone(mobilePhone) {
    return Regex.spanish.mobilePhone.test(mobilePhone);
  }
  _isValidAmericanMobilePhone(mobilePhone) {
    return Regex.american.mobilePhone.test(mobilePhone);
  }
  isValidMobilePhone(mobilePhone, country) {
    return this.isDefaultCountry(country)
      ? this.isValidSpanishMobilePhone(mobilePhone)
      : this.isValidAmericanMobilePhone(mobilePhone);
  }
}
