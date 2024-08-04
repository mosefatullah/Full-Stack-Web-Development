<br/>

# Introduction

OOCSS stands for Object-Oriented CSS and is a way of architecting CSS to encourage the use of abstraction to separate structural and visual styling as well as to remove duplication from your CSS.

OOCSS focuses on the separation of structure and skin, and separation of container and content.

From raw CSS,

```css
.button {
 padding: 10px 16px;
 color: blue;
}
.h1 {
 font-size: 2em;
 color: blue;
}
```

To OOCSS,

```css
.button {
 padding: 10px 16px;
}
.h1 {
 font-size: 2em;
}
.primary {
 color: blue;
}
```

## Example

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OOCSS Example</title>
  <style>
   /* Structure (base object styles) */
   .box {
    padding: 1em;
    margin-bottom: 1em;
    border: 1px solid #ccc;
   }

   .media {
    display: flex;
    align-items: flex-start;
   }

   .media__img {
    flex: 0 0 auto;
    margin-right: 1em;
   }

   .media__body {
    flex: 1 1 auto;
   }

   /* Skin (theme styles) */
   .box--primary {
    background-color: #007bff;
    color: white;
   }

   .box--secondary {
    background-color: #6c757d;
    color: white;
   }

   .box--danger {
    background-color: #dc3545;
    color: white;
   }
  </style>
 </head>
 <body>
  <div class="box box--primary">
   <h2>Primary Box</h2>
   <p>This is a primary styled box.</p>
  </div>
  <div class="box box--secondary">
   <h2>Secondary Box</h2>
   <p>This is a secondary styled box.</p>
  </div>
  <div class="box box--danger">
   <h2>Danger Box</h2>
   <p>This is a danger styled box.</p>
  </div>

  <div class="media box">
   <img
    src="https://via.placeholder.com/64"
    alt="Placeholder"
    class="media__img"
   />
   <div class="media__body">
    <h2>Media Object</h2>
    <p>This is a media object with an image and some text.</p>
   </div>
  </div>
 </body>
</html>
```

<br/>
<hr/>

### Last Updated by: `4 August 2024`
