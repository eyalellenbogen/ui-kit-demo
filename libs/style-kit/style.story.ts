import { storiesOf } from '@storybook/angular';

storiesOf('style-kit/Utilities', module)
  .add('Text', () => ({
    template: `
            <div class="text-xs">.text-xs</div>
            <div class="text-sm">.text-sm</div>
            <div class="text-md">.text-md</div>
            <div class="text-lg">.text-lg</div>
            <div class="text-xl">.text-xl</div>
        `,
  }))
  .add('Colors', () => ({
    template: `
        <div class="mb-sm">
            <span style="width:20px; height:20px; display:inline-block" class="background-color-dark"></span> $dark
        </div>
         <div class="mb-sm">
            <span style="width:20px; height:20px; display:inline-block" class="background-color-light"></span> $light
        </div>
        <div class="mb-sm">
            <span style="width:20px; height:20px; display:inline-block" class="background-color-accent"></span> $accent
        </div>
        <div class="mb-sm">
            <span style="width:20px; height:20px; display:inline-block" class="background-color-primary"></span> $primary
        </div>
        <div class="mb-sm">
            <span style="width:20px; height:20px; display:inline-block" class="background-color-secondary"></span> $secondary
        </div>

        <h2 class="text-xl mt-xl">Class formats</h2>
        <hr>
        <div class="mb-sm">.color-$color</div>
        <div class="mb-sm">.background-color-$color</div>
        <div class="mb-sm">.border-color-$color</div>
    `,
  }));
