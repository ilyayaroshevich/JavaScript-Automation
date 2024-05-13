import { describe, expect, test } from '@jest/globals';
import { getRequest, postRequest, putRequest, patchRequest, deleteRequest } from '../Consts/consts';
import {
    expectedDataObject,
    expectedSupportObject,
    expectedPostObject,
    newData,
    expectedPostObjectNumbers,
    expectedObjectWhen404Error
} from '../Consts/consts';

describe('GetApiTests', () => {
    test('getListUsers', async () => {
        const response = await getRequest('https://reqres.in/api/users?page=2');
        expect(response.status).toBe(200);
    });
    test('getSingleUser', async () => {
        const response = await getRequest(`https://reqres.in/api/users/2`);
        expect(response.status).toBe(200);
        expect(response.body.data).toEqual(expectedDataObject);
        expect(response.body.support).toEqual(expectedSupportObject);
    });

    test('get non-existed user', async () => {
        const response = await getRequest(`https://reqres.in/api/users/23`);
        expect(response).toEqual(expectedObjectWhen404Error);
    });
});


describe('PostApiTests', () => {
    test('createUser', async () => {
        const response = await postRequest(`https://reqres.in/api/users`, expectedPostObject);
        expect(response.status).toBe(201);
        expect(response.body.name).toEqual(expectedPostObject.name);
        expect(response.body.job).toEqual(expectedPostObject.job);
    });
    test('createUserWithoutName', async () => {
        const response = await postRequest(`https://reqres.in/api/users`, expectedPostObject);
        expect(response.status).toBe(201);
        expect(response.body.job).toEqual(expectedPostObject.job);
    });
    test('createUserWithoutJob', async () => {
        const response = await postRequest(`https://reqres.in/api/users`, expectedPostObject);
        expect(response.status).toBe(201);
        expect(response.body.name).toEqual(expectedPostObject.name);
    });
    test('createUserWithEmptyObject', async () => {
        const response = await postRequest(`https://reqres.in/api/users`, expectedPostObject);
        expect(response.status).toBe(201);
        expect(typeof response.body.createdAt).toBe('string');
        expect(typeof response.body.id).toBe('string');
    });
    test('createUserWithTypeofNumber', async () => {
        const response = await postRequest(`https://reqres.in/api/users`, expectedPostObjectNumbers);
        expect(response.status).toBe(201);
        expect(typeof response.body.name).toBe('number');
        expect(typeof response.body.job).toBe('number');
    });
});

describe('PutApitests', () => {
    test('puting', async () => {
        const response = await putRequest(`https://reqres.in/api/users/2`, newData);
        expect(response.status).toBe(200);
        expect(response.body.name).toEqual(newData.name);
        expect(response.body.job).toEqual(newData.job);
    });
});

describe('PatchApitests', () => {
    test('Patching', async () => {
        const response = await patchRequest(`https://reqres.in/api/users/3`, newData);
        expect(response.status).toBe(200);
        expect(response.body.name).toEqual(newData.name);
        expect(response.body.job).toEqual(newData.job);
    });
});

describe('DeleteApitests', () => {
    test('Deleting', async () => {
        const response = await deleteRequest(`https://reqres.in/api/users/4`);
        expect(response.status).toBe(204);
    });
});



