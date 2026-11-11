export type CategoriaId =
  | 'sem-gluten'
  | 'sem-leite'
  | 'ricas-em-proteinas'
  | 'saudaveis'
  | 'outras-restricoes';

export interface PassoPreparo {
  titulo: string;
  texto: string;
}

export interface Receita {
  slug: string;
  numero: number;
  titulo: string;
  categoria: CategoriaId;
  imagem: string;
  resumo: string;
  tempo: string;
  porcoes: string;
  dificuldade: 'Fácil' | 'Moderada';
  restricao: string;
  tags: string[];
  ingredientes: string[];
  preparo: PassoPreparo[];
  dica: string;
  destaque?: boolean;
}

export interface Categoria {
  id: CategoriaId;
  nome: string;
  subtitulo: string;
  descricao: string;
  icone: 'trigo' | 'leite' | 'proteina' | 'folha' | 'estrela';
  cor: string;
  imagem: string;
}

const IMG = '/manus-storage/async-images';

export const categorias: Categoria[] = [
  {
    id: 'sem-gluten',
    nome: 'Sem Glúten',
    subtitulo: 'Receitas livres de farinha de trigo e seus derivados.',
    descricao:
      'Para quem convive com a doença celíaca ou sensibilidade ao glúten, cada receita aqui usa apenas ingredientes naturalmente livres de trigo, cevada e centeio — com atenção também à contaminação cruzada.',
    icone: 'trigo',
    cor: '#8C6A3F',
    imagem: `${IMG}/RqVyhiA3ekZww7CHtjlECz/image-2.webp`,
  },
  {
    id: 'sem-leite',
    nome: 'Sem Leite',
    subtitulo: 'Receitas sem leite e derivados.',
    descricao:
      'Opções para quem tem alergia à proteína do leite de vaca ou intolerância à lactose. O creme vem da abóbora, o doce vem da banana e o brigadeiro ganha corpo com leite de coco.',
    icone: 'leite',
    cor: '#B0764A',
    imagem: `${IMG}/U2fazjCRY8n4HQhTEfnwi0/image-1.webp`,
  },
  {
    id: 'ricas-em-proteinas',
    nome: 'Ricas em Proteínas',
    subtitulo: 'Mais energia e saciedade para o seu dia.',
    descricao:
      'Combinações que sustentam: ovos, frango, leguminosas e grãos integrais em pratos que ajudam na recuperação muscular e prolongam a saciedade sem pesar.',
    icone: 'proteina',
    cor: '#7C4B33',
    imagem: `${IMG}/U2fazjCRY8n4HQhTEfnwi0/image-3.webp`,
  },
  {
    id: 'saudaveis',
    nome: 'Saudáveis',
    subtitulo: 'Opções leves, nutritivas e cheias de sabor.',
    descricao:
      'Pratos coloridos, com vegetais, frutas e grãos integrais, pensados para o dia a dia: refeições rápidas, leves e que não abrem mão do sabor.',
    icone: 'folha',
    cor: '#4F6B3A',
    imagem: `${IMG}/RC4HmoO87GOIXni5A6oLs4/image-1.webp`,
  },
  {
    id: 'outras-restricoes',
    nome: 'Outras Restrições',
    subtitulo: 'Receitas adaptadas para necessidades específicas.',
    descricao:
      'Adaptações para quem controla o açúcar, segue alimentação vegana ou precisa reduzir gorduras. Cardápio flexível, com substituições simples e honestas.',
    icone: 'estrela',
    cor: '#9A5B44',
    imagem: `${IMG}/ShpPvmW1Rqq5Q7zO94g6mA/image-1.webp`,
  },
];

