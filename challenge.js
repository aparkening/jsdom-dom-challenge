
document.addEventListener("DOMContentLoaded", () => {
  let count;
  let countArray = [];
  let liCount;
  let span;
  let li;
  let newValue;

  // Get DOM elements
  let counter = document.getElementById("counter");
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  let heart = document.getElementById("heart");
  let likes = document.querySelector(".likes");
  let pause = document.getElementById("pause");
  let submit = document.getElementById("submit");
  let form = document.getElementById('comment-form');
  let commentList = document.getElementById('list');

  // Count time
 let timer = setInterval(countTime, 1000);
  function countTime(){
    counter.innerText = parseInt(counter.innerText) + 1;
  }


  // Increment using buttons
  plus.addEventListener('click', function(e){
    // event.preventDefault();
    counter.innerText = parseInt(counter.innerText) + 1;
  }) 


  // Decrement using buttons
  minus.addEventListener('click', function(e){
    // event.preventDefault();
    counter.innerText = parseInt(counter.innerText) - 1;
  }) 
  

  // Like counter increment
  heart.addEventListener('click', function(e) {
    // Get count
    count = parseInt(counter.innerText);
    
    // If count isn't in array, add it
    if (countArray.includes(count)) {
      // Get previous value and times
      liCount = document.querySelector('[data-num="'+count+'"]');
      span = liCount.querySelector('span');
      newValue = parseInt(span.innerText) + 1;

      // Set new data
      liCount.innerHTML = `${count} has been liked <span>${newValue}</span> times`;

      // Set li to existing data
      li = liCount;

    } else { 
      // Add to array
      countArray.push(count);

      // Add html
      li = document.createElement('li');
      li.setAttribute('data-num', count);
      li.innerHTML = `${count} has been liked <span>1</span> time`;
    }
    // Write likes to screen  
    likes.appendChild(li);
  })


  // Pause counter
  pause.addEventListener('click', function(e) {

    if (pause.innerText === "pause") {
      // Pause the counter
      clearInterval(timer);

      // Disable all buttons except the pause button
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;

      // Show "resume"
      pause.innerText = "resume";
    } else {
      // Resume the counter
      setInterval(countTime, 1000);

      // Enable buttons
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      submit.disabled = false;

      // Show "pause"
      // resume.id = "pause";
      pause.innerText = "pause";
    }
  })
  
  // Leave comments  
  // Listen for submit, then display comment
  form.addEventListener('submit', function(event){
    event.preventDefault();

    // Get input
    let comment = document.getElementById('comment-input');

    // Ensure description isn't empty
    if (comment.value === "") {
      return;
    } 

    // Construct new p element
    let p = document.createElement('p');
    p.innerText = comment.value;
    commentList.appendChild(p);
    
    // Empty input box
    comment.value = "";   
  })   

});