/* https://exercism.org/tracks/javascript/exercises/annalyns-infiltration */


var fastAttack,spy,signalPrisoner,freePrisioner;
var knightIsAwake,archerIsAwake,prisonerIsAwake,dogIsPresent;


function canFastAttack(){
    if(knightIsAwake){
    return false;
    }
    return true;
}

function canSpy(){
    if (archerIsAwake){
        return false;
    }
    return true;
}

function canSignal(){
    if (prisonerIsAwake){
        if(archerIsAwake){
            return false;
        }
    }
    return true;
}

function canFreePrisoner(){
    if(archerIsAwake){
        return false;
    }
    else if(prisonerIsAwake && dogIsPresent && knightIsAwake){
        return true;
    }
}


//TEST
knightIsAwake = true;
archerIsAwake = false;
prisonerIsAwake = true;
dogIsPresent = true;

console.log('Fast attack: ' + canFastAttack() +'\n','Spy: '+ canSpy()+'\n','Signal: '+ canSignal()+'\n','Free: ' + canFreePrisoner()+'\n' );

/* EXPECTED RESULT:
 Fast attack: false
 Spy: true
 Signal: true
 Free: true
*/