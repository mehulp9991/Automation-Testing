import {test, expect} from '@playwright/test'

test('API POST', async({request})=>{

     const response = await request.post('https://jsonplaceholder.typicode.com/posts',

        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
             date : {
                title: 'foo',
                body: 'bar',
                userId: 1,
              }
        });
    expect(response.status()).toBe(201)

})