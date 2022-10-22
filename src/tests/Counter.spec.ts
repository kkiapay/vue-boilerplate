import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { increment } from "@/utils/functions";
import counterButtonVue from "@/components/counter-button.vue";
// import HelloWorld from "../HelloWorld.vue";

// describe("HelloWorld", () => {
//   it("renders properly", () => {
//     const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
//     expect(wrapper.text()).toContain("Hello Vitest");
//   });
// });

describe("Counter", () => {
  it("should increment properly", () => {
    expect(increment(5)).toBe(6);
  });
  it("should count properly", async () => {
    const wrapper = mount(counterButtonVue);
    await wrapper.trigger("click");
    expect(wrapper.text()).toContain("1");
  });
});
