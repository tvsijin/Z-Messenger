angular.module('zeebra', ['angular-meteor', 'ionic', 'angularMoment', 'monospaced.elastic']);
 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onReady);
}
 
function onReady() {
  angular.bootstrap(document, ['zeebra']);
}