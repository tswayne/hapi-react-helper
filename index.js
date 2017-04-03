'use strict';

var ReactHelper = require('react-helper');

exports.register = function (server, options, next) {
  server.app.reactHelperContext = {};
  server.app.renderComponent = function(componentName, props) {
    if (!props) {
      props = {};
    }
    props.reactHelperContext = server.app.reactHelperContext;
    return ReactHelper.renderComponent(componentName, props);
  };

  server.app.addToReactContext = function(context) {
    server.app.reactHelperContext = Object.assign(server.app.reactHelperContext, server.app.reactHelperContext, context)
  }
  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};