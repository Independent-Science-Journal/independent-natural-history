/* ===== トップ写真スライドショー ===== */

document.addEventListener("DOMContentLoaded", () => {

  const hero = document.querySelector("#inh-hero");
  if (!hero) return;

  // 最初に表示する固定写真
  const mainImage =
    "48BC8054-AE9A-4689-8C25-32C1762E20E7.jpeg";

  // 2枚目以降の写真
  const images = [
    "8641A3C0-ABE7-4A56-88E3-F4BEF90CC3BA.jpeg",
    "D4098F95-379F-43F8-B6D3-4A051EBE4122.jpeg",
    "IMG_0755.jpeg",
    "IMG_1539.jpeg",
    "IMG_2410.jpeg",
    "IMG_7678.jpeg"
  ];

  // 写真の順番をランダムにする
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  // 固定写真を先頭にして、ランダム写真を続ける
  const photoList = [mainImage, ...images];

  // 写真をHTMLに追加
  photoList.forEach((file, index) => {
    const img = document.createElement("img");

    img.src = `images/top/${file}`;
    img.alt = "私設博物誌の活動写真";

    if (index === 0) {
      img.classList.add("active");
    }

    hero.appendChild(img);
  });

  const slides = hero.querySelectorAll("img");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
  }, 6000);

});
