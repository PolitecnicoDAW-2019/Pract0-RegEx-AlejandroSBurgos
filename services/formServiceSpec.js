describe('FormService ->', () => {
  beforeEach(function() {
    formService = new FormService();
  });
  describe('Test valid name input', () => {
    const parameters = [
      {
        description: 'should pass with 3 to 258 characters',
        input: 'Alejandro',
        result: true
      },
      {
        description: 'should fail with less than 3 characters',
        input: 'Al',
        result: false
      },
      {
        description: 'should failt with a number inside the name',
        input: 'Al3jandro',
        result: false
      }
    ];
    parameters.forEach(parameter => {
      it(parameter.description, () => {
        const result = this.formService.isValidName(parameter.input);
        expect(result).toBe(parameter.result);
      });
    });
  });
  describe('Test valid surname input', () => {
    const parameters = [
      {
        description: 'should pass with 3 to 256 characters',
        input: 'Sanchez',
        result: true
      },
      {
        description: 'should fail with less than 3 characters',
        input: 'Sa',
        result: false
      },
      {
        description: 'should failt with a number inside the name',
        input: 'S4nch3z Burg0s',
        result: false
      }
    ];
    parameters.forEach(parameter => {
      it(parameter.description, () => {
        const result = this.formService.isValidSurname(parameter.input);
        expect(result).toBe(parameter.result);
      });
    });
  });
  describe('Test valid email input', () => {
    const parameters = [
      {
        description: 'should pass with the value like example@gmail.com',
        input: 'example@gmail.com',
        result: true
      },
      {
        description: 'should fail without having the special character @',
        input: 'example.gmail.com',
        result: false
      },
      {
        description:
          'should fail with the pecial character " - " inside the first characters',
        input: 'alejandro-sanchez@gmail.com',
        result: false
      }
    ];
    parameters.forEach(parameter => {
      it(parameter.description, () => {
        const result = this.formService.isValidEmail(parameter.input);
        expect(result).toBe(parameter.result);
      });
    });
  });
});
