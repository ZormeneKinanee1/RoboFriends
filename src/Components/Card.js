import React from 'react'; 

const Card = ({name, email, id}) => {
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"> 
			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name} </h2>
		   		<p>{email} </p> 
		   		<p>{id} </p> 
		 	</div>

		</div> 
	);
}

export default Card;

/* able to use that className because built into tachyon

You can reduce the code even more by using <> which is equivalent to using <Fragment />






*/