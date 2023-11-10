<script>
  import DatawrapperIframe from "./lib/DatawrapperIframe.svelte";
  import Dropdown from "./lib/Dropdown.svelte";
  import Population from "./lib/Population.svelte";
  import PopulationTitle from "./lib/PopulationTitle.svelte";
  import BirthRegion from "./lib/BirthRegion.svelte";
  import BirthCountries from "./lib/BirthCountries.svelte";
  import HealthInsurance from "./lib/HealthInsurance.svelte";
  import LanguagesEnglish from "./lib/LanguagesEnglish.svelte";
  import Footer from "./lib/Footer.svelte";

  import { selectedCounty, currentMainData } from "./stores/selectedCounty";

  import { logClickToGA } from "./analytics";
  import Note from "./lib/Note.svelte";
</script>

<main id="main">
  <DatawrapperIframe
    title="North Carolina Population Map"
    aria_label="North Carolina Population Map"
    datawrapper_id="RMnkX"
    on:regionmouseenter={(e) => selectedCounty.set(e.detail.data.fips)}
    on:regionclick={(e) => {
      selectedCounty.set(e.detail.data.fips);
      logClickToGA(e.detail.target, `map-click--${e.detail.data.name}`);
    }}
  />
  <Dropdown />
  <!-- two column layout -->
  <div class="content-container">
    <div class="column">
      <!-- if there is insurance data, position PopulationTitle.svelte and Population.svelte in first column -->
      {#if $currentMainData.perc_no_insurance_us}
        <PopulationTitle />
        <Population />
        <!-- else, just add PopulationTitle.svelte -->
      {:else}
        <PopulationTitle />
      {/if}

      <BirthRegion />
      <BirthCountries />
    </div>
    <div class="column">
      <!-- if there is no insurance data, position Population.svelte in second column -->
      {#if !$currentMainData.perc_no_insurance_us}
        <Population />
      {/if}
      <HealthInsurance />
      <LanguagesEnglish />
      <Note />
    </div>
  </div>
  <Footer />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 0;
    max-width: 1178px;
    margin: auto;
  }

  .content-container {
    display: flex;
    flex-direction: row;
    column-gap: 2.25rem;
  }

  .column {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    .content-container {
      flex-direction: column;
      gap: 0;
      row-gap: 1rem;
    }

    .content-container .column {
      flex: 1;
      width: 100%;
    }
  }
</style>
