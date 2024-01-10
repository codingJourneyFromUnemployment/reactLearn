// import { useState } from "react";

// export default function Form() {
//   const [firstName, setFirstName] = useState(""); 
//   const [lastName, setLastName] = useState("");

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   return (
//     <>
//       <label>
//         First Name:
//         <input value={firstName} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Last Name:
//         <input value={lastName} onChange={handleLastNameChange} />
//       </label>
//       <p>
//         Hello, {firstName} {lastName}
//       </p>
//     </>
//   )
// }

import { useFormInput } from "./useFormInput";

export default function Form() {
  const firstName = useFormInput("");
  const lastName = useFormInput("");

  return(
    <>
      <label>
        First Name:
        <input {...firstName} />
      </label>
      <label>
        Last Name:
        <input {...lastName} />
      </label>
      <p>
        Hello, {firstName.value} {lastName.value}
      </p>
    </>
  )
}