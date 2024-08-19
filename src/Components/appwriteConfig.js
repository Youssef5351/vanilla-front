import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66bd2457000ad86294a1'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
