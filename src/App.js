import { useState } from "react";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    languages: [],
    education: "",
    address: "",
    city: "",
    zip: 0,
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [languages, setLanguages] = useState([]);
  const [education, setEducation] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState(0);

  return (
    <div className="App">
      <div>
        <label for="firstName">First name</label>
        <input type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)} />
      </div>
      <div>
        <label for="lastName">Last name</label>
        <input type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={({ target }) => setLastName(target.value)} />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email"
          name="email"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)} />
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={({ target }) => setPhone(target.value)} />
      </div>
      <div>
        <label for="dateOfBirth">Date of birth</label>
        <input type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={({ target }) => setDateOfBirth(target.value)} />
      </div>
      <div>
        <label for="gender">Gender</label>
        <select name="gender"
          id="gender"
          onChange={({ target }) => setGender(target.value)}>
          <option>- Select -</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label>Education</label>
        <div>
          <label for="school">
            <input type="radio"
              name="education"
              id="school"
              value="school"
              onClick={({ target }) => setEducation(target.value)} /> School
          </label>
        </div>
        <div>
          <label for="university">
            <input type="radio"
              name="education"
              id="university"
              value="university"
              onClick={({ target }) => setEducation(target.value)} /> University
          </label>
        </div>
      </div>
      <div>
        <label>Languages</label>
        <div>
          <label for="english">
            <input type="checkbox"
              name="language"
              id="english"
              value="english"
              onChange={({ target }) => setLanguages(target.value)} /> English
          </label>
        </div>
        <div>
          <label for="kyrgyz">
            <input type="checkbox"
              name="language"
              id="kyrgyz"
              value="kyrgyz"
              onChange={({ target }) => setLanguages(target.value)} /> Kyrgyz
          </label>
        </div>
        <div>
          <label for="russian">
            <input type="checkbox"
              name="language"
              id="russian"
              value="russian"
              onChange={({ target }) => setLanguages(target.value)} /> Russian
          </label>
        </div>
      </div>
      <div>
        <label for="address">Address</label>
        <input type="text"
          name="address"
          id="address"
          value={address}
          onChange={({ target }) => setAddress(target.value)} />
      </div>
      <div>
        <label for="city">City</label>
        <input type="text"
          name="city"
          id="city"
          value={city}
          onChange={({ target }) => setCity(target.value)} />
      </div>
      <div>
        <label for="zip">ZIP</label>
        <input type="number"
          name="zip"
          id="zip"
          value={zip}
          onChange={({ target }) => setZip(target.value)} />
      </div>


      <ul>
        <li>{firstName}</li>
        <li>{lastName}</li>
        <li>{dateOfBirth}</li>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{gender}</li>
        <li>{education}</li>
        <li>{languages}</li>
        <li>{address}</li>
        <li>{city}</li>
        <li>{zip}</li>

      </ul>
    </div>
  );
}
export default App;