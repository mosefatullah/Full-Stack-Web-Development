<br/>

# Introduction

BEM (Block Element Modifier) is a way of architecting CSS to encourage the use of a consistent naming convention when creating your style classes.

The naming convention that is recommended by BEM is `block-name__element-name--modifier-name` ([block]\_\_[element]--[modifier]).

### Naming Conventions

- Any DOM node can be a block if it accepts a class name :

  ```html
  <div class="block">...</div>
  ```

- Use class name selector only. No tag name or ids :

  ```css
  .block {
   color: #042;
  }
  ```

- Element are Parts of a block and have no standalone meaning :

  ```html
  <div class="block">
   <span class="block__element"> ... </span>
  </div>
  ```

- Modifier is an extra class name which you add to a block/element DOM node they modify. For example, 'font-md' is a modifier :
  ```html
  <div class="block">
   <div class="block__element-1">...</div>
   <div class="block__element-2 block__element-2--modifier">...</div>
  </div>
  ```

### Example

```html
<article class="article">
 <p class="article__paragraph article__paragraph--font-md">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 </p>
</article>
```

<br/>
<hr/>

### Last Updated by: `4 August 2024`
