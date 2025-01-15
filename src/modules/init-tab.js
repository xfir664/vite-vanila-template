import TabClass from "../classes/tab/tab";

export function initTab() {
  const tab = new TabClass(".new-tabs", {
    tabBtnsName: ["tab 1", "tab 3", "tab 2"],
    tabBtnsClass: "btn-tab",
    tabBtnsClassAtive: "btn-active",
  });
}
