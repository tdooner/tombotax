"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logo_svg_1 = require("./logo.svg");
require("./App.css");
var forms_1 = require("@tombotax/forms");
var App = function () {
    var form = new forms_1["default"].US1040('foo');
    return (<div className="App">
      <header className="App-header">
        <img src={logo_svg_1["default"]} className="App-logo" alt="logo"/>
        <p>
          Form Line 1: {form.line1}
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>);
};
exports["default"] = App;
