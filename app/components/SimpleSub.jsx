


var React = require('react');
function encode(input){
  var output = "doggy";
  var plainAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var plainAlphabetArray = plainAlphabet.split('');
  var offset = 2;
  var cypherAlphabet;
  var cypherAlphabetArray = [];
  for (var i = 0; i < 26; i++){
    //console.log(i + plainAlphabetArray[i]);
    cypherAlphabetArray[i] = plainAlphabetArray[(i + offset) % 26];

  }
  for (var i = 0; i < 26; i++){


    //console.log(i +" "+ plainAlphabetArray[i]+" => "+cypherAlphabetArray[i]);
  }

  var inputArray = input.toUpperCase().split('');
  var temp = [];
  for (var i=0; i < inputArray.length; i++){
    if(plainAlphabet.indexOf(inputArray[i]) > -1){
      temp.push(inputArray[i]);
    }
  }

  for (var i=0; i < temp.length; i++){
    var plainIndex = plainAlphabetArray.indexOf(temp[i]);
    temp[i] = cypherAlphabetArray[plainIndex];
  }



  output = temp.join('');
  alert(output);



  var numberOfSpaces = Math.floor(output.length / 5);
  alert(numberOfSpaces);
  var temp = "";
  var group = "";
  var spaceOrReturn = "";
  for (var i = 0; i < numberOfSpaces+1 ; i++){
    var left = output.length - (i * 5);
    console.log("left="+left);
      if ((i+1) % 5 === 0) {
        spaceOrReturn = "\n"
      } else {
        spaceOrReturn = "  ";
      };


      if (left > 4){
        group = output.substring(i*5, i*5+5)+ spaceOrReturn;
      } else {
        alert("in here");
        group = output.substring(i*5, (i*5)+left);
      }

    temp = temp + group
    console.log("temp="+temp);
  }
  output = temp;




  return output;
}

class SimpleSub extends React.Component {
  constructor(props) {
    super(props);
    this.state={value: ""};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({value: encode(this.refs.input.value)})
  }

  render () {
    return (
      <div>
        <h1>SimpleSub</h1>
        <div className="Row column small-centered small-11 medium-6 large-5">
          <form onSubmit={::this.handleSubmit}>
            <textarea ref="input" rows="5"></textarea>
            <button ref="button" className="button expanded">encypher</button>
            <textarea
              ref="output"
              rows="5"
              value={this.state.value}
              />

          </form>
        </div>

      </div>
    )
  }
}



module.exports = SimpleSub;
