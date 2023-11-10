<script>
  import { currentMainData } from "../stores/selectedCounty";
  import { format } from "d3-format";
</script>

<!-- if main and language data exist -->
{#if $currentMainData}
  {#if $currentMainData.perc_limited_eng_spanish}
    {@const d = $currentMainData}
    <div class="limited-eng">
      <div class="section-title">
        In <span class="location">{d.name}</span>, what languages do immigrants
        who have limited English proficiency predominantly speak?
      </div>

      <div class="row-container">
        <div class="row">
          <span class="number">{format(".1%")(d.perc_limited_eng_spanish)}</span
          >
          of immigrant adults with limited English proficiency speak Spanish
          <span class="margin-error"
            >(±{format(".1%")(d.moe_limited_eng_spanish)})</span
          >
        </div>
        <div class="row">
          <span class="number">{format(".1%")(d.perc_limited_eng_another)}</span
          >
          of immigrant adults with limited English proficiency speak another language
          <span class="margin-error"
            >(±{format(".1%")(d.moe_limited_eng_another)})</span
          >
        </div>
      </div>
    </div>
  {/if}
{/if}
