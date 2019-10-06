(FormService = function() {
  const validateName = function(name) {
    return Regex.name.test(name);
  };

  const validateSurname = function(surname) {
    return Regex.surname.test(surname);
  };

  const validateEmail = function(email) {
    return Regex.email.test(email);
  };

  const validateAddress = function(address) {
    return Regex.address.test(address);
  };

  const isDefaultCountry = function(country) {
    return country === DEFAULT_COUNTRY;
  };

  const validateSpanishBirth = function(birth) {
    return Regex.spanish.birth(birth);
  };
  const validateAmericanBirth = function(birth) {
    return Regex.american.birth.test(birth);
  };
  const validateBirth = function(birth, country) {
    return this.isDefaultCountry(country)
      ? this.validateSpanishBirth(birth)
      : this.validateAmericanBirth(birth);
  };

  const validateSpanishPostCode = function(postCode) {
    return Regex.spanish.postCode.test(postCode);
  };
  const validateAmericanPostCode = function(postCode) {
    return Regex.american.postCode.test(postCode);
  };
  const validatePostCode = function(postCode, country) {
    return this.isDefaultCountry(country)
      ? this.validateSpanishPostCode(postCode)
      : this.validateAmericanPostCode(postCode);
  };

  const validateSpanishPhone = function(phone) {
    return Regex.spanish.phone.test(phone);
  };
  const validateAmericanPhone = function(phone) {
    return Regex.american.phone.test(phone);
  };
  const validatePhone = function(phone, country) {
    return this.isDefaultCountry(country)
      ? this.validateSpanishPhone(phone)
      : this.validateAmericanPhone(phone);
  };

  const validateSpanishMobilePhone = function(mobilePhone) {
    return Regex.spanish.mobilePhone.test(mobilePhone);
  };
  const validateAmericanMobilePhone = function(mobilePhone) {
    return Regex.american.mobilePhone.test(mobilePhone);
  };
  const validateMobilePhone = function(mobilePhone, country) {
    return this.isDefaultCountry(country)
      ? this.validateSpanishMobilePhone(mobilePhone)
      : this.validateAmericanMobilePhone(mobilePhone);
  };

  return {
    validateName,
    validateSurname,
    validateAddress,
    validateBirth,
    validatePostCode,
    validatePhone,
    validateMobilePhone
  };
})();
