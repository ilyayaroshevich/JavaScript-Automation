export let expectedDataObject:
    { id: number, email: string, first_name: string, last_name: string, avatar: string } =
{
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
}
export let expectedSupportObject: { url: string, text: string } =
{
    "url": "https://reqres.in/#support-heading",
    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
};
export let expectedPostObject: { name?: string | number, job?: string | number } = {
    name: "Ilya",
    job: "QA"
};
export let newData: { name: string, job: string } = {
    name: "New Ilya",
    job: "New QA"
};
export let expectedPostObjectNumbers: { name?: string | number, job?: string | number } = {
    name: 1,
    job: 1
};

export let expectedObjectWhen404Error: { status?: number, message?: string } = {
    status: 404,
    message: 'Not Found',
}