'use strict';
import Marionette from 'backbone.marionette';
import layoutTemplate from 'templates/layout';

export default class AppLayout extends Marionette.LayoutView {
  constructor(...rest) {
    this.regions = {
        mainApp: '#mainApp',
        footer: '#footer'
    };
    this.template = layoutTemplate;

    super(...rest);
  }
}
