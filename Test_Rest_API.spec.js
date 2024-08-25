import {test, expect} from '@playwright/test'

test('Rest API Testing ', async({request})=>{
    const url= 'https://jsonplaceholder.typicode.com/posts/1' 
    const response = await request.get(url)
   
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.userId).toBe(1);


})