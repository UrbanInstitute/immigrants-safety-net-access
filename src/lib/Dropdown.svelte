<script>
  import Select from "svelte-select";
  import { selectedCounty } from "../stores/selectedCounty";
  import mainData from "../data/main-data.json";
  import { logClickToGA } from "../analytics";

  let countyDropdownData;

  countyDropdownData = mainData.map((d) => {
    return {
      value: d.fips,
      label: d.name,
    };
  });

  countyDropdownData.unshift({
    value: null,
    label: "North Carolina",
  });

  $: countyObject = countyDropdownData.find((d) => d.value === $selectedCounty);

  const chevronPath =
    "M15.1313 0.666626C15.5179 0.666626 15.7794 0.846014 15.9272 1.20479C16.0749 1.56356 15.9954 1.85507 15.7111 2.09052L8.65117 9.12027C8.45791 9.26602 8.2419 9.33329 8.00316 9.33329C7.76442 9.33329 7.57115 9.26602 7.42335 9.12027L0.283802 2.09052C-0.000415318 1.85507 -0.0686276 1.55235 0.0677969 1.20479C0.21559 0.846014 0.477071 0.666626 0.863607 0.666626H15.1313Z";
</script>

<div class="title-container">
  <div class="select-dropdown">
    <Select
      items={countyDropdownData}
      placeholder={"North Carolina"}
      showChevron={true}
      bind:justValue={$selectedCounty}
      value={countyObject}
      clearable={false}
      on:select={(e) => {
        logClickToGA(
          e.detail.target,
          `county-dropdown-select--${e.detail.label}`
        );
      }}
    >
      <!-- chevron, note: importing the SVG as a component per the docs resulted in an error -->
      <div slot="chevron-icon">
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><path d={chevronPath} fill="var(--color-black)" /></svg
        >
      </div>
    </Select>
  </div>
  {#if $selectedCounty}
    <div
      class="view-nc"
      role="button"
      tabindex="0"
      on:click={(e) => {
        selectedCounty.set(null);
        logClickToGA(e.currentTarget, `view-nc-data`);
      }}
      on:keypress={(e) => {
        selectedCounty.set(null);
        logClickToGA(e.currentTarget, `view-nc-data`);
      }}
    >
      View North Carolina State Data
    </div>
  {/if}
</div>

<style>
  .title-container {
    padding: 3.5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    row-gap: 1.5rem;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 500px) {
    .title-container {
      padding: 2rem 0;
    }
  }

  /* cursor for input */
  :global(.select-dropdown input) {
    cursor: pointer !important;
    text-transform: uppercase !important;
    font-family: var(--font-family-sans) !important;
  }

  :global(.select-dropdown .indicators) {
    cursor: pointer !important;
  }

  /* select list position */
  :global(.select-dropdown .svelte-select-list) {
    top: 2.75rem !important;
  }

  /* scrollbar */

  :global(.select-dropdown .svelte-select-list::-webkit-scrollbar) {
    width: 0.625rem;
  }

  :global(.select-dropdown .svelte-select-list::-webkit-scrollbar-track) {
    background: var(--color-gray-shade-lightest);
  }

  :global(.select-dropdown .svelte-select-list::-webkit-scrollbar-thumb) {
    background: var(--color-gray-shade-dark);
    border: 1px solid var(--color-gray-shade-dark);
  }

  :global(.select-dropdown .selected-item) {
    font-size: 1rem !important;
  }

  :global(.select-dropdown .svelte-select-list) {
    font-size: 1rem !important;
  }

  :global(.select-dropdown .selected-item) {
    font-size: 1.875rem !important;
    text-transform: uppercase !important;
  }

  :global(.select-dropdown .svelte-select-list) {
    font-size: 1rem !important;
  }

  /* END SCROLLBAR */

  /* css vars */
  .select-dropdown {
    border-bottom: 3px solid var(--color-yellow);
    /* display: flex;
    justify-content: right; */

    /* overall */
    --width: fit-content;
    --height: 2.75rem;
    --max-height: 2.75rem;
    --margin: 0;
    --padding: 0 0 0 0;
    --selected-item-padding: 0 0.25rem;
    --value-container-padding: 0;
    --placeholder-color: var(--color-black);

    /* font */
    --font-size: 1.875rem !important;
    --font-family: var(--font-family-sans) !important;

    /* border */
    --border: 0;
    --border-radius: 0;
    --border-radius-focused: 0;
    --border-hover: 0;
    --border-focused: 0;

    /* list */
    --list-border-radius: 0;
    --item-first-border-radius: 0;
    --input-padding: 0;
    --internal-padding: 0;
    --item-padding: 0 var(--spacing-2) 0 var(--spacing-2);

    /* items */
    --item-color: var(--color-gray-shade-darker);
    --item-is-active-bg: var(--color-yellow);
    --item-is-active-color: var(--color-black);
    --item-hover-bg: var(--color-gray-shade-lightest);
    --selected-item-color: var(--color-black);

    /* chevron */
    --chevron-color: var(--color-black);
    --chevron-icon-colour: var(--color-black);
    --icons-color: var(--color-black);
  }

  .view-nc {
    display: list-item;
    list-style-type: "<<";
    margin-left: 1rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: right;
    text-decoration-line: underline;
    text-decoration-color: #d2d2d2;
    text-decoration-thickness: 0.0625rem;
    text-underline-offset: 0.75rem;
    justify-self: right;
  }
  .view-nc:hover {
    cursor: pointer;
  }
</style>
