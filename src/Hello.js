import React from 'react';

// class Hello extends React.Component {
// 	render(){
// 		return (
// 			<div className='f1 tc' >
// 				<h1>Hello Manu</h1>
// 				<p>{this.props.greetings}</p>
// 			</div>
// 			);
// 	}
// }

function Hello(props){
	return (
		<div className='f1 tc' >
 				<h1>Hello Manu</h1>
 				<p>{props.greetings}</p>
 			</div>
		);
}

export default Hello;