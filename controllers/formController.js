class FormController {
  constructor(formView, formService) {
    this.formView = formView;
    this.formService = formService;
  }

  validateAll() {
    const country = this.formView.getCurrentRadioCountryValue() || 'american';
    this.formView.changePlaceholders(country);
    const inputsValue = this.formView.getInputsValue();
    this.validateName(inputsValue.name);
    this.validateSurname(inputsValue.surname);
    this.validateEmail(inputsValue.email);
    this.validateBirth(inputsValue.birth, country);
    this.validateZipCode(inputsValue.zipCode, country);
    this.validatePhone(inputsValue.phone, country);
  }

  validateName(name) {
    const isName = this.formService.isValidName(name);
    this.formView.startInputNameEvent(isName);
  }

  validateSurname(surname) {
    const isSurname = this.formService.isValidSurname(surname);
    this.formView.startInputSurnameEvent(isSurname);
  }

  validateEmail(email) {
    const isEmail = this.formService.isValidEmail(email);
    this.formView.startInputEmailEvent(isEmail);
  }

  getCountry() {
    return this.formView.getCurrentRadioCountryValue();
  }

  validateBirth(birth, country) {
    const isBirth = this.formService.isValidBirth(birth, country);
    this.formView.startInputBirthEvent(isBirth);
  }

  validateZipCode(zipCode, country) {
    const isZipCode = this.formService.isValidBirth(zipCode, country);
    this.formView.startInputZipCodeEvent(isZipCode);
  }

  validatePhone(phone, country) {
    const isPhone = this.formService.isValidPhone(phone, country);
    this.formView.startInputPhoneEvent(isPhone);
  }
}
