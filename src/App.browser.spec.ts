import { describe, test, expect } from "vitest";
import { render } from "vitest-browser-vue";
import App from "./App.vue";

describe("App.vue", () => {
  test("「トップへ」ボタンをクリックすると最上部へスクロールされる", async () => {
    const screen = render(App);

    // 最初は画面の一番下までスクロール
    window.scrollTo(0, document.body.scrollHeight);

    // 「トップへ」ボタンをクリック
    const topButton = screen.getByRole("button", { name: "トップへ" });
    await topButton.click();

    // スクロール位置が最上部（0）になっていることを確認
    expect(window.scrollY).toBe(0);
  });
});
