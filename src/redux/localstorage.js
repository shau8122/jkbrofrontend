// File: localStorage.js

// Save state to localStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    // Handle errors
    console.error('Error saving state to localStorage:', err);
  }
};

// Load state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined; // Return undefined if no saved state found
    }
    return JSON.parse(serializedState);
  } catch (err) {
    // Handle errors
    console.error('Error loading state from localStorage:', err);
    return undefined;
  }
};
