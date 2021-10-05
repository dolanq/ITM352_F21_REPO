 // -- Winning progress depends on hits/spins
 hits_spins_ratio = hits/spins;
 if ( hits_spins_ratio > 0 ) {
             progress = 'On your way!';
 }
 else if ( hits_spins_ratio >= 0.25 ) {
            progress = 'Almost there!';
 }
else if( hits_spins_ratio >= 0.5 ) {
    
}
else if( hits < spins) { 
            progress = 'You win!';
}
 else{
        progress = 'Get going!' ;
    }
   console.log(progress); 