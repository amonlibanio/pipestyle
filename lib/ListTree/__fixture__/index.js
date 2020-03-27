"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.listWithSubList = exports.listWithOneItem = exports.simpleList = void 0;

var _faker = _interopRequireDefault(require("faker"));

var simpleList = [{
  list: [{
    label: 'Category Name 1',
    uuid: _faker["default"].random.uuid(),
    list: [{
      uuid: _faker["default"].random.uuid(),
      label: 'Label 1',
      sublabel: 'SubLabel 1'
    }, {
      uuid: _faker["default"].random.uuid(),
      label: 'Label 2',
      sublabel: 'SubLabel 2'
    }, {
      uuid: _faker["default"].random.uuid(),
      label: 'Label 3',
      sublabel: 'SubLabel 3'
    }]
  }, {
    label: 'Category Name 2',
    uuid: _faker["default"].random.uuid(),
    list: [{
      uuid: _faker["default"].random.uuid(),
      label: 'Label 4',
      sublabel: 'SubLabel 4'
    }, {
      uuid: _faker["default"].random.uuid(),
      label: 'Label 5',
      sublabel: 'SubLabel 5'
    }, {
      uuid: _faker["default"].random.uuid(),
      label: 'Label 6',
      sublabel: 'SubLabel 6'
    }]
  }]
}];
exports.simpleList = simpleList;
var listWithOneItem = [{
  list: [{
    label: 'Category Name 1',
    uuid: _faker["default"].random.uuid(),
    list: [{
      uuid: _faker["default"].random.uuid(),
      label: 'Label 1',
      sublabel: 'SubLabel 1'
    }, {
      uuid: _faker["default"].random.uuid(),
      label: 'Label 2',
      sublabel: 'SubLabel 2'
    }, {
      uuid: _faker["default"].random.uuid(),
      label: 'Label 3',
      sublabel: 'SubLabel 3'
    }]
  }]
}];
exports.listWithOneItem = listWithOneItem;
var listWithSubList = [{
  list: [{
    label: 'Category Name A',
    uuid: _faker["default"].random.uuid(),
    list: [{
      uuid: _faker["default"].random.uuid(),
      label: 'Label A',
      sublabel: 'SubLabel A'
    }]
  }, {
    label: 'Category Name B',
    uuid: _faker["default"].random.uuid(),
    list: [{
      uuid: _faker["default"].random.uuid(),
      label: 'Label B',
      sublabel: 'SubLabel B',
      title: 'Expand Sub label',
      list: [{
        label: 'Connection field',
        sublabel: 'Pizza order'
      }]
    }]
  }]
}];
exports.listWithSubList = listWithSubList;