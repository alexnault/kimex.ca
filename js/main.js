var app = angular.module('myApp', []);

app.run(function($rootScope) {
  $rootScope.today = new Date();
});

app.controller('ServiceController', function($scope) {
  $scope.services = [{
    title: 'Mise en place',
    desc: '',
    image: 'rateau.jpg'
  },
  {
    title: 'Finition',
    desc: '',
    image: 'finition.jpg'
  },
  {
    title: 'Sciage',
    desc: '',
    image: 'sciage.jpg'
  }, 
  {
    title: 'Revêtement',
    desc: '',
    image: 'revetement.jpg'
  }
  ];
});

app.controller('WorkController', function($scope) {
  $scope.projects = [{
    title: 'Soprema',
    url: 'http://www.soprema.ca/',
    image: 'soprema.jpg',
    fade: 'fadeInLeft'
  },
  {
    title: 'Hôtel Times',
    url: 'http://www.grandtimeshotel.com/',
    image: 'times.jpg',
    fade: 'fadeInDown'
  },
  {
    title: 'École de police de Nicolet',
    url: 'http://www.enpq.qc.ca/',
    image: 'nicolet.jpg',
    fade: 'fadeInDown'
  }
  ];
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
    title: 'TD Canada Trust',
    url: 'https://www.tdcanadatrust.com',
    image: 'td.png'
  }
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
    firstname: 'François',
    lastname: 'Vaillancourt',
    title: 'Cimentier-applicateur',
    avatar: 'fvaillancourt.jpg',
    facebook: 'https://www.facebook.com/fvaillancourt3',
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
    firstname: 'Martin',
    lastname: 'Prince',
    title: 'Cimentier-applicateur',
    avatar: 'mprince.jpg',
    facebook: 'https://www.facebook.com/martin.prince.52',
    desc: ''
  },
  {
    firstname: 'Gilles',
    lastname: 'Lauzon',
    title: 'Polisseur',
    avatar: 'glauzon.jpg',
    facebook: 'https://www.facebook.com/gilles.joseegilbert',
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
    lastname: 'Rhéaume',
    title: 'Cimentier-applicateur',
    //avatar: 'drheaume.jpg',
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