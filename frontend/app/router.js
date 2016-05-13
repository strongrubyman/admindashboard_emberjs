import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('admin');

  this.route('week-splits', {path: 'week-splits/:user_id'});
  this.route('brewery-dashboard', {path: 'brewery-dashboard/:user_id'});
  this.route('wholesaler-dashboard', {path: 'wholesaler-dashboard/:user_id'});

  this.route('breweries', {path: 'admin/breweries'});
  this.route('wholesalers', {path: 'admin/wholesalers'});
  this.route('users', {path: 'admin/users'});
  this.route('imports', {path: 'admin/imports'});
});

export default Router;
