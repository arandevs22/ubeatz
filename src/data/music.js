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
                name: 'Raw Alejandro'
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
]

export default tracks;