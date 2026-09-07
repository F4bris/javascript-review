import { v7 as uuid, validate as uuidValidate } from 'uuid';
export function generateUuid() {
    return uuidv7();
}

export function isValidUuid(uid) {
    return uuidValidate(uid);
}