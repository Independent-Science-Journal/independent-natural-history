
/* ===== 写真帖の共通拡大表示 ===== */

// 拡大画面を取得
const dialog = document.getElementById("photo-dialog");

// 拡大画面内の画像を取得
const preview = document.getElementById("photo-dialog-image");

// 写真一覧にあるすべてのボタンを取得
const photos = document.querySelectorAll(
  ".gallery-grid .gallery-item"
);

// 写真1枚ずつにクリック処理を設定
photos.forEach((button) => {

  button.addEventListener("click", () => {

    // 押されたボタン内の画像を取得
    const image = button.querySelector("img");

    if (!image || !dialog || !preview) return;

    // 拡大画面の写真を入れ替える
    preview.src = image.src;
    preview.alt = image.alt;

    // 拡大画面を開く
    dialog.showModal();

  });

});
