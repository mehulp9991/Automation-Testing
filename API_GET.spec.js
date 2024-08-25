import {test, expect} from '@playwright/test'

test('API GET ', async({request})=>{
    const url= 'https://jsonplaceholder.typicode.com/posts' 
    const response = await request.get(url)
    await expect(response).toBeOK();

    const users= await response.json();
    await expect(users.length).toBeGreaterThan(0);

})