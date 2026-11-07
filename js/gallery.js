
/* ===== 写真帖の拡大表示 ===== */

// 写真一覧のボタンをすべて取得する
const photoButtons = document.querySelectorAll(
  "[data-gallery-dialog]"
);

// ボタンを一つずつ設定する
photoButtons.forEach((button) => {

  // 対応する拡大画面を取得
  const id = button.dataset.galleryDialog;
  const dialog = document.getElementById(id);

  if (!dialog) return;

  // 写真を押したら拡大画面を開く
  button.addEventListener("click", () => {
    dialog.showModal();
  });

});
