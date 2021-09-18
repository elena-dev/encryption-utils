# Easy encryption module 
#### for AES256-CBC and create SHA256 hash

##  Install module 
```
npm install --save encryption-utils
```
or
```
yarn install --save encryption-utils
```

##  Import module 
```
const Encryption = require('encryption-utils');

const encryptionUtils = new Encryption('insert_your_32_characterKey_here','insert_your_12_character');
```
#### Encrypt data to aes256-cbc hash
```
const encryptedStr = encryptionUtils.encryptAes256cbc('some_string');
```
#### Decrypt aes256-cbc hash
```
const decryptStr = encryptionUtils.decryptAes256cbc(encrypted_data);
```

#### Create sha256 hash 
```
encryptionUtils.createSha256("Hello world");
```
