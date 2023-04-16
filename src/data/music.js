const tracks = [
    {
        id: 0,
        title: 'Welcome to Ubeatz',
        artists: [
            {
                name: 'Toca Iniciar'
            }
        ],
        primaryColor: '#d32f86'
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
        ],
        primaryColor: '#ac2611'
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
        ],
        primaryColor: '#c76f16'
    },
    {
        id: 3,
        title: 'Rumbaton',
        URL: 'https://aranstorage.blob.core.windows.net/music/RUMBATON.mp3',
        artists: [
            {
                name: 'Daddy Yankke'
            }
        ],
        primaryColor: '#8e6e41'
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
        ],
        primaryColor: '#786557'
    },
    {
        id: '5',
        title: 'Provenza',
        URL: 'https://aranstorage.blob.core.windows.net/music/PROVENZA.mp3',
        artists: [
            {
                name: 'Karol G'
            }
        ],
        primaryColor: '#2e3e21'
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
        ],
        primaryColor: '#df1707'
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
        ],
        primaryColor: '#e2aa84'
    },
    {
        id: '8',
        title: 'Envolver',
        URL: 'https://aranstorage.blob.core.windows.net/music/Envolver.mp3',
        artists: [
            {
                name: 'Annita'
            },
        ],
        primaryColor: '#663cfc'
    },
    {
        id: '9',
        title: 'DESPECHÁ',
        URL: 'https://aranstorage.blob.core.windows.net/music/DESPECH%C3%81.mp3',
        artists: [
            {
                name: 'ROSALÍA'
            },
        ],
        primaryColor: '#0c89cc'
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
        ],
        primaryColor: '#747474'
    },
    {
        id: '11',
        title: 'Baila Baila Baila',
        URL: 'https://aranstorage.blob.core.windows.net/music/Baila%20Baila%20Baila.mp3',
        artists: [
            {
                name: 'Ozuna'
            },
        ],
        primaryColor: '#cfdc2c'
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
        ],
        primaryColor: '#475c89'
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
        ],
        primaryColor: '#bfa961'
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
        ],
        primaryColor: '#3399c6'
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
        ],
        primaryColor: '#82533c'
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
        ],
        primaryColor: '#330076'
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
        ],
        primaryColor: '#15cbc6'
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
        ],
        primaryColor: '#680500'
    },
    {
        id: '19',
        title: 'Gasolina',
        URL: 'https://aranstorage.blob.core.windows.net/music/Gasolina.mp3',
        artists: [
            {
                name: 'Daddy Yankee'
            },
        ],
        primaryColor: '#181818'
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
        ],
        primaryColor: '#6b2e2a'
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
        ],
        primaryColor: '#218f90'
    },
    {
        id: '22',
        title: 'Hawái',
        URL: 'https://aranstorage.blob.core.windows.net/music/Haw%C3%A1i.mp3',
        artists: [
            {
                name: 'Maluma'
            }
        ],
        primaryColor: '#a43471'
    },
    {
        id: '23',
        title: 'La Bachata',
        URL: 'https://aranstorage.blob.core.windows.net/music/La%20Bachata.mp3',
        artists: [
            {
                name: 'Manuel Turizo'
            }
        ],
        primaryColor: '#59a3c7'
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
        ],
        primaryColor: '#020305'
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
        ],
        primaryColor: '#f3bb3c'
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
    {
        id: '53',
        title: 'A La Antigüita',
        URL: 'https://aranstorage.blob.core.windows.net/music/A%20La%20Antig%C3%BCita.mp3',
        artists: [
            {
                name: 'Calibre 50'
            }
        ]
    },
    {
        id: '54',
        title: 'AMG',
        URL: 'https://aranstorage.blob.core.windows.net/music/AMG.mp3',
        artists: [
            {
                name: 'Natanael Cano'
            },
            {
                name: 'Peso Pluma'
            }
        ]
    },
    {
        id: '55',
        title: 'As It Was',
        URL: 'https://aranstorage.blob.core.windows.net/music/As%20It%20Was.mp3',
        artists: [
            {
                name: 'Harry Styles'
            }
        ]
    },
    {
        id: '56',
        title: 'Bebe Dame',
        URL: 'https://aranstorage.blob.core.windows.net/music/Bebe%20Dame.mp3',
        artists: [
            {
                name: 'Fuerza Regida'
            },
            {
                name: 'Grupo Frontera'
            }
        ]
    },
    {
        id: '57',
        title: 'Billete Grande',
        URL: 'https://aranstorage.blob.core.windows.net/music/Billete%20Grande.mp3',
        artists: [
            {
                name: 'Fuerza Regida'
            },
            {
                name: 'Edgardo Nuñez'
            }
        ]
    },
    {
        id: '58',
        title: 'El Azul',
        URL: 'https://aranstorage.blob.core.windows.net/music/El%20Azul.mp3',
        artists: [
            {
                name: 'Junior H'
            },
            {
                name: 'Peso Pluma'
            }
        ]
    },
    {
        id: '59',
        title: 'Botella Tras Botella',
        URL: 'https://aranstorage.blob.core.windows.net/music/Botella%20Tras%20Botella.mp3',
        artists: [
            {
                name: 'Gera Mx'
            },
            {
                name: 'Christian Nodal'
            }
        ]
    },
    {
        id: '60',
        title: 'Ch y la Pizza',
        URL: 'https://aranstorage.blob.core.windows.net/music/Ch%20y%20la%20Pizza.mp3',
        artists: [
            {
                name: 'Fuerza Regida'
            },
            {
                name: 'Natanael Cano'
            }
        ]
    },
    {
        id: '61',
        title: 'Chale',
        URL: 'https://aranstorage.blob.core.windows.net/music/Chale.mp3',
        artists: [
            {
                name: 'Edén Muñoz'
            }
        ]
    },
    {
        id: '62',
        title: 'COLOGNE',
        URL: 'https://aranstorage.blob.core.windows.net/music/COLOGNE.mp3',
        artists: [
            {
                name: 'Junior H'
            },
            {
                name: 'Ovi'
            }
        ]
    },
    {
        id: '63',
        title: 'Efecto',
        URL: 'https://aranstorage.blob.core.windows.net/music/Efecto.mp3',
        artists: [
            {
                name: 'Bad Bunny'
            },
        ]
    },
    {
        id: '64',
        title: 'El Gavilán',
        URL: 'https://aranstorage.blob.core.windows.net/music/El%20Gavil%C3%A1n.mp3',
        artists: [
            {
                name: 'Luis R Conriquez'
            },
            {
                name: 'Tony Aguirre'
            },
            {
                name: 'Peso Pluma'
            }
        ]
    },
    {
        id: '65',
        title: 'El Hijo Mayor',
        URL: 'https://aranstorage.blob.core.windows.net/music/El%20Hijo%20Mayor.mp3',
        artists: [
            {
                name: 'Junior H'
            }
        ]
    },
    {
        id: '66',
        title: 'El Rescate',
        URL: 'https://aranstorage.blob.core.windows.net/music/El%20Rescate.mp3',
        artists: [
            {
                name: 'Grupo Marca Registrada'
            },
            {
                name: 'Junior H'
            }
        ]
    },
    {
        id: '67',
        title: 'El Tóxico',
        URL: 'https://aranstorage.blob.core.windows.net/music/El%20T%C3%B3xico.mp3',
        artists: [
            {
                name: 'Grupo Firme'
            },
            {
                name: 'Carin Leon'
            }
        ]
    },
    {
        id: '68',
        title: 'Fin de Semana',
        URL: 'https://aranstorage.blob.core.windows.net/music/Fin%20de%20Semana.mp3',
        artists: [
            {
                name: 'Óscar Maydon'
            },
            {
                name: 'Junior H'
            }
        ]
    },
    {
        id: '69',
        title: 'Flowers',
        URL: 'https://aranstorage.blob.core.windows.net/music/Flowers.mp3',
        artists: [
            {
                name: 'Miley Cyrus'
            }
        ]
    },
    {
        id: '70',
        title: 'Gatita',
        URL: 'https://aranstorage.blob.core.windows.net/music/Gatita.mp3',
        artists: [
            {
                name: 'Bellakath'
            }
        ]
    },
    {
        id: '71',
        title: 'JGL',
        URL: 'https://aranstorage.blob.core.windows.net/music/JGL.mp3',
        artists: [
            {
                name: 'La Adictiva'
            },
            {
                name: 'Luis R Conriquez'
            }
        ]
    },
    {
        id: '72',
        title: 'La Jumpa',
        URL: 'https://aranstorage.blob.core.windows.net/music/La%20Jumpa.mp3',
        artists: [
            {
                name: 'Arcangel'
            },
            {
                name: 'Bad Bunny'
            }
        ]
    },
    {
        id: '73',
        title: 'Los Botones Azules',
        URL: 'https://aranstorage.blob.core.windows.net/music/Los%20Botones%20Azules.mp3',
        artists: [
            {
                name: 'Junior H'
            },
            {
                name: 'Luis R Conriquez'
            }
        ]
    },
    {
        id: '74',
        title: 'Neverita',
        URL: 'https://aranstorage.blob.core.windows.net/music/Neverita.mp3',
        artists: [
            {
                name: 'Bad Bunny'
            }
        ]
    },
    {
        id: '75',
        title: 'No Se Va (En Vivo)',
        URL: 'https://aranstorage.blob.core.windows.net/music/No%20Se%20Va%20(En%20Vivo).mp3',
        artists: [
            {
                name: 'Grupo Frontera'
            }
        ]
    },
    {
        id: '76',
        title: 'Ojos Marrones',
        URL: 'https://aranstorage.blob.core.windows.net/music/Ojos%20Marrones.mp3',
        artists: [
            {
                name: 'Lasso'
            }
        ]
    },
    {
        id: '77',
        title: 'Party',
        URL: 'https://aranstorage.blob.core.windows.net/music/Party.mp3',
        artists: [
            {
                name: 'Bad Bunny'
            },
            {
                name: 'Rauw Alejandro'
            }
        ]
    },
    {
        id: '78',
        title: 'Qué Agonía',
        URL: 'https://aranstorage.blob.core.windows.net/music/Qu%C3%A9%20Agon%C3%ADa.mp3',
        artists: [
            {
                name: 'Yuridia'
            },
            {
                name: 'Angela Aguilar'
            }
        ]
    },
    {
        id: '79',
        title: 'Que Vuelvas',
        URL: 'https://aranstorage.blob.core.windows.net/music/Que%20Vuelvas.mp3',
        artists: [
            {
                name: 'Carin Leon'
            },
            {
                name: 'Grupo Frontera'
            }
        ]
    },
    {
        id: '80',
        title: 'Si Fuera Fácil',
        URL: 'https://aranstorage.blob.core.windows.net/music/Si%20Fuera%20F%C3%A1cil.mp3',
        artists: [
            {
                name: 'Grupo Marca Registrada'
            }
        ]
    },
    {
        id: '81',
        title: 'Si Te Pudiera Mentir',
        URL: 'https://aranstorage.blob.core.windows.net/music/Si%20Te%20Pudiera%20Mentir.mp3',
        artists: [
            {
                name: 'Calibre 50'
            }
        ]
    },
    {
        id: '82',
        title: 'Siempre Pendientes',
        URL: 'https://aranstorage.blob.core.windows.net/music/Siempre%20Pendientes.mp3',
        artists: [
            {
                name: 'Peso Pluma'
            },
            {
                name: 'Luis R Conriquez'
            }
        ]
    },
    {
        id: '83',
        title: 'Ya No Somos Ni Seremos',
        URL: 'https://aranstorage.blob.core.windows.net/music/Ya%20No%20Somos%20Ni%20Seremos.mp3',
        artists: [
            {
                name: 'Christian Nodal'
            }
        ]
    },
    {
        id: '84',
        title: 'Peaches',
        URL: 'https://aranstorage.blob.core.windows.net/music/Peaches.mp3',
        artists: [
            {
                name: 'Jack Black'
            }
        ]
    },
    {
        id: '85',
        title: '¿Cómo Se Supera?',
        URL: 'https://aranstorage.blob.core.windows.net/music/%C2%BFC%C3%B3mo%20Se%20Supera_.mp3',
        artists: [
            {
                name: 'Edén Muñoz'
            },
            {
                name: 'MC Davo'
            }
        ]
    },
    {
        id: '86',
        title: 'A Mí Me Gustas Tú',
        URL: 'https://aranstorage.blob.core.windows.net/music/A%20M%C3%AD%20Me%20Gustas%20T%C3%BA.mp3',
        artists: [
            {
                name: 'Los Rojos'
            },
            {
                name: 'Duelo'
            },
            {
                name: 'Oscar Iván Treviño'
            }
        ]
    },
    {
        id: '87',
        title: 'Ando Enfocado',
        URL: 'https://aranstorage.blob.core.windows.net/music/Ando%20Enfocado.mp3',
        artists: [
            {
                name: 'Jaziel Aviléz'
            },
            {
                name: 'codiciado'
            },
            {
                name: 'Oscar Iván Treviño'
            }
        ]
    },
    {
        id: '88',
        title: 'Asi Me Encula',
        URL: 'https://aranstorage.blob.core.windows.net/music/Asi%20Me%20Encula.mp3',
        artists: [
            {
                name: 'Sandro Malandro'
            }
        ]
    },
    {
        id: '89',
        title: 'Bélico y Cholo',
        URL: 'https://aranstorage.blob.core.windows.net/music/B%C3%A9lico%20y%20Cholo.mp3',
        artists: [
            {
                name: 'Sebastian Esquivel'
            },
            {
                name: 'Yerai R'
            }
        ]
    },
    {
        id: '90',
        title: 'Calidad',
        URL: 'https://aranstorage.blob.core.windows.net/music/Calidad.mp3',
        artists: [
            {
                name: 'Grupo Firme'
            },
            {
                name: 'Luis Mexia'
            }
        ]
    },
    {
        id: '91',
        title: 'Chanel',
        URL: 'https://aranstorage.blob.core.windows.net/music/Chanel.mp3',
        artists: [
            {
                name: 'Becky G'
            },
            {
                name: 'Peso Pluma'
            }
        ]
    },
    {
        id: '92',
        title: 'Chorumbo',
        URL: 'https://aranstorage.blob.core.windows.net/music/Chorumbo.mp3',
        artists: [
            {
                name: 'Edicion Especial'
            },
            {
                name: 'Hans el Oso'
            }
        ]
    },
    {
        id: '93',
        title: 'Consejos Gratis',
        URL: 'https://aranstorage.blob.core.windows.net/music/Consejos%20Gratis.mp3',
        artists: [
            {
                name: 'Edén Muñoz'
            }
        ]
    },
    {
        id: '94',
        title: 'Dame un Beso y Dime Adios (En Vivo)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Dame%20un%20Beso%20y%20Dime%20Adios%20(En%20Vivo).mp3',
        artists: [
            {
                name: 'Carin Leon'
            },
            {
                name: 'Grupo Yndio'
            }
        ]
    },
    {
        id: '95',
        title: 'Dame Un Chance (La Cumbia Bélica)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Dame%20Un%20Chance%20(La%20Cumbia%20B%C3%A9lica).mp3',
        artists: [
            {
                name: 'Luis R Conriquez'
            },
            {
                name: 'Grupo Frontera'
            }
        ]
    },
    {
        id: '96',
        title: 'Desvelado',
        URL: 'https://aranstorage.blob.core.windows.net/music/Desvelado.mp3',
        artists: [
            {
                name: 'Fuerza Regida'
            }
        ]
    },
    {
        id: '97',
        title: 'Di Que Si',
        URL: 'https://aranstorage.blob.core.windows.net/music/Di%20Que%20Si.mp3',
        artists: [
            {
                name: 'Grupo Marca Registrada'
            },
            {
                name: 'Grupo Frontera'
            }
        ]
    },
    {
        id: '98',
        title: 'Dijeron Que No La Iba Lograr',
        URL: 'https://aranstorage.blob.core.windows.net/music/Dijeron%20Que%20No%20La%20Iba%20Lograr.mp3',
        artists: [
            {
                name: 'Chinos Pacas'
            },
            {
                name: 'Fuerza Regida'
            }
        ]
    },
    {
        id: '99',
        title: 'Don Chon',
        URL: 'https://aranstorage.blob.core.windows.net/music/Don%20Chon.mp3',
        artists: [
            {
                name: 'Juanpa Salazar'
            },
            {
                name: 'Fuerza Regida'
            },
            {
                name: 'Natanael Cano'
            }
        ]
    },
    {
        id: '100',
        title: 'El Deportivo',
        URL: 'https://aranstorage.blob.core.windows.net/music/El%20Deportivo.mp3',
        artists: [
            {
                name: 'Enigma Norteño'
            },
            {
                name: 'Fuerza Regida'
            }
        ]
    },
    {
        id: '101',
        title: 'El lugar correcto',
        URL: 'https://aranstorage.blob.core.windows.net/music/El%20lugar%20correcto.mp3',
        artists: [
            {
                name: 'Natalia Lafourcade'
            }
        ]
    },
    {
        id: '102',
        title: 'Ella Baila Sola',
        URL: 'https://aranstorage.blob.core.windows.net/music/Ella%20Baila%20Sola.mp3',
        artists: [
            {
                name: 'Eslabon Armado'
            },
            {
                name: 'Peso Pluma'
            }
        ]
    },
    {
        id: '103',
        title: 'En Paris',
        URL: 'https://aranstorage.blob.core.windows.net/music/En%20Paris.mp3',
        artists: [
            {
                name: 'El Chachito'
            },
            {
                name: 'Junior H'
            }
        ]
    },
    {
        id: '104',
        title: 'Eres Ese Algo',
        URL: 'https://aranstorage.blob.core.windows.net/music/Eres%20Ese%20Algo.mp3',
        artists: [
            {
                name: 'La Maquinaria Norteña'
            }
        ]
    },
    {
        id: '105',
        title: 'Fuentes De Ortiz',
        URL: 'https://aranstorage.blob.core.windows.net/music/Fuentes%20De%20Ortiz.mp3',
        artists: [
            {
                name: 'Julión Alvarez'
            }
        ]
    },
    {
        id: '106',
        title: 'Gente Corriente',
        URL: 'https://aranstorage.blob.core.windows.net/music/Gente%20Corriente.mp3',
        artists: [
            {
                name: 'La Adictiva'
            }
        ]
    },
    {
        id: '107',
        title: 'Hoy la Vi Con Él (En Vivo)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Hoy%20la%20Vi%20Con%20%C3%89l%20(En%20Vivo).mp3',
        artists: [
            {
                name: 'Virlán García'
            }
        ]
    },
    {
        id: '108',
        title: 'Inexperto En Olvidarte',
        URL: 'https://aranstorage.blob.core.windows.net/music/Inexperto%20En%20Olvidarte.mp3',
        artists: [
            {
                name: 'Alejandro Fernandez'
            }
        ]
    },
    {
        id: '109',
        title: 'Infieles',
        URL: 'https://aranstorage.blob.core.windows.net/music/Infieles.mp3',
        artists: [
            {
                name: 'Kim Loaiza'
            }
        ]
    },
    {
        id: '110',
        title: 'La Bebe (Remix)',
        URL: 'https://aranstorage.blob.core.windows.net/music/La%20Bebe%20(Remix).mp3',
        artists: [
            {
                name: 'Yng Lvcas'
            },
            {
                name: 'Peso Pluma'
            }
        ]
    },
    {
        id: '111',
        title: 'La Bolsa Gucci',
        URL: 'https://aranstorage.blob.core.windows.net/music/La%20Bolsa%20Gucci.mp3',
        artists: [
            {
                name: 'Miguel Cornejo'
            },
            {
                name: 'Gabito Ballesteros'
            }
        ]
    },
    {
        id: '112',
        title: 'La Niña del Volcán (Polocorp Remix)',
        URL: 'https://aranstorage.blob.core.windows.net/music/La%20Ni%C3%B1a%20del%20Volc%C3%A1n%20(Polocorp%20Remix).mp3',
        artists: [
            {
                name: 'YoSoyMatt'
            },
            {
                name: 'Polocorp'
            },
            {
                name: 'Eva de Marce'
            }
        ]
    },
    {
        id: '113',
        title: 'La Octava Maravilla (En Vivo)',
        URL: 'https://aranstorage.blob.core.windows.net/music/La%20Octava%20Maravilla%20(En%20Vivo).mp3',
        artists: [
            {
                name: 'Alfredo Montaño'
            }
        ]
    },
    {
        id: '114',
        title: 'LUNA',
        URL: 'https://aranstorage.blob.core.windows.net/music/LUNA.mp3',
        artists: [
            {
                name: 'Jd Pantoja'
            },
            {
                name: 'Kim Loaiza'
            }
        ]
    },
    {
        id: '115',
        title: 'Malas Decisiones',
        URL: 'https://aranstorage.blob.core.windows.net/music/Malas%20Decisiones.mp3',
        artists: [
            {
                name: 'Kenia Os'
            }
        ]
    },
    {
        id: '116',
        title: 'Mamita Santa',
        URL: 'https://aranstorage.blob.core.windows.net/music/Mamita%20Santa.mp3',
        artists: [
            {
                name: 'Porter'
            },
            {
                name: 'Ximena Sarinana'
            }
        ]
    },
    {
        id: '117',
        title: 'Máscara de Niña',
        URL: 'https://aranstorage.blob.core.windows.net/music/M%C3%A1scara%20de%20Ni%C3%B1a.mp3',
        artists: [
            {
                name: 'Valgur'
            }
        ]
    },
    {
        id: '118',
        title: 'Me Dejé Ir Con Todo',
        URL: 'https://aranstorage.blob.core.windows.net/music/Me%20Dej%C3%A9%20Ir%20Con%20Todo.mp3',
        artists: [
            {
                name: 'Banda MS de Sergio Lizárraga'
            }
        ]
    },
    {
        id: '119',
        title: 'Mientes Tan Bien',
        URL: 'https://aranstorage.blob.core.windows.net/music/Mientes%20Tan%20Bien.mp3',
        artists: [
            {
                name: 'Edén Muñoz'
            }
        ]
    },
    {
        id: '120',
        title: 'Mil Maneras De Morir',
        URL: 'https://aranstorage.blob.core.windows.net/music/Mil%20Maneras%20De%20Morir.mp3',
        artists: [
            {
                name: 'Carin Leon'
            },
            {
                name: 'Kakalo'
            }
        ]
    },
    {
        id: '121',
        title: 'No Es Por Acá',
        URL: 'https://aranstorage.blob.core.windows.net/music/No%20Es%20Por%20Ac%C3%A1.mp3',
        artists: [
            {
                name: 'Carin Leon'
            }
        ]
    },
    {
        id: '122',
        title: 'No Se Vuelve A Repetir',
        URL: 'https://aranstorage.blob.core.windows.net/music/No%20Se%20Vuelve%20A%20Repetir.mp3',
        artists: [
            {
                name: 'Intocable'
            }
        ]
    },
    {
        id: '123',
        title: 'Nunca Tristes (Me Vale Madre)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Nunca%20Tristes%20(Me%20Vale%20Madre).mp3',
        artists: [
            {
                name: 'RENEE'
            }
        ]
    },
    {
        id: '124',
        title: 'Para No Verte Más',
        URL: 'https://aranstorage.blob.core.windows.net/music/Para%20No%20Verte%20M%C3%A1s.mp3',
        artists: [
            {
                name: 'Thalia'
            },
            {
                name: 'Kenia Os'
            }
        ]
    },
    {
        id: '125',
        title: 'Pedazo De Tonto',
        URL: 'https://aranstorage.blob.core.windows.net/music/Pedazo%20De%20Tonto.mp3',
        artists: [
            {
                name: 'Carin Leon'
            },
            {
                name: 'Luis Mexia'
            }
        ]
    },
    {
        id: '126',
        title: 'Por Clave Caiman',
        URL: 'https://aranstorage.blob.core.windows.net/music/Por%20Clave%20Caiman.mp3',
        artists: [
            {
                name: 'LEGADO 7'
            },
            {
                name: 'Tomas Ballardo'
            }
        ]
    },
    {
        id: '127',
        title: 'Por el Resto de Tu Vida',
        URL: 'https://aranstorage.blob.core.windows.net/music/Por%20el%20Resto%20de%20Tu%20Vida.mp3',
        artists: [
            {
                name: 'Christian Nodal'
            },
            {
                name: 'TINI'
            }
        ]
    },
    {
        id: '128',
        title: 'Por las Noches (Remix)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Por%20las%20Noches%20(Remix).mp3',
        artists: [
            {
                name: 'Peso Pluma'
            },
            {
                name: 'Nicki Nicole'
            }
        ]
    },
    {
        id: '129',
        title: 'PRC',
        URL: 'https://aranstorage.blob.core.windows.net/music/PRC.mp3',
        artists: [
            {
                name: 'Peso Pluma'
            },
            {
                name: 'Natanael Cano'
            }
        ]
    },
    {
        id: '130',
        title: 'Puro Campeón',
        URL: 'https://aranstorage.blob.core.windows.net/music/Puro%20Campe%C3%B3n.mp3',
        artists: [
            {
                name: 'Grupo Marca Registrada'
            },
            {
                name: 'Luis R Conriquez'
            }
        ]
    },
    {
        id: '131',
        title: 'Qué Onda Perdida',
        URL: 'https://aranstorage.blob.core.windows.net/music/Qu%C3%A9%20Onda%20Perdida.mp3',
        artists: [
            {
                name: 'Gerardo Coronel'
            }
        ]
    },
    {
        id: '132',
        title: 'S.H.E.A',
        URL: 'https://aranstorage.blob.core.windows.net/music/S.H.E.A.mp3',
        artists: [
            {
                name: 'RBD'
            }
        ]
    },
    {
        id: '133',
        title: 'sanvalentín:(',
        URL: 'https://aranstorage.blob.core.windows.net/music/sanvalent%C3%ADn_(.mp3',
        artists: [
            {
                name: 'Humbe'
            }
        ]
    },
    {
        id: '134',
        title: 'Se Me Soltó El Hocico',
        URL: 'https://aranstorage.blob.core.windows.net/music/Se%20Me%20Solt%C3%B3%20El%20Hocico.mp3',
        artists: [
            {
                name: 'Los Dos Carnales'
            }
        ]
    },
    {
        id: '135',
        title: 'Shorty Party',
        URL: 'https://aranstorage.blob.core.windows.net/music/Shorty%20Party.mp3',
        artists: [
            {
                name: 'Cartel De Santa'
            },
            {
                name: 'La Kelly'
            }
        ]
    },
    {
        id: '136',
        title: 'Sin Rencores',
        URL: 'https://aranstorage.blob.core.windows.net/music/Sin%20Rencores.mp3',
        artists: [
            {
                name: 'Marca MP'
            },
            {
                name: 'Marca Registrada'
            }
        ]
    },
    {
        id: '137',
        title: 'Sincerándome',
        URL: 'https://aranstorage.blob.core.windows.net/music/Sincer%C3%A1ndome.mp3',
        artists: [
            {
                name: 'Carlos Rivera'
            }
        ]
    },
    {
        id: '138',
        title: 'Sobran Motivos',
        URL: 'https://aranstorage.blob.core.windows.net/music/Sobran%20Motivos.mp3',
        artists: [
            {
                name: 'Conjunto Rienda Real'
            },
            {
                name: 'La Pocima Norteña'
            }
        ]
    },
    {
        id: '139',
        title: 'Solita (En Vivo)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Solita%20(En%20Vivo).mp3',
        artists: [
            {
                name: 'Lenin Ramírez'
            },
            {
                name: 'Luis R Conriquez'
            }
        ]
    },
    {
        id: '140',
        title: 'Te Amo',
        URL: 'https://aranstorage.blob.core.windows.net/music/Te%20Amo.mp3',
        artists: [
            {
                name: 'Edgardo Nunez'
            }
        ]
    },
    {
        id: '141',
        title: 'Te Invito a Ser Feliz',
        URL: 'https://aranstorage.blob.core.windows.net/music/Te%20Invito%20a%20Ser%20Feliz.mp3',
        artists: [
            {
                name: 'Edén Muñoz'
            }
        ]
    },
    {
        id: '142',
        title: 'Te Vale Madre',
        URL: 'https://aranstorage.blob.core.windows.net/music/Te%20Vale%20Madre.mp3',
        artists: [
            {
                name: 'Matisse'
            },
            {
                name: 'Edén Muñoz'
            }
        ]
    },
    {
        id: '143',
        title: 'Tronando Ligas',
        URL: 'https://aranstorage.blob.core.windows.net/music/Tronando%20Ligas.mp3',
        artists: [
            {
                name: 'Grupo Firme'
            },
            {
                name: 'Junior H'
            }
        ]
    },
    {
        id: '144',
        title: 'Tu Me Enseñaste',
        URL: 'https://aranstorage.blob.core.windows.net/music/Tu%20Me%20Ense%C3%B1aste.mp3',
        artists: [
            {
                name: 'Grupo Marca Registrada'
            },
            {
                name: 'Edén Muñoz'
            }
        ]
    },
    {
        id: '145',
        title: 'Tú y Tú',
        URL: 'https://aranstorage.blob.core.windows.net/music/T%C3%BA%20y%20T%C3%BA.mp3',
        artists: [
            {
                name: 'Los Angeles Azules'
            },
            {
                name: 'Cazzu'
            },
            {
                name: 'Santa Fe Klan'
            }
        ]
    },
    {
        id: '146',
        title: 'Un Amor Como Este',
        URL: 'https://aranstorage.blob.core.windows.net/music/Un%20Amor%20Como%20Este.mp3',
        artists: [
            {
                name: 'Grupo Firme'
            },
            {
                name: 'Luis R Conriquez'
            }
        ]
    },
    {
        id: '147',
        title: 'Un Chingo de Tequila',
        URL: 'https://aranstorage.blob.core.windows.net/music/Un%20Chingo%20de%20Tequila.mp3',
        artists: [
            {
                name: 'Banda MS'
            },
            {
                name: 'Mario Domm'
            }
        ]
    },
    {
        id: '148',
        title: 'Un Viaje a Todas Partes',
        URL: 'https://aranstorage.blob.core.windows.net/music/Un%20Viaje%20a%20Todas%20Partes.mp3',
        artists: [
            {
                name: 'Carlos Rivera'
            },
            {
                name: 'Melissa Robles'
            }
        ]
    },
    {
        id: '149',
        title: 'Una 45',
        URL: 'https://aranstorage.blob.core.windows.net/music/Una%2045.mp3',
        artists: [
            {
                name: 'Dan Sanchez'
            },
            {
                name: 'Natanael Cano'
            }
        ]
    },
    {
        id: '150',
        title: 'Uno mas Uno Igual a Zero',
        URL: 'https://aranstorage.blob.core.windows.net/music/Uno%20mas%20Uno%20Igual%20a%20Zero.mp3',
        artists: [
            {
                name: 'Abraham Vazquez'
            },
            {
                name: 'Tony Aguirre'
            }
        ]
    },
    {
        id: '151',
        title: 'Ya Corazón',
        URL: 'https://aranstorage.blob.core.windows.net/music/Ya%20Coraz%C3%B3n.mp3',
        artists: [
            {
                name: 'Gabito Ballesteros'
            },
            {
                name: 'Junior H'
            }
        ]
    },
    {
        id: '152',
        title: 'AGUARDIENTE',
        URL: 'https://aranstorage.blob.core.windows.net/music/AGUARDIENTE.mp3',
        artists: [
            {
                name: 'Myke Towers'
            }
        ]
    },
    {
        id: '153',
        title: 'BESO',
        URL: 'https://aranstorage.blob.core.windows.net/music/BESO.mp3',
        artists: [
            {
                name: 'ROSALÍA'
            },
            {
                name: 'Rauw Alejandro'
            }
        ]
    },
    {
        id: '154',
        title: 'Besos Moja2',
        URL: 'https://aranstorage.blob.core.windows.net/music/Besos%20Moja2.mp3',
        artists: [
            {
                name: 'Wisin & Yandel'
            },
            {
                name: 'ROSALÍA'
            }
        ]
    },
    {
        id: '155',
        title: 'CHORRITO PA LAS ANIMAS',
        URL: 'https://aranstorage.blob.core.windows.net/music/CHORRITO%20PA%20LAS%20ANIMAS.mp3',
        artists: [
            {
                name: 'Feid'
            }
        ]
    },
    {
        id: '156',
        title: 'Classy 101',
        URL: 'https://aranstorage.blob.core.windows.net/music/Classy%20101.mp3',
        artists: [
            {
                name: 'Feid'
            },
            {
                name: 'Young Miko'
            }
        ]
    },
    {
        id: '157',
        title: 'Cuerpecito',
        URL: 'https://aranstorage.blob.core.windows.net/music/Cuerpecito.mp3',
        artists: [
            {
                name: 'Jhayco'
            }
        ]
    },
    {
        id: '158',
        title: 'Diablo, Qué Chimba',
        URL: 'https://aranstorage.blob.core.windows.net/music/Diablo,%20Qu%C3%A9%20Chimba.mp3',
        artists: [
            {
                name: 'Maluma'
            },
            {
                name: 'Anuel AA'
            }
        ]
    },
    {
        id: '159',
        title: 'Dile',
        URL: 'https://aranstorage.blob.core.windows.net/music/Dile.mp3',
        artists: [
            {
                name: 'Don Omar'
            }
        ]
    },
    {
        id: '160',
        title: 'Donde?',
        URL: 'https://aranstorage.blob.core.windows.net/music/Donde_.mp3',
        artists: [
            {
                name: 'Jere Klein'
            },
            {
                name: 'Fran C'
            }
        ]
    },
    {
        id: '161',
        title: 'Ella Y Yo (Featuring Don Omar)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Ella%20Y%20Yo%20(Featuring%20Don%20Omar).mp3',
        artists: [
            {
                name: 'Aventura'
            },
            {
                name: 'Don Omar'
            }
        ]
    },
    {
        id: '162',
        title: 'Es un Secreto',
        URL: 'https://aranstorage.blob.core.windows.net/music/Es%20un%20Secreto.mp3',
        artists: [
            {
                name: 'Plan B'
            }
        ]
    },
    {
        id: '163',
        title: 'Feliz Cumpleaños Ferxxo',
        URL: 'https://aranstorage.blob.core.windows.net/music/Feliz%20Cumplea%C3%B1os%20Ferxxo.mp3',
        artists: [
            {
                name: 'Feid'
            }
        ]
    },
    {
        id: '164',
        title: 'Foto En Panty',
        URL: 'https://aranstorage.blob.core.windows.net/music/Foto%20En%20Panty.mp3',
        artists: [
            {
                name: 'Sech'
            }
        ]
    },
    {
        id: '165',
        title: 'Gato de Noche',
        URL: 'https://aranstorage.blob.core.windows.net/music/Gato%20de%20Noche.mp3',
        artists: [
            {
                name: 'Ñengo Flow'
            },
            {
                name: 'Bad Bunny'
            }
        ]
    },
    {
        id: '166',
        title: 'Hasta Que Dios Diga',
        URL: 'https://aranstorage.blob.core.windows.net/music/Hasta%20Que%20Dios%20Diga.mp3',
        artists: [
            {
                name: 'Anuel AA'
            },
            {
                name: 'Bad Bunny'
            }
        ]
    },
    {
        id: '167',
        title: 'Hey Mor',
        URL: 'https://aranstorage.blob.core.windows.net/music/Hey%20Mor.mp3',
        artists: [
            {
                name: 'Ozuna'
            },
            {
                name: 'Feid'
            }
        ]
    },
    {
        id: '168',
        title: 'LA INOCENTE',
        URL: 'https://aranstorage.blob.core.windows.net/music/LA%20INOCENTE.mp3',
        artists: [
            {
                name: 'Mora'
            },
            {
                name: 'Feid'
            }
        ]
    },
    {
        id: '169',
        title: 'La Llevo Al Cielo',
        URL: 'https://aranstorage.blob.core.windows.net/music/La%20Llevo%20Al%20Cielo.mp3',
        artists: [
            {
                name: 'Chris Jedi'
            },
            {
                name: 'Anuel AA'
            },
            {
                name: 'Chencho'
            },
            {
                name: 'Ñengo Flow'
            }
        ]
    },
    {
        id: '170',
        title: 'La Pregunta',
        URL: 'https://aranstorage.blob.core.windows.net/music/La%20Pregunta.mp3',
        artists: [
            {
                name: 'J Alvarez'
            }
        ]
    },
    {
        id: '171',
        title: 'Lo Que Pasó, Pasó',
        URL: 'https://aranstorage.blob.core.windows.net/music/Lo%20Que%20Pas%C3%B3,%20Pas%C3%B3.mp3',
        artists: [
            {
                name: 'Daddy Yankee'
            }
        ]
    },
    {
        id: '172',
        title: 'LOKERA',
        URL: 'https://aranstorage.blob.core.windows.net/music/LOKERA.mp3',
        artists: [
            {
                name: 'Rauw Alejandro'
            },
            {
                name: 'Lyanno'
            },
            {
                name: 'Brray'
            }
        ]
    },
    {
        id: '173',
        title: 'Mas Rica Que Ayer',
        URL: 'https://aranstorage.blob.core.windows.net/music/Mas%20Rica%20Que%20Ayer.mp3',
        artists: [
            {
                name: 'Anuel AA'
            },
            {
                name: 'Mambo Kingz'
            },
            {
                name: 'Dj Luian'
            }
        ]
    },
    {
        id: '174',
        title: 'MI DROGA',
        URL: 'https://aranstorage.blob.core.windows.net/music/MI%20DROGA.mp3',
        artists: [
            {
                name: 'Mike Towers'
            }
        ]
    },
    {
        id: '175',
        title: 'Mi Gata (Remix)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Mi%20Gata%20(Remix).mp3',
        artists: [
            {
                name: 'Standly'
            },
            {
                name: 'El Barto'
            },
            {
                name: 'Blessd'
            }
        ]
    },
    {
        id: '176',
        title: 'Mini Mini',
        URL: 'https://aranstorage.blob.core.windows.net/music/Mini%20Mini.mp3',
        artists: [
            {
                name: 'Punto40'
            },
            {
                name: 'Marcianeke'
            }
        ]
    },
    {
        id: '177',
        title: 'More',
        URL: 'https://aranstorage.blob.core.windows.net/music/More.mp3',
        artists: [
            {
                name: 'Zion'
            },
            {
                name: 'Jory'
            },
            {
                name: 'Ken-Y'
            }
        ]
    },
    {
        id: '178',
        title: 'Normal',
        URL: 'https://aranstorage.blob.core.windows.net/music/Normal.mp3',
        artists: [
            {
                name: 'Feid'
            }
        ]
    },
    {
        id: '179',
        title: 'Pa Que Retozen',
        URL: 'https://aranstorage.blob.core.windows.net/music/Pa%20Que%20Retozen.mp3',
        artists: [
            {
                name: 'Tego Calderón'
            }
        ]
    },
    {
        id: '180',
        title: 'PANTIES Y BRASIERES',
        URL: 'https://aranstorage.blob.core.windows.net/music/PANTIES%20Y%20BRASIERES.mp3',
        artists: [
            {
                name: 'Rauw Alejandro'
            },
            {
                name: 'Daddy Yankee'
            }
        ]
    },
    {
        id: '181',
        title: 'PUNTO G',
        URL: 'https://aranstorage.blob.core.windows.net/music/PUNTO%20G.mp3',
        artists: [
            {
                name: 'Quevedo'
            }
        ]
    },
    {
        id: '182',
        title: 'REMIX EXCLUSIVO',
        URL: 'https://aranstorage.blob.core.windows.net/music/REMIX%20EXCLUSIVO.mp3',
        artists: [
            {
                name: 'Feid'
            }
        ]
    },
    {
        id: '183',
        title: 'SHERATON',
        URL: 'https://aranstorage.blob.core.windows.net/music/SHERATON.mp3',
        artists: [
            {
                name: 'El Jordan 23'
            }
        ]
    },
    {
        id: '184',
        title: 'Tamagotchi',
        URL: 'https://aranstorage.blob.core.windows.net/music/Tamagotchi.mp3',
        artists: [
            {
                name: 'Guntter'
            },
            {
                name: 'Hamlit Shorty'
            }
        ]
    },
    {
        id: '185',
        title: 'VISTA AL MAR',
        URL: 'https://aranstorage.blob.core.windows.net/music/VISTA%20AL%20MAR.mp3',
        artists: [
            {
                name: 'Quevedo'
            }
        ]
    },
    {
        id: '186',
        title: 'WANDA',
        URL: 'https://aranstorage.blob.core.windows.net/music/WANDA.mp3',
        artists: [
            {
                name: 'Quevedo'
            }
        ]
    },
    {
        id: '187',
        title: 'X 1 BESO',
        URL: 'https://aranstorage.blob.core.windows.net/music/X%201%20BESO.mp3',
        artists: [
            {
                name: 'Ryan Castro'
            },
            {
                name: 'De La Ghetto'
            }
        ]
    },
    {
        id: '188',
        title: 'X SI VOLVEMOS',
        URL: 'https://aranstorage.blob.core.windows.net/music/X%20SI%20VOLVEMOS.mp3',
        artists: [
            {
                name: 'Karol G'
            },
            {
                name: 'Romeo Santos'
            }
        ]
    },
    {
        id: '189',
        title: '1Trago',
        URL: 'https://aranstorage.blob.core.windows.net/music/1Trago.mp3',
        artists: [
            {
                name: 'Danna Paola'
            }
        ]
    },
    {
        id: '190',
        title: '911 (En Vivo)',
        URL: 'https://aranstorage.blob.core.windows.net/music/911%20(En%20Vivo).mp3',
        artists: [
            {
                name: 'Fuerza Regida'
            },
            {
                name: 'Grupo Frontera'
            }
        ]
    },
    {
        id: '191',
        title: 'Arcángel: Bzrp Music Sessions, Vol. 54',
        URL: 'https://aranstorage.blob.core.windows.net/music/Arc%C3%A1ngel_%20Bzrp%20Music%20Sessions,%20Vol.%2054.mp3',
        artists: [
            {
                name: 'Bizarrap'
            },
            {
                name: 'Arcangel'
            }
        ]
    },
    {
        id: '192',
        title: 'Coco Chanel',
        URL: 'https://aranstorage.blob.core.windows.net/music/Coco%20Chanel.mp3',
        artists: [
            {
                name: 'Eladio Carrión'
            },
            {
                name: 'Bad Bunny'
            }
        ]
    },
    {
        id: '193',
        title: 'Cupido',
        URL: 'https://aranstorage.blob.core.windows.net/music/Cupido.mp3',
        artists: [
            {
                name: 'TINI'
            }
        ]
    },
    {
        id: '194',
        title: 'Die For You (Remix)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Die%20For%20You%20(Remix).mp3',
        artists: [
            {
                name: 'The Weekend'
            },
            {
                name: 'Ariana Grande'
            }
        ]
    },
    {
        id: '195',
        title: 'El Gordo Trae El Mando',
        URL: 'https://aranstorage.blob.core.windows.net/music/El%20Gordo%20Trae%20El%20Mando.mp3',
        artists: [
            {
                name: 'The Weekend'
            },
            {
                name: 'Ariana Grande'
            }
        ]
    },
    {
        id: '196',
        title: 'EL HECHIZO',
        URL: 'https://aranstorage.blob.core.windows.net/music/EL%20HECHIZO.mp3',
        artists: [
            {
                name: 'Ovy On The Drums'
            },
            {
                name: 'Peso Pluma'
            }
        ]
    },
    {
        id: '197',
        title: 'El Merengue',
        URL: 'https://aranstorage.blob.core.windows.net/music/El%20Merengue.mp3',
        artists: [
            {
                name: 'Marshmello'
            },
            {
                name: 'Manuel Turizo'
            }
        ]
    },
    {
        id: '198',
        title: 'El Tsurito',
        URL: 'https://aranstorage.blob.core.windows.net/music/El%20Tsurito.mp3',
        artists: [
            {
                name: 'Junior H'
            },
            {
                name: 'Peso Pluma'
            }
        ]
    },
    {
        id: '199',
        title: 'Frágil',
        URL: 'https://aranstorage.blob.core.windows.net/music/Fr%C3%A1gil.mp3',
        artists: [
            {
                name: 'Yahritza Y Su Esencia'
            },
            {
                name: 'Grupo Frontera'
            }
        ]
    },
    {
        id: '200',
        title: 'Lisa',
        URL: 'https://aranstorage.blob.core.windows.net/music/Lisa.mp3',
        artists: [
            {
                name: 'Young Miko'
            }
        ]
    },
    {
        id: '201',
        title: 'lo que hay x aquí',
        URL: 'https://aranstorage.blob.core.windows.net/music/lo%20que%20hay%20x%20aqu%C3%AD.mp3',
        artists: [
            {
                name: 'Rels B'
            }
        ]
    },
    {
        id: '202',
        title: 'Los Collares',
        URL: 'https://aranstorage.blob.core.windows.net/music/Los%20Collares.mp3',
        artists: [
            {
                name: 'Óscar Maydon'
            },
            {
                name: 'El Padrinito Toys'
            }
        ]
    },
    {
        id: '203',
        title: 'MERCHO (feat. Nico Valdi)',
        URL: 'https://aranstorage.blob.core.windows.net/music/MERCHO%20(feat.%20Nico%20Valdi).mp3',
        artists: [
            {
                name: 'Lil Cake'
            },
            {
                name: 'Migrantes'
            },
            {
                name: 'Nico Valdi'
            }
        ]
    },
    {
        id: '204',
        title: 'MIENTRAS ME CURO DEL CORA',
        URL: 'https://aranstorage.blob.core.windows.net/music/MIENTRAS%20ME%20CURO%20DEL%20CORA.mp3',
        artists: [
            {
                name: 'Karol G'
            }
        ]
    },
    {
        id: '205',
        title: 'Rara Vez',
        URL: 'https://aranstorage.blob.core.windows.net/music/Rara%20Vez.mp3',
        artists: [
            {
                name: 'Taui'
            },
            {
                name: 'Milo j'
            }
        ]
    },
    {
        id: '206',
        title: 'Tormenta (feat. Bad Bunny)',
        URL: 'https://aranstorage.blob.core.windows.net/music/Tormenta%20(feat.%20Bad%20Bunny).mp3',
        artists: [
            {
                name: 'Gorillaz'
            },
            {
                name: 'Bad Bunny'
            }
        ]
    },
]

export default tracks;