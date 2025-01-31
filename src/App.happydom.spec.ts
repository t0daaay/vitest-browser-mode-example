import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/vue";
import App from "../src/App.vue";

describe("App.vue", () => {
  it("「トップへ」ボタンをクリックすると最上部へスクロールされる", async () => {
    // window.scrollTo をモック化
    window.scrollTo = vi.fn();

    // コンポーネントを描画
    render(App);

    // 「トップへ」ボタンをクリック
    const topButton = screen.getByRole("button", { name: "トップへ" });
    await topButton.click();

    // 呼び出しの引数を検証
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
    });
  });
});
