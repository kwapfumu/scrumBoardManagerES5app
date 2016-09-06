(function(){
  'use strict';
/**
  @name SaveOrEditButtonTextFctr
  @desc Factory to change the text of save button to edit according to the form being
  displayed/called
*/
angular.module('scrumBoardEs5AppApp')
  .factory('SaveOrEditButtonTextFctr', SaveOrEditButtonTextFctr);

  SaveOrEditButtonTextFctr.$inject = [];

  function SaveOrEditButtonTextFctr() {

    //object with save and edit texts
    var taskFormButtonText = {
      saveButtonText:'Save',
      updateButtonText:'Update'
    };

    // Public API here
    return {
      //returns save
      getSaveButtonText: function getSaveButtonText() {
        return taskFormButtonText.saveButtonText;
      },
      //returns Update
      getUpdateButtonText: function getUpdateButtonText() {
        return taskFormButtonText.getUpdateButtonText;
      }
    };
  }
})();
