
// Phone Number validation
const phoneRegex: RegExp = /^\+1\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;

const isValidPhone = (phone: string): boolean => {
    return phoneRegex.test(phone);
};

// ✅ Testing
console.log(isValidPhone("+1989012345")); // true
console.log(isValidPhone("+998901234567")); // true
console.log(isValidPhone("998 90 123 45 67")); // false (+ belgisi qolib ketgan)
