// import { useState, useEffect } from "react";
// import axios from "axios";

// function App() {


//   function formSubmitCallback(event) {
//     const form = new FormData(event.target);
//     const data = {
//       firstName: form.get('firstName'),
//       lastName: form.get('lastName')
//     }
//     event.preventDefault();
//   }
//   const [examplee, setExample] = useState("Lodaing...")
//   useEffect(() => {
//     axios.get('https://forum-examplee-default-rtdb.firebaseio.com/examplee.json')
//       .then(response => {
//         setExample(response.data);
//       });
//   }, []);

//   return (
//     <form className="App" onSubmit={formSubmitCallback}>
//       <div>
//         <label for="firstName">First name</label>
//         <input type="text"
//           name="firstName"
//           id="firstName" />
//           <span className="error">First bname is required</span>
//       </div>
//       <div>
//         <label for="lastName">Last name</label>
//         <input type="text"
//           name="lastName"
//           id="lastName" />
//           <span className="error">First bname is required</span>
//       </div>
//       <div>
//         <label for="email">Email</label>
//         <input type="email"
//           name="email"
//           id="email"
//           required />
//           <span className="error">First bname is required</span>
//       </div>
//       <div>
//         <label for="phone">Phone</label>
//         <input type="tel"
//           name="phone"
//           id="phone"
//           minLength={10}
//           maxLength={10} />
//           <span className="error">First bname is required</span>
//       </div>
//       <div>
//         <label for="dateOfBirth">Date of birth</label>
//         <input type="date"
//           name="dateOfBirth"
//           id="dateOfBirth" />
//           <span className="error">First bname is required</span>
//       </div>
//       <div>
//         <label for="gender">Gender</label>
//         <select name="gender"
//           id="gender">
//           <option>- Select -</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </div>
//       <div>
//         <label>Education</label>
//         <div>
//           <label for="school">
//             <input type="radio"
//               name="education"
//               id="school"
//               value="school" /> School
//           </label>
//         </div>
//         <div>
//           <label for="university">
//             <input type="radio"
//               name="education"
//               id="university"
//               value="university" /> University
//           </label>
//         </div>
//       </div>
//       <div>
//         <label>Languages</label>
//         <div>
//           <label for="english">
//             <input type="checkbox"
//               name="language"
//               id="english"
//               value="english" /> English
//           </label>
//         </div>
//         <div>
//           <label for="kyrgyz">
//             <input type="checkbox"
//               name="language"
//               id="kyrgyz"
//               value="kyrgyz" /> Kyrgyz
//           </label>
//         </div>
//         <div>
//           <label for="russian">
//             <input type="checkbox"
//               name="language"
//               id="russian"
//               value="russian" /> Russian
//           </label>
//         </div>
//       </div>
//       <div>
//         <label for="address">Address</label>
//         <input type="text"
//           name="address"
//           id="address" />
//       </div>
//       <div>
//         <label for="city">City</label>
//         <input type="text"
//           name="city"
//           id="city" />
//       </div>
//       <div>
//         <label for="zip">ZIP</label>
//         <input type="number"
//           name="zip"
//           id="zip"
//           min={720000}
//           max={729999} />
//       </div>
//       <div>
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// }
// export default App;




import { useState } from "react";
import "./App.css";
import Input from "./Input";
function App() {
  const classNames = ["App"];
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    classNames.push("submitted");
  }
  function submitClickCallback() {
    setSubmitted(true);
  }
  function formSubmitCallback(event) {
    const form = new FormData(event.target);
    const data = {
      firstName: form.get('firstName'),
      lastName: form.get('lastName')
    }
    console.log(data);
    event.preventDefault();
  }
  return (
    <form className={classNames.join(" ")} onSubmit={formSubmitCallback}>
      <div>
        <label for="firstName">First name</label>
        <Input type="text"
          name="firstName"
          id="firstName"
          validity="Hehehe hohoho"
          required />
        <span className="error">First name is required.</span>
      </div>
      <div>
        <label for="lastName">Last name</label>
        <Input type="text"
          name="lastName"
          id="lastName"
          validity="Hehehe hohoho"
          required />
        <span className="error">Last name is required.</span>
      </div>
      <div>
        <label for="email">Email</label>
        <Input type="email"
          name="email"
          id="email"
          required />
        <span className="error">Correct email syntax is required.</span>
      </div>
      <div>
        <label for="phone">Phone</label>
        <Input type="tel"
          name="phone"
          minLength={10}
          maxLength={10}
          id="phone"
          required />
        <span className="error">Phone number must be 10 digits.</span>
      </div>
      <div>
        <label for="dateOfBirth">Date of birth</label>
        <Input type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          required />
        <span className="error">Date is required.</span>
      </div>
      <div>
        <label for="gender">Gender</label>
        <select name="gender"
          id="gender"
          required>
          <option selected>- Select -</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <span className="error">Gender is required.</span>
      </div>
      <div>
        <label>Education</label>
        <div>
          <label for="school">
            <Input type="radio"
              name="education"
              id="school"
              value="school"
              required /> School
         </label>
        </div>
        <div>
          <label for="university">
            <Input type="radio"
              name="education"
              id="university"
              value="university"
              required /> University
         </label>
        </div>
      </div>
      <div>
        <label>Languages</label>
        <div>
          <label for="english">
            <Input type="checkbox"
              name="language"
              id="english"
              value="english"
              required /> English
         </label>
        </div>
        <div>
          <label for="kyrgyz">
            <Input type="checkbox"
              name="language"
              id="kyrgyz"
              value="kyrgyz"
              required /> Kyrgyz
         </label>
        </div>
        <div>
          <label for="russian">
            <Input type="checkbox"
              name="language"
              id="russian"
              value="russian"
              required /> Russian
         </label>
        </div>
      </div>
      <div>
        <label for="address">Address</label>
        <Input type="text"
          name="address"
          id="address"
          required />
        <span className="error">Address is required.</span>
      </div>
      <div>
        <label for="city">City</label>
        <Input type="text"
          name="city"
          id="city"
          required />
        <span className="error">City is required.</span>
      </div>
      <div>
        <label for="zip">ZIP</label>
        <Input type="number"


          name="zip"
          min={720000}
          max={729999}
          id="zip"
          required />
        <span className="error">Number must between 720000 and 729999.</span>
      </div>
      <div>
        <button onClick={submitClickCallback}>Submit</button>
      </div>
    </form>
  );
}
export default App;