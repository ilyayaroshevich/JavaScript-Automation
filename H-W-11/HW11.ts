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
    function getID(postId: number): any {                                         // Создание функции, которая принимает нужный номер поста
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)        // Возвращает Promise
            .then((response) => {                                                   // Работа с вовзращённым Promise
                if (!response.ok) {                                                 // Используется метод встроенного класса "response".                                                                               
                    throw new Error(`${response.status} (${response.statusText})`); // Если статус код response не 2XX, то пробрасываем кастомную ошибку
                }
                return response.json();                                             // В ином случае - парсим ответ в JSON
            });
    }
    const postsId: number[] = [3, 7, 15, 23];                                       // Создаём массив из ID, которые нам нужно достать из списка постов
    const arrToFetch = postsId.map((post) => getID(post));                          // Создаём массив Промисов

    Promise.all(arrToFetch)                                                         // Используется метод Promise.all с аргументом в ввиде массива промисов, что бы в случае невыполнения хотя бы одного из них - появилась ошибка.
        .then((specificPosts) => {                                                  // С помощью .then и функции arrToFetch работаем с полученным массивом из промисов
            specificPosts.forEach((post) => {                                       // С помощью "forEach" достаём каждый элемент массива и выводим его в консоль
                console.log(post);                                                  // Вывод каждого элемента массива в консоль
            });
        })
        .catch((error) => {                                                         // .catch помогает обрабатывать ошибки
            console.error(`Error fetching data:\n`, error);                         // используем метод "console.error" что бы локировать ошибки в консоль
        });
}



{
    async function getID(postsIds: number): Promise<object> {                                   // Используем async функцию, что бы была возможность использовать await вместо .then                     
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postsIds}`)  // С помощью await мы ждём, пока fetch выполнится и только тогда мы идём дальше
        if (!response.ok) {                                                                     // Обрабатываем ошибку в лсучае, если статус код ответа будет !== 2ХХ
            throw new Error(`${response.status} (${response.statusText})`);                     // кастомная ошибка
          }
        return await response.json();                                                           // С помощью await жёдм пока тело ответа парсится в JSON
    }
    const postsId: number[] = [3, 7, 15, 23];                                                   // Массив IDs, которые нам нужно достать из сервера

    async function fetchPosts() {                                                               // Используем async функцию, что бы была возможность использовать await вместо .then
        const arrToFetch = postsId.map(async (post) => await getID(post));                      // С помощью метода .map перебираем изначальный массив и создаём новый массив, состоящий из промисов.
        const specificPosts = await Promise.all(arrToFetch);                                    // С помощью await ждём пока все промисы зарезолвятся
        specificPosts.forEach((post: object) => {                                               // С помощью ForEach перебираем все элементы полученного массива и выводим их в консоль
          console.log(post);                                                                    // Вывод элементов массива в консоль
        });
      }
      
      fetchPosts().catch((error) => {                                                           // Обрабатываем ошибки, полученные в результате резолва промисов
        console.error(`Error fetching data:\n`, error);                                         // Вывод ошибок в консоль
      });                            
    
}


