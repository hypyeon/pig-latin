## Testing
```
Describe: pigLatinRun()
 
Test: "It will add 'way' to the end of words that begin with a vowel."  
Code: pigLatinRun("a");  
Expected Output: "away"
  
Test: "All of the first consecutive consonants are placed to the end and "ay" will be added at the end."  
Code: pigLatinRun("code");  
Expected Output: "odecay"
  
Test: "If the first consonants include "qu", move the "q" and the "u." to the end and "ay" will be added at the end."
Code: pigLatinRun("quick");  
Expected Output: "ickquay"  
```