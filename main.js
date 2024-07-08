const sheet = new CSSStyleSheet();
sheet.id = 'insomnia-plugin-hide-history';
sheet.replaceSync(`.pane__header__right {display: none!important}`);

// remove previous style sheet
document.adoptedStyleSheets = document.adoptedStyleSheets
  ?.filter(it => it.id !== sheet.id) ?? [];

// apply style sheet
document.adoptedStyleSheets.push(sheet);