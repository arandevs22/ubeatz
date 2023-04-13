const tracks = [
    {
        id: 0,
        title: 'Welcome to Ubeatz',
        artists: [
            {
                name: 'Toca Iniciar'
            }
        ]
    },
    {
        id: 1,
        title: 'Yandel 150',
        URL: 'https://aranstorage.blob.core.windows.net/music/Yandel%20150.mp3',
        artists: [
            {
                name: 'Yandel',
            },
            {
                name: 'Feid',
            }
        ]
    },
    {
        id: 2,
        title: 'Marisola (remix)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Marisola%20(Remix).mp3',
        artists: [
            {
                name: 'Cris Mj',
            },
            {
                name: 'DUKI',
            },
            {
                name: 'Nicki Nicole',
            },
            {
                name: 'Standly'
            }
        ]
    },
    {
        id: 3,
        title: 'Rumbaton',
        URL: 'https://aranstorage.blob.core.windows.net/music/RUMBATON.mp3',
        artists: [
            {
                name: 'Daddy Yankke'
            }
        ]
    },
    {
        id: 4,
        title: 'Cairo',
        URL: 'https://aranstorage.blob.core.windows.net/music/CAIRO.mp3',
        artists: [
            {
                name: 'Karol G'
            },
            {
                name: 'Ovy on the drums'
            }
        ]
    },
    {
        id: '5',
        title: 'Provenza',
        URL: 'https://aranstorage.blob.core.windows.net/music/PROVENZA.mp3',
        artists: [
            {
                name: 'Karol G'
            }
        ]
    },
    {
        id: '6',
        title: 'Me porto bonito',
        URL: 'https://aranstorage.blob.core.windows.net/music/Bad%20Bunny%20-%20Me%20Porto%20Bonito.mp3',
        artists: [
            {
                name: 'Bad Bunny'
            },
            {
                name: 'Chencho Corleone'
            }
        ]
    },
    {
        id: '7',
        title: 'TQG',
        URL: 'https://aranstorage.blob.core.windows.net/music/TQG.mp3',
        artists: [
            {
                name: 'Karol G'
            },
            {
                name: 'Shakira'
            }
        ]
    },
    {
        id: '8',
        title: 'Envolver',
        URL: 'https://aranstorage.blob.core.windows.net/music/Envolver.mp3',
        artists: [
            {
                name: 'Annita'
            },
        ]
    },
    {
        id: '9',
        title: 'DESPECHÁ',
        URL: 'https://aranstorage.blob.core.windows.net/music/DESPECH%C3%81.mp3',
        artists: [
            {
                name: 'ROSALÍA'
            },
        ]
    },
    {
        id: '10',
        title: 'Shakira: Bzrp Music Sessions, Vol. 53',
        URL: 'https://aranstorage.blob.core.windows.net/music/%20Shakira_%20Bzrp%20Music%20Sessions,%20Vol.%2053.mp3',
        artists: [
            {
                name: 'Bizarrap'
            },
            {
                name: 'Shakira'
            }
        ]
    },
    {
        id: '11',
        title: 'Baila Baila Baila',
        URL: 'https://aranstorage.blob.core.windows.net/music/Baila%20Baila%20Baila.mp3',
        artists: [
            {
                name: 'Ozuna'
            },
        ]
    },
    {
        id: '12',
        title: 'Callaita',
        URL: 'https://aranstorage.blob.core.windows.net/music/Callaita.mp3',
        artists: [
            {
                name: 'Bad Bunny'
            },
            {
                name: 'Tainy'
            }
        ]
    },
    {
        id: '13',
        title: 'Chantaje (feat. Maluma)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Chantaje%20(feat.%20Maluma).mp3',
        artists: [
            {
                name: 'Shakira'
            },
            {
                name: 'Maluma'
            }
        ]
    },
    {
        id: '14',
        title: 'Con Altura (feat. El Guincho)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Con%20Altura%20(feat.%20El%20Guincho).mp3',
        artists: [
            {
                name: 'ROSALÍA'
            },
            {
                name: 'J Balvin'
            },
            {
                name: 'El Guincho'
            }
        ]
    },
    {
        id: '15',
        title: 'DÁKITI',
        URL: 'https://aranstorage.blob.core.windows.net/music/DÁKITI.mp3',
        artists: [
            {
                name: 'Bad Bunny'
            },
            {
                name: 'Jhayco'
            },
        ]
    },
    {
        id: '16',
        title: 'Desesperados',
        URL: 'https://aranstorage.blob.core.windows.net/music/Desesperados.mp3',
        artists: [
            {
                name: 'Rauw Alejandro'
            },
            {
                name: 'Chencho Corleone'
            },
        ]
    },
    {
        id: '17',
        title: 'EL MAKINON',
        URL: 'https://aranstorage.blob.core.windows.net/music/EL%20MAKINON.mp3',
        artists: [
            {
                name: 'Karol G'
            },
            {
                name: 'Mariah Angeliq'
            },
        ]
    },
    {
        id: '18',
        title: 'Fiel',
        URL: 'https://aranstorage.blob.core.windows.net/music/Fiel.mp3',
        artists: [
            {
                name: 'Los Legendarios'
            },
            {
                name: 'Wisin'
            },
            {
                name: 'Jhayco'
            },
        ]
    },
    {
        id: '19',
        title: 'Gasolina',
        URL: 'https://aranstorage.blob.core.windows.net/music/Gasolina.mp3',
        artists: [
            {
                name: 'Daddy Yankee'
            },
        ]
    },
    {
        id: '20',
        title: 'GATÚBELA',
        URL: 'https://aranstorage.blob.core.windows.net/music/GAT%C3%9ABELA.mp3',
        artists: [
            {
                name: 'Karol G'
            },
            {
                name: 'Maldy'
            }
        ]
    },
    {
        id: '21',
        title: 'GIRL LIKE ME',
        URL: 'https://aranstorage.blob.core.windows.net/music/GIRL%20LIKE%20ME.mp3',
        artists: [
            {
                name: 'Black Eyed Peas'
            },
            {
                name: 'Shakira'
            }
        ]
    },
    {
        id: '22',
        title: 'Hawái',
        URL: 'https://aranstorage.blob.core.windows.net/music/Haw%C3%A1i.mp3',
        artists: [
            {
                name: 'Maluma'
            }
        ]
    },
    {
        id: '23',
        title: 'La Bachata',
        URL: 'https://aranstorage.blob.core.windows.net/music/La%20Bachata.mp3',
        artists: [
            {
                name: 'Manuel Turizo'
            }
        ]
    },
    {
        id: '24',
        title: 'LA CANCIÓN',
        URL: 'https://aranstorage.blob.core.windows.net/music/LA%20CANCI%C3%93N.mp3',
        artists: [
            {
                name: 'J Balvin'
            },
            {
                name: 'Bad Bunny'
            }
        ]
    },
    {
        id: '25',
        title: 'La Curiosidad',
        URL: 'https://aranstorage.blob.core.windows.net/music/La%20Curiosidad.mp3',
        artists: [
            {
                name: 'Jay Wheeler'
            },
            {
                name: 'DJ Nelson'
            },
            {
                name: 'Myke Towers'
            }
        ]
    },
    {
        id: '26',
        title: 'LA NOCHE DE ANOCHE',
        URL: 'https://aranstorage.blob.core.windows.net/music/LA%20NOCHE%20DE%20ANOCHE.mp3',
        artists: [
            {
                name: 'Bad Bunny'
            },
            {
                name: 'ROSALÍA'
            },
        ]
    },
    {
        id: '27',
        title: 'La Romana',
        URL: 'https://aranstorage.blob.core.windows.net/music/La%20Romana.mp3',
        artists: [
            {
                name: 'Bad Bunny'
            },
            {
                name: 'El Alfa'
            },
        ]
    },
    {
        id: '28',
        title: 'Loco Contigo',
        URL: 'https://aranstorage.blob.core.windows.net/music/Loco%20Contigo.mp3',
        artists: [
            {
                name: 'DJ Snake'
            },
            {
                name: 'J Balvin'
            },
            {
                name: 'Tyga'
            }
        ]
    },
    {
        id: '29',
        title: 'MAMIII',
        URL: 'https://aranstorage.blob.core.windows.net/music/MAMIII.mp3',
        artists: [
            {
                name: 'Becky G'
            },
            {
                name: 'Karol G'
            },
        ]
    },
    {
        id: '30',
        title: 'Monotonía',
        URL: 'https://aranstorage.blob.core.windows.net/music/Monotonía.mp3',
        artists: [
            {
                name: 'Shakira'
            },
            {
                name: 'Ozuna'
            },
        ]
    },
    {
        id: '31',
        title: 'Moscow Mule',
        URL: 'https://aranstorage.blob.core.windows.net/music/Moscow%20Mule.mp3',
        artists: [
            {
                name: 'Bad Bunny'
            },
        ]
    },
    {
        id: '32',
        title: 'OJALÁ',
        URL: 'https://aranstorage.blob.core.windows.net/music/OJAL%C3%81.mp3',
        artists: [
            {
                name: 'Maria Becerra'
            },
        ]
    },
    {
        id: '33',
        title: 'Ojitos Lindos',
        URL: 'https://aranstorage.blob.core.windows.net/music/Ojitos%20Lindos.mp3',
        artists: [
            {
                name: 'Bad Bunny'
            },
            {
                name: 'Bomba Estéreo'
            }
        ]
    },
    {
        id: '34',
        title: 'Pegao',
        URL: 'https://aranstorage.blob.core.windows.net/music/Pegao.mp3',
        artists: [
            {
                name: 'Camilo'
            }
        ]
    },
    {
        id: '35',
        title: 'Pepas',
        URL: 'https://aranstorage.blob.core.windows.net/music/Pepas.mp3',
        artists: [
            {
                name: 'Farruko'
            }
        ]
    },
    {
        id: '36',
        title: 'Perdóname',
        URL: 'https://aranstorage.blob.core.windows.net/music/Perd%C3%B3name.mp3',
        artists: [
            {
                name: 'La Factoria'
            },
            {
                name: 'Eddy Lover'
            }
        ]
    },
    {
        id: '37',
        title: 'PUNTO 40',
        URL: 'https://aranstorage.blob.core.windows.net/music/PUNTO%2040.mp3',
        artists: [
            {
                name: 'Rauw Alejandro'
            },
            {
                name: 'Baby Rasta'
            }
        ]
    },
    {
        id: '38',
        title: 'Qué Más Pues?',
        URL: 'https://aranstorage.blob.core.windows.net/music/Qu%C3%A9%20M%C3%A1s%20Pues_.mp3',
        artists: [
            {
                name: 'J Balvin'
            },
            {
                name: 'Maria Becerra'
            }
        ]
    },
    {
        id: '39',
        title: 'Quevedo: Bzrp Music Sessions, Vol. 52',
        URL: 'https://aranstorage.blob.core.windows.net/music/Quevedo_%20Bzrp%20Music%20Sessions,%20Vol.%2052.mp3',
        artists: [
            {
                name: 'Bizarrap'
            },
            {
                name: 'Quevedo'
            }
        ]
    },
    {
        id: '40',
        title: 'Rakata',
        URL: 'https://aranstorage.blob.core.windows.net/music/Rakata.mp3',
        artists: [
            {
                name: 'Wisin & Yandel'
            },
        ]
    },
    {
        id: '41',
        title: 'Relación (Remix)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Relaci%C3%B3n%20(Remix).mp3',
        artists: [
            {
                name: 'Sech'
            },
            {
                name: 'Daddy Yankee'
            },
            {
                name: 'J Balvin'
            },
            {
                name: 'ROSALÍA'
            },
            {
                name: 'Farruko'
            }
        ]
    },
    {
        id: '42',
        title: 'Tacones Rojos',
        URL: 'https://aranstorage.blob.core.windows.net/music/Tacones%20Rojos.mp3',
        artists: [
            {
                name: 'Sebastian Yatra'
            },
        ]
    },
    {
        id: '43',
        title: 'Taki Taki',
        URL: 'https://aranstorage.blob.core.windows.net/music/Taki%20Taki.mp3',
        artists: [
            {
                name: 'DJ Snake'
            },
            {
                name: 'Selena Gomez'
            },
            {
                name: 'Ozuna'
            },
            {
                name: 'Cardi B'
            }
        ]
    },
    {
        id: '44',
        title: 'Te Felicito',
        URL: 'https://aranstorage.blob.core.windows.net/music/Te%20Felicito.mp3',
        artists: [
            {
                name: 'Shakira'
            },
            {
                name: 'Rauw Alejandro'
            }
        ]
    },
    {
        id: '45',
        title: 'Tití Me Preguntó',
        URL: 'https://aranstorage.blob.core.windows.net/music/Tit%C3%AD%20Me%20Pregunt%C3%B3.mp3',
        artists: [
            {
                name: 'Bad Bunny'
            }
        ]
    },
    {
        id: '46',
        title: 'Todo De Ti',
        URL: 'https://aranstorage.blob.core.windows.net/music/Todo%20De%20Ti.mp3',
        artists: [
            {
                name: 'Rauw Alejandro'
            }
        ]
    },
    {
        id: '47',
        title: 'Tú Me Dejaste De Querer',
        URL: 'https://aranstorage.blob.core.windows.net/music/T%C3%BA%20Me%20Dejaste%20De%20Querer.mp3',
        artists: [
            {
                name: 'C. Tangana'
            },
            {
                name: 'Niño de Elche'
            },
            {
                name: 'La Hungara'
            }
        ]
    },
    {
        id: '48',
        title: 'Una Locura',
        URL: 'https://aranstorage.blob.core.windows.net/music/Una%20Locura.mp3',
        artists: [
            {
                name: 'Ozuna'
            },
            {
                name: 'J Balvin'
            },
            {
                name: 'Chencho Corleone'
            }
        ]
    },
    {
        id: '49',
        title: 'Una Noche en Medellín',
        URL: 'https://aranstorage.blob.core.windows.net/music/Una%20Noche%20en%20Medell%C3%ADn.mp3',
        artists: [
            {
                name: 'Chris MJ'
            }
        ]
    },
    {
        id: '50',
        title: 'Una Vaina Loca',
        URL: 'https://aranstorage.blob.core.windows.net/music/Una%20Vaina%20Loca.mp3',
        artists: [
            {
                name: 'Fuego'
            },
            {
                name: 'Manuel Turizo'
            },
            {
                name: 'DUKI'
            }
        ]
    },
    {
        id: '51',
        title: 'Volví',
        URL: 'https://aranstorage.blob.core.windows.net/music/Volv%C3%AD.mp3',
        artists: [
            {
                name: 'Aventura'
            },
            {
                name: 'Bad Bunny'
            }
        ]
    },
    {
        id: '52',
        title: 'Yonaguni',
        URL: 'https://aranstorage.blob.core.windows.net/music/Yonaguni.mp3',
        artists: [
            {
                name: 'Bad Bunny'
            }
        ]
    },
]

export default tracks;