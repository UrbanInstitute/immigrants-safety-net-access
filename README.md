# Supporting North Carolina’s Immigrant Families

## Project details

This repo powers the Urban Institute data tool “Supporting North Carolina’s Immigrant Families”. The application focuses on characteristics of immigrant residents to inform more effective policy and practice.

- Developer: Ben Kates
- Designer: Brittney Spinner
- Writer: Wes Jenkins
- Research team: Hamutal Bernstein and Jennifer M. Haley (co-PIs), Diana Guelespe (project manager), Luis Gallardo, and Sofia Hinojosa

### Hosting Location

The production URL is https://apps.urban.org/features/safety-net-nc

The above link (this app) is then iframed here: https://www.urban.org/projects/immigrants-safety-net-access

#### "Return to top" button

In order to let the Pym child to control the parent to scroll to a specific part of the page, the CMS needs a blank div with id "data-tool" to be added to the page.

## Data

The main data source is ingested in to the `/R/safety-net-nc.qmd` script. The data is then transformed and saved to `/src/data` as `birth-data.json` and `main-data.json`. The last chunk in the quarto doc creates the `datawrapper.csv` file that gets uploaded to Datawrapper.

## Datawrapper

The Datawrapper is configured in the web editor and available at the following link: https://datawrapper.dwcdn.net/RMnkX/

Then, it's iframed in the `lib/DatawrapperIframe.svelte` component, adding the Datawrapper [responsive width script](https://developer.datawrapper.de/docs/responsive-iframe) and the [chart interaction event script](https://developer.datawrapper.de/docs/listening-to-chart-interaction-events) in order to expose mouse events.

In the Svelte component, `datawrapper.on("region.click", (e) => {})` will attach a callback to the choropleth region click. In this case, we're attaching to a Svelte store.

## Svelte Store

When the Datawrapper interaction events change the Svelte store, the selected FIPS code filters the two data sources (`main-data.json` and `birth-data.json`) and a dervied store makes the current data available to the UI components.

## Developing

The site is built using Svelte. See `src/` directory for project files.

To install dependencies:

```bash
npm i
```

To run the development server

```bash
npm run dev
```
