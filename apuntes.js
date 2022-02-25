/* Patrones de Render REACT
    -----Principios de diseño----------
    reglas que sigue react para escribir react

Filosofia de ract y facebook------------------
Abstracciones comunes
    React es una libreria, se concentra en su trabajo crear componentes y facilitarlos, React no quiere codigo concreto en su core, solo si la especificacion es usada por muchos usuarios
interoperabilidad
    Quiere que acoplemos React incluso usando otra herramienta, la migraciones pueden ser ligeras
---Cambioss al core
Estabilidad
    demasiadas personas usan React, mantiene versiones anteriores y funcionalidades pero va cambiando poco a poco.
Valvulas de escape
    La implementacion de nuevas funcionalidades se van dando de apoco y con aviso a todos.
Experiencia de desarrollo
    solucion declarativa luego imperativas
----Prioridades
implementacion 
    react trata de que las implementaciones sean limpias pero tiene preferencia por codigo que funcione.
Optimizado para la instrumentacion
    Busca que los nombres sean descriptivos, para que el uso sea natural
DogFoodIng
    Prioriza las funcionalidades que mas se necesita, pero para facebook, esto maximiza el soporte y desarrollo de React.

---------------Trabajo de React--------------
Planificacion
    react se encarga de los componentes
Configuracion
    Reactasegura la compatibiliad de React con versiones antiguas eso impide cambiar el core
-----
depuracion
    react deja los errores del la aplicacion, como de logica o uso de contex o props
-------------------Composicion de Componentes--------------
Patron para crear componentes, cada componente tine un tarea especifica pero flexible.
asi los componentes son faciles de implemntar y usar

Podemos usar componentes para renderizar cualquier tipo de dat.
con una composicion padre e hijo.

colocacion de estado
    Maxima cercania a la relevancia
    el estado debe estar cerca de donde lo usamos. el padre mas cercano
    stateful vs stateless
    separa componentes entre stateful y stateless.

desde lo mas grande hasta los mas pequeño atomic desing hace match

App
--todoheader 
---TodoCounter
---TodoSearch 
--Todolist
---TodoItem

componentes pueden crear su propio estado, ademas del global
App
--todoheader 
---TodoCounter
---TodoSearch 
-----TodoIputUI stateless
--Todolist
---TodoItem
----TodoItemUI stateless

Sin react context, podemos usar composicion de componentes
 la data puede estar en app y compartir a los hijos

 

*/