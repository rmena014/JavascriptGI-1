let input = prompt(
  "Input a word and if you would like to shout it type it in all caps, if you would like to whipser it type it in all lowercase and if you just want to say it normal type it normally."
);

if (input.toUpperCase() === input) {
  alert("WHY ARE YOU SHOUTING AT ME!!");
  console.log("SHOUTING");
} else if (input.toLowerCase() === input) {
  alert("why are we whispering?");
  console.log("whisper");
} else {
  alert(
    "Thank you for not shouting or whispering you said it perfectly normal :)"
  );
  console.log("Neither");
}
