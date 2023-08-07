// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={handleClick}>
//       Toggle the lights
//     </button>
//   );
// }

export default function ColorSwitch ({
  onChangeColor
}) {
  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    onChangeColor();
  }

  return (
    <button onClick={ handleClick }>
      Change color
    </button>
  );
}
