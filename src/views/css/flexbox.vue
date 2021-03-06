<template lang="pug">
  h-page-content(padding)
    .text-h4 Flexbox and GridSystem (row and column)
    .text-body1 The flex-direction property defines in which direction the container wants to stack the flex items.

    <comp-code class="h-mt-md" title="Grid row" :code="flexgridrow">
      <div class="row flex-container" style="background-color: DodgerBlue;">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="col">3</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="Grid row with column space" :code="flexgridrowcolspace">
      <div class="column" style="background-color: DodgerBlue;">
        <div class="row flex-container">
          <div class="col-auto">1</div>
          <div class="col-space">2</div>
        </div>
        <div class="row flex-container">
          <div class="col-auto">1</div>
          <div class="col-space">2</div>
          <div class="col-auto">3</div>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="row" :code="flexrow" >
      <div class="row">
        <div class="col" style="background-color: DodgerBlue;">
          <div class="row flex-container">
            <div class="col-auto">1</div>
            <div class="col-auto">2</div>
            <div class="col-auto">3</div>
          </div>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="row-reverse" :code="flexrowreverse">
      <div class="row row-reverse flex-container" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="column" :code="flexcolumn" >
      <div class="column flex-container-column" style="background-color: DodgerBlue;">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="col">3</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="column reverse" :code="flexcolumnreverse" >
      <div class="column-reverse flex-container-column" style="background-color: DodgerBlue;">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="col">3</div>
      </div>
    </comp-code>

    .row.h-mt-md
      .col
        .text-h4 Flex wrap or nowrap
        .text-body1 The flex-wrap property specifies whether the flex items should wrap or not.
        .text-body1 By default row is <b>nowrap.</b>

    <comp-code class="h-mt-md" title="wrap" :code="flexwrap" >
      <div class="row wrap flex-container" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
        <div class="col-auto">4</div>
        <div class="col-auto">5</div>
        <div class="col-auto">6</div>
        <div class="col-auto">7</div>
        <div class="col-auto">8</div>
        <div class="col-auto">9</div>
        <div class="col-auto">10</div>
      </div>
    </comp-code>

    .row
      .col
        .text-h4 Justify-content
        .text-body1 The justify-content property is used to align the flex items.
        .text-body1 Default <b>flex-start</b>. But the class will be <b>justify-start</b>.

    <comp-code class="h-mt-md" title="justify-start(flex-start)" :code="flexjustifystart">
      <div class="row flex-container" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="justify-center(center)" :code="flexjustifycenter">
      <div class="row justify-center flex-container" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="justify-end(flex-end)" :code="flexjustifyend">
      <div class="row justify-end flex-container" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="justify-between(space-between)" :code="flexjustifybetween">
      <div class="row justify-between flex-container" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="justify-around(space-around)" :code="flexjustifyaround">
      <div class="row justify-around flex-container" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
      </div>
    </comp-code>

    .row
      .col
        .text-h4 Align-items
        .text-body1 The align-items property is used to align the flex items vertically.
        //- img.full-width(src="img/align-items.png")

    <comp-code class="h-mt-md" title="align-items-start" :code="flexitemsstart">
      <div class="row align-items-start flex-container2" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="align-items-center" :code="flexitemscenter">
      <div class="row align-items-center flex-container2" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="align-items-end" :code="flexitemsend">
      <div class="row align-items-end flex-container2" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="align-items-stretch(default)" :code="flexitemsstretch">
      <div class="row align-items-stretch flex-container2" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="align-items-baseline" :code="flexitemsbaseline">
      <div class="row align-items-baseline flex-container2" style="background-color: DodgerBlue;">
        <div class="col-auto"><h1>1</h1></div>
        <div class="col-auto"><h6>2</h6></div>
        <div class="col-auto"><h3>3</h3></div>
        <div class="col-auto"><small>4</small></div>
      </div>
    </comp-code>

    .row
      .col
        .text-h4 Align-content
        .text-body1 The align-content property property is used to align the flex lines.
        //- img.full-width(src="img/align-content.png")

    <comp-code class="h-mt-md" title="align-content-start" :code="flexalignstart">
      <div class="row wrap align-content-start flex-container3" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
        <div class="col-auto">4</div>
        <div class="col-auto">5</div>
        <div class="col-auto">6</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="align-content-center" :code="flexaligncenter">
      <div class="row wrap align-content-center flex-container3" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
        <div class="col-auto">4</div>
        <div class="col-auto">5</div>
        <div class="col-auto">6</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="align-content-end" :code="flexalignend">
      <div class="row wrap align-content-end flex-container3" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
        <div class="col-auto">4</div>
        <div class="col-auto">5</div>
        <div class="col-auto">6</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="align-content-stretch" :code="flexalignstretch">
      <div class="row wrap align-content-stretch flex-container3" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
        <div class="col-auto">4</div>
        <div class="col-auto">5</div>
        <div class="col-auto">6</div>
        <div class="col-auto">7</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="align-content-around" :code="flexalignspacearound">
      <div class="row wrap align-content-around flex-container3" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
        <div class="col-auto">4</div>
        <div class="col-auto">5</div>
        <div class="col-auto">6</div>
        <div class="col-auto">7</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="align-content-between" :code="flexalignspacebetween">
      <div class="row wrap align-content-between flex-container3" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
        <div class="col-auto">3</div>
        <div class="col-auto">4</div>
        <div class="col-auto">5</div>
        <div class="col-auto">6</div>
        <div class="col-auto">7</div>
      </div>
    </comp-code>

    .row
      .col
        .text-h4 Perfect Centering

    <comp-code class="h-mt-md" title="Perfect center" :code="flexcentering">
      <div class="row justify-center align-items-center flex-container2" style="background-color: DodgerBlue;">
        <div class="col-auto">1</div>
        <div class="col-auto">2</div>
      </div>
    </comp-code>

    //- .col-6.boxshadow
    //-   h1 Flex property
    //-   p.desc  Let all the flexible items be the same length, regardless of its content.

    //-   h3  Activating flex property
    //-   <pre v-highlightjs="flex1">
    //-     <code class="javascript">
    //-     </code>
    //-   </pre>

    //-   .flex.flex-column
    //-     div(style="background-color: DodgerBlue;")
    //-       <div class="flex flex-container">
    //-         <div class="flex-1" style="background-color:coral;">1</div>
    //-         <div class="flex-1" style="background-color:lightblue;">2</div>
    //-         <div class="flex-1" style="background-color:lightgreen;">3</div>
    //-       </div>
    //-     div(style="background-color: #F0F0F0;")
    //-       <pre v-highlightjs="f1">
    //-         <code class="javascript">
    //-         </code>
    //-       </pre>

    //-   h3 Using flex to grow a flex item
    //-   p.desc If you to use flex-1 to one flex item only, this flex item will grow by having the rest of space remaining.

    //-   .flex.flex-column
    //-     div(style="background-color: DodgerBlue;")
    //-       <div class="flex flex-container">
    //-         <div style="background-color:coral;">1</div>
    //-         <div class="flex-1" style="background-color:lightblue;">2</div>
    //-       </div>
    //-       <div class="flex flex-container">
    //-         <div style="background-color:coral;">1</div>
    //-         <div class="flex-1" style="background-color:lightblue;">2</div>
    //-         <div style="background-color:lightgreen;">3</div>
    //-       </div>
    //-     div(style="background-color: #F0F0F0;")
    //-       <pre v-highlightjs="f2">
    //-         <code class="javascript">
    //-         </code>
    //-       </pre>

