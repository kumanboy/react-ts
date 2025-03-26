// Email validation

const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isValidEmail = (email: string): boolean => {
    return emailRegex.test(email);
};

// Testing
console.log(isValidEmail("123tesexample.com")); // true
console.log(isValidEmail("invalid-email")); // false
