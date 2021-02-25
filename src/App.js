import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    const {
      firstName,
      lastName,
      age,
      gender,
      destination,
      isVegan,
      isKosher,
      isLactoseFree,
    } = this.state;
    return (
      <main>
        <form>
          <input
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />

          <input
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />

          <input
            name="age"
            value={age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>

          <br />

          <select
            value={destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
            <option value="north pole">North Pole</option>
            <option value="south pole">South Pole</option>
          </select>

          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={isVegan}
            />
            Vegan?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={isKosher}
            />
            Kosher?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={isLactoseFree}
            />
            Lactose Free?
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {firstName}{" "} {lastName}
        </p>
        <p>Your age: {age}</p>
        <p>Your gender: {gender}</p>
        <p>Your destination: {destination}</p>
        <p>
          Your dietary restrictions:
          <span>
            Vegan-
            <strong>
            {isVegan ? "yes" : "no"}
            </strong>,
          </span>
          <span>
            Kosher-
            <strong>
            {isKosher ? "yes" : "no"}
            </strong>,
          </span>
          <span>
            LactoseFree-
            <strong>
            {isLactoseFree ? "yes" : "no"}
            </strong>
          </span>
        </p>
      </main>
    );
  }
}

export default App;
