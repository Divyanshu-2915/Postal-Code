This is a React application designed to allow users to submit and view state codes for American states. 
The app provides functionality to select a state from a dropdown menu, submit the corresponding state code, and also allows users to submit new codes for states not in the provided list.
( My laptop was not supporting the API so I stored data in a local JSON file and then fetched them into main )

Features -
 
    #Select a State:
        Choose a state from the provided dropdown menu.
        The selected state code is displayed in an input field.

    #Submit Selected State Code:
        Submit the selected state code for viewing a success message.

    #Enter a New Code:
        If your state is not on the list, enter a new ZIP code.
        The app disables the submit button when the entered code reaches a minimum length.

    #Submit New Code:
        Submit the new code and receive a success message.
        The app detects whether the entered code corresponds to an existing state or represents a new one.

    #Reset Form:
        Reset the form fields and disable the submit button.

Usage - 

    useState - for managing the state of States and Messages.
    setTimeout - for managing the time for success message.
    Arrow Functions - for using useState variables in a react function without any error.
    map method - for displaying the data. 
    
