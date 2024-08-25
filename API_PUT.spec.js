import {test, expect} from '@playwright/test'

test('API PUT', async({request})=>{

     const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body:{
                title: 'foo',
                body: 'bar',
                userId: 1,
              }
        }
     )
     expect(response.status()).toBe(200)
    
    })