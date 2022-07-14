import bcrypt from 'bcrypt';


const password = 'abc123';


// const superSafePassword = secret + password;

// const salt = await bcrypt.genSalt();
// console.log(salt);
// const hash = await bcrypt.hash(superSafePassword, salt);
// console.log(hash);

const databaseHash = '$2b$10$p24Vr5A9Vv0Sb7YotHQ/V.DTKUf/7Tc6W4P.oyic6VTHtJa1LoffO';
console.log(await bcrypt.compare(password, databaseHash));