export const receitas: Receita[] = [
  {
    slug: 'panqueca-de-tapioca-com-frango',
    numero: 1,
    titulo: 'Panqueca de tapioca com frango',
    categoria: 'sem-gluten',
    imagem: `${IMG}/RqVyhiA3ekZww7CHtjlECz/image-2.webp`,
    resumo:
      'Uma panqueca fina de goma de tapioca que dispensa a farinha de trigo e abraça o frango desfiado temperado.',
    tempo: '15 min',
    porcoes: '1 porção',
    dificuldade: 'Fácil',
    restricao: 'Sem glúten',
    tags: ['Sem glúten', 'Rápida', 'Almoço'],
    ingredientes: [
      '1 ovo',
      '2 colheres (sopa) de goma de tapioca hidratada',
      '100 g de frango cozido e desfiado',
      '2 colheres (sopa) de tomate picado',
      '1 colher (sopa) de cheiro-verde',
      'Sal e pimenta-do-reino a gosto',
      '1 fio de azeite para a frigideira',
    ],
    preparo: [
      {
        titulo: 'Tempere o frango',
        texto:
          'Leve o frango desfiado à frigideira com o tomate, o cheiro-verde, sal e pimenta. Aqueça por 3 minutos, só para apurar o sabor. Reserve.',
      },
      {
        titulo: 'Bata a massa',
        texto:
          'Em uma tigela, misture o ovo com a goma de tapioca e uma pitada de sal até formar uma massa homogênea, sem grumos.',
      },
      {
        titulo: 'Doure o disco',
        texto:
          'Aqueça uma frigideira antiaderente em fogo médio com um fio de azeite. Despeje a massa e espalhe em disco fino. Deixe firmar por 2 a 3 minutos, até soltar do fundo.',
      },
      {
        titulo: 'Vire e recheie',
        texto:
          'Vire a panqueca, distribua o frango em metade do disco e dobre ao meio, como um folhado.',
      },
      {
        titulo: 'Sirva quente',
        texto:
          'Deixe mais 1 minuto na frigideira para o recheio aquecer e sirva imediatamente, com uma rodela de limão ao lado.',
      },
    ],
    dica:
      'A goma de tapioca precisa estar hidratada: se estiver seca e esfarelando, borrife água, misture com os dedos e deixe descansar por 10 minutos.',
    destaque: true,
  },
  {
    slug: 'bolinhos-de-batata-com-carne',
    numero: 2,
    titulo: 'Bolinhos de batata com carne',
    categoria: 'sem-gluten',
    imagem: `${IMG}/RqVyhiA3ekZww7CHtjlECz/image-3.webp`,
    resumo:
      'Bolinhos dourados de batata com carne moída temperada: crosta sequinha por fora, maciez por dentro.',
    tempo: '40 min',
    porcoes: '12 bolinhos',
    dificuldade: 'Fácil',
    restricao: 'Sem glúten',
    tags: ['Sem glúten', 'Petisco', 'Forno ou frigideira'],
    ingredientes: [
      '2 batatas médias cozidas e amassadas',
      '150 g de carne moída',
      '½ cebola picada',
      '1 dente de alho amassado',
      '2 colheres (sopa) de salsinha picada',
      'Sal, pimenta-do-reino e páprica a gosto',
      'Azeite para refogar e dourar',
    ],
    preparo: [
      {
        titulo: 'Cozinhe as batatas',
        texto:
          'Cozinhe as batatas em água com uma pitada de sal até ficarem bem macias. Escorra, amasse ainda quentes e reserve.',
      },
      {
        titulo: 'Refogue a carne',
        texto:
          'No azeite, refogue a cebola e o alho. Junte a carne moída e cozinhe até dourar. Tempere com sal, pimenta e páprica e deixe esfriar.',
      },
      {
        titulo: 'Junte tudo',
        texto:
          'Misture a batata amassada com a carne já fria e a salsinha, até a massa dar liga e desgrudar das mãos.',
      },
      {
        titulo: 'Modele os bolinhos',
        texto:
          'Com as mãos levemente úmidas, modele bolinhos do tamanho de uma noz grande, para dourarem por igual.',
      },
      {
        titulo: 'Doure ou asse',
        texto:
          'Doure na frigideira com azeite, em fogo médio, virando para dourar todos os lados — ou asse a 200 °C por 20 a 25 minutos, virando na metade.',
      },
    ],
    dica:
      'Se a massa estiver mole, acrescente 1 colher (sopa) de farinha de arroz — naturalmente sem glúten — e leve à geladeira por 10 minutos antes de modelar.',
  },
  {
    slug: 'bolo-de-fuba',
    numero: 3,
    titulo: 'Bolo de fubá',
    categoria: 'sem-gluten',
    imagem: `${IMG}/RqVyhiA3ekZww7CHtjlECz/image-4.webp`,
    resumo: 'Bolo de fubá fofinho, de crosta dourada e sabor de casa de vó.',
    tempo: '45 min',
    porcoes: '8 fatias',
    dificuldade: 'Fácil',
    restricao: 'Sem glúten',
    tags: ['Sem glúten', 'Café da tarde', 'Assado'],
    ingredientes: [
      '2 ovos',
      '1 xícara de fubá',
      '½ xícara de açúcar',
      '½ xícara de água',
      '¼ xícara de óleo',
      '1 colher (sopa) de fermento em pó',
      '1 pitada de sal',
    ],
    preparo: [
      {
        titulo: 'Prepare o forno',
        texto:
          'Aqueça o forno a 180 °C e unte uma forma média com óleo e um pouco de fubá.',
      },
      {
        titulo: 'Bata os ovos',
        texto:
          'Bata os ovos com o açúcar por 2 a 3 minutos, até a mistura clarear e ficar fofa.',
      },
      {
        titulo: 'Incorpore os líquidos',
        texto:
          'Junte o óleo e a água aos poucos, mexendo sempre, e depois o fubá e o sal. Misture até a massa ficar lisa.',
      },
      {
        titulo: 'Adicione o fermento',
        texto:
          'Por último, acrescente o fermento com movimentos delicados, de baixo para cima, sem bater.',
      },
      {
        titulo: 'Asse',
        texto:
          'Leve ao forno por 30 a 35 minutos, até dourar e o palito sair limpo do centro.',
      },
      {
        titulo: 'Esfrie e desenforme',
        texto:
          'Espere 10 minutos antes de desenformar: o bolo termina de firmar fora do forno.',
      },
    ],
    dica:
      'O fubá não contém glúten, mas confira sempre o rótulo: alguns produtos são moídos em locais que processam trigo.',
  },
  {
    slug: 'pure-de-abobora',
    numero: 4,
    titulo: 'Purê de abóbora',
    categoria: 'sem-leite',
    imagem: `${IMG}/RqVyhiA3ekZww7CHtjlECz/image-5.webp`,
    resumo: 'Creme de abóbora aveludado, sem leite, com alho dourado no azeite.',
    tempo: '30 min',
    porcoes: '4 porções',
    dificuldade: 'Fácil',
    restricao: 'Sem leite',
    tags: ['Sem leite', 'Acompanhamento', 'Vegano'],
    ingredientes: [
      '500 g de abóbora cabotiá em cubos',
      '1 dente de alho fatiado',
      '2 colheres (sopa) de azeite',
      'Sal e pimenta-do-reino a gosto',
      'Noz-moscada ralada (opcional)',
      'Água do cozimento, se precisar',
    ],
    preparo: [
      {
        titulo: 'Cozinhe a abóbora',
        texto:
          'Cozinhe a abóbora no vapor por cerca de 15 minutos, até ficar bem macia e desmanchar com o garfo.',
      },
      {
        titulo: 'Doure o alho',
        texto:
          'Em fogo baixo, doure o alho fatiado no azeite, mexendo para não queimar — é ele que dá o perfume do prato.',
      },
      {
        titulo: 'Amasse',
        texto:
          'Amasse a abóbora com o garfo ou bata com o mixer, até ficar cremosa.',
      },
      {
        titulo: 'Misture e ajuste',
        texto:
          'Junte o alho com o azeite, tempere com sal, pimenta e noz-moscada. Se estiver denso, acrescente um pouco da água do cozimento.',
      },
      {
        titulo: 'Sirva',
        texto:
          'Sirva com um fio de azeite cru e pimenta moída na hora, para manter o frescor.',
      },
    ],
    dica:
      'Assar a abóbora em vez de cozinhar concentra os açúcares naturais e deixa o purê mais adocicado, sem precisar de nada além de sal.',
    destaque: true,
  },
  {
    slug: 'biscoitos-de-banana-e-aveia',
    numero: 5,
    titulo: 'Biscoitos de banana e aveia',
    categoria: 'sem-leite',
    imagem: `${IMG}/U2fazjCRY8n4HQhTEfnwi0/image-1.webp`,
    resumo:
      'Três ingredientes, sem leite e sem açúcar adicionado: biscoitos macios de banana com aveia.',
    tempo: '25 min',
    porcoes: '10 biscoitos',
    dificuldade: 'Fácil',
    restricao: 'Sem leite',
    tags: ['Sem leite', 'Sem açúcar adicionado', 'Lanche'],
    ingredientes: [
      '2 bananas bem maduras',
      '1 xícara de aveia em flocos certificada sem glúten',
      '1 colher (chá) de canela em pó',
      '1 colher (sopa) de uvas-passas (opcional)',
      '1 colher (sopa) de coco ralado sem açúcar (opcional)',
    ],
    preparo: [
      {
        titulo: 'Amasse as bananas',
        texto:
          'Com um garfo, amasse as bananas até formar um purê — quanto mais maduras, mais doces.',
      },
      {
        titulo: 'Misture a aveia',
        texto:
          'Junte a aveia e a canela e misture bem. Deixe descansar 5 minutos para a aveia absorver a umidade.',
      },
      {
        titulo: 'Finalize a massa',
        texto:
          'Acrescente as uvas-passas ou o coco ralado, se quiser, e misture até dar liga.',
      },
      {
        titulo: 'Modele',
        texto:
          'Com uma colher, faça discos achatados e distribua em uma assadeira forrada, com espaço entre eles.',
      },
      {
        titulo: 'Asse',
        texto: 'Asse a 180 °C por 15 a 18 minutos, até dourar nas bordas.',
      },
      {
        titulo: 'Esfrie',
        texto:
          'Deixe esfriar na própria assadeira: eles firmam enquanto esfriam e ficam macios por dentro.',
      },
    ],
    dica:
      'Se quiser biscoitos mais crocantes, asse por mais 5 minutos em forno baixo e deixe secar com a porta entreaberta.',
  },
  {
    slug: 'brigadeiro-de-coco-e-cacau',
    numero: 6,
    titulo: 'Brigadeiro de coco e cacau',
    categoria: 'sem-leite',
    imagem: `${IMG}/U2fazjCRY8n4HQhTEfnwi0/image-2.webp`,
    resumo:
      'Brigadeiro cremoso feito com leite de coco e cacau — sem leite de vaca, com todo o afeto.',
    tempo: '30 min + 1 h de geladeira',
    porcoes: '12 unidades',
    dificuldade: 'Fácil',
    restricao: 'Sem leite',
    tags: ['Sem leite', 'Vegano', 'Doce'],
    ingredientes: [
      '1 xícara de leite de coco',
      '3 colheres (sopa) de cacau em pó 100%',
      '4 colheres (sopa) de açúcar (ou açúcar de coco)',
      '1 pitada de sal',
      '½ xícara de coco ralado sem açúcar para enrolar',
    ],
    preparo: [
      {
        titulo: 'Dissolva a frio',
        texto:
          'Na panela, ainda fria, misture o leite de coco, o cacau, o açúcar e o sal até não restarem grumos.',
      },
      {
        titulo: 'Cozinhe devagar',
        texto:
          'Leve ao fogo baixo e mexa sem parar com uma colher de silicone, raspando o fundo da panela.',
      },
      {
        titulo: 'Atinga o ponto',
        texto:
          'Cozinhe por 12 a 15 minutos, até engrossar e desgrudar do fundo. O ponto é quando a massa forma um caminho que demora a fechar.',
      },
      {
        titulo: 'Esfrie',
        texto:
          'Transfira para um prato untado, cubra com filme e deixe esfriar por completo — cerca de 1 hora na geladeira.',
      },
      {
        titulo: 'Enrole',
        texto:
          'Com as mãos untadas, faça bolinhas e passe no coco ralado. Guarde na geladeira até servir.',
      },
    ],
    dica:
      'O leite de coco integral dá mais cremosidade; versões light pedem alguns minutos a mais de fogo para atingir o ponto.',
    destaque: true,
  },
  {
    slug: 'omelete-de-frango',
    numero: 7,
    titulo: 'Omelete de frango',
    categoria: 'ricas-em-proteinas',
    imagem: `${IMG}/U2fazjCRY8n4HQhTEfnwi0/image-3.webp`,
    resumo:
      'Omelete proteico e rápido, com frango desfiado, tomate fresco e cebolinha.',
    tempo: '15 min',
    porcoes: '1 porção',
    dificuldade: 'Fácil',
    restricao: 'Rica em proteínas',
    tags: ['Proteico', 'Rápida', 'Café da manhã'],
    ingredientes: [
      '3 ovos',
      '100 g de frango desfiado',
      '1 tomate pequeno picado',
      '1 colher (sopa) de cebolinha picada',
      'Sal, pimenta-do-reino e cúrcuma (opcional)',
      '1 colher (chá) de azeite',
    ],
    preparo: [
      {
        titulo: 'Bata os ovos',
        texto:
          'Bata os ovos com sal, pimenta e uma pitada de cúrcuma, que dá cor e aroma.',
      },
      {
        titulo: 'Misture o recheio',
        texto:
          'Junte o frango desfiado, o tomate e a cebolinha à mistura de ovos.',
      },
      {
        titulo: 'Aqueça a frigideira',
        texto:
          'Aqueça a frigideira antiaderente com o azeite em fogo médio-baixo.',
      },
      {
        titulo: 'Cozinhe tampado',
        texto:
          'Despeje a mistura, tampe e cozinhe por 4 a 5 minutos, até firmar nas bordas e o centro ainda úmido.',
      },
      {
        titulo: 'Dobre e sirva',
        texto:
          'Dobre ao meio, desligue o fogo e deixe 1 minuto com o calor residual antes de servir.',
      },
    ],
    dica:
      'Fogo baixo é o segredo: omeletes altas e fofas precisam de tempo, não de calor forte.',
  },
  {
    slug: 'salada-de-grao-de-bico',
    numero: 8,
    titulo: 'Salada de grão-de-bico',
    categoria: 'ricas-em-proteinas',
    imagem: `${IMG}/U2fazjCRY8n4HQhTEfnwi0/image-4.webp`,
    resumo: 'Salada fresca, proteica e crocante, pronta em 10 minutos.',
    tempo: '10 min',
    porcoes: '2 porções',
    dificuldade: 'Fácil',
    restricao: 'Rica em proteínas',
    tags: ['Proteico', 'Vegano', 'Sem fogão'],
    ingredientes: [
      '1 xícara de grão-de-bico cozido',
      '1 tomate em cubos',
      '½ pepino em cubos',
      '¼ de cebola roxa em fatias finas',
      '2 colheres (sopa) de salsinha picada',
      'Suco de ½ limão',
      '2 colheres (sopa) de azeite',
      'Sal e pimenta-do-reino a gosto',
    ],
    preparo: [
      {
        titulo: 'Prepare o grão-de-bico',
        texto:
          'Escorra e enxágue bem o grão-de-bico. Se usar enlatado, lave em água corrente para reduzir o sódio.',
      },
      {
        titulo: 'Corte os vegetais',
        texto:
          'Corte o tomate e o pepino em cubos regulares e fatie a cebola bem fina.',
      },
      {
        titulo: 'Misture',
        texto:
          'Junte tudo em uma tigela e misture com cuidado para não amassar o grão.',
      },
      {
        titulo: 'Tempere',
        texto:
          'Regue com o limão e o azeite, tempere com sal e pimenta e misture novamente.',
      },
      {
        titulo: 'Descanse',
        texto:
          'Deixe 10 minutos na geladeira antes de servir: os sabores se encontram.',
      },
    ],
    dica:
      'Uma pitada de cominho e raspas de limão transformam a salada — experimente antes de servir.',
  },
  {
    slug: 'hamburguer-de-lentilha',
    numero: 9,
    titulo: 'Hambúrguer de lentilha',
    categoria: 'ricas-em-proteinas',
    imagem: `${IMG}/U2fazjCRY8n4HQhTEfnwi0/image-5.webp`,
    resumo: 'Hambúrguer vegetal de lentilha, firme na mordida e cheio de sabor.',
    tempo: '35 min',
    porcoes: '4 unidades',
    dificuldade: 'Moderada',
    restricao: 'Rica em proteínas',
    tags: ['Proteico', 'Vegano', 'Congelável'],
    ingredientes: [
      '1 xícara de lentilha cozida e bem escorrida',
      '3 colheres (sopa) de farinha de arroz',
      '½ cebola picada',
      '1 dente de alho amassado',
      '1 colher (chá) de cominho',
      '2 colheres (sopa) de salsinha',
      'Sal e pimenta-do-reino a gosto',
      'Azeite para grelhar',
    ],
    preparo: [
      {
        titulo: 'Refogue',
        texto:
          'No azeite, refogue a cebola e o alho até ficarem translúcidos. Junte a lentilha e amasse com o garfo, deixando alguns pedaços inteiros.',
      },
      {
        titulo: 'Tempere',
        texto:
          'Acrescente o cominho, o sal, a pimenta e a salsinha. Prove: é aqui que o sabor se define.',
      },
      {
        titulo: 'Dê liga',
        texto:
          'Adicione a farinha de arroz aos poucos, até a massa formar uma bola e desgrudar das mãos.',
      },
      {
        titulo: 'Modele e firme',
        texto:
          'Modele 4 hambúrgueres e leve à geladeira por 15 minutos — esse descanso evita que desmanchem.',
      },
      {
        titulo: 'Grelhe',
        texto:
          'Doure em frigideira com azeite, 4 minutos de cada lado, em fogo médio.',
      },
    ],
    dica:
      'Congele separando cada hambúrguer com papel-manteiga: duram até 3 meses e vão direto para a frigideira.',
    destaque: true,
  },
  {
    slug: 'salada-de-quinoa',
    numero: 10,
    titulo: 'Salada de quinoa',
    categoria: 'saudaveis',
    imagem: `${IMG}/RC4HmoO87GOIXni5A6oLs4/image-1.webp`,
    resumo: 'Quinoa soltinha com legumes crocantes e molho de limão.',
    tempo: '25 min',
    porcoes: '2 porções',
    dificuldade: 'Fácil',
    restricao: 'Saudável',
    tags: ['Saudável', 'Sem glúten', 'Vegano'],
    ingredientes: [
      '1 xícara de quinoa cozida',
      '1 tomate em cubos',
      '1 cenoura ralada',
      '½ pepino em cubos',
      '2 colheres (sopa) de salsinha',
      'Suco de 1 limão',
      '2 colheres (sopa) de azeite',
      'Sal e pimenta-do-reino a gosto',
    ],
    preparo: [
      {
        titulo: 'Cozinhe a quinoa',
        texto:
          'Lave a quinoa em água corrente e cozinhe com o dobro de água por 15 minutos, até os grãos abrirem.',
      },
      {
        titulo: 'Esfrie',
        texto:
          'Escorra e espalhe em um prato para esfriar rápido — assim os grãos ficam soltinhos.',
      },
      {
        titulo: 'Prepare os legumes',
        texto: 'Corte o tomate e o pepino e rale a cenoura no ralo grosso.',
      },
      {
        titulo: 'Monte',
        texto:
          'Misture a quinoa, os legumes e a salsinha em uma tigela grande.',
      },
      {
        titulo: 'Tempere e sirva',
        texto:
          'Regue com limão e azeite, ajuste o sal e a pimenta. Sirva morna ou gelada.',
      },
    ],
    dica:
      'Lavar a quinoa antes do cozimento remove a saponina, responsável por aquele amargor residual.',
  },
  {
    slug: 'espetinhos-de-legumes',
    numero: 11,
    titulo: 'Espetinhos de legumes',
    categoria: 'saudaveis',
    imagem: `${IMG}/RC4HmoO87GOIXni5A6oLs4/image-2.webp`,
    resumo: 'Espetinhos coloridos de legumes assados, com azeite e ervas.',
    tempo: '35 min',
    porcoes: '8 espetinhos',
    dificuldade: 'Fácil',
    restricao: 'Saudável',
    tags: ['Saudável', 'Vegano', 'Sem glúten'],
    ingredientes: [
      '1 abobrinha em rodelas',
      '1 cenoura em rodelas grossas',
      '1 pimentão em quadrados',
      '1 cebola em pétalas',
      '2 colheres (sopa) de azeite',
      '1 colher (chá) de páprica',
      'Orégano, sal e pimenta a gosto',
      '8 espetos de bambu',
    ],
    preparo: [
      {
        titulo: 'Hidrate os espetos',
        texto:
          'Deixe os espetos de bambu de molho em água por 20 minutos, para não queimarem no forno.',
      },
      {
        titulo: 'Corte os legumes',
        texto:
          'Corte todos em tamanhos parecidos: assim assam por igual e ficam bonitos.',
      },
      {
        titulo: 'Monte',
        texto:
          'Alternando cores e texturas, espete os legumes até o fim de cada espeto.',
      },
      {
        titulo: 'Tempere',
        texto:
          'Pincele com azeite e polvilhe páprica, orégano, sal e pimenta por todos os lados.',
      },
      {
        titulo: 'Asse',
        texto:
          'Asse a 200 °C por 25 minutos, virando na metade, ou grelhe em chapa quente.',
      },
    ],
    dica:
      'Branqueie a cenoura por 3 minutos antes de montar: ela assa no mesmo tempo dos outros legumes.',
  },
  {
    slug: 'salada-de-frutas',
    numero: 12,
    titulo: 'Salada de frutas',
    categoria: 'saudaveis',
    imagem: `${IMG}/RC4HmoO87GOIXni5A6oLs4/image-3.webp`,
    resumo: 'Frutas da estação cortadas na hora, com toque de limão e hortelã.',
    tempo: '10 min',
    porcoes: '4 porções',
    dificuldade: 'Fácil',
    restricao: 'Saudável',
    tags: ['Saudável', 'Vegano', 'Sem açúcar adicionado'],
    ingredientes: [
      '1 manga madura',
      '2 bananas',
      '1 xícara de morangos',
      '1 maçã',
      '1 xícara de uvas',
      'Suco de ½ limão',
      'Folhas de hortelã',
      'Canela em pó (opcional)',
    ],
    preparo: [
      {
        titulo: 'Lave as frutas',
        texto:
          'Lave e seque bem todas as frutas — fruta molhada deixa a salada aguada.',
      },
      {
        titulo: 'Corte',
        texto:
          'Corte tudo em pedaços do mesmo tamanho, para a colherada ser equilibrada.',
      },
      {
        titulo: 'Junte e regue',
        texto:
          'Misture em uma tigela e regue com o suco de limão, que preserva a cor da banana e da maçã.',
      },
      {
        titulo: 'Finalize',
        texto: 'Finalize com hortelã rasgada e uma pitada de canela.',
      },
      {
        titulo: 'Sirva gelada',
        texto:
          'Sirva imediatamente, bem gelada. Se precisar esperar, mantenha na geladeira por até 2 horas.',
      },
    ],
    dica:
      'Use o que está na estação: frutas maduras no ponto dispensam qualquer açúcar.',
  },
  {
    slug: 'pudim-de-chia-sem-acucar',
    numero: 13,
    titulo: 'Pudim de chia sem açúcar',
    categoria: 'outras-restricoes',
    imagem: `${IMG}/plLa19CZ91aFuTdB5nZWlY/image-1.webp`,
    resumo:
      'Sobremesa cremosa de chia com morangos, sem açúcar adicionado.',
    tempo: '10 min + 3 h de geladeira',
    porcoes: '2 porções',
    dificuldade: 'Fácil',
    restricao: 'Controle de açúcar',
    tags: ['Sem açúcar', 'Sem leite', 'Sobremesa'],
    ingredientes: [
      '3 colheres (sopa) de chia',
      '1 xícara de bebida vegetal (soja, aveia ou coco)',
      '½ colher (chá) de essência de baunilha',
      'Canela em pó a gosto',
      '1 xícara de morangos',
      'Adoçante natural (opcional)',
    ],
    preparo: [
      {
        titulo: 'Misture a chia',
        texto:
          'Misture a chia com a bebida vegetal e a baunilha. Mexa bem para não formar grumos.',
      },
      {
        titulo: 'Descanse e mexa',
        texto:
          'Deixe descansar 5 minutos e mexa novamente: isso distribui as sementes por igual.',
      },
      {
        titulo: 'Leve à geladeira',
        texto:
          'Tampe e leve à geladeira por pelo menos 3 horas, ou de um dia para o outro.',
      },
      {
        titulo: 'Ajuste',
        texto:
          'Antes de servir, mexa e prove. Se quiser mais doce, acrescente adoçante aos poucos.',
      },
      {
        titulo: 'Sirva',
        texto:
          'Cubra com morangos fatiados e uma pitada de canela.',
      },
    ],
    dica:
      'Para textura de pudim, bata a mistura já hidratada no mixer por 30 segundos antes de gelar.',
    destaque: true,
  },
  {
    slug: 'salada-de-lentilha-vegana',
    numero: 14,
    titulo: 'Salada de lentilha vegana',
    categoria: 'outras-restricoes',
    imagem: `${IMG}/plLa19CZ91aFuTdB5nZWlY/image-2.webp`,
    resumo:
      'Lentilha cozida com legumes e molho de limão — vegana, completa e econômica.',
    tempo: '30 min',
    porcoes: '3 porções',
    dificuldade: 'Fácil',
    restricao: 'Vegana',
    tags: ['Vegano', 'Sem glúten', 'Proteico'],
    ingredientes: [
      '1 xícara de lentilha cozida',
      '1 cenoura ralada',
      '1 tomate em cubos',
      '½ cebola roxa em fatias finas',
      '3 colheres (sopa) de salsa picada',
      'Suco de 1 limão',
      '3 colheres (sopa) de azeite',
      'Sal e pimenta-do-reino a gosto',
    ],
    preparo: [
      {
        titulo: 'Cozinhe a lentilha',
        texto:
          'Cozinhe a lentilha em água com uma folha de louro até ficar macia, mas ainda inteira.',
      },
      {
        titulo: 'Esfrie',
        texto:
          'Escorra e deixe esfriar em uma tigela larga, para não continuar cozinhando.',
      },
      {
        titulo: 'Junte os legumes',
        texto:
          'Acrescente a cenoura, o tomate, a cebola e a salsa.',
      },
      {
        titulo: 'Tempere',
        texto:
          'Regue com limão e azeite, tempere com sal e pimenta e misture delicadamente.',
      },
      {
        titulo: 'Sirva',
        texto:
          'Sirva fria ou em temperatura ambiente, com folhas verdes ao lado, se quiser.',
      },
    ],
    dica:
      'Adicione o sal só no fim do cozimento: a lentilha cozinha mais rápido e fica mais macia.',
  },
  {
    slug: 'maca-assada-com-canela',
    numero: 15,
    titulo: 'Maçã assada com canela',
    categoria: 'outras-restricoes',
    imagem: `${IMG}/ShpPvmW1Rqq5Q7zO94g6mA/image-1.webp`,
    resumo:
      'Maçã assada com canela, doce naturalmente e com pouquíssima gordura.',
    tempo: '35 min',
    porcoes: '2 porções',
    dificuldade: 'Fácil',
    restricao: 'Baixo teor de gordura',
    tags: ['Baixa gordura', 'Sem açúcar adicionado', 'Sobremesa'],
    ingredientes: [
      '2 maçãs firmes (fuji ou gala)',
      '1 colher (chá) de canela em pó',
      '½ xícara de água',
      '1 colher (sopa) de uvas-passas (opcional)',
      '1 fio de mel (opcional)',
    ],
    preparo: [
      {
        titulo: 'Aqueça o forno',
        texto: 'Preaqueça o forno a 180 °C.',
      },
      {
        titulo: 'Prepare as maçãs',
        texto:
          'Lave as maçãs, retire o miolo com uma faca pequena e corte uma tampa no topo.',
      },
      {
        titulo: 'Tempere',
        texto:
          'Polvilhe canela por dentro e por fora. Recheie com uvas-passas, se quiser.',
      },
      {
        titulo: 'Asse',
        texto:
          'Coloque em uma assadeira com a água no fundo e asse por 25 a 30 minutos, até a polpa ficar macia ao espetar com um garfo.',
      },
      {
        titulo: 'Regue e sirva',
        texto:
          'Regue com a calda formada na assadeira e sirva morna, com uma pitada extra de canela.',
      },
    ],
    dica:
      'Maçãs muito macias desmancham no forno; escolha frutas firmes e de casca lisa.',
  },
];

export const getReceita = (slug: string): Receita | undefined =>
  receitas.find((receita) => receita.slug === slug);

export const getCategoria = (id: string): Categoria | undefined =>
  categorias.find((categoria) => categoria.id === id);

export const receitasDaCategoria = (id: CategoriaId): Receita[] =>
  receitas.filter((receita) => receita.categoria === id);

export const destaques = (): Receita[] => receitas.filter((receita) => receita.destaque);
