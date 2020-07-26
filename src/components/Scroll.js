import React from 'react';

function Scroll(props) {
	return (
		<div style={{overflowY : 'scroll', border: '3px solid black',height:'550px'}}>
			{props.children};
		</div>
		);
}

export default Scroll;