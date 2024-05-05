import * as superagent from 'superagent';

export async function getRequest(url: string): Promise<any> {
    try {
        const response: any = await superagent.get(url);
        return response;
    } catch (error) {
        console.log(error);
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
