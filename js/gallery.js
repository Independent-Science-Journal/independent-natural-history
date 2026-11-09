
/* ===== 写真帖：拡大表示・分類・検索 ===== */

// 写真一覧を取得
const photos = document.querySelectorAll(
  ".gallery-grid .gallery-item"
);

// 検索・分類の操作欄
const category = document.getElementById("gallery-category");
const search = document.getElementById("gallery-search");
const empty = document.getElementById("gallery-empty");

// 拡大表示用の共通画面
const dialog = document.getElementById("photo-dialog");
const preview = document.getElementById("photo-dialog-image");


// ===== ① 写真の拡大表示 =====

photos.forEach((button) => {

  button.addEventListener("click", () => {

    // 選択された写真
    const image = button.querySelector("img");

    if (!image || !dialog || !preview) return;

    // 拡大画面に画像を表示
    preview.src = image.src;
    preview.alt = image.alt;

    dialog.showModal();

  });

});


// ===== ② ジャンル・キーワード検索 =====

function filterGallery() {

  // 選択中のジャンル
  const selected = category?.value || "all";

  // 入力された検索文字
  const keyword = (search?.value || "")
    .trim()
    .toLowerCase();

  // 表示できる写真の数
  let count = 0;

  photos.forEach((photo) => {

    // 写真に登録されたジャンル
    const genre = photo.dataset.category || "";

    // 写真の題名
    const title =
      photo.querySelector("figcaption")?.textContent || "";

    // 検索用タグ
    const tags = photo.dataset.tags || "";

    // 検索対象となる文字
    const words = (title + " " + tags).toLowerCase();

    // ジャンルが一致するか
    const matchCategory =
      selected === "all" || genre === selected;

    // キーワードが一致するか
    const matchKeyword = words.includes(keyword);

    // 両方一致した写真だけ表示
    const visible = matchCategory && matchKeyword;

    photo.hidden = !visible;

    if (visible) count++;
  });

  // 検索結果が0件ならメッセージ表示
  if (empty) {
    empty.hidden = count !== 0;
  }
}


// ===== ③ 操作時に検索を実行 =====

// ジャンルを変更したとき
category?.addEventListener("change", filterGallery);

// 検索文字を入力したとき
search?.addEventListener("input", filterGallery);

// 最初の表示状態も整える
filterGallery();
