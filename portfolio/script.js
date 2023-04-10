$(document).ready(() => {
  $(".dropdown-button").click(function() {
      $(this).siblings().slideToggle();
      let clickedButtonTextArray = $(this).attr("value").split("");
      clickedButtonTextArray[0] == "➡" ? clickedButtonTextArray[0] = "⬇" : clickedButtonTextArray[0] = "➡";
      $(this).attr("value", clickedButtonTextArray.join(""));
  });

  const shouldFade = $('.fade');
  shouldFade.removeClass('dofade');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // console.log(entry)
        entry.target.classList.add('dofade');
        return
      }
  
      // fade out on leave
      // shouldFade.removeClass('dofade');
    });
  }, {
    root: null
  });

  for (let i = 0; i < shouldFade.length; i++) {
    observer.observe(shouldFade[i]);
  }
})