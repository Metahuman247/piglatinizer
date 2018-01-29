// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 






$(document).ready(function(){
    

        $("button").click(function() {
            var speak = $("input").val();
            //$("#result").html(constanent(speak));
            //$("#result").html(vowel(speak));
            //add(speak);
           //$("#result").html();
           sentenceToPigLatin(speak);
    });
    

});

function sentenceToPigLatin(sentence) {
    
    var pigLatin = ''
    var splitSentence = sentence.split(' ');
    
    for (var i = 0; i < splitSentence.length; i++){
        
        
        //$("#result").append(splitSentence[i] + "ay");

       var newWord = constanent(splitSentence[i]);
       
       
       $("#result").append(" ", newWord);
    }
}

        function constanent(word){
             var firstLetter = word.slice(0, 1);
            var newWord = word.slice(1) + firstLetter + "ay";
            return newWord;
        }

   function add(word){
       //var test = word.split(' ');
       //for (var i = 0; i < test.length; i++){
        return word[i] + "ay"; 
        
      
                //$("#result").append(test[i] + "ay" + " ");
    
	 console.log(word + "ay" + " ");
	

      function vowel(word){
         var vowels = ["a", "e", "i", "o", "u"];
         var str = word;
         var res = str.charAt(0)
         if( res === "a" || res === "e" || res === "i" || res === "o" || res === "u"){
             $("#result").html(add()) ;
          } else{
                 add();
             $("#result").html(constanent() );
    
          }
                
    }
}

    
    

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance

      