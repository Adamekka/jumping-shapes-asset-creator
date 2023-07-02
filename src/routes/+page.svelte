<script lang="ts">
  import ColorPicker, { type RgbaColor } from "svelte-awesome-color-picker";

  let primaryColor: RgbaColor = { r: 0, g: 255, b: 0, a: 1 };
  let secondaryColor: RgbaColor = { r: 0, g: 0, b: 255, a: 1 };
  const transparent: RgbaColor = { r: 0, g: 0, b: 0, a: 0 };

  enum Cell {
    Primary,
    Secondary,
    Transparent,
  }

  let title: string = "UntitledPlayerTexture";
  let size = 8;

  let cellColors = {
    [Cell.Primary]: primaryColor,
    [Cell.Secondary]: secondaryColor,
    [Cell.Transparent]: transparent,
  };

  function updateCellColors() {
    cellColors = {
      [Cell.Primary]: primaryColor,
      [Cell.Secondary]: secondaryColor,
      [Cell.Transparent]: transparent,
    };
  }

  let playerTexture: Cell[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => Cell.Primary)
  );

  function exportPlayerTexture() {
    let exportedPlayerTexture: string;

    exportedPlayerTexture = JSON.stringify({
      primary: primaryColor,
      secondary: secondaryColor,
      size,
      texture: playerTexture,
    });

    console.log(exportedPlayerTexture);

    const element = document.createElement("a");
    const file = new Blob([exportedPlayerTexture], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = title + ".player.jsasset";
    document.body.appendChild(element);
    element.click();
  }

  console.log(playerTexture);
  console.log(cellColors);
</script>

<h1>Jumping Shapes Asset Creator</h1>

<h2>Player Texture</h2>

<h3>Title</h3>
<input type="text" bind:value={title} />

<h3>Primary Color</h3>
<ColorPicker bind:rgb={primaryColor} on:input={updateCellColors} />

<h3>Secondary Color</h3>
<ColorPicker bind:rgb={secondaryColor} on:input={updateCellColors} />

<h3>Size</h3>
<input
  type="number"
  bind:value={size}
  min="1"
  max="128"
  on:change={() => {
    playerTexture = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => Cell.Primary)
    );
  }}
/>
<p>I recommend setting size to 8</p>
<p>
  If you want to make more detailed player, set it to 16, but it goes all the
  way to 128.
</p>
<p class="warning">
  NOTE: If you change the size, you will lose your current texture. Make sure to
  export it first!
</p>

<h3>Texture</h3>
<div class="container">
  <table class="matrix">
    {#each playerTexture as row, rowIndex}
      <tr>
        {#each row as cell, cellIndex}
          <td
            style={`background-color: rgb(${cellColors[cell].r}, ${cellColors[cell].g}, ${cellColors[cell].b});`}
            on:click={() => {
              playerTexture[rowIndex][cellIndex] =
                (playerTexture[rowIndex][cellIndex] + 1) % 3;
            }}
          />
        {/each}
      </tr>
    {/each}
  </table>
</div>
<p class="warning">NOTE: Black cells will be transparent in the game</p>
<button class="save-button" on:click={exportPlayerTexture}>Export</button>

<style>
  .warning {
    color: red;
    font-weight: bold;
  }

  .save-button {
    padding-inline: 14rem;
    padding-block: 2rem;
  }

  .container {
    position: relative;
  }

  .matrix {
    width: 50rem;
    height: 50rem;
    table-layout: fixed;
    border-collapse: collapse;
    padding: 0;
    margin: 0;
  }

  td {
    width: 12.5%;
    border: 1px solid black;
    padding: 5px;
  }
</style>