</template>

<script>

export default {
  name: 'Flexbox',
  components: {
  },
  data () {
    return {
      flexgridrow: `
<div class="row flex-container" style="background-color: DodgerBlue;">
  <div class="col">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
</div>
`,
      flexgridrowcolspace: `
<div class="column" style="background-color: DodgerBlue;">
  <div class="row flex-container">
    <div class="col-auto">1</div>
    <div class="col-space">2</div>
  </div>
  <div class="row flex-container">
    <div class="col-auto">1</div>
    <div class="col-space">2</div>
    <div class="col-auto">3</div>
  </div>
</div>
`,
      flexgridcolumn: `
<div class="column flex-container" style="background-color: DodgerBlue;">
  <div class="col">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
</div>
`,
      flexcolumn: `
<div class="column flex-container-column" style="background-color: DodgerBlue;">
  <div class="col">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
</div>
`,
      flexcolumnreverse: `
<div class="column-reverse flex-container-column" style="background-color: DodgerBlue;">
  <div class="col">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
</div>
`,
      flexrow: `
<div class="row">
  <div class="col" style="background-color: DodgerBlue;">
    <div class="row flex-container">
      <div class="col-auto">1</div>
      <div class="col-auto">2</div>
      <div class="col-auto">3</div>
    </div>
  </div>
</div>
`,
      flexrowreverse: `
<div class="row row-reverse flex-container" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
</div>
`,
      flexrowcolumn: `
<div class="row flex-container" style="background-color: DodgerBlue;">
  <div class="col">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
</div>
`,
      flexwrap: `
<div class="row wrap flex-container" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
  <div class="col-auto">4</div>
  <div class="col-auto">5</div>
  <div class="col-auto">6</div>
  <div class="col-auto">7</div>
  <div class="col-auto">8</div>
  <div class="col-auto">9</div>
  <div class="col-auto">10</div>
</div>
`,
      flexjustifystart: `
<div class="row flex-container" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
</div>
`,
      flexjustifycenter: `
<div class="row justify-center flex-container" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
</div>
`,
      flexjustifyend: `
<div class="row justify-end flex-container" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
</div>
`,
      flexjustifyaround: `
<div class="row justify-around flex-container" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
</div>
`,
      flexjustifybetween: `
<div class="row justify-between flex-container" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
</div>
`,
      flexitemsstart: `
<div class="row align-items-start flex-container2" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
</div>
`,
      flexitemscenter: `
<div class="row align-items-center flex-container2" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
</div>
`,
      flexitemsend: `
<div class="row align-items-end flex-container2" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
</div>
`,
      flexitemsstretch: `<
<div class="row align-items-stretch flex-container2" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
</div>
`,
      flexitemsbaseline: `
<div class="row align-items-baseline flex-container2" style="background-color: DodgerBlue;">
  <div class="col-auto"><h1>1</h1></div>
  <div class="col-auto"><h6>2</h6></div>
  <div class="col-auto"><h3>3</h3></div>
  <div class="col-auto"><small>4</small></div>
</div>
`,
      flexalignstart: `
<div class="row wrap align-content-start flex-container3" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
  <div class="col-auto">4</div>
  <div class="col-auto">5</div>
  <div class="col-auto">6</div>
</div>`,
      flexaligncenter: `
<div class="row wrap align-content-center flex-container3" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
  <div class="col-auto">4</div>
  <div class="col-auto">5</div>
  <div class="col-auto">6</div>
</div>`,
      flexalignend: `
<div class="row wrap align-content-end flex-container3" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
  <div class="col-auto">4</div>
  <div class="col-auto">5</div>
  <div class="col-auto">6</div>
</div>`,
      flexalignstretch: `
<div class="row wrap align-content-stretch flex-container3" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
  <div class="col-auto">4</div>
  <div class="col-auto">5</div>
  <div class="col-auto">6</div>
  <div class="col-auto">7</div>
</div>`,
      flexalignspacebetween: `
<div class="row wrap align-content-between flex-container3" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
  <div class="col-auto">4</div>
  <div class="col-auto">5</div>
  <div class="col-auto">6</div>
  <div class="col-auto">7</div>
</div>`,
      flexalignspacearound: `
<div class="row wrap align-content-around flex-container3" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
  <div class="col-auto">3</div>
  <div class="col-auto">4</div>
  <div class="col-auto">5</div>
  <div class="col-auto">6</div>
  <div class="col-auto">7</div>
</div>`,
      flexcentering: `
<div class="row justify-center align-items-center flex-container2" style="background-color: DodgerBlue;">
  <div class="col-auto">1</div>
  <div class="col-auto">2</div>
</div>`,
      flex1: `<div class="flex flex-1 flex-container">`,
      column: `
<div class="flex flex-column flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      columnreverse: `
<div class="flex flex-column-reverse flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      row: `
<div class="flex flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      rowreverse: `
<div class="flex flex-row-reverse flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      wrap: `
<div class="flex flex-wrap flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div> 
</div>
      `,
      nowrap: `
<div class="flex flex-nowrap flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div> 
</div>
      `,
      justifystart: `
<div class="flex flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      justifycenter: `
<div class="flex flex-justify-center flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      justifyend: `
<div class="flex flex-justity-end flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
      `,
      justifyspacearound: `
<div class="flex flex-justify-space-around flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
      `,
      justifyspacebetween: `
<div class="flex flex-justify-space-between flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
      `,
      itemsstart: `
<div class="flex flex-items-start flex-container2">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      itemscenter: `
<div class="flex flex-items-center flex-container2">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      itemsend: `
<div class="flex flex-items-end flex-container2">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      itemsstretch: `
<div class="flex flex-items-stretch flex-container2">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      itemsbaseline: `
<div class="flex flex-items-baseline flex-container2">
  <div><h1>1</h1></div>
  <div><h6>2</h6></div>
  <div><h3>3</h3></div>  
  <div><small>4</small></div>
</div>
      `,
      alignstart: `
<div class="flex flex-wrap flex-align-start flex-container3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
      `,
      aligncenter: `
<div class="flex flex-wrap flex-align-center flex-container3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div> 
</div>
      `,
      alignend: `
<div class="flex flex-wrap flex-align-end flex-container3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
      `,
      alignstretch: `
<div class="flex flex-wrap flex-align-stretch flex-container3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>  
</div>
      `,
      alignspacebetween: `
<div class="flex flex-wrap flex-align-space-between flex-container3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
      `,
      alignspacearound: `
<div class="flex flex-wrap flex-align-space-around flex-container3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
      `,
      centering: `
<div class="flex flex-justify-center flex-items-center flex-container2">
    <div>1</div>
</div>
      `,
      f1: `
<div class="flex flex-container">
      <div class="flex-1" style="background-color:coral;">1</div>
      <div class="flex-1" style="background-color:lightblue;">2</div>
      <div class="flex-1" style="background-color:lightgreen;">3</div>
</div>
      `,
      f2: `
<div class="flex flex-container">
      <div style="background-color:coral;">1</div>
      <div class="flex-1" style="background-color:lightblue;">2</div>
</div>

<div class="flex flex-container">
      <div style="background-color:coral;">1</div>
      <div class="flex-1" style="background-color:lightblue;">2</div>
      <div style="background-color:lightgreen;">3</div>
</div>
      `,
      style: `
<style>
.flex-container {
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

.flex-container2 {
  background-color: DodgerBlue;
  height: 200px
}

.flex-container2 > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

.flex-container3 {
  background-color: DodgerBlue;
  height: 300px
}

.flex-container3 > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
      `
    }
  }
}
</script>

<style>
.flex-container {
  background-color: DodgerBlue;
}

.flex-container-column {
  background-color: DodgerBlue;
}

.flex-container-column > div {
  background-color: #f1f1f1;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

.flex-container2 {
  background-color: DodgerBlue;
  height: 200px
}

.flex-container2 > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

.flex-container3 {
  background-color: DodgerBlue;
  height: 300px
}

.flex-container3 > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
