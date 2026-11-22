(async function () {
  const script = document.currentScript;

  const headerUrl = new URL(
    "../components/header.html",
    script.src
  );

  const headerArea = document.getElementById("site-header");

  if (!headerArea) {
    console.error("ヘッダーの挿入先が見つかりません");
    return;
  }

  try {
    const response = await fetch(headerUrl);

    if (!response.ok) {
      throw new Error("ヘッダーの読み込みに失敗しました");
    }

    const html = await response.text();

    // 挿入用divを取り除き、ヘッダー本体に置き換える
    headerArea.outerHTML = html;

  } catch (error) {
    console.error(error);
  }
})();
