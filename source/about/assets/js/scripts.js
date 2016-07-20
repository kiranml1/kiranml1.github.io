/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
/*============================================
  Progress Indicator - Skill Meter
 *===========================================*/

/**
 * DOM looks like below
 * <div class="progress pr_progress" data-value="80"></div>
 */

/**
 * SCSS looks like below
 * .pr_progress {
 *   height: 20px;
 *   width: 100%;
 *   padding: 0;
 *   background: $skillMeterColor;
 *   span.ctrl-value {
 *      display: block;
 *      height: 100%;
 *      background-color: $primaryColor;
 *    }
 *   }
 */

(function ($, window, document, undefined) {

  'use strict';

  // Global Brand Profile
  window.PROFILE = {};

  /**
   * Skill Inidator is a progress bar which indiate the progress of the input provided
   * @type {Function}
   */
  PROFILE.skillIndicator = (function(){

    // Init variabled
    var init,
        Module,
        _generateDOM,
        CONST,
        $ctrls;

    // Constants
    CONST = {
      module: 'pr_progress',
      helperClass: 'progress',
      valueClass: 'ctrl-value'
    };

    /**
     * Init Constructor for the Module
     * @param $scope
     */
    init = function($scope){
      $scope = $scope || $('body');

      $ctrls = $scope.find('.' + CONST.module);

      // Early Exis if the controls do not exist
      if ($ctrls.length <= 0) {
        return false;
      }

      // Hide the controls
      $ctrls.hide();

      // Generate the Skill meter for each ctrl
      $ctrls.each(function(index, ctrl){
        new Module($(ctrl));
      });
    };

    /**
     * Constructor for generating skill meter with ctrl with
     * data-value attribute
     * @param $ctrl
     * @constructor
     */
    Module = function($ctrl){
      var _value = $ctrl.data('value');

      // Generates DOM
      _generateDOM($ctrl, _value);
    };

    /**
     * Genserate the DOM for the ctrl ans show it
     * @param $ctrl
     * @param value
     * @private
     */
    _generateDOM = function ($ctrl, value) {
      $ctrl.html('<span class='+ CONST.valueClass +' style="width:'+ value +'%;"></span>');
      $ctrl.show();
    };

    return {
      init: init
    };

  })();

  PROFILE.skillIndicator.init();

})(jQuery, window, document);
