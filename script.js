
let flag = "material-icons";
let input = document.getElementById("text");
let message = document.querySelector('.message')
let poster = document.querySelector('.poster')
let model = document.querySelector('dialog')
model.showModal()
let ic = document.getElementById("ic");
let box = document.getElementById("box");
input.addEventListener("input", () => {
  removeAll();
  let text = input.value;
  switch (flag) {
    case "material-icons":
      renderIcon("material-icons", text);
      break;
    case "material-symbols-outlined":
      renderIcon("material-symbols-outlined", text);
      break;
    case "material-symbols-sharp":
      renderIcon("material-symbols-sharp", text);
      break;
    case "3":
      renderIcon2(text);
      break;
    case "4":
      renderIcon3(text);
      break;
    case "5":
      renderIconEmoji(text);

      break;
  }
});

function renderIcon(name, text) {
  for (let icon of icons) {
    if (icon.includes(text)) {
      let i = document.createElement("i");
      i.className = name;
      i.id = "icon";
      i.textContent = icon;
      applyEvent(i);
      box.appendChild(i);
    }
  }
}
function renderIcon2(text) {
  for (let icon of icons2) {
    if (icon.includes(text)) {
      let i = document.createElement("i");
      i.className = icon;
      i.id = "icon";
      applyEvent(i);
      box.appendChild(i);
    }
  }
}
function renderIconFontAwesom() {
  for (let icon of icons2) {
    let i = document.createElement("i");
    i.className = icon;
    i.id = "icon";
    applyEvent(i);
    box.appendChild(i);
  }
}
function renderIcon3(text) {
  for (let icon of bootstrap) {
    if (icon.includes(text)) {
      let i = document.createElement("i");
      i.className = icon;
      i.id = "icon";
      applyEvent(i);
      box.appendChild(i);
    }
  }
}
function renderIconBoot() {
  for (let icon of bootstrap) {
    let i = document.createElement("i");
    i.className = icon;
    i.id = "icon";
    applyEvent(i);
    box.appendChild(i);
  }
}
function renderIcon4() {
  for (let icon of emoji) {
    let i = document.createElement("i");

    i.innerHTML = icon;
    i.id = "icon";
    applyEvent(i);
    box.appendChild(i);
  }
}
function renderIconEmoji(text) {
  for (let icon of emoji) {
    if (icon.includes(text)) {
      let i = document.createElement("i");
      i.innerHTML = icon;
      i.id = "icon";
      applyEvent(i);
      box.appendChild(i);
    }
  }
}

function removeAll() {
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
}

function removeUnderscore(str) {
  return str.replace("_", " ");
}

function updateFlag(e) {
  let icons = document.querySelectorAll("#icon");
  flag = e.value;
  if (
    e.value === "material-icons" ||
    e.value === "material-symbols-outlined" ||
    e.value === "material-symbols-sharp"
  ) {
    replaceClass(icons, e.value);
  } else {
    input.value = "";
    removeAll();
  }

  if (e.value === "5") {
    renderIcon4();
  } else if (e.value === "4") {
    renderIconBoot();
  } else if (e.value === "3") {
    renderIconFontAwesom();
  } else if (e.value == "material-icons") {
    removeAll();
    renderStart();
  }
}

function replaceClass(elements, newClass) {
  elements.forEach(function(element) {
    var classList = element.classList;
    var classesToRemove = Array.from(classList);

    // Remove all existing classes
    classesToRemove.forEach(function(className) {
      classList.remove(className);
    });

    // Add the new class
    classList.add(newClass);
  });
}

function renderStart() {
  for (let icon of icons) {
    let i = document.createElement("i");
    i.className = "material-icons";
    i.id = "icon";
    i.innerHTML = icon;
    applyEvent(i);
    box.appendChild(i);
  }
}
renderStart();
function handleclick(e) {
  alert("he");
  console.log(e.target);
}

function applyEvent(elem) {
  elem.addEventListener("click", (e) => {
    ic.innerHTML = e.target.innerText;
    let clas = ic.className;
    ic.removeAttribute("class", clas);
    let newcls = e.target.className.split(" ");
    newcls.forEach((className) => {
      if (className != "" || className.length != 0) {
        ic.classList.add(className);
      }
    });
    message.classList.add('popup')
    setTimeout(() => {
      message.classList.remove('popup')
    }, 2000)
  });
}

// Get the icon container and download button elements
// Get the icon container and download button elements
const iconContainer = document.getElementById("iconContainer");
const downloadButton = document.getElementById("downloadButton");
let dwnlod = document.querySelector("[data-lod]");
downloadButton.addEventListener("click", () => {
  downLoadIcon(iconContainer,12)
});


