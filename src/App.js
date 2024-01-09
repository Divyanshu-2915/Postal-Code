import React, { useState } from 'react';
import alpha from './App.json';
import './App.css';

// Main App component
function App() {
  // State variables for selected code and disabled state
  const [selectedCode, setSelectedCode] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [displayMsg, setDisplayMsg] = useState('');
  const [submitMsg, setSubmitMsg] = useState('');

  // Function to handle the submission of a selected state
  const UsedCountry = (event) => {
    event.preventDefault();
    // Get the selected state code from the input field
    let countrySelect = document.getElementById('input-code').value;
    // Find the corresponding state object based on the selected code
    const countryName = alpha.AmericanStates.find((country) => country.code === countrySelect);
    // Display a message indicating the submitted state
    const msg = `You're Code has been Submitted For ${countryName?.name}`;
    setDisplayMsg(msg);
    // Clear the message after 2 seconds
    setTimeout(() => {
      setDisplayMsg('');
    }, 2000);
  }

  // Function to handle the selection of a state from the dropdown menu
  const SelectCountry = (event) => {
    const CountryId = event.target.value;
    // Find the selected state based on its ID
    const selectedCountry = alpha.AmericanStates.find((country) => country.id === CountryId);
    setSelectedCode(selectedCountry.code);
  };

  // Function to handle new input codes and enable/disable the submit button
  const handleCodes = (event) => {
    event.preventDefault();
    // Check the length of the entered code and enable/disable the button accordingly
    const check = document.getElementById('new-input-code').value;
    if (check.length >= 5) {
      setIsDisabled(!isDisabled);
    }
  }

  // Function to reset the form fields
  const resetField = (event) => {
    event.preventDefault();
    setIsDisabled(false);
    // Reset the form by accessing the form element and calling reset() method
    const codes = document.getElementById('user-form');
    codes.reset();
  }

  // Function to handle the submission of a new code
  const checkCode = (event) => {
    event.preventDefault();
    // Display a success message for the new code
    const result = document.getElementById('new-input-code').value;
    let x = alpha.AmericanStates.find((country) => country.code === result)
    // Determine whether the code corresponds to an existing state or a new one
    if (result === x?.code) {
      x = `Your New Code is Submitted. The Code is ${result} For State - ${x?.name}`;
      setSubmitMsg(x);
    }
    else {
      x = `Your New Code is Submitted. The Code is ${result} For a New State`;
      setSubmitMsg(x);
    }
    // Clear the success message after 2 seconds
    setTimeout(() => {
      setSubmitMsg('');
    }, 2000);
  }

  // Render the main App component
  return (
    <>
      {/* Form for selecting a state */}
      <form onSubmit={UsedCountry}>
        <div id='UsedCountry'>
          <label>Select The State - </label>
          {/* Dropdown menu for selecting a state */}
          <select onChange={SelectCountry} id='country-name'>
            {alpha.AmericanStates.map((country) => {
              return (
                <option key={country.id} value={country.id} style={{
                  border: '1px solid black',
                  margin: "2px",
                  padding: "2px",
                }}>{country.name}</option>
              );
            })}
          </select>
          {/* Input field for displaying the selected code */}
          <input type="number" id='input-code' value={selectedCode} autoComplete='off' />
          {/* Submit button */}
          <button>SUBMIT</button>
          {/* Display message for the submitted state */}
          <p style={{ color: 'green' }}>{displayMsg}</p>
        </div>
      </form>
      <br /><br />
      {/* Section for entering a new code */}
      <div>
        <h4>If Your State is Not in List Please Enter ZIP Code - </h4>
      </div>
      <br /><br />
      <div id='user-box'>
        {/* Form for entering a new code */}
        <form onSubmit={checkCode} id='user-form'>
          {/* Label and input field for entering a new code */}
          <label> Enter The Code - </label>
          <input type='number' maxLength={5} id='new-input-code' disabled={isDisabled} onKeyUp={handleCodes} autoComplete='on' />
          {/* Submit and reset buttons */}
          <button> SUBMIT </button>
          <button onClick={resetField}> RESET </button>
          {/* Display message for the submitted new code */}
          <p style={{ color: 'green' }}>{submitMsg}</p>
        </form>
      </div>
    </>
  );
}

// Export the App component as the default export
export default App;
