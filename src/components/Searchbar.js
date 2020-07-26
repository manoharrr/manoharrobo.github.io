import React from 'react';


function Searchbar({searchfield, onsearchchange}) {
	return (
		<div className='tc pa2'>
			<input className='pa3 b--green bg-lightest-blue'
			type='text'
			placeholder='Search here'
			value={searchfield}
			onChange={onsearchchange}
			/>
		</div>
		);
}

export default Searchbar;