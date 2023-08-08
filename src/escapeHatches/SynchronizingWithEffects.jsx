// import { useEffect, useRef } from 'react';

// export default function MyInput({ value, onChange }) {
// 	const inputRef = useRef(null);

// 	// TODO: This doesn't quite work. Fix it.
// 	// ref.current.focus()    

// 	useEffect(() => {
// 		const currentRef = inputRef.current;
// 		currentRef.focus();
// 		return () => {
// 			currentRef.blur();
// 		}
// 	}, [ ]);
	
// 	return (
// 		<input
// 			ref={inputRef}
// 			value={value}
// 			onChange={onChange}
// 		/>
// 	);
// }

// import { useEffect, useRef } from 'react';

// export default function MyInput({ shouldFocus, value, onChange }) {
// 	const ref = useRef(null);

// 	// TODO: call focus() only if shouldFocus is true.
// 	useEffect(() => {
// 		if (shouldFocus) {
// 			ref.current.focus();
// 		}
// 	}, [shouldFocus]);

// 	return (
// 		<input
// 			ref={ref}
// 			value={value}
// 			onChange={onChange}
// 		/>
// 	);
// }

// import { useState, useEffect } from 'react';

// export default function Counter() {
// 	const [count, setCount] = useState(0);

// 	useEffect(() => {
// 		function onTick() {
// 			let newCount = count + 1;
// 			setCount(newCount);
// 		}

// 		setInterval(onTick, 1000);
// 	}, [count]);

// 	return <h1>{count}</h1>;
// }

import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
	const [person, setPerson] = useState('Alice');
	const [bio, setBio] = useState(null);

	useEffect(() => {
		let ignore = false;
		setBio(null);
		fetchBio(person).then(result => {
			if (!ignore) {
				setBio(result);
			}
		});
		return () => {
			ignore = true;
		}
	}, [person]);

	return (
		<>
			<select value={person} onChange={e => {
				setPerson(e.target.value);
			}}>
				<option value="Alice">Alice</option>
				<option value="Bob">Bob</option>
				<option value="Taylor">Taylor</option>
			</select>
			<hr />
			<p><i>{bio ?? 'Loading...'}</i></p>
		</>
	);
}
