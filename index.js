function scuberGreetingForFeet(feet){
  if (feet <=400){

    return 'This one is on me!'

  }else if (feet >=400 & feet <=2000){

    return 'That will be twenty bucks.'

  }else if ( feet > 2000 && feet < 2500){

    return 'I will gladly take your thirty bucks.'
  }else{


    return 'No can do.'
  }
}
function ternaryCheckCity(city){

  return city === "NYC" ? ('Ok, sounds good.'): ('No go.')

}

function switchOnCharmFromTip(tip){

  switch (tip){
    case 'generous':
      return 'Thank you so much.'
      break;

      case 'not as generous':
        return 'Thank you.'
        break;

        default:
          return 'Bye.'
          break;
  }

  
}



function greet(timeOfDay,firstName){
  console.log(`Good ${timeOfDay} ${firstName}`);
}

greet('evening','John')

function addition(a,b){
  return a+b;
}

console.log(addition(330,30))

