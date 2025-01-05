$(document).ready(() => {

  // resume dropdown button
  $(".dropdown-button").click(function() {
      $(this).siblings().slideToggle();
      let clickedButtonTextArray = $(this).attr("value").split("");
      clickedButtonTextArray[0] == "➡" ? clickedButtonTextArray[0] = "⬇" : clickedButtonTextArray[0] = "➡";
      $(this).attr("value", clickedButtonTextArray.join(""));
  });

  // create cards
  let flip = false;

  [
    {
      title: `"Chronicler": Gamified History`,
      desc: `Over the course of 9 months, I designed, planned, and programmed a history flashcards game Android mobile app for students called "Chronicler"! My tools of choice were Java in Android Studio along with libraries such as Google GSON. I made a concerted effort to make the app's codebase clearly organized and also tested my theoretical computer science skills by implementing techniques such as heaps and heap sort in the application.`,
      img: `./projects/chronicler.jpg`,
      imgSize: `small-img`
    },
    {
      title: `Midnight Sun Solar Car Design Team - Strategy Subteam`,
      desc: `I'm currently a member of the University of Waterloo's solar car design team, working on designing a strategy for the upcoming race. I've mainly used Python so far but have also been learning a lot about AWS, PostgreSQL, and cloud databases. My next task is to integrate irradiance data into the project...`,
      img: `./projects/midsuntwo.png`,
      imgSize: `med-img`
    },
    {
      title: `"Seedpod" - First Place at a University-Level Hackathon`,
      desc: `Together with three of my friends, I won $5000 🤑 and first place at the University of Calgary's "Hack the Change 2023", an in-person coding competition against almost 300 other contestants! We invented a modular plant pot product and I helped by creating the NextJS frontend, designing the user interface, and integrating Firebase. Check it out <a href="https://devpost.com/software/seedpod-empowering-individual-agriculture">here</a>!`,
      img: `./projects/seedpod.png`,
      imgSize: `med-img`
    },
    {
      title: `Python Packages and Projects`,
      desc: `Over the years, I've created many projects in Python for fun to help me understand and learn the language. For example, <a href="https://github.com/ericli3690/PollProject2">here's</a> a script I wrote to help others programmatically generate and conduct polls. I've also published two Python packages, which you can check out <a href="https://pypi.org/project/esoteric-sigdigs/">here</a> and <a href="https://pypi.org/project/terminaltools/0.1.1/">here</a>!`,
      img: `./projects/poll.png`,
      imgSize: `med-img`
    },
    {
      title: `Finalist at ASNA Case Competition / Hackathon`,
      desc: `Together with three of my friends, I placed as a finalist in the ASNA Case Competition / Hackathon! We trained multiple machine learning models to predict insurance claim data using Python and <em>pandas</em>, eventually settling on an XGBoost decision tree model.`,
      img: `./projects/asna.png`,
      imgSize: `med-img`
    },
    {
      title: `"Spontaneity" - An Android application`,
      desc: `This was a mobile reminders application I made in Android Studio using Java for a school assignment (I went a bit overboard 😋). I'm quite proud of it and learned a lot about Java, Android, and UI/UX design while working on it. It's not on the app store yet, though: there's a few more stubborn bugs hiding in the code I need to squish.`,
      img: `./projects/spontaneity.jpg`,
      imgSize: `small-img`
    },
    {
      title: `Using Python to increase efficiency as a Marketing Assistant`,
      desc: `I previously worked on an on-call basis with the <a href="https://www.calgarytaichi.com/">Calgary Taichi and Martial Arts College</a>. One of my responsibilities was to design posters, emails, and certificates for its over 400 students. I also managed the student database and often had to sift through and print off student records. To streamline these processes, I used my programming experience in Python, such as by programmatically generating report cards via the <em>python-pptx</em> library!`,
      img: `./projects/caitaichi.png`,
      imgSize: `large-img`
    },
    {
      title: `"LifeLink" - First Place at MediHacks2024`,
      desc: `Together with my friend, <a href="https://gauthamv6002.github.io/">Gautham Venkateshwaran</a>, I clinched first place at the week-long hackathon MediHacks2024! I created an entire ReactNative and TailwindCSS mobile app for first responders from the ground up, incorporating Firebase along with the Google Maps and Nominatim API. Here's the <a href="https://devpost.com/software/lifelink-24fd3g">Devpost</a>!`,
      img: `./projects/lifelink.jpg`,
      imgSize: 'small-img'
    },
    {
      title: `Python Soccer Betting Discord Bot`,
      desc: `Together with my friends Pranav Ullas and Ahyan Kabir, I created a Discord chatbot using Python that can handle imaginary bets on soccer games, not to mention loans, investments, and live odds fetching. I'm most proud of my work on the statistics functions of the bot! Check it out on <a href="https://github.com/pranavUl/Soccer-Betting-Bot">GitHub</a>.`,
      img: `./projects/fred.png`,
      imgSize: `med-img`
    },
    {
      title: `"Tie-d Together" - An React application`,
      desc: `With some of my friends in Katy, Texas, I'm working on a React app to help band students find musical tutors. Music is one of my passions, and this is one of the ways I'm connecting with it! Currently, my goal with this project is to learn more about React and build more familiarity with the framework... Check it out on <a href="https://github.com/tiedtogether/tiedtogether.github.io">Github</a>!`,
      img: `./projects/tiedtogether.png`,
      imgSize: `large-img`
    },
    {
      title: `"The Trees" - Third Place at Simplihacks 2.0!`,
      desc: `For this hackathon, Gautham and I created a MERN app. Its goal was to essentially make environmental charity fun, and we managed to snatch third place against over 400 other participants! I mostly worked on the front-end, using HTML, CSS, and React. Check it out on <a href="https://devpost.com/software/the-trees">Devpost</a>!`,
      img: `./projects/LeafView.png`,
      imgSize: `large-img`
    },
    {
      title: `"RubbleRecon" - Third Place at STEMist Hacks II!`,
      desc: `Teaming up with my friend Gautham Venkateshwaran again, we won third place at yet another hackathon, this one with over 600 participants! The idea was to create an integrated hardware and software solution that could help first responders perform autonomous robotic search-and-rescue missions. I once again worked on gaining experience with React, building the entire frontend in NextJS and TailwindCSS by myself. Gautham handled the hardware. 😉 Take a look on <a href="https://devpost.com/software/rubblerecon">Devpost</a>!`,
      img: `./projects/rubble.png`,
      imgSize: `large-img`
    },
    {
      title: `"Hexonia" - An old labour of love`,
      desc: `This one's one of my oldest projects, created when I just started coding! It was a strategy game I created in raw JS. Excessively complex and a little messy for sure, but definitely super fun to make.`,
      img: `./projects/zhex.png`,
      imgSize: `large-img`
    },
    {
      title: `"Navigation" - A HTML/CSS/JS project`,
      desc: `Out of the desire to practice more with front-end development, and wanting to streamline my online browsing experience, I decided to create a personal new tab page for myself. The premise is quite simple: wouldn't it be nice if, when you opened a new tab, for a single key-press to take you to useful websites? I'm currently in the process of converting it into a Google Chrome Extension and upgrading its functionality, but you can check out an older version at <a href="https://ericli3690.github.io/navigation/">https://ericli3690.github.io/navigation/</a>.`,
      img: `./projects/nav.png`,
      imgSize: `large-img`
    },
    {
      title: `This Website! Now isn't that meta.`,
      desc: `This website has been a joy to create. It's quite simple, but I'm proud of some of the CSS and that background bubbles animation you're watching right now. Can't wait to keep expanding on it!`,
      img: `./projects/howselfreferential.png`,
      imgSize: `med-img`
    },
    {
      title: `Middle End - Coming Soon...`,
      desc: `What's this? A non-profit working to connect clients and developers? Check back soon...`,
      img: `./projects/question-marks.jpg`,
      imgSize: `large-img`
    },
    {
      title: `And even more... "Quarterly", "Technik", "MorningMixer"...`,
      desc: `Hey! These are secret projects, still in development! I'm full of ideas, though, so this list will only continue to grow. More information to come. 😜`,
      img: `./projects/question-marks.jpg`,
      imgSize: `large-img`
    }
  ].forEach(project => {
    const cardRoot = document.createElement("div");
    cardRoot.classList.add("card", "flex-hr", "fade", "dofade");
    flip && cardRoot.classList.add("flex-hr-flip");
  
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img", project.imgSize);
    cardImg.src = project.img;
  
    const cardAside = document.createElement("aside");
    
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    flip ? cardTitle.classList.add("on-left") : cardTitle.classList.add("on-right");
    cardTitle.innerHTML = project.title;
  
    const cardDesc = document.createElement("p");
    cardDesc.classList.add("card-desc");
    flip ? cardDesc.classList.add("on-left") : cardDesc.classList.add("on-right");
    cardDesc.innerHTML = project.desc;
  
    cardAside.appendChild(cardTitle);
    cardAside.appendChild(cardDesc);
  
    if (flip) {
      cardRoot.appendChild(cardAside);
      cardRoot.appendChild(cardImg);
    } else {
      cardRoot.appendChild(cardImg);
      cardRoot.appendChild(cardAside);
    }
  
    document.getElementsByClassName("projects")[0].appendChild(cardRoot);
  
    const horizontalLine = document.createElement("hr");
    document.getElementsByClassName("projects")[0].appendChild(horizontalLine);

    flip = !flip;
  });

  // fading
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