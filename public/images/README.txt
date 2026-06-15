Place your images here, then reference them from src/data.js:

  portrait.jpg   — your headshot (portrait, ~4:5)
  passmap.jpg    — project screenshot (landscape, ~16:11)
  fabpad.jpg
  cocktail.jpg
  fridge.jpg
  mars.jpg
  magna.jpg

Anything in /public is served from the site root, so a file at
/public/images/portrait.jpg is referenced as "/images/portrait.jpg".

Until you add real files the <img> tags will show a broken-image icon — that's
expected. Sizes/crops are handled by CSS (object-fit: cover), so any reasonable
resolution works.
