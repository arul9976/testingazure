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

  NavLink.forEach(Nav => {
    Nav.addEventListener('click', () => {
      document.querySelector('.active')?.classList.remove('active')
      Nav.classList.add('active')
      navList.classList.remove('show')
      toggle.classList.remove('active')
      toggleSet.classList.remove('active')
    });

  });

  window.onscroll = () => {
    Section.forEach(SectionOn => {
      let top = window.scrollY;
      let offset = SectionOn.offsetTop - 60;
      let height = SectionOn.offsetHeight;
      let id = SectionOn.getAttribute('id');


      if (top >= offset && top < offset + height) {
        NavLink.forEach(link => {
          // document.querySelector('.nav_list .navitem[class*=' + id + ']').classList.add('active');
          document.querySelector('.nav_list a[href*=' + id + ']').classList.add('active');
          link.classList.remove('active');
        });
      }
    });
  };



}
btnToggle('myNavbar', 'btn')




// const myName = document.querySelector('.myName')
// setTimeout(() => {
//   myName.className = "newName"
// }, 3000)




// let number = document.getElementById("number");
// let counter = 0;

// setInterval(() => {
//   if (counter == "90") {
//     clearInterval();
//   } else {
//     counter += 1;
//     number.innerHTML = counter + "%"
//   };

// }, 20);

// let number1 = document.getElementById("number1");
// let counter1 = 0;
// setInterval(() => {
//   if (counter1 == "75") {
//     clearInterval();
//   } else {
//     counter1 += 1;
//     number1.innerHTML = counter1 + "%"
//   };
// }, 25);

// let number2 = document.getElementById("number2");
// let counter2 = 0;
// setInterval(() => {
//   if (counter2 == "50") {
//     clearInterval();
//   } else {
//     counter2 += 1;
//     number2.innerHTML = counter2 + "%"
//   };
// }, 40);

const darkBtn = document.querySelector('.dark')
const body = document.getElementById('bodyLD')


darkBtn.addEventListener('click', () => {
  body.classList.toggle('bodyDark')
  darkBtn.classList.toggle('active')
})


// const Copied = boxadd.children[0].cloneNode(true)
// const newDiv = document.createElement('div')
// console.log(newDiv);


function double() {
  // const svg = document.querySelector('.svg')
  // const clonesvg = svg.cloneNode(true)
  // const circle = document.querySelector('.circle')
  // const cloneCircle = circle.cloneNode(true)

  // const newEl = document.createElement('div')
  // newEl.className = 'boxContent'
  // newEl.append(clonesvg)
  // newEl.append(cloneCircle)
  // console.log(newEl);

}


const progressbar = document.querySelectorAll('.circle')
const progressNum = document.getElementById('progressValues')
const progressNumCss = document.getElementById('progressValuesCss')
const progressNumJs = document.getElementById('progressValuesJs')
const progressNumFour = document.getElementById('progressValuesFour')
const boxadd = document.querySelector('.box')

function progress() {
  let startvalue = 0,
    endvalue = { 0: 90, 1: 80, 2: 50, 3: 30 },

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
}
progress()


document.getElementById("copy").onclick = function(){
  var copyText = document.getElementById("copyText").textContent + "kumar";
  clipboard.writeText(copyText)
  // navigator.clipboard.writeText(copyText.textContent)
}

const copyIcon = document.getElementById('copy');
console.log(copyIcon);

copyIcon.addEventListener('click', () => {
  copyIcon.classList.add("Iactive");

  setTimeout(() => {
    const valueNew = copyIcon.innerHTML = "<ion-icon id='copy' name='checkmark-outline'></ion-icon>";
  }, 100)
 
 

  setTimeout(() => {
    const valueNew = copyIcon.innerHTML = "<ion-icon id='copy' name='copy-outline'></ion-icon>";
    copyIcon.classList.remove("Iactive")
    copyIcon.classList.add("Active")
  }, 3000);
  

  console.log(valueNew);
})