function downLoadIcon(elem,quality){
  dwnlod.classList.remove("fa", "fa-download");
  dwnlod.classList.add("fa", "fa-circle-o-notch", "fa-spin");
  html2canvas(elem, {
    backgroundColor: null,
    scale: quality,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "icon.png";
    link.addEventListener("click", () => {
      dwnlod.classList.remove("fa", "fa-circle-o-notch", "fa-spin");
      dwnlod.classList.add("fa", "fa-download");
    });
    link.click();
  });

}


function downloadPoster(){
  downLoadIcon(poster,5)
  closeModel()
}

function openModel(){
  model.showModal()
}
function closeModel(){
  model.close()
}

let lables = document.querySelectorAll("[data-lble]");
let inputs = document.querySelectorAll("[data-input]");
let colorSelector = document.querySelectorAll(".clrinput");

colorSelector.forEach((color, i) => {
  color.addEventListener("input", () => {
    lables[i].style.backgroundColor = color.value;
    inputs[i].value = removeHas(color.value);
    if (i === 0) {
      chageContainerColor(color.value);
    } else {
      changeIconColor(color.value);
    }
  });
});

function removeHas(str) {
  return str.replace(/#/g, "");
}

function changeIconColor(clr) {
  document.getElementById("ic").style.color = clr;
  colorSelector[1].value = clr
}
function chageContainerColor(clr) {
  iconContainer.style.backgroundColor = clr;
  colorSelector[0].value = clr
}

cleave = new Cleave("#colorinput", {
  blocks: [6],
  delimiter: "",
  numericOnly: false,
  noImmediatePrefix: true, //
});
cleave = new Cleave("#colorinput2", {
  blocks: [6],
  delimiter: "",
  numericOnly: false,
  noImmediatePrefix: true,
});

inputs.forEach((input, i) => {
  input.addEventListener("input", () => {
    let cls = "#" + input.value;
    colorSelector[i].value = cls

    lables[i].style.backgroundColor = cls;

    if (i === 0) {
      chageContainerColor(cls);
    } else {
      changeIconColor(cls);
    }
  });
});

let span1 = document.querySelectorAll("#span1");
let span2 = document.querySelectorAll("#span2");
span1.forEach((span) => {
  span.addEventListener("click", (e) => {
    let extractedclr = extractColor(e.target);
    chageContainerColor(extractedclr);
    lables[0].style.backgroundColor = extractedclr;
    inputs[0].value = removeHas(extractedclr);
  });
});
span2.forEach((span) => {
  span.addEventListener("click", (e) => {
    let extractedclr = extractColor(e.target);
    changeIconColor(extractedclr);
    lables[1].style.backgroundColor = extractedclr;
    inputs[1].value = removeHas(extractedclr);
  });
});

function extractColor(element) {
  var styleAttribute = element.getAttribute("style");
  var colorValue = styleAttribute.match(
    /--clr:\s*(#[A-Fa-f0-9]{6}|#[A-Fa-f0-9]{3})/
  );

  if (colorValue && colorValue.length > 0) {
    var hexColor = colorValue[1];
    return hexColor;
  }
}

function showBody() {
  document.querySelector(".loader").style.display = "none";
}


let clr = "#0053a6"

function handleFontSize(e){
  poster.style.fontSize = e.value+"px"
  let icon = poster.querySelector('i')
  if(icon){
   e.max = 100
  }

  icon.style.fontSize = e.value+"px"
}
function handlePosterSize(e){
  poster.style.width = e.value+"px"
}
function handleRadius(e){
  poster.style.borderRadius = e.value+"px"
}
function handleTextColor(e){
  poster.style.color = e.value
}
function handleBgColor(e){
  poster.style.backgroundColor = e.value
  clr = e.value
}

function setHTMLContent(html) {
 
}

function handleHtml(e){
  poster.innerHTML = e.value;
}

function handleRatio(e){
  poster.style.aspectRatio = e.value
}


function handleFontStyle(e){
  const selectedFont = e.value;
    poster.style.fontFamily = selectedFont;

}

function importIcon(){
  poster.innerHTML = iconContainer.innerHTML
  document.getElementById('inputCode').value = poster.innerHTML
}

let ifCheck = false
function handleCheck(e){
if(ifCheck){
  e.textContent = "radio_button_unchecked"
  poster.style.backgroundColor = clr
  ifCheck = false
}else{
  e.textContent = "check_circle"
  poster.style.backgroundColor = "transparent"
  ifCheck = true
}
}


