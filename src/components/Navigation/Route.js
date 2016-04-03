/**
 * Route for Navigation
 */

const {Component} = require('react');

class Route {
  constructor(Component, title = '', props = {}) {
    componentChecker(Component);

    this.Component = Component;
    this.props = props;
    this.title = title;
  }

  // methods
}



function componentChecker(value) {
  if (getAncestors(value).indexOf(Component) === -1) {
    throw new Error('Component不是React.Component子类');
  }
}


function getAncestors(c) {
    let parent = Object.getPrototypeOf(c);

    if (parent) {
        getAncestors.result.push(parent);
        return getAncestors(parent);
    } else {
        let result = getAncestors.result;
        getAncestors.result = [];
        return result;
    }
}
getAncestors.result = [];

module.exports = Route;
