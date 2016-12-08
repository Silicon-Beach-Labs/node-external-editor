// Generated by CoffeeScript 1.12.0

/*
  ExternalEditor
  Kevin Gravier <kevin@mrkmg.com>
  MIT
 */

(function() {
  var LaunchEditorError,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  LaunchEditorError = (function(superClass) {
    extend(LaunchEditorError, superClass);

    LaunchEditorError.prototype.message = 'Failed launch editor';

    function LaunchEditorError(original_error) {
      this.original_error = original_error;
    }

    return LaunchEditorError;

  })(Error);

  module.exports = LaunchEditorError;

}).call(this);
