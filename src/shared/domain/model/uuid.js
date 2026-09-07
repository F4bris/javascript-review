import { v7 as uuid7, validate as uuidValidate } from 'uuid';

export function generateUuid() {
    return uuid7();
}

export function validateUuid(uuid) {
    return uuidValidate(uuid);
}