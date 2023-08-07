// import { useState } from 'react';

// export default function Scoreboard() {
// 	const [player, setPlayer] = useState({
// 		firstName: 'Ranjani',
// 		lastName: 'Shettar',
// 		score: 10,
// 	});

// 	function handlePlusClick() {
// 		setPlayer({
// 			...player,
// 			score: player.score + 1,
// 		});
// 	}

// 	function handleFirstNameChange(e) {
// 		setPlayer({
// 			...player,
// 			firstName: e.target.value,
// 		});
// 	}

// 	function handleLastNameChange(e) {
// 		setPlayer({
// 			...player,
// 			lastName: e.target.value
// 		});
// 	}

// 	return (
// 		<>
// 			<label>
// 				Score: <b>{player.score}</b>
// 				{' '}
// 				<button onClick={handlePlusClick}>
// 					+1
// 				</button>
// 			</label>
// 			<label>
// 				First name:
// 				<input
// 					value={player.firstName}
// 					onChange={handleFirstNameChange}
// 				/>
// 			</label>
// 			<label>
// 				Last name:
// 				<input
// 					value={player.lastName}
// 					onChange={handleLastNameChange}
// 				/>
// 			</label>
// 		</>
// 	);
// }

// import { useState } from 'react';
// import Background from './Background.js';
// import Box from './Box.js';

// export default function Canvas() {
// 	const backGroundPosition = {
// 		x: 0,
// 		y: 0
// 	};
// 	const [shape, setShape] = useState({
// 		color: 'orange',
// 		position: {
// 			x: 0,
// 			y: 0
// 		}
// 	});

// 	function handleMove(dx, dy) {
// 		setShape({
// 			...shape,
// 			position: {
// 				...shape.position,
// 				x: shape.position.x + dx,
// 				y: shape.position.y + dy
// 			}
// 		});
// 	}

// 	function handleColorChange(e) {
// 		setShape({
// 			...shape,
// 			color: e.target.value
// 		});
// 	}

// 	return (
// 		<>
// 			<select
// 				value={shape.color}
// 				onChange={handleColorChange}
// 			>
// 				<option value="orange">orange</option>
// 				<option value="lightpink">lightpink</option>
// 				<option value="aliceblue">aliceblue</option>
// 			</select>
// 			<Background
// 				position={backGroundPosition}
// 			/>
// 			<Box
// 				color={shape.color}
// 				position={shape.position}
// 				onMove={handleMove}
// 			>
// 				Drag me!
// 			</Box>
// 		</>
// 	);
// }


import { useImmer } from 'use-immer';
import Background from './Background.js';
import Box from './Box.js';

const backGroundPosition = {
	x: 0,
	y: 0
};

export default function Canvas() {
	const [shape, updateShape] = useImmer({
		color: 'orange',
		position: {
			x: 0,
			y: 0
		}
	});

	function handleMove(dx, dy) {
		updateShape(draft => {
			draft.position.x += dx;
			draft.position.y += dy;
		}
		);
	}

	function handleColorChange(e) {
		updateShape(draft => {
			draft.color = e.target.value;
		});
	}

	return (
		<>
			<select
				value={shape.color}
				onChange={handleColorChange}
			>
				<option value="orange">orange</option>
				<option value="lightpink">lightpink</option>
				<option value="aliceblue">aliceblue</option>
			</select>
			<Background
				position={backGroundPosition}
			/>
			<Box
				color={shape.color}
				position={shape.position}
				onMove={handleMove}
			>
				Drag me!
			</Box>
		</>
	);
}

