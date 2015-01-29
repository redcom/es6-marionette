import Marionette from 'backbone.marionette';
import navTemplate from 'templates/nav';

export default class Nav extends Marionette.LayoutView {
  constructor(...rest) {
    this.regions = {
        mainNav: '#mainNav',
        auth: '#auth'
    };
    this.template = navTemplate;
    super(...rest);
  }
}
