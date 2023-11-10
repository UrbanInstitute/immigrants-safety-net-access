<script>
  import { currentBirthData, currentMainData } from "../stores/selectedCounty";
  import { format } from "d3-format";
</script>

<!-- if birth data exists for selected county -->
{#if $currentBirthData}
  <div>
    <div class="subtitle">
      Five most common birth countries of immigrants in {$currentMainData.name}
    </div>
    <table>
      <tr>
        <th>Country</th>
        <th
          >Share of immigrants<br /><span class="margin-error"
            >(Margin of error)</span
          ></th
        >
      </tr>
      {#each [0, 1, 2, 3, 4] as _, i}
        <tr>
          <td>{$currentBirthData["label_x" + (i + 1)]}</td>
          <td
            >{format(".1%")($currentBirthData["value_x" + (i + 1)])}
            <span class="margin-error"
              >(±{format(".1%")($currentBirthData["moe_x" + (i + 1)])})</span
            ></td
          >
        </tr>
      {/each}
    </table>
  </div>
{/if}
