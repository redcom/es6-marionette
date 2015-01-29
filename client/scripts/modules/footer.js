import Marionette from 'backbone.marionette';
import footerTemplate from 'templates/footer';

export default class Footer extends Marionette.ItemView {
  constructor(...rest) {
    this.template = footerTemplate;
    super(...rest);
  }
}
