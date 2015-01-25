import Marionette from 'backbone.marionette';
import footerTemplate from 'templates/footer';

export default class Footer extends Marionette.ItemView {
  constructor(...rest) {
    super(...rest);
    this.template = footerTemplate;
  }
}
