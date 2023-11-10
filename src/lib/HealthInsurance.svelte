<script>
  import { currentMainData } from "../stores/selectedCounty";
  import { format } from "d3-format";
</script>

<!-- if main and insurance data exist -->
{#if $currentMainData}
  {#if $currentMainData.perc_no_insurance_us}
    {@const d = $currentMainData}
    <div class="health-insurance">
      <div class="section-title">
        Do immigrants in <span class="location">{d.name}</span> have health insurance?
      </div>

      <div class="row-container">
        <div class="row">
          <span class="number">{format(".1%")(d.perc_no_insurance_us_imm)}</span
          >
          of immigrant US citizens do not have health insurance
          <span class="margin-error"
            >(±{format(".1%")(d.moe_no_insurance_us_imm)})</span
          >
        </div>
        <div class="row">
          <span class="number">{format(".1%")(d.perc_no_insurance_imm)}</span>
          of immigrant non-US citizens do not have health insurance
          <span class="margin-error"
            >(±{format(".1%")(d.moe_no_insurance_imm)})</span
          >
        </div>
        <div class="row">
          <span class="number">{format(".1%")(d.perc_no_insurance_us)}</span>
          of US-born people do not have health insurance
          <span class="margin-error"
            >(±{format(".1%")(d.moe_no_insurance_us)})</span
          >
        </div>
      </div>
    </div>
  {/if}
{/if}
