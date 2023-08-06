// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import { getImageUrl } from './utils.js';

// export function Profile(props) {
//   return (
//     <>
//       <h2>{props.profile.name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(props.profile.photoID)}
//         alt={props.profile.name}
//         width={70}
//         height={70}
//       />
//       <ul>
//         <li>
//           <b>Profession: </b>
//           {props.profile.profession}
//         </li>
//         <li>
//           <b>Awards:{props.profile.awardNumber} </b>
//           {props.profile.awards}
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {props.profile.discovery}
//         </li>
//       </ul>
//     </>
//   );
// }

// export default function Gallery() {
//   const profile1 = {
//     name: 'Maria Skłodowska-Curie',
//     photoID: 'szV5sdG',
//     profession: 'physicist and chemist',
//     awardNumber: 4,
//     awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
//     discovery: 'polonium (element)',
//   }

//   const profile2 = {
//     name: 'Katsuko Saruhashi',
//     photoID: 'YfeOqp2',
//     profession: 'geochemist',
//     awardNumber: 2,
//     awards: '(Miyake Prize for geochemistry, Tanaka Prize)',
//     discovery: 'a method for measuring carbon dioxide in seawater',
//   }

//   return (
//     <div>
//       <Profile profile={profile1} />
//       <Profile profile={profile2} />
//     </div>
//   );
// }

// export function Card({ children }) {
//   return (
//     <div className="card">
//       <div className="card-content">{children}</div>
//     </div>
//   );
// }

// export function Avatar() {
//   return (
//     <>
//       <h1>Photo</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/OKS67lhm.jpg"
//         alt="Aklilu Lemma"
//         width={70}
//         height={70}
//       />
//     </>
//   );
// }

// export function About() {
//   return (
//     <>
//       <h1>About</h1>
//       <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//     </>
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Card>
//         <Avatar />
//       </Card>
//       <Card>
//         <About />
//       </Card>
//     </div>
//   );
// }

// function Item({ name, importance }) {
//   return (
//     <li className="item">
//       {name} {importance && <b>(Importance:{importance})</b>}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           importance={9}
//           name="Space suit"
//         />
//         <Item
//           importance={0}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           importance={6}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }

function Drink({ name }) {
  let partOfPlant;
  let caffeineContent;
  let age;
  if (name === 'tea') {
    partOfPlant = 'leaf';
    caffeineContent = '15–70 mg/cup';
    age = '4,000+ years';
  } else {
    partOfPlant = 'bean';
    caffeineContent = '80–185 mg/cup';
    age = '1,000+ years';
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{partOfPlant}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeineContent}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
