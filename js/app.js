
/* ===== トップ写真スライドショー ===== */

document.addEventListener("DOMContentLoaded", () => {

  // スライドショーの画像を取得
  const slides = document.querySelectorAll(".inh-hero img");

  // 画像が2枚未満なら何もしない
  if (slides.length < 2) return;

  // アニメーションを減らす設定を尊重
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  // 現在表示している写真の番号
  let current = 0;

  // 6000ミリ秒（6秒）ごとに切り替える
  setInterval(() => {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
  }, 6000);

});

