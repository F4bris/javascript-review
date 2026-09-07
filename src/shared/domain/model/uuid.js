import { v7 as uuid7, validate as uuidValidate } from 'uuid';

export function generateUUID() {
    return uuid7();
}

export function isValidUuid(uuid) {
    return uuidValidate(uuid);
}