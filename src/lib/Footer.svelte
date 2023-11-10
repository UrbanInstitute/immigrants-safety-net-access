<script>
  // @ts-nocheck

  import Arrow from "../assets/arrow.svelte";
  import { logClickToGA } from "../analytics";
  import { pymChild } from "../pymDefine";
</script>

<div class="footer">
  <div class="return-top-container">
    <!-- svelte-ignore missing-declaration -->
    <div
      class="return-top"
      role="button"
      tabindex="0"
      on:click={(e) => {
        // control parent to scroll to top
        pymChild.scrollParentTo("data-tool");
        logClickToGA(e.currentTarget, `return-to-top`);
      }}
      on:keypress={(e) => {
        pymChild.scrollParentTo("data-tool");
        logClickToGA(e.currentTarget, `return-to-top`);
      }}
    >
      <span>Return to top</span>
      <Arrow />
    </div>
  </div>
</div>

<style>
  .footer {
    display: flex;
    flex-direction: column;
  }

  .footer .return-top-container {
    padding-top: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: right;
  }

  .footer .return-top {
    display: inline-flex;
    column-gap: 0.375rem;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
  }
</style>
