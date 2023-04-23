const tracks = [
    {
        id: 0,
        title: 'Welcome to Ubeatz',
        artists: [
            {
                name: 'Toca Iniciar para reproducir lista'
            }
        ],
        primaryColor: '#232323'
    },
    {
        id: 1,
        title: 'Yandel 150',
        mp3: '10H3IGDyeGhlIBG3T1FVhVvqIkyZxdsAU',
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
        mp3: '1sgsXbxYOKvK7a8JczXldnQfvkeGKUpxm',
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
        title: 'RUMBATON',
        mp3: '1BjRNft9ZWDpwSu2Q5zknS8XV44bbkA_E',
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
        mp3: '1BWFRUO3A00O7nkZ3gXJJ8whvK4yeRPY4',
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
        mp3: '1O38-yms7Brwkev-NtrXIR5tZ50dFIscK',
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
        mp3: '1pv90zVyXx1p90cYYsIFijTUKJXEf-FYE',
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
        mp3: '1A_OFmKVd9ybdkNOz0BTJbCxqlXwz27Uc',
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
        mp3: '1ALP3a4lZc18GK91GamUgs2thsyj3tERV',
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
        mp3: '1Yr3RxALmTeB4qoPSmmy07AnO5buq-xZu',
        artists: [
            {
                name: 'ROSALÍA'
            },
        ],
        primaryColor: '#0c89cc'
    },
    {
        id: '10',
        title: 'Shakira Bzrp Music Sessions, Vol. 53',
        mp3: '18s25WSACFkZt58kcuwoAwfOPpiL-ZoMd',
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
        mp3: '1sLW_8mrZ6x85y9mbA5CxMgNRG_KfHSn9',
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
        mp3: '1qEUMPXtOe7oLmFeQm5aE7j_2uC7VtDgc',
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
        mp3: '1_2J6pqWz4XOkB2d2U1XmxrREadETgI5X',
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
        mp3: '1o4jKVTz5JOMFSAr-mflKw1nwzxeB5IYa',
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
        mp3: '1TCIC-69WuvX4qi2Vrmfj4jmP31VP61GJ',
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
        mp3: '15JfSsNvKNOFDiTP3XoTVrBvTofDnKZju',
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
        mp3: '1L6R6DmSL8FoRT3cqO-lNbJ03aYXdagNq',
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
        mp3: '1-5-hT-zcmu6kV3Y5kAIG-oRyW8DAiEhn',
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
        mp3: '1Y5HVjRUv9E36j0R6bKBKvkEH9E1dBIkN',
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
        mp3: '1LU6aNvyo_LrhK-URqg7pjcOrA4q0KXKO',
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
        mp3: '1KLMEbUCeTzkK3eOrIcTznE6yE1iQhOzu',
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
        mp3: '1WbQjPHmOs6qOE-Vml2ByhmG_sWwXtXif',
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
        mp3: '1zAnOIb7nK5psxJLffgqoUwX9qFsxwZ81',
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
        mp3: '1QKSl-iJk-BVvtqvxVHWZUKHzKXMbUmhD',
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
        mp3: '1l2jmOSqG291gEQn7UVEtWMRPaQici43v',
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
        mp3: '15ZwC1Xj4BKtPY6ErJ9v4csiy3U8uo_fv',
        artists: [
            {
                name: 'Bad Bunny'
            },
            {
                name: 'ROSALÍA'
            },
        ],
        primaryColor: '#bf3224'
    },
    {
        id: '27',
        title: 'La Romana',
        mp3: '1cmodG9bHnkoFqwNs1PVbv-vK41nAgucq',
        artists: [
            {
                name: 'Bad Bunny'
            },
            {
                name: 'El Alfa'
            },
        ],
        primaryColor: '#1e1e1e'
    },
    {
        id: '28',
        title: 'Loco Contigo',
        mp3: '17Mn1FKHUfd90MJwFOwS5aW_VaC6l2gSx',
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
        ],
        primaryColor: '#134b96'
    },
    {
        id: '29',
        title: 'MAMIII',
        mp3: '1BLK3Y8YKrkd7NtQuMHxqz5UQ4nOQq6rs',
        artists: [
            {
                name: 'Becky G'
            },
            {
                name: 'Karol G'
            },
        ],
        primaryColor: '#7685a4'
    },
    {
        id: '30',
        title: 'Monotonía',
        mp3: '1LXIQf47VCf0WIVTCCNVCHT1j8XOiNnrv',
        artists: [
            {
                name: 'Shakira'
            },
            {
                name: 'Ozuna'
            },
        ],
        primaryColor: '#9f9f9f'
    },
    {
        id: '31',
        title: 'Moscow Mule',
        mp3: '1xVtr3vfxZqRZhipPmJ8g5D1YU14yVIvt',
        artists: [
            {
                name: 'Bad Bunny'
            },
        ],
        primaryColor: '#df1707'
    },
    {
        id: '32',
        title: 'OJALÁ',
        mp3: '1P_eLtpGDJ5fRaslQqFkTQ52JKm8_wWN8',
        artists: [
            {
                name: 'Maria Becerra'
            },
        ],
        primaryColor: '#1b212f'
    },
    {
        id: '33',
        title: 'Ojitos Lindos',
        mp3: '1YS7yMmOPhkR3PwoxFUEcUa2CchEXXDA9',
        artists: [
            {
                name: 'Bad Bunny'
            },
            {
                name: 'Bomba Estéreo'
            }
        ],
        primaryColor: '#df1707'
    },
    {
        id: '34',
        title: 'Pegao',
        mp3: '1FRMJlx2CbnPrlbHCXNlOqw7v60LpXJvE',
        artists: [
            {
                name: 'Camilo'
            }
        ],
        primaryColor: '#6f500b'
    },
    {
        id: '35',
        title: 'Pepas',
        mp3: '1TpwD7o3w6UiM69WnsS7MbA6gJh6Te9y9',
        artists: [
            {
                name: 'Farruko'
            }
        ],
        primaryColor: '#fce702'
    },
    {
        id: '36',
        title: 'Perdóname',
        mp3: '1ujkHBXlwTib9F1VMQCUcA8gDyizSUKPS',
        artists: [
            {
                name: 'La Factoria'
            },
            {
                name: 'Eddy Lover'
            }
        ],
        primaryColor: '#f7f3f0'
    },
    {
        id: '37',
        title: 'PUNTO 40',
        mp3: '19W6R9DI-iAPNkZ-0471KXeQhjAt51M3C',
        artists: [
            {
                name: 'Rauw Alejandro'
            },
            {
                name: 'Baby Rasta'
            }
        ],
        primaryColor: '#4f938a'
    },
    {
        id: '38',
        title: 'Qué Más Pues?',
        mp3: '1CGFICJJlcFGahmhHO3RBfELLtSW4vrXI',
        artists: [
            {
                name: 'J Balvin'
            },
            {
                name: 'Maria Becerra'
            }
        ],
        primaryColor: '#b8a44c'
    },
    {
        id: '39',
        title: 'Quevedo: Bzrp Music Sessions, Vol. 52',
        mp3: '1H583_sBehFTFiHw5--HDsSZj6N4MxEka',
        artists: [
            {
                name: 'Bizarrap'
            },
            {
                name: 'Quevedo'
            }
        ],
        primaryColor: '#7c7c7c'
    },
    {
        id: '40',
        title: 'Rakata',
        mp3: '1q5sCnk5sE5cH-o2729N0CzxjLiv9qfBa',
        artists: [
            {
                name: 'Wisin & Yandel'
            },
        ],
        primaryColor: '#6b1514'
    },
    {
        id: '41',
        title: 'Relación (Remix)',
        mp3: '1WGkrXyWm9Kk-v6f-p18XE8FvLMy2xAJ_',
        artists: [
            {
                name: 'Sech'
            },
            {
                name: 'Daddy Yankee'
            },
        ],
        primaryColor: '#1c2522'
    },
    {
        id: '42',
        title: 'Tacones Rojos',
        mp3: '1l9dxFrtH1No0Z56_w3-3lc9l0-8GyGI4',
        artists: [
            {
                name: 'Sebastian Yatra'
            },
        ],
        primaryColor: '#e82d30'
    },
    {
        id: '43',
        title: 'Taki Taki',
        mp3: '1bQIu1cAYMiWnl1daoq86IRMLgkrdfJza',
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
        ],
        primaryColor: '#1661ad'
    },
    {
        id: '44',
        title: 'Te Felicito',
        mp3: '1ZxCJfUoAZMFXDSl9TrBM0dpKo_3yeDZe',
        artists: [
            {
                name: 'Shakira'
            },
            {
                name: 'Rauw Alejandro'
            }
        ],
        primaryColor: '#8b4782'
    },
    {
        id: '45',
        title: 'Tití Me Preguntó',
        mp3: '1zd-YGeEzqPPwXG0Shj3S2t8f1n09wlME',
        artists: [
            {
                name: 'Bad Bunny'
            }
        ],
        primaryColor: '#df1707'
    },
    {
        id: '46',
        title: 'Todo De Ti',
        mp3: '11N8l4hFq0vsFjUzTJbQWXZwIyJADlPlg',
        artists: [
            {
                name: 'Rauw Alejandro'
            }
        ],
        primaryColor: '#235b51'
    },
    {
        id: '47',
        title: 'Tú Me Dejaste De Querer',
        mp3: '1hF6cAL0Ct5yqEZ9VHsOXovSDM-M4PYmi',
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
        ],
        primaryColor: '#3d2222'
    },
    {
        id: '48',
        title: 'Una Locura',
        mp3: '1qwi16kQBwffvlEfufnIFPniX_UsAiX1Y',
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
        ],
        primaryColor: '#bae9e5'
    },
    {
        id: '49',
        title: 'Una Noche en Medellín',
        mp3: '15IDVZATRZZI4kTYksytCs8eNxbkfa127',
        artists: [
            {
                name: 'Chris MJ'
            }
        ],
        primaryColor: '#003b3d'
    },
    {
        id: '50',
        title: 'Una Vaina Loca',
        mp3: '1UOr0iqStgeAylVbSJYAKprOlo_doXfR-',
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
        ],
        primaryColor: '#bae140'
    },
    {
        id: '51',
        title: 'Volví',
        mp3: '1x5bs0lG0LLdirp0LZE5ex7mKHLb8m7p0',
        artists: [
            {
                name: 'Aventura'
            },
            {
                name: 'Bad Bunny'
            }
        ],
        primaryColor: '#fb0d0e'
    },
    {
        id: '52',
        title: 'Yonaguni',
        mp3: '17FCP23x_8Y_3pqg3sjl3XfohVsHk-7VD',
        artists: [
            {
                name: 'Bad Bunny'
            }
        ],
        primaryColor: '#e6dfdc'
    },
    {
        id: '53',
        title: 'A La Antigüita',
        mp3: '1jrFpHEtdwgLULYOsCXnUaXUklFy_imga',
        artists: [
            {
                name: 'Calibre 50'
            }
        ],
        primaryColor: '#b0b1ad'
    },
    {
        id: '54',
        title: 'AMG',
        mp3: '1SyqGhX2-iUOwU4dURcNJNURIJsL2UtYH',
        artists: [
            {
                name: 'Natanael Cano'
            },
            {
                name: 'Peso Pluma'
            }
        ],
        primaryColor: '#671e3d'
    },
    {
        id: '55',
        title: 'As It Was',
        mp3: '1CLHmnYztlkJME-TLcTbq9DQeoYz85gVz',
        artists: [
            {
                name: 'Harry Styles'
            }
        ],
        primaryColor: '#caa677'
    },
    {
        id: '56',
        title: 'Bebe Dame',
        mp3: '1FByzdioFTVW47wPL8TT4c7kX1mPPn78T',
        artists: [
            {
                name: 'Fuerza Regida'
            },
            {
                name: 'Grupo Frontera'
            }
        ],
        primaryColor: '#debb95'
    },
    {
        id: '57',
        title: 'Billete Grande',
        mp3: '1fY-T2OLJJ3hQA3Z1JwcgfvsUZO1jFw7D',
        artists: [
            {
                name: 'Fuerza Regida'
            },
            {
                name: 'Edgardo Nuñez'
            }
        ],
        primaryColor: '#ed6c4b'
    },
    {
        id: '58',
        title: 'El Azul',
        mp3: '1FQvMxqGKYZoiOaS2r_yvsreNw1YmxWj8',
        artists: [
            {
                name: 'Junior H'
            },
            {
                name: 'Peso Pluma'
            }
        ],
        primaryColor: '#0a1f5d'
    },
    {
        id: '59',
        title: 'Botella Tras Botella',
        mp3: '16RUdTVYUC1xhsRYuLQxeThu_IJ9RV97',
        artists: [
            {
                name: 'Gera Mx'
            },
            {
                name: 'Christian Nodal'
            }
        ],
        primaryColor: '#729ead'
    },
    {
        id: '60',
        title: 'Ch y la Pizza',
        mp3: '1sX7Sgp_28P3XxJCUZFp-_Ogr4mgh8hyN',
        artists: [
            {
                name: 'Fuerza Regida'
            },
            {
                name: 'Natanael Cano'
            }
        ],
        primaryColor: '#e73135'
    },
    {
        id: '61',
        title: 'Chale',
        mp3: '1c4vSQY8fk7vTi864GRYfYVtCoTB8NtdJ',
        artists: [
            {
                name: 'Edén Muñoz'
            }
        ],
        primaryColor: '#444444'
    },
    {
        id: '62',
        title: 'COLOGNE',
        mp3: '177yesUdLeF5K3AHFI5yO4WCLg-zFLFIF',
        artists: [
            {
                name: 'Junior H'
            },
            {
                name: 'Ovi'
            }
        ],
        primaryColor: '#78612f'
    },
    {
        id: '63',
        title: 'Efecto',
        mp3: '1Yfx5DOextXmwINjc_RXVQ17CZt_xWceF',
        artists: [
            {
                name: 'Bad Bunny'
            },
        ],
        primaryColor: '#df1707'
    },
    {
        id: '64',
        title: 'El Gavilán',
        mp3: '1mNmLgHDCMsR4IBWA2gNHSaZ5drBbk65p',
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
        ],
        primaryColor: '#39336f'
    },
    {
        id: '65',
        title: 'El Hijo Mayor',
        mp3: '1NMhyerIITUwHeE42PgpbNSKoAqXjMbQT',
        artists: [
            {
                name: 'Junior H'
            }
        ],
        primaryColor: '#9f1714'
    },
    {
        id: '66',
        title: 'El Rescate',
        mp3: '1r_8eHk1xgu0vH_heOyznaJ-HU2fbKK_W',
        artists: [
            {
                name: 'Grupo Marca Registrada'
            },
            {
                name: 'Junior H'
            }
        ],
        primaryColor: '#d32814'
    },
    {
        id: '67',
        title: 'El Tóxico',
        mp3: '1wV9-5F5a7wiL3FdC0-dMAOGa36KdNxN0',
        artists: [
            {
                name: 'Grupo Firme'
            },
            {
                name: 'Carin Leon'
            }
        ],
        primaryColor: '#cdc9b1'
    },
    {
        id: '68',
        title: 'Fin de Semana',
        mp3: '1K5R4USIK7aIqD2IyoD6qtc0EF9J0tbD2',
        artists: [
            {
                name: 'Óscar Maydon'
            },
            {
                name: 'Junior H'
            }
        ],
        primaryColor: '#057c3e'
    },
    {
        id: '69',
        title: 'Flowers',
        mp3: '1j3XpC2CWqIxcJDmS2WH9jOAc8hshJ4-4',
        artists: [
            {
                name: 'Miley Cyrus'
            }
        ],
        primaryColor: '#005b84'
    },
    {
        id: '70',
        title: 'Gatita',
        mp3: '1vfmwBmv32JUS4NcPgnL8cXksp_MRE3NR',
        artists: [
            {
                name: 'Bellakath'
            }
        ],
        primaryColor: '#be8514'
    },
    {
        id: '71',
        title: 'JGL',
        mp3: '192ijcUHi76aR_xeThjjK55tYSni-GmP0',
        artists: [
            {
                name: 'La Adictiva'
            },
            {
                name: 'Luis R Conriquez'
            }
        ],
        primaryColor: '#422925'
    },
    {
        id: '72',
        title: 'La Jumpa',
        mp3: '16R6nnEGNk12XkEursVmQ_GL-Rggf4dVE',
        artists: [
            {
                name: 'Arcangel'
            },
            {
                name: 'Bad Bunny'
            }
        ],
        primaryColor: '#c2c3bb'
    },
    {
        id: '73',
        title: 'Los Botones Azules',
        mp3: '1J46-enJnnHHQr1IjCxDAEVprcnLmxUvW',
        artists: [
            {
                name: 'Junior H'
            },
            {
                name: 'Luis R Conriquez'
            }
        ],
        primaryColor: '#568496'
    },
    {
        id: '74',
        title: 'Neverita',
        mp3: '1XhxKN2DAuJ5vK0B7Ftmkouof3_uB6bOO',
        artists: [
            {
                name: 'Bad Bunny'
            }
        ],
        primaryColor: '#df1707'
    },
    {
        id: '75',
        title: 'No Se Va (En Vivo)',
        mp3: '1ici14e7qgerdX4OiiMcPe9COnCfx5HRx',
        artists: [
            {
                name: 'Grupo Frontera'
            }
        ],
        primaryColor: '#000000'
    },
    {
        id: '76',
        title: 'Ojos Marrones',
        mp3: '1VsoIXK0kXFembYh1mUErRjerFucvKp5W',
        artists: [
            {
                name: 'Lasso'
            }
        ],
        primaryColor: '#d1c4aa'
    },
    {
        id: '77',
        title: 'Party',
        mp3: '1PUQtWQvZ0MA4argg3cUwtsnuYMTUQhlI',
        artists: [
            {
                name: 'Bad Bunny'
            },
            {
                name: 'Rauw Alejandro'
            }
        ],
        primaryColor: '#df1707'
    },
    {
        id: '78',
        title: 'Qué Agonía',
        mp3: '1tr2iW5CUk8ckhXyjbAdEtnJxTR6yjKBY',
        artists: [
            {
                name: 'Yuridia'
            },
            {
                name: 'Angela Aguilar'
            }
        ],
        primaryColor: '#934921'
    },
    {
        id: '79',
        title: 'Que Vuelvas',
        mp3: '1xw7AWjW1WVYsotxR9COC01ixxiy9fg0z',
        artists: [
            {
                name: 'Carin Leon'
            },
            {
                name: 'Grupo Frontera'
            }
        ],
        primaryColor: '#846944'
    },
    {
        id: '80',
        title: 'Si Fuera Fácil',
        mp3: '1Zuisra5ChS1kLsCJ0TNDljuGQnluuuQD',
        artists: [
            {
                name: 'Grupo Marca Registrada'
            }
        ],
        primaryColor: '#1e2341'
    },
    {
        id: '81',
        title: 'Si Te Pudiera Mentir',
        mp3: '1T3Sn4Kq1O02dGA7UaeE17ytOjoHyUtZK',
        artists: [
            {
                name: 'Calibre 50'
            }
        ],
        primaryColor: '#f37024'
    },
    {
        id: '82',
        title: 'Siempre Pendientes',
        mp3: '1GB6jt7hTdeZal-dqoss_8zxHhDjWYi8-',
        artists: [
            {
                name: 'Peso Pluma'
            },
            {
                name: 'Luis R Conriquez'
            }
        ],
        primaryColor: '#3d0b0a'
    },
    {
        id: '83',
        title: 'Ya No Somos Ni Seremos',
        mp3: '1FQbldINxdchGSMWxMgjzYCbmc8ds69wy',
        artists: [
            {
                name: 'Christian Nodal'
            }
        ],
        primaryColor: '#9a9899'
    },
    {
        id: '84',
        title: 'Peaches',
        mp3: '15jmYzrFuWfesBZtEwar1O2Qj3PtpLPBH',
        artists: [
            {
                name: 'Jack Black'
            }
        ],
        primaryColor: '#a506cd'
    },
    {
        id: '85',
        title: '¿Cómo Se Supera',
        mp3: '10OG8SS1YGeKZlmGuOSruXHtGV0-yTGNX',
        artists: [
            {
                name: 'Edén Muñoz'
            },
            {
                name: 'MC Davo'
            }
        ],
        primaryColor: '#98620e'
    },
    {
        id: '86',
        title: 'A Mí Me Gustas Tú',
        mp3: '1scz6LHzxj5g3XLx85IYrk7Xr8SM1LoQD',
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
        ],
        primaryColor: '#2d1756'
    },
    {
        id: '87',
        title: 'Ando Enfocado',
        mp3: '1k4ioF60Bk0eZqQpMUxJcv8TfeuA5jbry',
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
        ],
        primaryColor: '#222222'
    },
    {
        id: '88',
        title: 'Asi Me Encula',
        mp3: '1hYXvxCDWgNxV9vMtH09CRR8gr71nNtpt',
        artists: [
            {
                name: 'Sandro Malandro'
            }
        ],
        primaryColor: '#1b313b'
    },
    {
        id: '89',
        title: 'Bélico y Cholo',
        mp3: '1usqqoLI9UV7MiQkiaF1c6LOPzebuGt6J',
        artists: [
            {
                name: 'Sebastian Esquivel'
            },
            {
                name: 'Yerai R'
            }
        ],
        primaryColor: '#f0262f'
    },
    {
        id: '90',
        title: 'Calidad',
        mp3: '1zHEo7TAAuiJFJ0fvbvDVxLoqi5eSCpXf',
        artists: [
            {
                name: 'Grupo Firme'
            },
            {
                name: 'Luis Mexia'
            }
        ],
        primaryColor: '#c16a13'
    },
    {
        id: '91',
        title: 'Chanel',
        mp3: '1BB8f-GrwH41DxSSZk5ibH0eXYxe7dp2e',
        artists: [
            {
                name: 'Becky G'
            },
            {
                name: 'Peso Pluma'
            }
        ],
        primaryColor: '#bf84bc'
    },
    {
        id: '92',
        title: 'Chorumbo',
        mp3: '1DewqR2Nh8Kj2N1fdpSgGV4c83UOKCSLp',
        artists: [
            {
                name: 'Edicion Especial'
            },
            {
                name: 'Hans el Oso'
            }
        ],
        primaryColor: '#c22cb0'
    },
    {
        id: '93',
        title: 'Consejos Gratis',
        mp3: '1NRMQPYU_u9AcL_QzFs9o5PLOnTR600As',
        artists: [
            {
                name: 'Edén Muñoz'
            }
        ],
        primaryColor: '#4d5c46'
    },
    {
        id: '94',
        title: 'Dame un Beso y Dime Adios (En Vivo)',
        mp3: '1Y1RzdBCd52CMWL6JCqk1bDrrWGoxvMs6',
        artists: [
            {
                name: 'Carin Leon'
            },
            {
                name: 'Grupo Yndio'
            }
        ],
        primaryColor: '#5a1b03'
    },
    {
        id: '95',
        title: 'Dame Un Chance (La Cumbia Bélica)',
        mp3: '11xSlU-Zqluxzgo7iM45xYDLU3eCJSE5c',
        artists: [
            {
                name: 'Luis R Conriquez'
            },
            {
                name: 'Grupo Frontera'
            }
        ],
        primaryColor: '#be3937'
    },
    {
        id: '96',
        title: 'Desvelado',
        mp3: '183nPifAFc3xErSFAloA25D6BZBeqC_DH',
        artists: [
            {
                name: 'Fuerza Regida'
            }
        ],
        primaryColor: '#f2ddb6'
    },
    {
        id: '97',
        title: 'Di Que Si',
        mp3: '1zR0MnVAjgje6CgRm3m9ARPlzpMHB0MDM',
        artists: [
            {
                name: 'Grupo Marca Registrada'
            },
            {
                name: 'Grupo Frontera'
            }
        ],
        primaryColor: '#c6b2a7'
    },
    {
        id: '98',
        title: 'Dijeron Que No La Iba Lograr',
        mp3: '1YiOBDe7J8gAAvWjTi2TfmMZSdocCTnuR',
        artists: [
            {
                name: 'Chinos Pacas'
            },
            {
                name: 'Fuerza Regida'
            }
        ],
        primaryColor: '#1a393e'
    },
    {
        id: '99',
        title: 'Don Chon',
        mp3: '1n02xzvgAraOTQLIzjokOzhiXr6sQyDsd',
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
        ],
        primaryColor: '#09478d'
    },
    {
        id: '100',
        title: 'El Deportivo',
        mp3: '1Aj-spgWKYm0AigUGPqYGJtvO9RYcwwno',
        artists: [
            {
                name: 'Enigma Norteño'
            },
            {
                name: 'Fuerza Regida'
            }
        ],
        primaryColor: '#020ccc'
    },
    {
        id: '101',
        title: 'El lugar correcto',
        mp3: '1aO5vNOPLvJ-5xQ0bh6GROcbI5TjhX51-',
        artists: [
            {
                name: 'Natalia Lafourcade'
            }
        ],
        primaryColor: '#7b7b7b'
    },
    {
        id: '102',
        title: 'Ella Baila Sola',
        mp3: '1YqqslzK9juGErA975mp8RAIUMidgNNB_',
        artists: [
            {
                name: 'Eslabon Armado'
            },
            {
                name: 'Peso Pluma'
            }
        ],
        primaryColor: '#0b0b14'
    },
    {
        id: '103',
        title: 'En Paris',
        mp3: '1zZ17WChqEM94wP1BK1fK8HrszQjodlaF',
        artists: [
            {
                name: 'El Chachito'
            },
            {
                name: 'Junior H'
            }
        ],
        primaryColor: '#262621'
    },
    {
        id: '104',
        title: 'Eres Ese Algo',
        mp3: '1ou_wYTbtrNmm1QZNMxpv7Q5BCLyNMSp-',
        artists: [
            {
                name: 'La Maquinaria Norteña'
            }
        ],
        primaryColor: '#f0f8fa'
    },
    {
        id: '105',
        title: 'Fuentes De Ortiz',
        mp3: '1iylOuvdVjmeCtrCMINn6Gd7c1vu2POc8',
        artists: [
            {
                name: 'Julión Alvarez'
            }
        ],
        primaryColor: '#5a8ac1'
    },
    {
        id: '106',
        title: 'Gente Corriente',
        mp3: '1FC0c2J_rzitHkltrW4eplE-1Ed3QMQYk',
        artists: [
            {
                name: 'La Adictiva'
            }
        ],
        primaryColor: '#39271b'
    },
    {
        id: '107',
        title: 'Hoy la Vi Con Él (En Vivo)',
        mp3: '17rlPNCnuwVRBGoKcdSjG6kQ4N9lQYcCS',
        artists: [
            {
                name: 'Virlán García'
            }
        ],
        primaryColor: '#7d2522'
    },
    {
        id: '108',
        title: 'Inexperto En Olvidarte',
        mp3: '1EvBteThQZmTWISyXx5Yd50L2SW6gF6zg',
        artists: [
            {
                name: 'Alejandro Fernandez'
            }
        ],
        primaryColor: '#e5cfad'
    },
    {
        id: '109',
        title: 'Infieles',
        mp3: '1XQGVD7-j8A6akL-wBtsDnVA72S1wwFw_',
        artists: [
            {
                name: 'Kim Loaiza'
            }
        ],
        primaryColor: '#222322'
    },
    {
        id: '110',
        title: 'La Bebe (Remix)',
        mp3: '1uAl4BNAzDvwwPFZEgWHuwWzXXW3a24EV',
        artists: [
            {
                name: 'Yng Lvcas'
            },
            {
                name: 'Peso Pluma'
            }
        ],
        primaryColor: '#bebfb7'
    },
    {
        id: '111',
        title: 'La Bolsa Gucci',
        mp3: '1d3UzyPYHLuo69UVrcLW3G_zddLoKJibY',
        artists: [
            {
                name: 'Miguel Cornejo'
            },
            {
                name: 'Gabito Ballesteros'
            }
        ],
        primaryColor: '#7f090a'
    },
    {
        id: '112',
        title: 'La Niña del Volcán (Polocorp Remix)',
        mp3: '1_b3tusPBIlcA63qPms8f597OSeKRe6Ho',
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
        ],
        primaryColor: '#272919'
    },
    {
        id: '113',
        title: 'La Octava Maravilla (En Vivo)',
        mp3: '139yPQc43S0-Ml3odkGeZp3tqC6NUaDAL',
        artists: [
            {
                name: 'Alfredo Montaño'
            }
        ],
        primaryColor: '#006056'
    },
    {
        id: '114',
        title: 'LUNA',
        mp3: '1A8q2RbOTW_iumnwOf5V4J7rLUg4rsZ1B',
        artists: [
            {
                name: 'Jd Pantoja'
            },
            {
                name: 'Kim Loaiza'
            }
        ],
        primaryColor: '#4b7379'
    },
    {
        id: '115',
        title: 'Malas Decisiones',
        mp3: '1bRHzdNMhYVGIMqSc9cz5ApnVMv-vQ-Fr',
        artists: [
            {
                name: 'Kenia Os'
            }
        ],
        primaryColor: '#9b3d3d'
    },
    {
        id: '116',
        title: 'Mamita Santa',
        mp3: '1_0gYuhNQZStxrnUnxOLJ1bGwQOnb81e4',
        artists: [
            {
                name: 'Porter'
            },
            {
                name: 'Ximena Sarinana'
            }
        ],
        primaryColor: '#2d5378'
    },
    {
        id: '117',
        title: 'Máscara de Niña',
        mp3: '1tQ0ubJnnQoiiUJWySl10NVH6ly2UjD5S',
        artists: [
            {
                name: 'Valgur'
            }
        ],
        primaryColor: '#fba4a9'
    },
    {
        id: '118',
        title: 'Me Dejé Ir Con Todo',
        mp3: '1CGPJMWKQaTCcTCg4kh_1LLhyQ_pb7aO6',
        artists: [
            {
                name: 'Banda MS de Sergio Lizárraga'
            }
        ],
        primaryColor: '#e4e8e9'
    },
    {
        id: '119',
        title: 'Mientes Tan Bien',
        mp3: '1QVEvkYuQFAgUJPJFrIUxpwJUw6j5-V1W',
        artists: [
            {
                name: 'Edén Muñoz'
            }
        ],
        primaryColor: '#373E37'
    },
    {
        id: '120',
        title: 'Mil Maneras De Morir',
        mp3: '1QSwIihJn-AvhN7OgyZRrimxPKt96iE7_',
        artists: [
            {
                name: 'Carin Leon'
            },
            {
                name: 'Kakalo'
            }
        ],
        primaryColor: '#B43C35'
    },
    {
        id: '121',
        title: 'No Es Por Acá',
        mp3: '1RTDVHyz1AYBzwLbnmCNof7_nUoPqQd2p',
        artists: [
            {
                name: 'Carin Leon'
            }
        ],
        primaryColor: '#B19155'
    },
    {
        id: '122',
        title: 'No Se Vuelve A Repetir',
        mp3: '1y1gzXyrBqDjL1HVWdnlAvQASbiDMdGjY',
        artists: [
            {
                name: 'Intocable'
            }
        ],
        primaryColor: '#01445E'
    },
    {
        id: '123',
        title: 'Nunca Tristes (Me Vale Madre)',
        mp3: '1J4rE7S6ysgS1A5ShMxUw6dRvxZeUVoXC',
        artists: [
            {
                name: 'RENEE'
            }
        ],
        primaryColor: '#F04F23'
    },
    {
        id: '124',
        title: 'Para No Verte Más',
        mp3: '1Fgqbq0wTtcMq_Pss-Kw_Mx9SRB7vu8tJ',
        artists: [
            {
                name: 'Thalia'
            },
            {
                name: 'Kenia Os'
            }
        ],
        primaryColor: '#4C2B82'
    },
    {
        id: '125',
        title: 'Pedazo De Tonto',
        mp3: '1HinIP8PLiMT6iy-iVB1zG0MIj_5Ic8zY',
        artists: [
            {
                name: 'Carin Leon'
            },
            {
                name: 'Luis Mexia'
            }
        ],
        primaryColor: '#DDB84B'
    },
    {
        id: '126',
        title: 'Por Clave Caiman',
        mp3: '14lgivbTw-lXtOVKBT4WE9tciQucFxe1R',
        artists: [
            {
                name: 'LEGADO 7'
            },
            {
                name: 'Tomas Ballardo'
            }
        ],
        primaryColor: '#D50D2A'
    },
    {
        id: '127',
        title: 'Por el Resto de Tu Vida',
        mp3: '142Y226pFrTGSAUkzGaV8h-vLKDHAcnC5',
        artists: [
            {
                name: 'Christian Nodal'
            },
            {
                name: 'TINI'
            }
        ],
        primaryColor: '#999589'
    },
    {
        id: '128',
        title: 'Por las Noches (Remix)',
        mp3: '1857S0p2d6beyY1BJUoNqrxVsHsfir0Kv',
        artists: [
            {
                name: 'Peso Pluma'
            },
            {
                name: 'Nicki Nicole'
            }
        ],
        primaryColor: '#0B5367'
    },
    {
        id: '129',
        title: 'PRC',
        mp3: '1CMma0xAhTrAFxDECa7Y6EC4DgFHzFj9c',
        artists: [
            {
                name: 'Peso Pluma'
            },
            {
                name: 'Natanael Cano'
            }
        ],
        primaryColor: '#8C5B0E'
    },
    {
        id: '130',
        title: 'Puro Campeón',
        mp3: '1imrxHa-4Y6UTmfswB7q1iI_Zy_LX98tn',
        artists: [
            {
                name: 'Grupo Marca Registrada'
            },
            {
                name: 'Luis R Conriquez'
            }
        ],
        primaryColor: '#B28870'
    },
    {
        id: '131',
        title: 'Qué Onda Perdida',
        mp3: '1FBWlk2jbREF4kJBe6Wc8lMORH5jZ4gGV',
        artists: [
            {
                name: 'Gerardo Coronel'
            }
        ],
        primaryColor: '#1B5F71'
    },
    {
        id: '132',
        title: 'S.H.E.A',
        mp3: '1t9nUBExClg00Vdy8KbIIW6Ea0vAWam52',
        artists: [
            {
                name: 'RBD'
            }
        ],
        primaryColor: '#0278B5'
    },
    {
        id: '133',
        title: 'sanvalentín_(',
        mp3: '1VNL_loouJqjXswzWYHhwZAdnDy2OFMHH',
        artists: [
            {
                name: 'Humbe'
            }
        ],
        primaryColor: '#494923'
    },
    {
        id: '134',
        title: 'Se Me Soltó El Hocico',
        mp3: '11r01oQVmG8L4NpDcOwiWRJW2Ly-fkhU0',
        artists: [
            {
                name: 'Los Dos Carnales'
            }
        ],
        primaryColor: '#643858'
    },
    {
        id: '135',
        title: 'Shorty Party',
        mp3: '1BDs1sRKGFlWiLy-4Dijkfp33wYrBMho-',
        artists: [
            {
                name: 'Cartel De Santa'
            },
            {
                name: 'La Kelly'
            }
        ],
        primaryColor: '#D90D09'
    },
    {
        id: '136',
        title: 'Sin Rencores',
        mp3: '1BrJRHuIU3wggpKpV68nOCcchX4Q7G_O7',
        artists: [
            {
                name: 'Marca MP'
            },
            {
                name: 'Marca Registrada'
            }
        ],
        primaryColor: '#FA1D1E'
    },
    {
        id: '137',
        title: 'Sincerándome',
        mp3: '1B8fjQmbHmETZUE2B6JXK-KjyNbx5ZR4V',
        artists: [
            {
                name: 'Carlos Rivera'
            }
        ],
        primaryColor: '#273367'
    },
    {
        id: '138',
        title: 'Sobran Motivos',
        mp3: '1DKlScVgReH4nOwIPJA6aI6bn6BUGhTpD',
        artists: [
            {
                name: 'Conjunto Rienda Real'
            },
            {
                name: 'La Pocima Norteña'
            }
        ],
        primaryColor: '#9D4E26'
    },
    {
        id: '139',
        title: 'Solita (En Vivo)',
        mp3: '1kPkcfTuMP92WLT9YzzziQkq6lBiFmhgz',
        artists: [
            {
                name: 'Lenin Ramírez'
            },
            {
                name: 'Luis R Conriquez'
            }
        ],
        primaryColor: '#334C32'
    },
    {
        id: '140',
        title: 'Te Amo',
        mp3: '1qah2-yLmxUKBVaQm6a4Mo7LKjJI8E9gs',
        artists: [
            {
                name: 'Edgardo Nunez'
            }
        ],
        primaryColor: '#677784'
    },
    {
        id: '141',
        title: 'Te Invito a Ser Feliz',
        mp3: '1quS8ElVAlWmOzmjXYQDnTeYt-ahlypZv',
        artists: [
            {
                name: 'Edén Muñoz'
            }
        ],
        primaryColor: '#F7ECAC'
    },
    {
        id: '142',
        title: 'Te Vale Madre',
        mp3: '1PWmZby9-TLmzH72cpCaxqj_oXNYoMoEl',
        artists: [
            {
                name: 'Matisse'
            },
            {
                name: 'Edén Muñoz'
            }
        ],
        primaryColor: '#8D6A46'
    },
    {
        id: '143',
        title: 'Tronando Ligas',
        mp3: '1xjiNYA5vHiKUSKzLRQefUkcfs4FcaMsO',
        artists: [
            {
                name: 'Grupo Firme'
            },
            {
                name: 'Junior H'
            }
        ],
        primaryColor: '#DD9331'
    },
    {
        id: '144',
        title: 'Tu Me Enseñaste',
        mp3: '1wFyXx-scihzCwGFqXiTsax9_M-3WRz64',
        artists: [
            {
                name: 'Grupo Marca Registrada'
            },
            {
                name: 'Edén Muñoz'
            }
        ],
        primaryColor: '#A06B3F'
    },
    {
        id: '145',
        title: 'Tú y Tú',
        mp3: '1zsr_7MC-ZVDszVCUaN0VSXc2nArPI5YC',
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
        ],
        primaryColor: '#297E8F'
    },
    {
        id: '146',
        title: 'Un Amor Como Este',
        mp3: '1qAUHtPF4bKcJTcxGG441J3ZyIK0ZqZ3M',
        artists: [
            {
                name: 'Grupo Firme'
            },
            {
                name: 'Luis R Conriquez'
            }
        ],
        primaryColor: '#7A6D5C'
    },
    {
        id: '147',
        title: 'Un Chingo de Tequila',
        mp3: '14mrAotQkJJOcbjwYYiFP2x8XpsuTlgLo',
        artists: [
            {
                name: 'Banda MS'
            },
            {
                name: 'Mario Domm'
            }
        ],
        primaryColor: '#AE0B00'
    },
    {
        id: '148',
        title: 'Un Viaje a Todas Partes',
        mp3: '1T7vQD9u-Dkvz8wjrVTfYVA_W9rfkEW3q',
        artists: [
            {
                name: 'Carlos Rivera'
            },
            {
                name: 'Melissa Robles'
            }
        ],
        primaryColor: '#0F949D'
    },
    {
        id: '149',
        title: 'Una 45',
        mp3: '1Z2GNGcL6Sp7EITWVjOEPBXsdZqfwLssQ',
        artists: [
            {
                name: 'Dan Sanchez'
            },
            {
                name: 'Natanael Cano'
            }
        ],
        primaryColor: '#C40B09'
    },
    {
        id: '150',
        title: 'Uno mas Uno Igual a Zero',
        mp3: '1OAsaEACtg7SzB4JRl6lnOE4OeEHwsN1i',
        artists: [
            {
                name: 'Abraham Vazquez'
            },
            {
                name: 'Tony Aguirre'
            }
        ],
        primaryColor: '#BCA26A'
    },
    {
        id: '151',
        title: 'Ya Corazón',
        mp3: '1h1TjM3WzSSj2e2RCyxb-cu6V13igsEbe',
        artists: [
            {
                name: 'Gabito Ballesteros'
            },
            {
                name: 'Junior H'
            }
        ],
        primaryColor: '#7573BF'
    },
    {
        id: '152',
        title: 'AGUARDIENTE',
        mp3: '1kTW_aSMwDvNJlu3WkFln6NA4tWWucj4l',
        artists: [
            {
                name: 'Myke Towers'
            }
        ],
        primaryColor: '#334125'
    },
    {
        id: '153',
        title: 'BESO',
        mp3: '1L2PVbTuZ9-GnqjnGO50uh1oR2yIRoq-d',
        artists: [
            {
                name: 'ROSALÍA'
            },
            {
                name: 'Rauw Alejandro'
            }
        ],
        primaryColor: '#83141B'
    },
    {
        id: '154',
        title: 'Besos Moja2',
        mp3: '1Gif89mdpUv3PL5RItMLAe2Fx-T6cSsIk',
        artists: [
            {
                name: 'Wisin & Yandel'
            },
            {
                name: 'ROSALÍA'
            }
        ],
        primaryColor: '#F00003'
    },
    {
        id: '155',
        title: 'CHORRITO PA LAS ANIMAS',
        mp3: '1EtUtprBfaR6mT9-1PzVVP8vI2jFGKyRy',
        artists: [
            {
                name: 'Feid'
            }
        ],
        primaryColor: '#57A95C'
    },
    {
        id: '156',
        title: 'Classy 101',
        mp3: '14DKW7UQ3ZzfbXooWoLixmmIecfzvaJho',
        artists: [
            {
                name: 'Feid'
            },
            {
                name: 'Young Miko'
            }
        ],
        primaryColor: '#64A041'
    },
    {
        id: '157',
        title: 'Cuerpecito',
        mp3: '1VjMlsJCSItAVHGOFfSasC75FGGnlXSVS',
        artists: [
            {
                name: 'Jhayco'
            }
        ],
        primaryColor: '#EFDCED'
    },
    {
        id: '158',
        title: 'Diablo, Qué Chimba',
        mp3: '1ZEMhB70kSqSZDGXMymAHzTSSTjL0JhlW',
        artists: [
            {
                name: 'Maluma'
            },
            {
                name: 'Anuel AA'
            }
        ],
        primaryColor: '#DE0510'
    },
    {
        id: '159',
        title: 'Dile',
        mp3: '1crEiJNNnRYcoPhF8tUj4lzogRgrHi_Nb',
        artists: [
            {
                name: 'Don Omar'
            }
        ],
        primaryColor: '#2F2624'
    },
    {
        id: '160',
        title: 'Donde?',
        artists: [
            {
                name: 'Jere Klein'
            },
            {
                name: 'Fran C'
            }
        ],
        primaryColor: '#09A5B6'
    },
    {
        id: '161',
        title: 'Ella Y Yo (Featuring Don Omar)',
        mp3: '1MvYcg0Yt9zwM-XZzbDHC_wy1pjgEG6p9',
        artists: [
            {
                name: 'Aventura'
            },
            {
                name: 'Don Omar'
            }
        ],
        primaryColor: '#AEA9A5'
    },
    {
        id: '162',
        title: 'Es un Secreto',
        mp3: '1yKw8CTY73reyRFHm4a9yMiL9sxMO06fF',
        artists: [
            {
                name: 'Plan B'
            }
        ],
        primaryColor: '#5D3033'
    },
    {
        id: '163',
        title: 'Feliz Cumpleaños Ferxxo',
        mp3: '1Zddqek9kbEEJ3H7f4EtHK89X4WgPJahc',
        artists: [
            {
                name: 'Feid'
            }
        ],
        primaryColor: '#00A768'
    },
    {
        id: '164',
        title: 'Foto En Panty',
        mp3: '1zR-FHsGEEVBz3FDbNcMOUWUCEkxTV0fe',
        artists: [
            {
                name: 'Sech'
            }
        ],
        primaryColor: '#56C3EE'
    },
    {
        id: '165',
        title: 'Gato de Noche',
        mp3: '1_nGgxEQYxvrtKMIMA5GnG4uJ6hmCmelD',
        artists: [
            {
                name: 'Ñengo Flow'
            },
            {
                name: 'Bad Bunny'
            }
        ],
        primaryColor: '#262626'
    },
    {
        id: '166',
        title: 'Hasta Que Dios Diga',
        mp3: '19mdk8nIMkbN4t-n6tTH0hnPtA3WKM1ca',
        artists: [
            {
                name: 'Anuel AA'
            },
            {
                name: 'Bad Bunny'
            }
        ],
        primaryColor: '#9D8B7F'
    },
    {
        id: '167',
        title: 'Hey Mor',
        mp3: '1JZtBebZkZlp8oqMiwk35sr2eid7A4Q2u',
        artists: [
            {
                name: 'Ozuna'
            },
            {
                name: 'Feid'
            }
        ],
        primaryColor: '#2B3737'
    },
    {
        id: '168',
        title: 'LA INOCENTE',
        mp3: '1lon7wjxBR5drJM50SCzixShYF6ny_8pO',
        artists: [
            {
                name: 'Mora'
            },
            {
                name: 'Feid'
            }
        ],
        primaryColor: '#D9B1B9'
    },
    {
        id: '169',
        title: 'La Llevo Al Cielo',
        mp3: '17b90CqjXHzw0DmTtFJYGGG6MPWbVrCyh',
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
        ],
        primaryColor: '#D72C72'
    },
    {
        id: '170',
        title: 'La Pregunta',
        mp3: '1Bk7qdQ9zfV76eOdWBfqWKYPkJ0l-MCRu',
        artists: [
            {
                name: 'J Alvarez'
            }
        ],
        primaryColor: '#6B3945'
    },
    {
        id: '171',
        title: 'Lo Que Pasó, Pasó',
        mp3: '1F64xZtVFM63U3PjHgVPv0oCwwnL-Qmrm',
        artists: [
            {
                name: 'Daddy Yankee'
            }
        ],
        primaryColor: '#3E3E3E'
    },
    {
        id: '172',
        title: 'LOKERA',
        mp3: '1LMMNBKX-Kl5ytm4MeENQtMtcUcRoQn7L',
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
        ],
        primaryColor: '#FB60E3'
    },
    {
        id: '173',
        title: 'Mas Rica Que Ayer',
        mp3: '1SuqAx7Ym3iuTZvrLPakJR9wg8-W7ID4g',
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
        ],
        primaryColor: '#DD1E25'
    },
    {
        id: '174',
        title: 'MI DROGA',
        mp3: '1u5OqthIJW1SGT-IU0afTYaWnImtJtoTR',
        artists: [
            {
                name: 'Mike Towers'
            }
        ],
        primaryColor: '#5C8C9E'
    },
    {
        id: '175',
        title: 'Mi Gata (Remix)',
        mp3: '1kMacJ957CZVXaxFoVOBtMqPRL7ovp9O-',
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
        ],
        primaryColor: '#CC0E10'
    },
    {
        id: '176',
        title: 'Mini Mini',
        mp3: '1oS5zFtpSAxIzx8g_b3MSjLXaKit7gW4l',
        artists: [
            {
                name: 'Punto40'
            },
            {
                name: 'Marcianeke'
            }
        ],
        primaryColor: '#017FC6'
    },
    {
        id: '177',
        title: 'More',
        mp3: '1v1ixUYm4wPoksfTkKp3uvyMMCv8RRT6n',
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
        ],
        primaryColor: '#9EA9A1'
    },
    {
        id: '178',
        title: 'Normal',
        mp3: '1W5fZGZdhI8XuxUIXLuHxocgGDy0p1pEN',
        artists: [
            {
                name: 'Feid'
            }
        ],
        primaryColor: '#60BD4D'
    },
    {
        id: '179',
        title: 'Pa Que Retozen',
        mp3: '1kBAAlnYHdIQJXMvzEvibncFijmWUaW4I',
        artists: [
            {
                name: 'Tego Calderón'
            }
        ],
        primaryColor: '#F50101'
    },
    {
        id: '180',
        title: 'PANTIES Y BRASIERES',
        mp3: '1E-unssB3k9kNRpy5cPbTo_BcdcB8mjmx',
        artists: [
            {
                name: 'Rauw Alejandro'
            },
            {
                name: 'Daddy Yankee'
            }
        ],
        primaryColor: '#3A5282'
    },
    {
        id: '181',
        title: 'PUNTO G',
        mp3: '1vYTMCvCjNWsjN9Q9ZfJw8t8kuK-oVolU',
        artists: [
            {
                name: 'Quevedo'
            }
        ],
        primaryColor: '#8559D5'
    },
    {
        id: '182',
        title: 'REMIX EXCLUSIVO',
        mp3: '1K_lya5fvUWNBYfnXF-139mOQYMFSoTvo',
        artists: [
            {
                name: 'Feid'
            }
        ],
        primaryColor: '#07823A'
    },
    {
        id: '183',
        title: 'SHERATON',
        mp3: '1oVT5lUFOhw37dKewwfnDrVMBqPamupjf',
        artists: [
            {
                name: 'El Jordan 23'
            }
        ],
        primaryColor: '#AB0201'
    },
    {
        id: '184',
        title: 'Tamagotchi',
        mp3: '1SdoQz45nI5uG9PVvt2Tu_un44Crx5f3r',
        artists: [
            {
                name: 'Guntter'
            },
            {
                name: 'Hamlit Shorty'
            }
        ],
        primaryColor: '#3A7BB3'
    },
    {
        id: '185',
        title: 'VISTA AL MAR',
        mp3: '1Q1lo6O4vmK49KAG5e4BmMZ_UfQ9qjjIj',
        artists: [
            {
                name: 'Quevedo'
            }
        ],
        primaryColor: '#3D3D3D'
    },
    {
        id: '186',
        title: 'WANDA',
        mp3: '1MS6ByKSCFaH_DLGTk2kBYvQuNzAACIW_',
        artists: [
            {
                name: 'Quevedo'
            }
        ],
        primaryColor: '#2584BA'
    },
    {
        id: '187',
        title: 'X 1 BESO',
        mp3: '13gY_hG8KNpA9SF-NAn3CZUWmY0bkMe0m',
        artists: [
            {
                name: 'Ryan Castro'
            },
            {
                name: 'De La Ghetto'
            }
        ],
        primaryColor: '#BD3A15'
    },
    {
        id: '188',
        title: 'X SI VOLVEMOS',
        mp3: '1-bXroyt9uG3exOVFtVgZAlQXfS8Bxw0l',
        artists: [
            {
                name: 'Karol G'
            },
            {
                name: 'Romeo Santos'
            }
        ],
        primaryColor: '#9E1517'
    },
    {
        id: '189',
        title: '1Trago',
        mp3: '11SNtlUr6F6j0vqmK7ZXvWfRPOo1O7SLq',
        artists: [
            {
                name: 'Danna Paola'
            }
        ],
        primaryColor: '#021821'
    },
    {
        id: '190',
        title: '911 (En Vivo)',
        mp3: '1xLXfz9dxn6yVUwKQRdWWo1yD_mknTU0W',
        artists: [
            {
                name: 'Fuerza Regida'
            },
            {
                name: 'Grupo Frontera'
            }
        ],
        primaryColor: '#854039'
    },
    {
        id: '191',
        title: 'Arcángel Bzrp Music Sessions, Vol. 54',
        mp3: '1iCBvLqtck6Prbk20z2fsmB_wvACIT69f',
        artists: [
            {
                name: 'Bizarrap'
            },
            {
                name: 'Arcangel'
            }
        ],
        primaryColor: '#777777'
    },
    {
        id: '192',
        title: 'Coco Chanel',
        mp3: '1br8lf9WFMP7Kkw6kBrwLPncrXtWW8ZkI',
        artists: [
            {
                name: 'Eladio Carrión'
            },
            {
                name: 'Bad Bunny'
            }
        ],
        primaryColor: '#3C6972'
    },
    {
        id: '193',
        title: 'Cupido',
        mp3: '10zMGKBjP8Ug1LO5jR_nZKNliUJl6l8Sw',
        artists: [
            {
                name: 'TINI'
            }
        ],
        primaryColor: '#DAC7CB'
    },
    {
        id: '194',
        title: 'Die For You (Remix)',
        mp3: '11_HI_Ys85uHkW5WGzDOsX8K8KVglbC1T',
        artists: [
            {
                name: 'The Weekend'
            },
            {
                name: 'Ariana Grande'
            }
        ],
        primaryColor: '#EC0201'
    },
    {
        id: '195',
        title: 'El Gordo Trae El Mando',
        mp3: '1yTnW1MgCXYdUlaDAnM-DQLSZVHwJ_Ti6',
        artists: [
            {
                name: 'Chino Pacas'
            }
        ],
        primaryColor: '#204049'
    },
    {
        id: '196',
        title: 'EL HECHIZO',
        mp3: '1lMJQX1KN1yEE6jqIJonqwLmhEujnOoHK',
        artists: [
            {
                name: 'Ovy On The Drums'
            },
            {
                name: 'Peso Pluma'
            }
        ],
        primaryColor: '#280F51'
    },
    {
        id: '197',
        title: 'El Merengue',
        mp3: '1RKmlwFBJR5AhGy93OlbADgXtKbLjLb_x',
        artists: [
            {
                name: 'Marshmello'
            },
            {
                name: 'Manuel Turizo'
            }
        ],
        primaryColor: '#D0AB7F'
    },
    {
        id: '198',
        title: 'El Tsurito',
        mp3: '1D6WJHYzeNg3c6W8E4N6YxBPBa5vDYDfN',
        artists: [
            {
                name: 'Junior H'
            },
            {
                name: 'Peso Pluma'
            }
        ],
        primaryColor: '#FE9E05'
    },
    {
        id: '199',
        title: 'Frágil',
        mp3: '1B-gpTLlWHilRYbUjRwbb0I3ofbSlEfFO',
        artists: [
            {
                name: 'Yahritza Y Su Esencia'
            },
            {
                name: 'Grupo Frontera'
            }
        ],
        primaryColor: '#764524'
    },
    {
        id: '200',
        title: 'Lisa',
        mp3: '1qjhtRX1wwiJcn9mwjOIWoWYYQH2O4uY5',
        artists: [
            {
                name: 'Young Miko'
            }
        ],
        primaryColor: '#F789A0'
    },
    {
        id: '201',
        title: 'lo que hay x aquí',
        mp3: '1GnUzOGGNFdKGHraQf0cbU4E9YVpgp_Ot',
        artists: [
            {
                name: 'Rels B'
            }
        ],
        primaryColor: '#968B77'
    },
    {
        id: '202',
        title: 'Los Collares',
        mp3: '1GnUzOGGNFdKGHraQf0cbU4E9YVpgp_Ot',
        artists: [
            {
                name: 'Óscar Maydon'
            },
            {
                name: 'El Padrinito Toys'
            }
        ],
        primaryColor: '#2CC4FB'
    },
    {
        id: '203',
        title: 'MERCHO (feat. Nico Valdi)',
        mp3: '16g1xxtcyRNOxyEWZrpPCICAaNvc2hlLf',
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
        ],
        primaryColor: '#8C2C4E'
    },
    {
        id: '204',
        title: 'MIENTRAS ME CURO DEL CORA',
        mp3: '15KodOJF0Uv852CF-7iqb72bffH8T8qOm',
        artists: [
            {
                name: 'Karol G'
            }
        ],
        primaryColor: '#9E151'
    },
    {
        id: '205',
        title: 'Rara Vez',
        mp3: '1N7xNB2ctCl722IsE4jj4ZxJmjjIf-jnI',
        artists: [
            {
                name: 'Taui'
            },
            {
                name: 'Milo j'
            }
        ],
        primaryColor: '#E63A36'
    },
    {
        id: '206',
        title: 'Tormenta (feat. Bad Bunny)',
        mp3: '1-SlfcMezf_85WMMZ7NCvPCQ6i79C2UYL',
        artists: [
            {
                name: 'Gorillaz'
            },
            {
                name: 'Bad Bunny'
            }
        ],
        primaryColor: '#973f6f'
    },
    {
        id: '207',
        title: 'un x100to',
        mp3: '1EKpusHiCKzZoVUj_kwtvkVWcY1X4ruew',
        artists: [
            {
                name: 'Grupo Frontera'
            },
            {
                name: 'Bad Bunny'
            }
        ],
        primaryColor: '#423022'
    },
    {
        id: '208',
        title: '14_20',
        mp3: '1B-kYWoxHP7bIyhYvl2t1Qr8AbA_-jaBt',
        artists: [
            {
                name: 'Ryan Castro'
            },
            {
                name: 'Piso 21'
            }
        ],
        primaryColor: '#FC0017'
    },
    {
        id: '209',
        title: 'Alto Voltaje',
        mp3: '1jNJrViMazle2mKdrt_pGSE_HmdtcDW0z',
        artists: [
            {
                name: 'Samantha Barrón'
            }
        ],
        primaryColor: '#2B2A26'
    },
    {
        id: '210',
        title: 'Bandolera',
        mp3: '1i9gt-7FyOK10Eef7NVzCj_2NIxQRo_yU',
        artists: [
            {
                name: 'Santa Fe Klan'
            },
            {
                name: 'L-Gante'
            },
            {
                name: 'Uzielito Mix'
            }
        ],
        primaryColor: '#E42F2B'
    },
    {
        id: '211',
        title: 'Blades',
        mp3: '1tb5YehxvxpKfxC57ZllvJ95JMa4pZza1',
        artists: [
            {
                name: 'Aldo Parks'
            }
        ],
        primaryColor: '#E42F2B'
    },
    {
        id: '212',
        title: 'Boche',
        mp3: '1n54Hj8RdKv-XQsxgnZDQFoWgXNFwovDg',
        artists: [
            {
                name: 'Ak4:20'
            },
            {
                name: 'Marcianeke'
            }
        ],
        primaryColor: '#490C48'
    },
    {
        id: '213',
        title: 'Chills (LA Hills)',
        mp3: '1DB7r_u4xc8Dbzueoj9jrjUFR3-o5cKkh',
        artists: [
            {
                name: 'Tiësto'
            },
            {
                name: 'A Boogie Wit da Hoodie'
            }
        ],
        primaryColor: '#242426'
    },
    {
        id: '214',
        title: 'De Party En Party',
        mp3: '1WK_2_uHYCVB5ufn6I6Z2pow-8gOxWiy3',
        artists: [
            {
                name: 'Lele Pons'
            },
            {
                name: 'Guaynaa'
            }
        ],
        primaryColor: '#BEBCBD'
    },
    {
        id: '215',
        title: 'El carro Ford',
        mp3: '1v0VRUGXK-dz2m7A9AXU_F-HSOoppM69w',
        artists: [
            {
                name: 'Carlos Vives'
            }
        ],
        primaryColor: '#425F6F'
    },
    {
        id: '216',
        title: 'Feliz Breakup',
        mp3: '10fMOHIHTORzrxNTD4vD1ouWPOBce_pi6',
        artists: [
            {
                name: 'PATY CANTÚ'
            },
            {
                name: 'Ximena Sarinana'
            },
            {
                name: 'zzoilo'
            }
        ],
        primaryColor: '#371318'
    },
    {
        id: '217',
        title: 'Gasolina (feat. Myke Towers) (Safari Riot Remix)',
        mp3: '1Y5HVjRUv9E36j0R6bKBKvkEH9E1dBIkN',
        artists: [
            {
                name: 'Daddy Yankee'
            },
            {
                name: 'Myke Towers'
            }
        ],
        primaryColor: '#464646'
    },
    {
        id: '218',
        title: 'Girasoles',
        mp3: '1lu0OK0edlSfWzUYlSPg1_095wdMLydYS',
        artists: [
            {
                name: 'Irepelusa'
            },
            {
                name: 'Antabaka'
            }
        ],
        primaryColor: '#9B61A5'
    },
    {
        id: '219',
        title: 'Golden',
        mp3: '1x0QJdu4-jzzelapccLOyf03Flj3hHchS',
        artists: [
            {
                name: 'Milky Chance'
            }
        ],
        primaryColor: '#FBD589'
    },
    {
        id: '220',
        title: 'Groove',
        mp3: '1NPZ-_IGO6GmXK8NgWEKsSoWxBEL37bgE',
        artists: [
            {
                name: 'La Firma'
            },
            {
                name: 'Nashy Nashai'
            }
        ],
        primaryColor: '#EE7D25'
    },
    {
        id: '221',
        title: 'Haegeum',
        mp3: '1-bgPE2ATKhbI8BTCBX8gRCWt_vf3OAQX',
        artists: [
            {
                name: 'Agust D'
            }
        ],
        primaryColor: '#444444'
    },
    {
        id: '222',
        title: 'Karma',
        mp3: '1jqL2PZVZu8itBXaQ16FtEIujdCyC5bxE',
        artists: [
            {
                name: 'La Firma'
            },
            {
                name: 'Nashy Nashai'
            }
        ],
        primaryColor: '#EE7D25'
    },
    {
        id: '223',
        title: 'Kitty',
        mp3: '1wInUpipyzB6qpPKN-xnzNKgp70nZKIyC',
        artists: [
            {
                name: 'Kim Loaiza'
            },
            {
                name: 'LIT killah'
            }
        ],
        primaryColor: '#9F049D'
    },
    {
        id: '224',
        title: 'LA FALTA QUE ME HACES',
        mp3: '1_dCFhgx8DHHejMRBWqxGH590IhuhanLk',
        artists: [
            {
                name: 'NATTI NATASHA'
            }
        ],
        primaryColor: '#28449E'
    },
    {
        id: '225',
        title: 'Los Placeres',
        mp3: '1rBZXG5egIWRa4E9oxSbbcn7EtsiVxYVa',
        artists: [
            {
                name: 'Simpson Ahuevo'
            }
        ],
        primaryColor: '#EBD036'
    },
    {
        id: '226',
        title: 'Me EnRD',
        mp3: '199ZEps_J2OZQz2KKjMO1faMG2B7Vkaiv',
        artists: [
            {
                name: 'Prince Royce'
            }
        ],
        primaryColor: '#326D68'
    },
    {
        id: '227',
        title: 'Mejor Así',
        mp3: '12IzJaPtq9Een4A2Gy-Zg-SGr9pnwLmVq',
        artists: [
            {
                name: 'Mario Bautista'
            },
            {
                name: 'Adriel Favela'
            }
        ],
        primaryColor: '#858585'
    },
    {
        id: '228',
        title: 'MI EXXX',
        mp3: '1X45Y0Jn0yW7YqeNXsMh3uLz_wHevSDS_',
        artists: [
            {
                name: 'Wisin'
            },
            {
                name: 'Anuel AA'
            }
        ],
        primaryColor: '#7F0E00'
    },
    {
        id: '229',
        title: 'Nada Es Para Siempre (feat. Nico Valdi)',
        mp3: '1CkhIyOeAF6Lp4wBJSm7L44lCa3SOANYk',
        artists: [
            {
                name: 'MC Davo'
            },
            {
                name: 'Migrantes'
            },
            {
                name: 'Nico Valdi'
            }
        ],
        primaryColor: '#7B3580'
    },
    {
        id: '230',
        title: 'Niña Bonita',
        mp3: '1MWKF3e7G7RDywIP3ac1NF_Xh3I-bRVUx',
        artists: [
            {
                name: 'Feid'
            },
            {
                name: 'Sean Paul'
            }
        ],
        primaryColor: '#499B1E'
    },
    {
        id: '231',
        title: 'No Te La Sabes',
        mp3: '1_a4HbbQRKULZ3t97S4NS4iKViUk_eqqn',
        artists: [
            {
                name: 'Aczino'
            },
            {
                name: 'Millonario'
            }
        ],
        primaryColor: '#716F66'
    },
    {
        id: '232',
        title: 'odiarte',
        mp3: '1t5Uipejn7L-uoBTaamF86IBhL5SEyz2H',
        artists: [
            {
                name: 'Ivana'
            }
        ],
        primaryColor: '#8DE3FE'
    },
    {
        id: '233',
        title: 'Perfecta (Versión 2023)',
        mp3: '1M5MMQkrilVBWjWmU4YEAS6Sd8g1P5rUP',
        artists: [
            {
                name: 'Miranda!'
            },
            {
                name: 'Maria Becerra'
            },
            {
                name: 'FMK'
            }
        ],
        primaryColor: '#5D6B47'
    },
    {
        id: '234',
        title: 'Perro',
        mp3: '1R23DYv1vYigs28Q9MU4_KAOQ61hMj-3W',
        artists: [
            {
                name: 'El Malilla'
            },
            {
                name: 'Sir Speedy'
            },
            {
                name: 'Nando Produce'
            }
        ],
        primaryColor: '#0A1417'
    },
    {
        id: '235',
        title: 'Polvo de Gigantes',
        mp3: '1reIIripf794OzfUy-yCW7WkFnzqMnt5v',
        artists: [
            {
                name: 'Kurt'
            }
        ],
        primaryColor: '#C0C0C0'
    },
    {
        id: '236',
        title: 'qué le pasa conmigo_',
        mp3: '1-9BdngL47xVZp8j6pB4t7pAUVj0gWe78',
        artists: [
            {
                name: 'Nicki Nicole'
            },
            {
                name: 'Rels B'
            }
        ],
        primaryColor: '#23241F'
    },
    {
        id: '237',
        title: 'Romance y Bellakera',
        mp3: '1lyLkjTr3xoyJzk9r7ZlWQ95x2lCgu-YL',
        artists: [
            {
                name: 'Ñengo Flow'
            },
            {
                name: 'Jory Boy'
            },
            {
                name: 'Zion y Lennox'
            }
        ],
        primaryColor: '#E3E3E3'
    },
    {
        id: '238',
        title: 'Rosa Pastel',
        mp3: '1oHIZR9o3c16RCC7v_3bfa6PJoijayWb5',
        artists: [
            {
                name: 'Peso Pluma'
            },
            {
                name: 'Jasiel Nuñez'
            }
        ],
        primaryColor: '#A1345D'
    },
    {
        id: '239',
        title: 'Salida',
        mp3: '1HS7oJYfvN7xZYhup7q6m14v4Bz8bFkom',
        artists: [
            {
                name: 'Rubytates'
            }
        ],
        primaryColor: '#395EB0'
    },
    {
        id: '240',
        title: 'Satellite',
        mp3: '1aOHkJZxue7x2F5mlKT4T6HtIWXq-X3Mm',
        artists: [
            {
                name: 'Bebe Rexha'
            },
            {
                name: 'Snoop Dogg'
            }
        ],
        primaryColor: '#9D7729'
    },
    {
        id: '241',
        title: 'Secuestro De Amor',
        mp3: '1GKeKwdH9TWkYX4rjpK8qNh8FfOIyboPJ',
        artists: [
            {
                name: 'Grupo Firme'
            },
            {
                name: 'Los Tucanes de Tijuana'
            }
        ],
        primaryColor: '#662172'
    },
    {
        id: '242',
        title: 'Todo Fue Por Amor (de la película “Con Esta Luz”)',
        mp3: '18CVOYR3oCk93n-DujxxRUeUaiVVrsAbO',
        artists: [
            {
                name: 'Carla Morrison'
            }
        ],
        primaryColor: '#735452'
    },
    {
        id: '243',
        title: 'TONTA',
        mp3: '1zXTENQqqrFVOe9k2Q9WCFA01CpHGqqow',
        artists: [
            {
                name: 'Nathy Peluso'
            }
        ],
        primaryColor: '#6A4B42'
    },
    {
        id: '244',
        title: 'Tu Amor',
        mp3: '18a4zVCmcrrg3MLRBgsBtOf8cUN53ak9t',
        artists: [
            {
                name: 'La Firma'
            },
            {
                name: 'Rmand'
            }
        ],
        primaryColor: '#EE7D25'
    },
    {
        id: '245',
        title: 'Verano',
        mp3: '1Ac1HNf918vUJgL30lA-GtvpezDnh5ihc',
        artists: [
            {
                name: 'Blessd'
            },
            {
                name: 'Rvssian'
            }
        ],
        primaryColor: '#2E67D0'
    },
    {
        id: '246',
        title: 'Whiskey y Coco (Remix)',
        mp3: '1-8nbEFoh8ZDV6UoiX-ElKcOWXv2amFG5',
        artists: [
            {
                name: 'Justin Quiles'
            },
            {
                name: 'Myke Towers'
            },
            {
                name: 'Ozuna'
            }
        ],
        primaryColor: '#92E6C5'
    },
]

export default tracks;