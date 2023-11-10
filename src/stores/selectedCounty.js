import { derived, writable } from "svelte/store";
import birthData from "../data/birth-data.json";
import mainData from "../data/main-data.json";
import mainStateData from "../data/main-state-data.json";
import birthStateData from "../data/birth-state-data.json";

// create a selectedCounty store
export const selectedCounty = writable(null);

// derived store for main data, default to north carolina data
export const currentMainData = derived(selectedCounty, ($selectedCounty) => {
  if (!$selectedCounty) return mainStateData;
  return mainData.find((data) => data.fips === $selectedCounty);
});

// derived store for birth data, default to north carolina data
export const currentBirthData = derived(selectedCounty, ($selectedCounty) => {
  if (!$selectedCounty) return birthStateData;
  return birthData.find((data) => data.fips === $selectedCounty);
});
