 class Animals {

   static grupe = 'karalyste'

   constructor(param, param2){  //parametrai
   this.param = param //property savybe
   this.param2 = param2
   }
   setParam(first){    //metodas  #privatus
    this.param = first  //pakeiciam reiksme
   }
   returnLine(){
    return `nuostabus gyvunas ${this.param} ${this.param2}`
 }
 
 }

//  const ani = new Animals('australiskas', 'balandis');
// //instance (instancija)

// ani.setParam('amerikietiskasis') // pakeiciam



class Cars extends Animals {

    constructor(param, param2){  //parametrai
        super(param, param2)

    this.param = param //property savybe
    this.param2 = param2
    }
   
    returnLine(){
     return `puiki masina ${this.param} ${this.param2}`
  }
  
  }

  export  {Cars, Animals};
