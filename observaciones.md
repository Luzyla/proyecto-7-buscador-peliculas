Querida Lu, 

Felicitaciones por la entrega de tu TP, y por haber concluido tu camino en Ada como desarrolladora front end. No tengo palabras para la alegria que me genera saber donde estas ahora y donde estabas cuando empezaste, todo lo que creciste por tu entuasiasmo y ganas de crecer. 

A nivel comportamiento, obviamente lo mas saliente es que no tenemos responsive, y esa deberia ser tu primera prioridad. Luego de eso, avanzaria con los componentes que te faltan y que te fui señalando cuando los encontré.

Me alegra notar que no hay console logs olvidados ni warnings graves en la consola. En todo momento se nota tu interes por dejar el codigo claro, facil de leer, directo. Es codigo que parece escrito por alguien con mucha mas experiencia que vos. El comportamiento en general esta perfecto, cumplis bien los requisitos y tu web se ve profesional y es facil de recorrer. 

Con respecto al codigo, creo que lo primero a repensar es la arquitectura, la manera en que estan organizados tus archivos. Es complejo a veces recorrer tu codigo porque no tenemos separadas las vistas, Views, de los componentes reutilizables. Hacete dos carpetas, una de View y otra de Componentes, separa bien tus archivos ahi y segui las reglas que vimos en clase. 
- Los componentes Views son los que se llaman en las rutas. No reciben props: si necesitan encargarse de la logica, lo hacen mediante la ruta. Suelen ser quienes se encargan de los fetch. 
- Los componentes reutilizables son llamados por las Views. Reciben props. Minimizan la logica necesaria.  

No tenes ni un solo hook custom, ni funciones reutilizables, ni variables reutilizables a lo largo de distintos componentes, a pesar de que tu codigo realmente lo necesita. Hay funciones que se repiten, ni hablar de variables como la url. Le haria muy bien a tu codigo tener esto en un solo lugar. De todos modos tengo que comentar lo solido de tu codigo a pesar de estas faltas: tu codigo es comprensible, las variables estan re correctas, todo esta muy bien. Demasiado bien para la falta de tiempo!

Misma situacion tenemos con los componentes: hay componentes que son practicamente iguales. TopRated, Upcoming, etc, estan correctamente identificados como Views, pero si comparten la logica y la parte visual, podrian llamar ambos al mismo componente reutilizable.

Observaciones mas generales respecto a tu codigo:
- Usas poco las variables en scss, y es una lastima porque tu scss queda algo repetitivo. Te marque algunos, como colores y tipografias, pero tamaños, margenes, etc, tambien podrian ser variables. 
- Necesitas imagenes por defecto para aquellas veces en que la API no tiene ninguna. 
- Un bug grave es que tenes undefined al hacer click en una card en similares: te deje anotado como resolverlo. 

Mas alla de esto, hiciste un graaaan trabajo! 

Nota final: 8
