import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

async function main() {
  const iv = randomBytes(16);
  const password = 'Password used to generate key';
  const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;

  const cipher = createCipheriv('aes-256-ctr', key, iv);
  const textToEncrypt = 'Nest';
  const encryptedText = Buffer.concat([
    cipher.update(textToEncrypt),
    cipher.final(),
  ]);

  console.log('Encrypted:', encryptedText.toString('hex'));
}

main();
