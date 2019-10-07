class FormController {
  constructor(formView, formService) {
    this.formView = formView;
    this.formService = formService;
  }

  validateAll() {
    this.validateName();
    this.validateSurname();
    this.validateEmail();
    const country = this.formView.getCurrentRadioCountryValue();
    this.validateBirth(country);
    this.validateZipCode(country);
    this.validatePhone(country);
  }

  validateName() {
    const name = this.formView.getInputNameValue();
    const isName = this.formService.isValidName(name);
    this.formView.printNameValidation(isName);
  }

  validateSurname() {
    const surname = this.formView.getInputSurnameValue();
    const isSurname = this.formService.isValidSurname(surname);
    this.formView.printSurnameValidation(isSurname);
  }

  validateEmail() {
    const email = this.formView.getInputEmailValue();
    const isEmail = this.formService.isValidEmail(email);
    this.formView.printEmailValidation(isEmail);
  }

  getCountry() {
    return this.formView.getCurrentRadioCountryValue();
  }

  validateBirth(country) {
    const birth = this.formView.getInputBirthValue();
    const isBirth = this.formService.isValidBirth(birth, country);
    this.formView.printSurnameValidation(isBirth);
  }

  validateZipCode(country) {
    const zipCode = this.formView.getInputZipCodeValue();
    const isZipCode = this.formService.isValidBirth(zipCode, country);
    this.formView.printZipCodeValidation(isZipCode);
  }

  validatePhone(country) {
    const phone = this.formView.getInputPhoneValue();
    const isPhone = this.formService.isValidPhone(phone, country);
    this.formView.printPhoneValidation(isPhone);
  }
}
