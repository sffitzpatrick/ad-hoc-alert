(function ($) {
  Drupal.behaviors.gisdAlerts = {
    attach: function (context, settings) {
      $.get('ajax/ad-hoc-alert/load/view', function( data ) {
        $(data).prependTo('body');
      });
    }
  };
}(jQuery));
