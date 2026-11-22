
// 共通ヘッダーを読み込む
(async function () {

  // このスクリプト自身の場所を基準にする
  const scriptUrl = document.currentScript.src;

  // components/header.html の場所を取得
  const headerUrl = new URL(
    "../components/header.html",
    scriptUrl
  );

  // ヘッダーの挿入先
  const headerArea = document.getElementById("site-header");

  if (!headerArea) {
    console.error("ヘッダーの挿入先が見つかりません。");
    return;
  }

  try {
    // HTMLを取得
    const response = await fetch(headerUrl);

    if (!response.ok) {
      throw new Error("ヘッダーを読み込めませんでした。");
    }

    // HTMLを挿入
    const html = await response.text();
    headerArea.outerHTML = html;

  } catch (error) {
    console.error("共通ヘッダーの読み込みエラー:", error);
  }

})();
