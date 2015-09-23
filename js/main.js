var app = angular.module('kimex', []);

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
});

app.run(function($rootScope) {
  $rootScope.today = new Date();
});

app.controller('ServiceController', function($scope) {
  $scope.services = [{
    title: 'Mise en place',
    desc: 'Couler du béton par pompe, chariot motorisé, grue ou camion. Utilisation de méthodes sophistiquées pour assuré un nivellement impeccable.',
    image: 'rateau.jpg'
  },
  {
    title: 'Finition',
    desc: 'Polissage de surface de béton à l\'aide une diversité d\'outils spécialisés. Offre des finis lustrés, mats, rugueux, etc.',
    image: 'finition.jpg'
  },
  {
    title: 'Sciage',
    desc: 'Sciage de béton "Soff-Cut" qui évite les fissures indésirables en éliminant la pression dû au retrait de la dalle lors du mûrissement.',
    image: 'sciage.jpg'
  }, 
  {
    title: 'Revêtement',
    desc: 'Application des revêtements protecteurs désirés : durcisseur, scellant, membrane, cure à l\'eau, etc.',
    image: 'revetement.jpg'
  }
  ];
});

app.controller('WorkController', function($scope) {
  $scope.projects = [{
    title: 'Soprema',
    location: 'Drummondville',
    url: 'http://www.soprema.ca/',
    image: 'soprema.jpg',
    fade: 'fadeInLeft'
  },
  {
    title: 'Hôtel Times',
    location: 'Sherbrooke',
    url: 'http://www.grandtimeshotel.com/',
    image: 'times.jpg',
    fade: 'fadeInDown'
  },
  {
    title: 'École de police',
    location: 'Nicolet',
    url: 'http://www.enpq.qc.ca/',
    image: 'nicolet.jpg',
    fade: 'fadeInDown'
  },
  {
    title: 'Condos Place Belvédère',
    location: 'Trois-Rivières',
    url: 'http://www.place-belvedere.com/',
    image: 'condos-belvedere.jpg',
    fade: 'fadeInRight'
  }
  ];
  // Congébec
  // CBR Laser
  // Tim Hortons
  // Couche Tard

  // fadeInLeft
  // none
  // none
  // fadeInRight
  // fadeInLeft
  // fadeInUp
  // fadeInUp
  // fadeInRight
});

app.controller('ClientController', function($scope) {
  $scope.clients = [{
    title: 'Walmart',
    url: 'http://www.walmart.ca/',
    image: 'walmart.png'
  },
  {
    title: 'IGA',
    url: 'http://www.iga.com/',
    image: 'iga.png'
  },
  {
    title: 'Gouvernement du Québec',
    url: 'http://www.gouv.qc.ca/',
    image: 'quebec.png'
  },
  {
    title: 'Banque nationale',
    url: 'https://www.bnc.ca',
    image: 'nationale.png'
  },
  {
    title: 'Caisses Desjardins',
    url: 'https://www.desjardins.com',
    image: 'desjardins.png'
  },
  {
    title: 'Jaguar',
    url: 'https://www.jaguar.com',
    image: 'jaguar.png'
  },
  {
    title: 'Mc Donald\'s',
    url: 'http://www.mcdonalds.ca',
    image: 'mcdonalds.png'
  }
  // {
  //   title: 'TD Canada Trust',
  //   url: 'https://www.tdcanadatrust.com',
  //   image: 'td.png'
  // }
  ];
});

app.controller('TeamController', function($scope) {
  $scope.employees = [{
    firstname: 'Lucie',
    lastname: 'Trépanier',
    title: 'Présidente',
    avatar: 'ltrepanier.jpg',
    facebook: 'https://www.facebook.com/lucie.trepanier.5',
    linkedin: 'https://www.linkedin.com/profile/view?id=411055062',
    desc: ''
  },
  {
    firstname: 'Harold',
    lastname: 'Nault',
    title: 'Contremaître',
    avatar: 'hnault.jpg',
    linkedin: 'https://www.linkedin.com/profile/view?id=231408079',
    desc: ''
  },
  {
    firstname: 'Alain',
    lastname: 'Leblanc',
    title: 'Estimateur',
    avatar: 'aleblanc.jpg',
    desc: ''
  },
  {
    firstname: 'François',
    lastname: 'Vaillancourt',
    title: 'Cimentier-applicateur',
    avatar: 'fvaillancourt.jpg',
    facebook: 'https://www.facebook.com/fvaillancourt3',
    desc: ''
  },
  {
    firstname: 'Serge',
    lastname: 'Liberge',
    title: 'Cimentier-applicateur',
    avatar: 'sliberge.jpg',
    facebook: 'https://www.facebook.com/serge.liberge.3',
    desc: ''
  },
  {
    firstname: 'Léandre',
    lastname: 'Liberge',
    title: 'Cimentier-applicateur',
    avatar: 'lliberge.jpg',
    facebook: 'https://www.facebook.com/leandre.liberge',
    desc: ''
  },
  {
    firstname: 'Gilles',
    lastname: 'Lauzon',
    title: 'Cimentier-applicateur',
    avatar: 'glauzon.jpg',
    facebook: 'https://www.facebook.com/gilles.joseegilbert',
    desc: ''
  },
  {
    firstname: 'Martin',
    lastname: 'Prince',
    title: 'Cimentier-applicateur',
    avatar: 'mprince.jpg',
    facebook: 'https://www.facebook.com/martin.prince.52',
    desc: ''
  },
  {
    firstname: 'Julien',
    lastname: 'Ducornetz',
    title: 'Cimentier-applicateur',
    avatar: 'jducornetz.jpg',
    facebook: 'https://www.facebook.com/julien.ducornetz',
    desc: ''
  },
  {
    firstname: 'Donald',
    lastname: 'Réhaume',
    title: 'Cimentier-applicateur',
    avatar: 'drehaume.jpg',
    desc: ''
  },
  {
    firstname: 'Alex',
    lastname: 'Nault',
    title: 'Support informatique',
    avatar: 'anault.jpg',
    facebook: 'https://www.facebook.com/alex.nault.18',
    linkedin: 'https://www.linkedin.com/in/naultalex',
    desc: ''
  }
  ];
});