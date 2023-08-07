// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//     const [index, setIndex] = useState(0);
//     const [showMore, setShowMore] = useState(false);

//     function handleNextClick() {
//         setIndex(index + 1);
//     }

//     function handlePrevClick() {
//         setIndex(index - 1);
//     }

//     function handleMoreClick() {
//         setShowMore(!showMore);
//     }


//     let sculpture = sculptureList[index];
//     return (
//         <>
//             {(index < sculptureList.length - 1) && <button onClick={handleNextClick}>
//                 Next
//             </button>}
//             {(index > 0) && <button onClick={handlePrevClick}>
//                 Prev
//             </button>}
//             <h2>
//                 <i>{sculpture.name} </i>
//                 by {sculpture.artist}
//             </h2>
//             <h3>
//                 ({index + 1} of {sculptureList.length})
//             </h3>
//             <button onClick={handleMoreClick}>
//                 {showMore ? 'Hide' : 'Show'} details
//             </button>
//             {showMore && <p>{sculpture.description}</p>}
//             <img
//                 src={sculpture.url}
//                 alt={sculpture.alt}
//             />
//         </>
//     );
// }

// import { useState } from 'react';

// export default function Form() {
// 	const [firstName, setFirstName] = useState('');
// 	const [lastName, setLastName] = useState('');

// 	function handleFirstNameChange(e) {
// 		setFirstName(e.target.value);
// 	}

// 	function handleLastNameChange(e) {
// 		setLastName(e.target.value);
// 	}

// 	function handleReset() {
// 		setFirstName('');
// 		setLastName('');
// 	}

// 	return (
// 		<form onSubmit={e => e.preventDefault()}>
// 			<input
// 				placeholder="First name"
// 				value={firstName}
// 				onChange={handleFirstNameChange}
// 			/>
// 			<input
// 				placeholder="Last name"
// 				value={lastName}
// 				onChange={handleLastNameChange}
// 			/>
// 			<h1>Hi, {firstName} {lastName}</h1>
// 			<button onClick={handleReset}>Reset</button>
// 		</form>
// 	);
// }

// import { useState } from 'react';

// export default function FeedbackForm() {
// 	const [isSent, setIsSent] = useState(false);
// 	const [message, setMessage] = useState('');
// 	if (isSent) {
// 		return (
// 		<h1>Thank you!</h1>
// 		);
// 	} else {
// 		// eslint-disable-next-line
// 		return (
// 			<form onSubmit={e => {
// 				e.preventDefault();
// 				alert(`Sending: "${message}"`);
// 				setIsSent(true);
// 			}}>
// 				<textarea
// 					placeholder="Message"
// 					value={message}
// 					onChange={e => setMessage(e.target.value)}
// 				/>
// 				<br />
// 				<button type="submit">Send</button>
// 			</form>
// 		);
// 	}
// }


export default function FeedbackForm() {

  function handleClick() {
    let name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}
