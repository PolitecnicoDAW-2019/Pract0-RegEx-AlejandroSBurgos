const Regex = {
  name: /^\p{L}{3,128}$/,
  surname: /^[\p{L}\s]{3,128}$/,
  email: /^$/,
  address: /^$/,
  american: {
    birth: /^$/,
    postCode: /^$/,
    phone: /^$/,
    mobilePhone: /^$/
  },
  spanish: {
    birth: /^$/,
    postCode: /^$/,
    phone: /^$/,
    mobilePhone: /^$/
  }
};

const GUI = {
  inputName: '',
  inputSurname: '',
  inputEmail: '',
  inputAddress: '',
  inputBirth: '',
  inputPostCode: '',
  inputPhone: '',
  inputMobilePhone: '',
  radioLanguage: '',
  buttonSend: ''
};

const RESULT_COLOR = {
  success: 'green',
  error: 'red'
};

const DEFAULT_COUNTRY = 'spanish';
