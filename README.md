# Van Gogh Memory

A memory card game built for [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card)'s Memory Card project, reskinned with a museum theme.

## How to play

Click each painting once. Score goes up with every new painting you click. Click a painting you've already clicked, and the round ends — try to beat your best score.

## About

Instead of a static set of images, this app pulls artwork data live from [The Metropolitan Museum of Art's Open Access API](https://metmuseum.github.io/). A curated set of twelve Van Gogh paintings is shuffled into a new layout after every click, with each card fetching its own title, year, and image directly from the Met's collection.

The visual design is styled after a museum gallery wall — each painting sits inside a gilded frame (built with CSS `border-image` 9-slice, so the ornate corners hold their shape no matter the artwork's aspect ratio), with a small plaque underneath showing the title and year, set against a deep gallery-green background.

## Built with

- React
- The Met Museum's Open Access API
- Plain CSS (Fisher–Yates shuffle for randomizing card order, `border-image` for the frames)

## Features

- Live data fetched per card from the Met API, with a loading skeleton and a fallback state if a fetch fails
- Fetched artwork is cached by object ID, so re-shuffling the board never re-fetches data that's already been loaded
- Responsive grid layout
- Keyboard-accessible cards (focus + Enter/Space support)
- Win state with a restart option once all twelve paintings are found without a repeat