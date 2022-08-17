function oneThroughTwenty() {
    
  let lista = []

  for(let contador = 1; contador <= 20; contador++){
    lista.push(contador)
  }
  
  document.getElementById("UmaVinte").value = lista.join('-')
}

// oneThroughTwenty()

function evensToTwenty() {
    
  let contador = 1

  let lista_de_pares = []

  while(contador <= 20){
    
    if (contador % 2 == 0){
      lista_de_pares.push(contador)
    }
    contador += 1
  }

  document.getElementById("pares_ate_vinte").value = lista_de_pares.join('-')
}

// evensToTwenty()

function oddsToTwenty() {
    
  let contador = 1

  let lista_de_impares = []

  while(contador <= 20){
    
    if (contador % 2 == 1){
      lista_de_impares.push(contador)
    }
    contador += 1
  }

  document.getElementById("impares_ate_vinte").value = lista_de_impares.join('-')
   
}

// oddsToTwenty()

function multiplesOfFive() {
    
  let contador = 1

  let multiplos = []

  while(contador <= 20){
    multiplos.push(contador * 5)
    contador += 1
  } 

  document.getElementById("multiplos_de_5").value = multiplos.join('-')
}

// multiplesOfFive()

function squareNumbers() {
    
 let contador = 1
  
  perfeitos = []

  while(contador <=10){
    perfeitos.push(contador * contador)
    contador += 1
  }

  document.getElementById("perfeitos").value = perfeitos.join('-')
}

// squareNumbers()

function countingBackwards() {
    
  let lista = []
  
  for(let contador = 20; contador >= 1; contador -=1){
    lista.push(contador)
  }

  document.getElementById("VinteaUm").value = lista.join('-')
}

// countingBackwards()

function evenNumbersBackwards() {
    
  let contador = 20

  let lista_de_pares = []

  while(contador >= 1){
    
    if (contador % 2 == 0){
      lista_de_pares.push(contador)
    }
    contador -= 1 
  }
  
  document.getElementById("pares_ate_20_contrario").value = lista_de_pares.join('-')
 
}

// evenNumbersBackwards()

function oddNumbersBackwards() {
    
  let contador = 20

  let lista_de_impares = []

  while(contador >= 1){
    
    if (contador % 2 == 1){
      lista_de_impares.push(contador)
    }
    contador -= 1
  }
  
  document.getElementById("impares_ate_20_contrario").value = lista_de_impares.join('-')

}

// oddNumbersBackwards()

function multiplesOfFiveBackwards() {
    
  let contador = 20

  let multiplos = []

  while(contador >= 1){
    multiplos.push(contador * 5)
    contador -= 1
  } 

  document.getElementById("multiplos_de_5_contrario").value = multiplos.join('-')

}

// multiplesOfFiveBackwards()

function squareNumbersBackwards() {
  
  let contador = 10
  
  perfeitos = []

  while(contador >=1){
    perfeitos.push(contador * contador)
    contador -= 1
  }

  document.getElementById("perfeitos_contrario").value = perfeitos.join('-')
   
}

// squareNumbersBackwards()
