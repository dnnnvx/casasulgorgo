# Casa sul Gorgo

SvelteKit site for [casasulgorgo](https://casasulgorgo.net).

```sh
npm run dev
npm run check
npm run lint
```

## Where things live

```
src/
  routes/[locale=locale]/   one folder per page; pages compose components, little CSS of their own
  lib/
    components/
      ui/        generic building blocks: Button, Card, PageHeader, SectionHeading, IconList/IconItem…
      site/      layout chrome: header, footer, SEO, switches, map
      nature/    species & season widgets: SpeciesCard, SpeciesGrid, YearGrid…
      home/      blocks used only by the home page
      art/       pixel-art rendering: Scene, Pixels, SpriteIcon
    art/         pixel/isometric drawing engine and scene sprites
    nature/      the catalogue: species data, groups, seasons, themes
    i18n/
      messages/<locale>/   UI text split per page (common.ts + one file per page); `it` defines the shape
    config/      site URL, place coordinates
    forms/       field rules shared by form pages and their server actions
    server/      server-only code
    styles/      tokens.css (all raw values), base.css (elements), utilities.css (.wrap, .section, .cluster, .overline…)
```

## Conventions

- Import through `#lib/...`, never relative paths across folders.
- Colours, spacing, sizes and defaults come from `styles/tokens.css`; add a token rather than a raw value.
- A pattern used on two or more pages becomes a component in `components/ui` (or the matching domain folder).
- Adding a page: create the route, add `messages/it/<page>.ts` and `messages/en/<page>.ts`, register both in each locale's `index.ts`.
