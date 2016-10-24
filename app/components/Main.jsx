var React = require('react');
var SimpleSub = require('SimpleSub');

var Main = (props) => {
  return(
    <div>
      <div>
        <div>
          <p>Main.jsx rendered</p>
          {props.children}
          <SimpleSub/>
        </div>
      </div>
    </div>
  )
};

module.exports = Main;
