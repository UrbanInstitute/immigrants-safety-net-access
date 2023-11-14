<script>
  import { currentMainData } from "../stores/selectedCounty";
  import { format } from "d3-format";
</script>

<!-- if main data exists -->
{#if $currentMainData}
  {@const d = $currentMainData}
  <div class="population-makeup">
    <div class="section-title">
      Who makes up <span class="location">{d.name}</span>'s population?
    </div>

    <div class="row-container">
      <div class="row">
        <span class="number">{format(".1%")(d.perc_born_us)}</span>
        of people are US-born
      </div>
      <div class="row">
        <span class="number">{format(".1%")(d.perc_born_abroad_citizens)}</span>
        of people are immigrant US citizens
        <span class="margin-error"
          >(±{format(".1%")(d.moe_born_abroad_citizens)})</span
        >
      </div>
      <div class="row">
        <span class="number"
          >{format(".1%")(d.perc_born_abroad_non_citizens)}</span
        >
        of people are immigrant non-US citizens
        <span class="margin-error"
          >(±{format(".1%")(d.moe_born_abroad_non_citizens)})</span
        >
      </div>
      <!-- if immigrant parent data exists -->
      {#if d.perc_children_imm_parents}
        <div class="row">
          <span class="number"
            >{format(".1%")(d.perc_children_imm_parents)}</span
          >
          of children in families with low incomes have one or more immigrant parents
          <span class="margin-error"
            >(±{format(".1%")(d.moe_children_imm_parents)})</span
          >
        </div>
      {/if}
    </div>
  </div>

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
{/if}
