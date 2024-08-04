<br/>

# Introduction

SMACSS (Scalable and Modular Architecture for CSS) requires styles to be built under five different categories: base, layout, module, state and theme.

- `Base`: hold your default CSS styles. These styles will be used on all elements.

- `Layout`: hold the styles for elements that are designed to separate the page into its structural components. Styles for elements like header, footer and grids should be defined here.

- `Module`: hold the styles for reusable elements.

- `State`: define the various states of different elements. Styles such as ‘is-active’, ‘is-disabled’ and ‘is-success’ should be found here.

- `Theme`: dictate how your elements look. They should go beyond the base styles and start injecting your project’s branding and style into the body.

## Example

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SMACSS Example</title>
  <style>
   /* Base styles */
   body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
   }

   h1,
   h2 {
    margin: 0.5em 0;
   }

   p {
    margin: 1em 0;
   }

   /* Layout styles */
   .l-header {
    background: #333;
    color: #fff;
    padding: 1em;
   }

   .l-main {
    display: flex;
    margin: 20px;
   }

   .l-sidebar {
    width: 25%;
    background: #f4f4f4;
    padding: 1em;
   }

   .l-content {
    width: 75%;
    padding: 1em;
   }

   .l-footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1em;
    margin-top: 20px;
   }

   /* Module styles */
   .module-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1em;
    padding: 1em;
    background: #fff;
   }

   .module-card__title {
    font-size: 1.5em;
    margin-bottom: 0.5em;
   }

   .module-card__content {
    font-size: 1em;
   }

   /* State styles */
   .is-active {
    border-color: #007bff;
   }

   /* Theme styles */
   .theme-dark {
    background: #333;
    color: #fff;
   }

   .theme-dark .module-card {
    background: #444;
    border-color: #666;
   }

   .theme-dark .module-card__title {
    color: #00a4ff;
   }
  </style>
 </head>
 <body>
  <header class="l-header">
   <h1>SMACSS Example</h1>
  </header>
  <div class="l-main">
   <aside class="l-sidebar">
    <h2>Sidebar</h2>
    <p>This is the sidebar content.</p>
   </aside>
   <main class="l-content">
    <div class="module-card">
     <h2 class="module-card__title">Card 1</h2>
     <p class="module-card__content">This is some content for card 1.</p>
    </div>
    <div class="module-card is-active">
     <h2 class="module-card__title">Card 2</h2>
     <p class="module-card__content">This is some content for card 2.</p>
    </div>
   </main>
  </div>
  <footer class="l-footer">
   <p>&copy; 2024 SMACSS Example</p>
  </footer>
 </body>
</html>
```

<br/>
<hr/>

### Last Updated by: `4 August 2024`
