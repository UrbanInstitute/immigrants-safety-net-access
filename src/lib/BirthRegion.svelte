<script>
  import { currentMainData } from "../stores/selectedCounty";
  import { format } from "d3-format";

  // create region list to loop through
  let regions = [
    { name: "africa", label: "Africa" },
    { name: "asia", label: "Asia" },
    { name: "europe", label: "Europe" },
    { name: "mexico", label: "Mexico" },
    {
      name: "other_central_america_south_america",
      label: "Central America and Latin America",
    },
    { name: "other", label: "Other" },
  ];

  // if main data exists for selected county
  if ($currentMainData) {
    // if region data exists for selected county
    if ($currentMainData.africa) {
      // loop through regions and add value and moe
      regions.map((d) => {
        d.value = $currentMainData[d.name];
        d.moe = $currentMainData["moe_" + d.name];
      });
      // sort values descending
      // regions.sort((a, b) => b.value - a.value);
    }
  }
</script>

<!-- if main data and region data exists -->
{#if $currentMainData}
  {#if $currentMainData.africa}
    <div>
      <div class="subtitle">
        Region of birth of immigrants in {$currentMainData.name}
      </div>
      <table>
        <tr>
          <th>Region</th>
          <th
            >Share of immigrants<br /><span class="margin-error"
              >(Margin of error)</span
            ></th
          >
        </tr>
        {#each regions as d}
          <tr>
            <td>{d.label}</td>
            <td
              >{format(".1%")($currentMainData[d.name])}
              <span class="margin-error"
                >(±{format(".1%")($currentMainData["moe_" + d.name])})</span
              ></td
            >
          </tr>
        {/each}
      </table>
    </div>
  {/if}
{/if}
