const Regex = {
  name: /^[A-Za-záéíóú]{3,128}$/,
  surname: /^[A-Za-záéíóú\s]{3,256}$/,
  email: /^[A-Za-z\_\.]{3,28}@[a-z]{2,25}\.[a-z]{2,25}$/,
  american: {
    birth: /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i,
    zipCode: /^\d{5}(?:[-\s]?\d{4})?$/,
    phone: /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/
  },
  spanish: {
    birth: /^((0|1|2)\d{1})([-\/\s]{1})((0|1)\d{1})([-\/\s]{1})((19|20)\d{2})$/,
    zipCode: /^0[1-9][0-9]{3}|[1-4][0-9]{4}|5[0-2][0-9]{3}$/,
    phone: /^(\+34|0034|34)?[ -]*(9|8|6|7)[ -]*([0-9][ -]*){8}$/
  }
};

const GUI = {
  inputName: window.document.getElementById('inputName'),
  inputSurname: window.document.getElementById('inputSurname'),
  inputEmail: window.document.getElementById('inputEmail'),
  inputAddress: window.document.getElementById('inputAddress'),
  inputBirth: window.document.getElementById('inputBirth'),
  inputZipCode: window.document.getElementById('inputZipCode'),
  inputPhone: window.document.getElementById('inputPhone'),
  //inputMobilePhone: '',
  radio: {
    spanish: window.document.getElementById('radioSpain'),
    american: window.document.getElementById('radioUSA')
  },
  buttonSend: window.document.getElementById('buttonSend')
};

const RESULT_COLOR = {
  success: 'green',
  error: 'red'
};

const DEFAULT_COUNTRY = 'spanish';

const placeholders = {
  spanish: {
    birth: 'DD/MM/YYYY',
    zipCode: '22222',
    phone: '+34 666 555 444'
  },
  american: {
    birth: 'MM/DD/YYYY',
    zipCode: '55555-4444',
    phone: '1 (333) 333 4444'
  }
};
