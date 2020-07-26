import React, {Fragment} from 'react';
import Card from './Card.js';

function CardArray ({robots}) {
	return (
		<Fragment>{
		robots.map((user,i) => {
			return (
				<Card
				 key = {i}
				 id={robots[i].id}
				 name={robots[i].name}
				 email={robots[i].email}
				 />
				);
			})
		}	
		</Fragment>
		);
}

export default CardArray;
