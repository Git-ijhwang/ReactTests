const React = require('react')
const { useState, useRef } = React;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

function Square(props) {
 return ( <button className="square"> </button>);
}

class Squares extends React.Component {
  render () {
    const item = [];

    for (let i=0; i<this.props.second; i++) {
      item.push(<br/>);

      for (let i=0; i<this.props.first; i++) {
        item.push( <Square/>); 
      }
       item.push(<br/>);
    }

    return(
      <div> { item } </div>
    ); 
  }
}

//  class Gugudan extends React.Component {

//     constructor(props) {
//       super(props);

//       this.state = {
//         show: false,
//         show1: false,
//         wcnt: '',
//         multiple: 1,
//         first: (
//           ((this.multiple === undefined) || (this.multiple === 1)) ?
//                       Math.ceil(Math.random() * 9) : (this.multiple)),
//         second: Math.ceil(Math.random() * 9) ,
//         value:'',
//         result:'',
//       };
//     }

//    onHint = (e) => {
//             e.preventDefault();
//                 this.setState({
//                    show1: true,
//                 });
//    }
//    onReset = (e) => {
//             e.preventDefault();
//                 this.setState({
//                 second: Math.ceil(Math.random() * 9),
//                 result: '',
//                 value:'',
//                 wcnt: '',
//                    show1: false,
//                    show: false,
//                 });
//    }

//    onSubmit = (e) => {
//             e.preventDefault();
//             if (parseInt(this.state.value) === (this.state.first * this.state.second)) {
//               this.setState({
//                 result: this.state.first +' X ' +this.state.second + ' = ' +this.state.first*this.state.second + ('Correct'),
//                 second: Math.ceil(Math.random() * 9),
//                 value:'',
//                 wcnt: '',
//                 show: false,
//                 show1: false,
//               });
//               this.input.focus();
//             }
//             else {
//               this.setState({
//                 result: 'Wrong',
//                 value:'',
//                 wcnt: this.state.wcnt+1,
//                 show: (this.state.wcnt>3?true:false),
//                 show1: false,
//               });
//               this.input.focus();
//             }
//     };

//     onChange = (e) => {
//       this.setState({ value: e.target.value})
//     };

//     onSelect = (e) => {
//       e.preventDefault();
//       this.setState({
//         first: (
//                   (this.state.multiple == 1 ? (Math.ceil(Math.random() * 9)) : (this.state.multiple))
//                ),
//         second: Math.ceil(Math.random() * 9),
//         value:'',
//         result:'',
//       })
//     }

//     handleChange = (event) => {
//       this.setState({
//         multiple: Number(event.target.value),
//       })

//     }

//     input;
//     render () {
//       return (
//         <div>

//           <div>
//           <form onSubmit={this.onSelect}>

//           <label>
//             {/* 공부하고 싶은 구구단 선택하기~ */}
//             Select number of multiple =>
//             {/* <select name="multiple" id="multiple"> */}
//             <select value={this.state.multiple} onChange={this.handleChange}>
//               <option value='1'>All</option>
//               <option value='2'>2s </option>
//               <option value='3'>3s </option>
//               <option value='4'>4s </option>
//               <option value='5'>5s </option>
//               <option value='6'>6s </option>
//               <option value='7'>7s </option>
//               <option value='8'>8s </option>
//               <option value='9'>9s </option>
//             </select>
//           </label>
//             <input type="submit" value="Choose"></input>
//           </form>
//           </div>
//           <br/>

//           {this.state.first} X {this.state.second} = ?

//           <form onSubmit={this.onSubmit}>
//             <input ref={(c) => {this.input = c}}type="number" value={this.state.value} onChange={this.onChange} />
//             <button> Input</button>
//           </form>

//           <div>
//             {this.state.result}
//           </div>

//           <div>
//              {(this.state.show?
//                 <form onSubmit={this.onHint}>
//                   <button> Give me a Hint </button>
//                 </form>
//              :<></>)}
//           </div>

//           <div>
//              {(this.state.show1? <Squares first={this.state.first} second={this.state.second}/> :<></>)}
//              {(this.state.show?
//                 <form onSubmit={this.onReset}>
//                   <button> Next Quiz </button>
//                 </form>
//              :<></>)}
//           </div>

//         </div>
//       )
//     }
// }


/* Hooks */
const Gugudan = () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [wcnt, setWcnt] = React.useState('');
  const [multiple, setMultiple] = React.useState(1);
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const [first, setFirst] = React.useState(
           ((((multiple === undefined) || (multiple === 1))) ?
                       (Math.ceil(Math.random() * 9)) : (multiple)));
  const [second, setSecond] = React.useState(
         Math.ceil(Math.random() * 9));

  const inputRef = React.useRef(null);

  const onHint = (e) => {
    e.preventDefault();
    setShow1( true );
  }

  const onReset = (e) => {
    e.preventDefault();

    setSecond( Math.ceil(Math.random() * 9))
    setResult( '')
    setValue( '')
    setWcnt( '')
    setShow1( false)
    setShow( false)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === (first * second)) {
      setResult( first + ' X ' + second + ' = ' + first * second + ('Correct'));
      setFirst((multiple == 1 ? (Math.ceil(Math.random() * 9)) : (multiple)));
      setSecond( Math.ceil(Math.random() * 9));
      setValue( '');
      setWcnt( '');
      setShow( false);
      setShow1( false);
      inputRef.current.focus();
    }
    else {
      setResult( 'Wrong');
      setValue( '');
      setWcnt( wcnt + 1);
      setShow( (wcnt > 3 ? true : false));
      setShow1( false);
      inputRef.current.focus();
    }
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSelect = (e) => {
    e.preventDefault();
    console.log(multiple);
    setFirst((multiple == 1 ? (Math.ceil(Math.random() * 9)) : (multiple)));
    setSecond(Math.ceil(Math.random() * 9));
    setValue('');
    setResult('');
  }

  const handleChange = (event) => {
    setMultiple( Number(event.target.value));
  }

  return (
    <div>

      <div>
        <form onSubmit={onSelect}>

          <label>
            {/* 공부하고 싶은 구구단 선택하기~ */}
            Select number of multiple =>
            {/* <select name="multiple" id="multiple"> */}
            <select value={multiple} onChange={handleChange}>
              <option value='1'>Random</option>
              <option value='2'>2s </option>
              <option value='3'>3s </option>
              <option value='4'>4s </option>
              <option value='5'>5s </option>
              <option value='6'>6s </option>
              <option value='7'>7s </option>
              <option value='8'>8s </option>
              <option value='9'>9s </option>
            </select>
          </label>
          <input type="submit" value="Choose"></input>
        </form>
      </div>
      <br />

      {first} X {second} = ?

      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="number" value={value} onChange={onChange} />
        <button> Input</button>
      </form>

      <div>
        {result}
      </div>

      <div>
        {(show ?
          <form onSubmit={onHint}>
            <button> Give me a Hint </button>
          </form>
          : <></>)}
      </div>

      <div>
        {(show1 ? <Squares first={first} second={second} /> : <></>)}
        {(show ?
          <form onSubmit={onReset}>
            <button> Next Quiz </button>
          </form>
          : <></>)}
      </div>

    </div>
  )
}


ReactDOM.render(<Gugudan />, document.getElementById("#root"));
module.export = Gugudan
