import Paragraph from "@/types/paragraph";

const paragraphs: Paragraph[] = [
    {
        id: 1,
        title: "Dogs get free daycare in Italy!",
        description:
            "En Roma, puedes visitar los museos con tus perros. Es muy grande y popular. Tiene más de 5,000 libros. Muchas personas visitan...",
        level: "A1",
        date: "20 September 2025",
        image:
            "data:image/jpeg;base64,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",
        estimatedTime: "5 min",
    },
    {
        id: 2,
        title: "Un día en la plaza",
        description:
            "Ana vive en una ciudad pequeña. Un día, ella va a la plaza. La plaza es bonita y grande. Ana ve a su amigo Luis. Ellos hablan un poco. Luego, van a una cafetería. Ana toma un café. Luis bebe un té. Ellos ríen y miran la gente. Al final, Ana y Luis caminan a casa contentos.",
        level: "A1.1",
        date: "28 September 2025",
        image:
            "/story_2_thumbnail.png",
        estimatedTime: "10 min",
    },
    {
        id: 3,
        title: "La casa de Marta",
        description: "Marta vive en una casa grande y acogedora. En la cocina hay un frigorífico, una nevera, un horno y una estufa. En la mesa hay cucharas, un tenedor y un cuchillo. En el comedor hay una mesa grande y seis sillas. El salón tiene un sofá, un televisor y una televisión. En el dormitorio hay una cama, una almohada, una manta y una cómoda. Fuera de la casa hay un balcón, una terraza, un jardín y un garaje.",
        level: "A1.2",
        date: "5 October 2025",
        image: "/house_story.jpg",
        estimatedTime: "30 min",
    },
    {
        "id": 4,
        "title": "Mi ático en Chueca",
        "description": "Vivo en un ático con una pequeña terraza. Solo tiene setenta y cinco metros cuadrados pero es muy bonito y yo estoy muy contenta de vivir aquí. El ático está lejos del centro, es un edificio nuevo y solo hay vecinos por planta. El barrio tiene mucho movimiento. En mi barrio hay tiendas de ropa y también dos farmacias, una pastelería y un hospital. La parada del metro está al lado del mercado de San Antón. Los restaurantes y bares más importantes están en la plaza de Chueca. En el barrio hay un ambiente muy intercultural porque se mezclan personas de diferentes provincias.",
        "level": "A1.2",
        "date": "6 October 2025",
        "image": "/story_4_thumbnail.png",
        "estimatedTime": "30 min"
    },
    {
        "id": 5,
        "title": "Nuestros abuelos",
        "description": "Nuestra foto favorita es la de nuestros abuelos, María y Ricardo, en el jardín. Son los padres de nuestra madre. María tiene sesenta y cinco años y Ricardo sesenta y seis. Nuestro abuelo es español, de un pueblo de Ourense, y nuestra abuela es colombiana, de Medellín. Pero los dos viven en Bogotá desde hace más de sesenta años. Son alegres y muy cariñosos.",
        "level": "A1.2",
        "date": "9 October 2025",
        "image": "/story_5_thumbnail.png",
        "estimatedTime": "30 min"
    },
    {
        "id": 6,
        "title": "Jennifer Lopez",
        "description": "Me llamo Thiago y soy fanático de Jennifer Lopez desde pequeño. Tengo todos sus discos y películas. Lo sé todo sobre ella. Lynn, más conocida como JLo, nació el 24 de julio de 1969 en el Bronx, Nueva York. Sus papás son boricuas: Guadalupe trabaja en una guardería y su padre es programador de computadoras. Tiene dos hermanas, Linda y Leslie. Es profesora de música y según la revista People, es la artista hispana con mayor influencia en los Estados Unidos. Además, es actriz, cantante, bailarina, empresaria, productora y diseñadora de moda. Ha protagonizado muchas películas y su familia también es famosa: Selena, Anaconda, Bailamos, Made in Manhattan, Border Town. Ha tenido mucho éxito con álbumes publicados, números uno, y se ha separado tres veces. Tiene hijos gemelos, Emme y Maximilian, con Marc Anthony, y otros hijos, Maribel y David. Si quieren saber más, pregúntenme sobre JLo y su vida como puertorriqueña.",
        "level": "A1.2",
        "date": "9 October 2025",
        "image": "/story_6_thumbnail.png",
        "estimatedTime": "90 min"
    },
    {
        "id": 7,
        "title": "Mis compañeros y yo",
        "description": "Me llamo Daniel y soy una persona tranquila, amable y un poco tímida. Tengo el pelo castaño y los ojos marrones. Mi mejor amigo Pablo es bajo, rubio y muy divertido. Estudiamos juntos en la universidad. Nuestra amiga Sara es guapa, delgada y alegre. Somos diferentes pero nos llevamos muy bien. Cada uno tiene su personalidad, y eso hace nuestra amistad muy especial.",
        "level": "A1.2",
        "date": "9 October 2025",
        "image": "/story_7_thumbnail.png",
        "estimatedTime": "90 min"
    },
    {
        "id": 8,
        "title": "Mi familia y yo por la mañana",
        "description": "Hoy es lunes y estoy en casa con mi familia. Somos cuatro personas: mi padre, mi madre, mi hermano y yo. Soy estudiante y me visto para ir a la universidad. Llevo una camiseta blanca, pantalones negros y una chaqueta azul. Mi hermano se pone una camisa verde y vaqueros. Mi madre prepara el desayuno y lleva un vestido elegante. Mi padre es serio y lleva corbata y abrigo. Cuando todos estamos listos, salimos juntos contentos.",
        "level": "A1.2",
        "date": "17 October 2025",
        "image": "/story_8_thumbnail.png",
        "estimatedTime": "90 min"
    },
    {
        "id": 9,
        "title": "Juan y Pedro en el aeropuerto",
        "description": "Juan es un jugador trabajador y sincero de veinticinco años. Hoy está en el aeropuerto para viajar al sur en avión. Lleva una chaqueta azul, vaqueros y un cinturón negro. Encuentra a su amigo Pedro, quien lleva una mochila y sombrero. Mientras esperan el avión cerca del puerto, Juan lleva gafas de sol y delantal para trabajar en un proyecto. Pedro está confundido sobre la estación de metro, pero Juan le ayuda. Finalmente suben al avión felices y listos para la aventura.",
        "level": "A1.2",
        "date": "20 October 2025",
        "image": "/story_9_thumbnail.png",
        "estimatedTime": "100 min"
    },
    {
        "id": 10,
        "title": "Juan Carlos en Barcelona",
        "description": "Juan Carlos es un médico de Chile que está en Barcelona para trabajar en un hospital. Un día, mientras camina por el centro, pregunta direcciones a Plaza de España. Le recomiendan coger el metro en Plaza Cataluña. En la entrada del metro, otro transeúnte le explica cómo tomar la línea roja dirección Hospital de Bellvitge. Le informan sobre el billete sencillo de 2,15 euros y la tarjeta T-10 de nueve euros para diez viajes. Agradecido, Juan Carlos se despide y sube al metro rumbo a su nuevo hospital.",
        "level": "A1.2",
        "date": "23 October 2025",
        "image": "/story_10_thumbnail.png",
        "estimatedTime": "100 min"
    },
    {
        "id": 11,
        "title": "Ana en la Ciudad de México",
        "description": "Ana escribe a Juan Carlos desde la Ciudad de México, donde está muy contenta viviendo. Describe la ciudad como muy bonita y grande, pero vive lejos de su trabajo y todos los días toma varios autobuses. Explica que hay muchos medios de transporte: metro, tren ligero, metrobús, trolebús, microbús, camiones y ecobús. Lo más extraño para ella son los autobuses rosas del 'Programa Atenea', que son solo para mujeres y gratuitos para embarazadas y personas de la tercera edad. Finalmente, le pregunta a Juan Carlos cómo está en Barcelona y en el hospital.",
        "level": "A1.2",
        "date": "27 October 2025",
        "image": "/story_11_thumbnail.png",
        "estimatedTime": "95 min"
    },
    {
        "id": 12,
        "title": "Juan Carlos en Barcelona",
        "description": "Juan Carlos responde a Ana desde Barcelona, donde comenta lo curioso que le parece el Programa Atenea de México. Explica que en Barcelona no tienen ecobús, pero sí tienen Bicing, un sistema público de bicicletas que le parece genial porque no contamina y es económico. Describe cómo hay muchas estaciones Bicing por toda la ciudad, la mayoría cerca de estaciones de metro, tren y aparcamientos públicos. Se sorprende de que él, que va al hospital en bicicleta, esté practicando deporte. Se despide rápidamente porque tiene que ir al hospital.",
        "level": "A1.2",
        "date": "27 October 2025",
        "image": "/story_12_thumbnail.png",
        "estimatedTime": "95 min"
    },
    {
        "id": 13,
        "title": "Los españoles y su día a día",
        "description": "Los españoles son muy diferentes entre sí. Algunos se levantan temprano por la mañana, otros salen de noche todos los días. Muchos no van a los toros, pero muchos sí. Y la mayoría de los españoles ven la televisión por la noche. Algunos se levantan temprano por la mañana, otros salen de noche todos los días. Muchos no van a los toros, pero muchos sí. Y la mayoría de los españoles ven la televisión por la noche.",
        "level": "A1.2",
        "date": "22 November 2025",
        "image": "/story_13_thumbnail.png",
        "estimatedTime": "55 min"
    },
    {
        "id": 14,
        "title": "La gastronomía egipcia",
        "description": "La gastronomía en Egipto es muy rica y popular con sabores simples y tradicionales. Muchas familias cocinan platos que pasan de generación en generación como el koshari, una mezcla de arroz, pasta y lentejas con salsa de tomate. Otros platos famosos incluyen el ful medames para el desayuno y la taameya. El pan tradicional aish baladi acompaña casi todas las comidas. Las especias no son muy fuertes pero dan un sabor especial. Para los egipcios, comer juntos es una parte importante de la familia y la cultura.",
        "level": "A1.3",
        "date": "27 November 2025",
        "image": "/story_14_thumbnail.jpg",
        "estimatedTime": "50 min"
    },
    {
        "id": 15,
        "title": "Ana y Luis Felipe: Culturas Diferentes",
        "description": "Ana es española y sale con Luis Felipe, un chico colombiano. Aunque se llevan muy bien, tienen culturas y gustos muy distintos. Luis Felipe es muy moderno y prefiere ver series por Internet, mientras que Ana prefiere la televisión y películas en 3D. Ambos disfrutan salir por las tardes. También tienen diferencias con la comida: a Luis Felipe le gustan los fríjoles y la comida colombiana, mientras que Ana la encuentra un poco pesada. Sin embargo, ambos se adaptan y aprenden de la cultura del otro, creando una relación bonita a pesar de sus diferencias.",
        "level": "A1.3",
        "date": "29 November 2025",
        "image": "/story_15_thumbnail.png",
        "estimatedTime": "45 min"
    },
    {
        "id": 16,
        "title": "María y Juan: Diferencias en Aficiones",
        "description": "María es argentina y tiene un amigo, Juan, que es mexicano. Aunque son buenos amigos, tienen aficiones muy distintas. María disfruta mucho leer libros y escuchar música clásica, mientras que Juan prefiere jugar videojuegos y ver series de acción. También tienen diferencias al elegir comidas: a Juan le encanta la comida picante mexicana, mientras que María prefiere platos más suaves. A pesar de estas diferencias, comparten tiempo juntos los fines de semana y aprenden a respetar los gustos del otro, fortaleciendo su amistad.",
        "level": "A1.3",
        "date": "29 November 2025",
        "image": "/story_16_thumbnail.png",
        "estimatedTime": "45 min"
    },
    {
        "id": 17,
        "title": "Comidas en España y Latinoamérica",
        "description": "En España la primera comida del día -el desayuno- no es muy abundante. La mayoría de la gente toma café con leche, tostadas, algún bollo o galletas. El horario depende de la hora de levantarse: puede ir desde las 6 hasta las 9 de la mañana. En Latinoamérica, la primera comida del día -el desayuno- es más abundante. La mayoría de la gente toma café con leche, tostadas, algún bollo o galletas. El horario depende de la hora de levantarse: puede ir desde las 6 hasta las 9 de la mañana.",
        "level": "A1.3",
        "date": "5 December 2025",
        "image": "/story_17_thumbnail.png",
        "estimatedTime": "45 min"
    },
    


];

export default paragraphs