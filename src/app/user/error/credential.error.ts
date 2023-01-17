import { userMessagesErro } from './../../messages/error/user.messages.error';
export class CredentialError extends Error {
    constructor() {
        super(userMessagesErro.credentialsError)
    }
}