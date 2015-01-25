import Marionette from 'backbone.marionette';
import navTemplate from 'templates/nav';

export default class Footer extends Marionette.ItemView {
  constructor(...rest) {
    super(...rest);
    this.template = navTemplate;
  }
}
