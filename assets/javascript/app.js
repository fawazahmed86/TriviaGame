window.onload = function() {

  var questions = {
    q1: ["What is my name", "Fawaz", "Name", "Great"],
    q2: ["How is your health going", "very bad", "I am really great", "I need rest buddy"],
    q3: ["Which color do you like?", "green", "blue", "red"],
  }

  // var answer = {
  //   a1: ["fawaz", "joseph", "name me"],
  //   a2: []
  //   }
  console.log(questions);
  console.log(questions['q' + 1]);
  $("question").html(questions.q1[0]);

  function display() {
    for (i = 0; i < questions.length; i++) {
      var temp = a[i]
      var temp2 = ['a'+i]
      $(temp2).append(temp);
      // $("#a1".append(questions[['q'+i] +i+1]);
      // console.log(questions);
      // console.log(questions[i]);
      $("answers").append(answer.a[i]);
        // for (j = 0; j < answer.length; j++)
    }
  }
  display();
  console.log(display);


}
