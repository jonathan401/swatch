const productCards = document.querySelector(".product-cards");

const colorMap = {
  blackFemale: {
    src: "images/clothes/women's_flash_jacket_black.jpg",
    alt: "woman wearing black jacket",
    color: {
      colorValue: "black",
      colorText: "Black",
    },
  },
  brown: {
    src: "images/clothes/brown_jacket_cropped.jpg",
    alt: "man wearing brown jacket",
    color: {
      colorValue: "rgb(66, 36, 26)",
      colorText: "Brown",
    },
  },
  brownFemale: {
    src: "images/clothes/women's_flash_jacket_brown_front.jpg",
    alt: "lady wearing light brown jacket",
    color: {
      colorValue: "rgb(110, 61, 46)",
      colorText: "Brown",
    },
  },
  black: {
    src: "images/clothes/black_jacket_cropped.jpg",
    alt: "man wearing black jacket",
    color: {
      colorValue: "black",
      colorText: "Black",
    },
  },
  red: {
    src: "images/clothes/women's_flash_jacket_red_front.jpg",
    alt: "lady wearing red flash jacket",
    color: {
      colorValue: "rgb(202, 62, 61)",
      colorText: "Red",
    },
  },
  teal: {
    src: "images/clothes/women's_flash_jacket_teal.jpg",
    alt: "lady wearing teal flash jacket",
    color: {
      colorValue: "rgb(65, 92, 113)",
      colorText: "Teal",
    },
  },
  silver: {
    src: "images/clothes/women's_cole_silver.jpg",
    alt: "lady wearing silver jacket",
    color: {
      colorValue: "silver",
      colorText: "Silver",
    },
  },
};

const productData = [
  {
    id: "men",
    title: "Men's Sven jacket",
    price: "$50",
    colors: ["brown", "black"],
  },
  {
    id: "women",
    title: "Women's flash jacket",
    price: "$120",
    colors: ["brownFemale", "red", "teal", "blackFemale"],
  },
  {
    id: "limited",
    title: "Women's cole jacket",
    price: "$200",
    colors: ["silver"],
  },
];

const generateCards = (title, price, colors, id) => {
  let html = `
    <article class="product-card" id=${id}>
      <div class="product-image">
        <img
          src="${colorMap[colors[0]].src}"
          alt="${colorMap[colors[0]].alt}"
        />
      </div>
      <div class="product-card-body">
        <h2>${title}</h2>
        <div class="pricing" aria-label="price">
          <span class="price">${price}</span>
        </div>
        <div class="colors">
          <h3 id=${id} class="color-label">colors: <span>${
    colorMap[colors[0]].color.colorText
  }</span></h3>
          <ul class="color-buttons">
            ${colors
              .map((color) => {
                return `
                <li>
                  <button class="color-button" data-color="${color}"></button>
                </li>
                `;
              })
              .join("")}
          </ul>
        </div>
      </div>
    </article>
  `;
  console.log(colors[0]);
  productCards.innerHTML += html;
};

// update card based on btn data attribute
const updateCard = (img, btn, labelText) => {
  let btnKey = btn.getAttribute("data-color");
  img.src = colorMap[btnKey].src;
  img.alt = colorMap[btnKey].alt;
  labelText.textContent = `colors: ${colorMap[btnKey].color.colorText}`;
};

productData.forEach((product) => {
  generateCards(product.title, product.price, product.colors, product.id);
});

const cards = document.querySelectorAll("article.product-card");
cards.forEach((card) => {
  const productImage = card.querySelector(".product-image img");
  let colorBtns = card.querySelectorAll(".color-button");
  let colorLabel = card.querySelector(".color-label");

  colorBtns.forEach((colorBtn) => {
    let colorKey = colorBtn.getAttribute("data-color");
    colorBtn.style.backgroundColor = colorMap[colorKey].color.colorValue;
  });

  card.addEventListener("click", (e) => {
    if (e.target.classList.contains("color-button")) {
      updateCard(productImage, e.target, colorLabel);
    }
  });
});
