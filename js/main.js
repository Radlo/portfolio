window.onload = function(){
  var button = document.getElementById('learn-more-btn');
  var showcase = document.getElementById('showcase');
  var logoTitle = document.getElementById('logoTitle');


  button.addEventListener('click',function(){
    showcase.classList.add('collapse');

    setTimeout(function(){
      showcase.classList.add('none');
    }, 750);

      logoTitle.classList.add('none');
      button.classList.add('none');
  });
};