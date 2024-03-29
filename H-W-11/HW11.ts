import fetch from 'cross-fetch';
/*
#### Task 1
У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.
Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 
Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. 
А если какой-то из постов не загрузиться, нам тогда необходимо вывести в консоль ошибку.
Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.
###### Реализуйте задачу двумя способами:
- Promise chaining
- Async / await
*/
{
    function getPasedJson(postId: number): any {                                        
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)            
            .then(response => {                                                         
                if (!response.ok) {                                                                                                                                    
                    throw new Error(`${response.status} (${response.statusText})`);     
                };
                return response.json();                                                 
            });
    }
    const IdPosts: number[] = [3, 7, 15, 23];                                           
    const promiseArray = IdPosts.map((post) => getPasedJson(post));                     

    Promise.all(promiseArray)                                                           
        .then((iteratingArray) => {                                                     
            iteratingArray.forEach(post => {                                            
                console.log(post);                                                      
            });
        })
        .catch(error => {                                                               
            console.error(`Error fetching data:\n`, error);                             
        });
}
{
    const getPasedJson = async (postId: number): Promise<object> => {                                                       
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)        
        if (!response.ok) {                                                                         
            throw new Error(`${response.status} (${response.statusText})`);                         
        };
        const jsonResponse = await response.json();
        return jsonResponse;                                                               
    };

    const IdPosts: number[] = [3, 7, 15, 23];                                                       

    const fetchPosts = async () => {                                                                   
        const promiseArray = IdPosts.map(async (post) => await getPasedJson(post));                 
        const iteratedArray = await Promise.all(promiseArray);                                      
        iteratedArray.forEach((post: object) => {                                                  
            console.log(post);                                                                      
        });
    };

    fetchPosts().catch(error => {                                                                   
        console.error(`Error fetching data:\n`, error);                                             
    });
}
/*
- Реализуйте приложение:
  - Перейдите по ссылке `https://jsonplaceholder.typicode.com/`
  - Во вкладке `Resources` лежит ключ `/todos` - Это именно те данные которые нам нужны
  - Далее напишите две функции `getTodos` & `printTodos`
    - Функция `getTodos` делает запрос по указанному адресу и забирает данные.
    - Функция `printTodos` создает массив объектов, объект записывает id и title объекта с делом. Вывести полученный результат в консоль
*/
{
    function getTodos() {                                                                                       
        return fetch(`https://jsonplaceholder.typicode.com/todos`)                  
            .then(response => {                                                     
                if (!response.ok) {                                                 
                    throw new Error(`${response.status} ${response.statusText}`)    
                };
                    return response.json()                                          
            }) 
            .catch(error => {                                                       
                console.error(`Error fetching todos: ${error.message}`);
            });
    };

   const printTodos = (todos) => {                                                      
    const todoList = todos.map(todo => {                                            
        return {id: todo.id, title: todo.title};                                    
    });
       console.log(todoList);                                                       
    };

getTodos()                                                                          
  .then(todos => {                                                                   
    printTodos(todos);                                                              
  })
  .catch(error => {                                                                 
    console.error(error.message);                                                   
  });
} 
{
    const getTodos= async () => {
        try {
        const fetchTodos = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        if(!fetchTodos.ok) {
            throw new Error(`Response error: ${fetchTodos.status} ${fetchTodos.statusText}`);
        };
        const jsonTodos = await fetchTodos.json();
        return jsonTodos;
        } catch (error) {
            console.log(`Error fetching todos: ${error.message}`)
        };
    };

    const printTodos = async () => {
        try {
            const todosFunc = await getTodos();
            if (!todosFunc) {
                return;
            };
        const  newObjects = todosFunc.map(todos => {
            return {id: todos.id, title: todos.title}
        });
        console.log(newObjects)
    } catch (error) {
        console.log(`Error printing todos: ${error.message}`);
    };
    };
    printTodos();
}