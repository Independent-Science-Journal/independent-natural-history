
/* ===== 写真帖の機能 ===== */

// 写真一覧と検索欄を取得
const photos = document.querySelectorAll(".gallery-grid .gallery-item");
const category = document.getElementById("gallery-category");
const search = document.getElementById("gallery-search");
const empty = document.getElementById("gallery-empty");

// 共通の拡大画面
const dialog = document.getElementById("photo-dialog");
const preview = document.getElementById("photo-dialog-image");

// ===== 写真を拡大する =====
photos.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");

    if (!img || !dialog || !preview) return;

    preview.src = img.src;
    preview.alt = img.alt;
    dialog.showModal();
  });
});

// ===== ジャンルとキーワードで絞り込む =====
function filterGallery() {
  const selected = category.value;
  const keyword = search.value.trim().toLowerCase();
  let count = 0;

  photos.forEach((photo) => {

    // 写真の分類
    const genre = photo.dataset.category;

    // 写真の名前と検索タグ
    const title = photo.querySelector("figcaption")?.textContent || "";
    const tags = photo.dataset.tags || "";
    const words = (title + " " + tags).toLowerCase();

    // ジャンルが一致するか
    const matchGenre =
      selected === "all" || genre === selected;

    // キーワードが含まれるか
    const matchWord = words.includes(keyword);

    // 両方一致する写真だけ表示
    const visible = matchGenre && matchWord;

    photo.hidden = !visible;

    if (visible) count++;
  });

  // 検索結果が0件なら案内を表示
  empty.hidden = count !== 0;
}

// ジャンルを変えたら再検索
category.addEventListener("change", filterGallery);

// 文字を入力するたびに検索
search.addEventListener("input", filterGallery);
