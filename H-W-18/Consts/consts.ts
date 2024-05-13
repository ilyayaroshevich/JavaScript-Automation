import * as superagent from 'superagent';

// functions 
export async function getRequest(url: string): Promise<any> {
    try {
        const response = await superagent.get(url);
        return response;
    } catch (error) {
        throw error;
    };
};

export async function postRequest(url: string, sentObject: { name?: string | any, job?: string | any }): Promise<any> {
    try {
        const response: any = await superagent
            .post(url)
            .set("Content-Type", "application/json")
            .send(sentObject);
        return response;
    } catch (error) {
        console.log(error);
    };
};

export async function putRequest(url: string, newData: { name: string, job: string }): Promise<any> {
    try {
        const response: any = await superagent
            .put(url)
            .send(newData);
        return response;
    } catch (error) {
        console.error(error);
    };
};

export async function patchRequest(url: string, newData: { name: string, job: string }): Promise<any> {
    try {
        const response: any = await superagent
            .patch(url)
            .send(newData);
        return response;
    } catch (error) {
        console.log(error);
    };
};

export async function deleteRequest(url: string): Promise<any> {
    try {
        const response: any = await superagent.delete(url)
        return response;
    } catch (error) {
        console.log(error);
    };
};


//objects 
export const expectedDataObject:
    { id: number, email: string, first_name: string, last_name: string, avatar: string } =
{
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
}
export const expectedSupportObject: { url: string, text: string } =
{
    "url": "https://reqres.in/#support-heading",
    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
};
export const expectedPostObject: { name?: string | number, job?: string | number } = {
    name: "Ilya",
    job: "QA"
};
export const newData: { name: string, job: string } = {
    name: "New Ilya",
    job: "New QA"
};
export const expectedPostObjectNumbers: { name?: string | number, job?: string | number } = {
    name: 1,
    job: 1
};

export const expectedObjectWhen404Error: { status?: number, message?: string } = {
    status: 404,
    message: 'Not Found',
}

