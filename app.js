const controller = new FormController(new FormView(), new FormService());
window.addEventListener('change', function() {
  controller.validateAll();
});
