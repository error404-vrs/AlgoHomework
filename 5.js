function estMajuscule(chaine){
    if(chaine === chaine.toUpperCase()){
      return true
    }
    else{
      return false
    }
  }
       
  console.log(estMajuscule("HELLO")); // Résultat attendu : true
  console.log(estMajuscule("Hello")); // Résultat attendu : false
  