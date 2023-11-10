// const navbar = document.querySelector('.sticky-top')
// window.addEventListener('scroll', () => {
//   navbar.classList.toggle('sticky' , this.window.scrollY > 5)
// })

// Scroll 

function btnToggle(navId, toggleId) {
  const navList = document.getElementById(navId)//navId
  const toggle = document.getElementById(toggleId)//toggleId
  const Section = document.querySelectorAll('section')
  const NavLink = document.querySelectorAll('.nav_list a')
  const toggleSet = document.querySelector('.toggle_set')

  if (navList && toggle) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('show')
      toggle.classList.toggle('active')
      toggleSet.classList.toggle('active')

    })
  }

  window.onscroll = () => {
    Section.forEach(SectionOn => {
      let top = window.scrollY;
      let offset = SectionOn.offsetTop - 60;
      let height = SectionOn.offsetHeight;
      let id = SectionOn.getAttribute('id');

      if (top >= offset && top < offset + height) {
        NavLink.forEach(links => {
          document.querySelector('.nav_list a[href*=' + id + ']').classList.add('active');
          links.classList.remove('active');
        });
      }
    });
  };

  NavLink.forEach(Nav => {
    Nav.addEventListener('click', () => {
      document.querySelector('.active')?.classList.remove('active')
      Nav.classList.add('active')
      navList.classList.remove('show')
      toggle.classList.remove('active')
      toggleSet.classList.remove('active')
    });

  });

}
btnToggle('myNavbar', 'btn')

const darkBtn = document.querySelector('.dark')
const body = document.getElementById('bodyLD')


darkBtn.addEventListener('click', () => {
  body.classList.toggle('bodyDark')
  darkBtn.classList.toggle('active')
})


const progressbar = document.querySelectorAll('.circle')
const progressNum = document.getElementById('progressValues')
const progressNumCss = document.getElementById('progressValuesCss')
const progressNumJs = document.getElementById('progressValuesJs')
const progressNumFour = document.getElementById('progressValuesFour')
const progressNumFive = document.getElementById('progressValuesPython')
const progressNumSix = document.getElementById('progressValuesNodeJs')
const boxadd = document.querySelector('.box')

function progress() {
  let startvalue = 0,
    endvalue = { 0: 90, 1: 80, 2: 50, 3: 30, 4: 75, 5: 50 },

    speed = 20;

  const progressEl = setInterval(() => {
    startvalue++
    progressNum.textContent = `${startvalue}%`
    progressbar[0].style.background = `conic-gradient(var(--clr) ${startvalue * 3.6}deg, #c5c0c0 0deg)`

    if (startvalue == endvalue[0]) {
      clearInterval(progressEl)
    }
  }, speed);

  const progresscss = setInterval(() => {
    progressNumCss.textContent = `${startvalue}%`
    progressbar[1].style.background = `conic-gradient(var(--clr) ${startvalue * 3.6}deg, #c5c0c0 0deg)`

    if (startvalue == endvalue[1]) {
      clearInterval(progresscss)
    }
  }, speed);

  const progressjs = setInterval(() => {
    progressNumJs.textContent = `${startvalue}%`
    progressbar[2].style.background = `conic-gradient(var(--clr) ${startvalue * 3.6}deg, #c5c0c0 0deg)`

    if (startvalue == endvalue[2]) {
      clearInterval(progressjs)
    }
  }, speed);

  const progressFour = setInterval(() => {
    progressNumFour.textContent = `${startvalue}%`
    progressbar[3].style.background = `conic-gradient(var(--clr) ${startvalue * 3.6}deg, #c5c0c0 0deg)`

    if (startvalue == endvalue[3]) {
      clearInterval(progressFour)
    }
  }, speed);

  const progressFive = setInterval(() => {
    progressNumFive.textContent = `${startvalue}%`
    progressbar[4].style.background = `conic-gradient(var(--clr) ${startvalue * 3.6}deg, #c5c0c0 0deg)`

    if (startvalue == endvalue[4]) {
      clearInterval(progressFive)
    }
  }, speed);

  const progressSix = setInterval(() => {
    progressNumSix.textContent = `${startvalue}%`
    progressbar[5].style.background = `conic-gradient(var(--clr) ${startvalue * 3.6}deg, #c5c0c0 0deg)`

    if (startvalue == endvalue[5]) {
      clearInterval(progressSix)
    }
  }, speed);
}
progress()

function myCopy() {
  const Id = document.querySelectorAll(".copy")

  Id.forEach(ids => {
    ids.addEventListener('click', () => {
      document.querySelector('.Iactive')?.classList.remove('Iactive')
      ids.classList.add('Iactive')

      const Copy = document.querySelectorAll('.Iactive');
      Copy.forEach(ForCopy => {
        clipboard.writeText(ForCopy.title)
        ForCopy.innerHTML = "<ion-icon id='copy' name='checkmark-outline'></ion-icon>";

        setTimeout(() => {
          ForCopy.classList.replace('Iactive', 'Active')
          ForCopy.innerHTML = "<ion-icon id='copy' name='copy-outline'></ion-icon>";
        }, 3000);

        setTimeout(() => {
          ForCopy.classList.remove("Active")
        }, 4000);

      });

    });

  });

}
myCopy()

//SocialElement
const socialEl = document.getElementById('SocialEl').cloneNode(true);
const footSocial = document.getElementById('Footsocial');
const homeSocial = document.querySelector('.homeSocial');
const FootEl = homeSocial.appendChild(socialEl).cloneNode(true);
footSocial.appendChild(FootEl);


//mailbar
const mailBar = document.getElementById('mailbar').cloneNode(true)

console.log(mailBar);
// const clonemail = document.querySelector('.copybar')
// clonemail.appendChild(mailBar)

///////////////////////////////

//about

const myAbout = ["I've been teaching myself programming for the past year. While I'm not a college graduate and have no plans to attend ",
  "I am dedicated to expanding my knowledge of both front - end and back - end programming.",
  "Currently, I'm gradually learning how to create and manage websites, as well as picking up some React skills.",
  "I have some previous experience with Python, having learned the basics during my twelfth - grade studies."
]

const aboutLI = document.querySelector('.text');

// myAbout.forEach(eachAbout => {
//   const ListEl = document.createElement('li');
//   aboutLI.appendChild(ListEl)
//   ListEl.append(eachAbout)

// });
  // console.dir(myAbout[0]);