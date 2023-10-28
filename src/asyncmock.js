const misProductos = [
    {
      id: 1,
      nombre: "Mr. Mercedes",
      autor: "Stephen King",
      precio: 18000,
      img: "../libros/MrMercedes.webp",
      categoria: "libros",
      descripcion: "Justo antes del amanecer, en una decadente ciudad americana, cientos de parados esperan la apertura de la oficina de empleo para reclamar uno de los mil puestos de trabajo que se han anunciado. Han hecho cola durante toda la noche. De pronto, invisible hasta que lo tienen prácticamente encima, un Mercedes surge de la fría niebla de la madrugada. Su conductor atropella y aplasta a todos los que encuentra a su alcance. Acto seguido, el coche da marcha atrás y vuelve a arremeter contra ellos. El asesino huye dejando atrás ocho muertos y quince heridos. Meses después, Bill Hodges, un policía jubilado, que sigue obsesionado con este caso sin resolver, recibe una carta anónima de alguien que se declara culpable de la masacre. Brady Hartsfield vive con su madre alcohólica en la casa donde nació. Disfrutó tanto de aquella sensación de muerte debajo de los neumáticos del Mercedes, que ahora quiere recuperarla. Mr Mercedes es la historia de una guerra entre el Bien y el Mal", stock: 3
  },
    {
      id: 2,
      nombre: "Holly",
      autor: "Stephen King",
      precio: 22000,
      img: "../libros/Holly.webp",
      categoria: "libros",
      descripcion: "Holly Gibney, la detective privada que, por primera vez, protagoniza una novela en solitario. Contenido Cuando Penny Dahl contacta con Finders Keepers para que la ayuden a encontrar a su hija, algo en la voz desesperada de la mujer hace que Holly Gibney se vea obligada a aceptar el trabajo. A poca distancia del lugar en el que Bonnie Dahl desapareció, viven los profesores Rodney y Emily Harris. Son la quintaesencia de la respetabilidad burguesa: un matrimonio octogenario y dedicado de académicos semiretirados. Nadie diría que, en el sótano de su impecable casa forrada de libros, esconden un secreto directamente relacionado con la desaparición de Bonnie. Son astutos, pacientes y despiadados, y obligarán a Holly a emplear sus habilidades al máximo y a arriesgarlo todo si quiere cerrar el caso más oscuro al que se ha enfrentado jamás", stock: 3
    },
  {
      id: 3,
      nombre: "Kamonohashi Ron No Kindan Suiri - Tomo 1",
      autor: "Akira Amano",
      precio: 11990,
      img: "../mangas/KamonohashiRonNoKindanSuiri_1.webp",
      categoria: "mangas",
      descripcion: "¡Esta pareja de detectives formada por Ron Kamonohashi, un investigador poco ortodoxo, e Isshiki Totomaru, un policía de carácter puro e inocente, deberá resolver el misterio para sacar a la luz una verdad que lleva mucho tiempo enterrada bajo una terrible oscuridad! ¡De la mano de la autora de Katekyo Hitman Reborn y Éldlive llega esta vertiginosa historia de misterios y detectives!", stock: 3
  },
  
  {
      id: 4,
      nombre: "Kamonohashi Ron No Kindan Suiri - Tomo 2",
      autor: "Akira Amano",
      precio: 11990,
      img: "../mangas/KamonohashiRonNoKindanSuiri_2.webp",
      categoria: "mangas",
      descripcion: "¡Esta pareja de detectives formada por Ron Kamonohashi, un investigador poco ortodoxo, e Isshiki Totomaru, un policía de carácter puro e inocente, deberá resolver el misterio para sacar a la luz una verdad que lleva mucho tiempo enterrada bajo una terrible oscuridad! ¡De la mano de la autora de Katekyo Hitman Reborn y Éldlive llega esta vertiginosa historia de misterios y detectives!", stock: 3
  },
  
  {
      id: 5,
      nombre: "Condorito",
      autor: "René Ríos Boettiger",
      precio: 4500,
      img: "../comics/Condorito.webp",
      categoria: "comics",
      descripcion: "coleccion de comics", stock: 3
  },
  
  {
      id: 6,
      nombre: "Pascualina 2023",
      autor: "Paulina Mönckenberg",
      precio: 19990,
      img: "../agendas/Pascualina2023.webp",
      categoria: "agendas",
      descripcion: "Después de un año difícil, de muchas inquietudes e incertidumbres que supongo que tú también has sentido, he querido diseñar este diario pensando en ti y en mí como un refugio que nos de alegría y fuerza.", stock: 2
  },

  {
    id: 7,
    nombre: "Julieta - 20 Aniversario",
    autor: "Florencia Olivos",
    precio: 15900,
    img: "../agendas/Julieta.webp",
    categoria: "agendas",
    descripcion: "Julieta vuelve con su look en rojo y negro en un formato de agenda abierta tipo planner, lo que fue siempre su producto estrella, una línea de papelería, y su autora prepara una serie de libros con una selección de los cómics de los años dos mil, junto a nuevas aventurasCon dos diseños de tapas para que puedas elegir, roja y negra, los colores que identificaron a Julieta en sus primeros años. Muchas de las historias de Julieta ocurren en noches misteriosas y llenas de aventuras, por eso no podía faltar un cielo estrellado de fondo. Agenda Julieta – Negra por Vasalisa ¿Te acuerdas de Julieta? Fue uno de los personajes más queridos por las adolescentes de Chile y Latinoamérica entre los años 2003 y 2014. Este año se cumplen 20 años desde que salió su primera agenda, por eso su autora Florencia Olivos prepara una colección aniversario, para que Julieta pueda reencontrarse con todas las amigas que tuvo que ya son adultas, y también para las adolescentes de hoy.",
    stock: 0
},

{
    id: 8,
    nombre: "El Principito",
    autor: "Antoine de Saint Exupery",
    precio: 15000,
    img: "../libros/ElPrincipito.webp",
    categoria: "libros",
    descripcion: "Fábula mítica y relato filosófico que interroga acerca de la relación  del ser humano con su prójimo y con el mundo, El Principito concentra, con maravillosa simplicidad, la constante reflexión de Saint-Exupery sobre la amistad, el amor, la responsabilidad y el sentido de la vida.",
     stock: 3
  },
  
  ]
  
  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(misProductos);
      }, 500)
    })
  }
  
  export const getProductosByID = (productoID) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(misProductos.find(item => item.id == productoID));
    }, 500)
    })
  }
  
  export const getProductosByCategory = (productosCategory) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(misProductos.filter(item => item.categoria === productosCategory))
      }, 500)
    })
  }
  