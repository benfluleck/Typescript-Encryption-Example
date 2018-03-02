import * as cryptojs from "crypto-js";
import * as dotenv from "dotenv";

dotenv.config();

const key = process.env.SECRET_KEY;

const textToBeEncrypted = 'This is awesome';

// encrption done by crypto js
const encryptedOutput = cryptojs.AES.encrypt(textToBeEncrypted, key);

// decryption done by crypto js
const decryptedOutput = cryptojs.AES.decrypt(encryptedOutput.toString(), key);

// convert decrypted output to plain text
const plainTextOutput = decryptedOutput.toString(cryptojs.enc.Utf8);

console.log(plainTextOutput);
