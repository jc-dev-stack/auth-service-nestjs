import { userMessagesErro } from './../../messages/error/user.messages.error';
export class UserNotfoundError extends Error {
    constructor() {
        super(userMessagesErro.userNotFound)
    }
}