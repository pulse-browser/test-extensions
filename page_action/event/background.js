console.log(browser);
let exec = 1;

browser.pageAction.onClicked.addListener((...args) =>
  console.log("extension click event", args, exec++)
);
