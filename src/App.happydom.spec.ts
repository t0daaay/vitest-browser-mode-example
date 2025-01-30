import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../src/App.vue";

describe("App.vue", () => {
  it("「トップへ」ボタンをクリックすると最上部へスクロールされる", async () => {
    // window.scrollTo をモック化
    window.scrollTo = vi.fn();

    const wrapper = mount(App);

    // 「トップへ」ボタンをクリック
    await wrapper.find('[data-test="to-top-button"]').trigger("click");

    // 呼び出しの引数を検証
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
    });
  });
});
