// //Add and remove a CSS class
// import { useState } from "react";

// export default function Picture() {
//   const [showBackGround, setShowBackGround] = useState(false);
//   function handleToggle() {
//     setShowBackGround(!showBackGround);
//   }
//   return (
//     <div className={`background ${showBackGround ? "background--active":""}`}
//     onClick={handleToggle}>
//       <img
//         className={`picture ${showBackGround ? "" :"picture--active"}`}
//         alt="Rainbow houses in Kampung Pelangi, Indonesia"
//         src="https://i.imgur.com/5qwVYb1.jpeg"
//       />
//     </div>
//   );
// }

//Profile editor
import { useState } from 'react';
export default function EditProfile() {
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');
  const [showForm, setShowForm] = useState(false);

  function editProfile (event) {
    event.preventDefault();
    setShowForm(true);
  }

  function saveProfile (event) {
    event.preventDefault();
    setFirstName(document.querySelector('.firstName').value);
    setLastName(document.querySelector('.lastName').value);
    setShowForm(false);
  }

  function firstNameChange (event) {
    setFirstName(event.target.value);
  }

  function lastNameChange (event) {
    setLastName(event.target.value);
  }

  if (!showForm) {
    return (
      <form>
        <label>
          First name:{firstName}
        </label>
        <label>
          Last name:{lastName}
        </label>
        <button type="submit" onClick={editProfile}>
          Edit Profile
        </button>
        <p><i>Hello, {firstName} {lastName}!</i></p>
      </form>
    )
  } else {
    return (
      <form>
        <label>
          First name:
        </label>
        <input className="firstName" defaultValue={firstName} onChange={firstNameChange}/>
        <label>
          Last name:
        </label>
        <input className="lastName" defaultValue={lastName} onChange={lastNameChange}/>
        <button type="submit" onClick={saveProfile}>
          Save Profile
        </button>
        <p><i>Hello, {firstName} {lastName}!</i></p>
      </form>
    )
  }
}
