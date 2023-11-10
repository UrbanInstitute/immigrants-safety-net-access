<script>
  import { currentMainData } from "../stores/selectedCounty";
  import { format } from "d3-format";
</script>

<!-- if main data exists -->
{#if $currentMainData}
  {@const d = $currentMainData}
  <div class="population-count">
    <span class="ban">{format(",")(d.population)}</span>
    <span class="ban-subtitle">Total population</span>
  </div>
{/if}

<style>
  .population-count {
    background: var(--color-gray-shade-lightest);
    padding: 1rem 1.5rem;
    line-height: 1.875rem;
    display: flex;
    flex-direction: column;
  }

  .population-count .ban {
    font-weight: 300;
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 4.125rem;
  }

  .population-count .ban-subtitle {
    font-size: 1.25rem;
    font-weight: 700;
  }
</style>
