const Encryption = require('./');

const encryptionUtils = new Encryption('insert_your_32_characterKey_here','insert_your_12_character');

// ====================


let encrypted_string = encryptionUtils.encryptAes256cbc('blabla');
console.info('encrypted_string Aes256cbc',encrypted_string);


let decrypted_string = encryptionUtils.decryptAes256cbc(encrypted_string);
console.info('decrypted_string Aes256cbc',decrypted_string);

let sha256hash_string = encryptionUtils.createSha256('test');
console.info('sha256hash',sha256hash_string);
