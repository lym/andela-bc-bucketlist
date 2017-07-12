(function ($, Backbone, _, app) {
  /* View to handle all the homepage rendering logic
   */
  var HomepageView = Backbone.View.extend({
    templateName: '#home-template',
    initialize: function () {
      this.template = _.template($(this.templateName).html());
    },
    render: function () {
      var context = this.getContext();
      var html    = this.template(context);
      this.$el.html(html);
    },
    getContext: function () {
      return {};
    }
  });
  app.views.HomepageView = HomepageView;
})(jQuery, Backbone, _, app);
