HTML Ch. 4 pp. 74-93
HTML Ch. 15 pp. 358-404 
JS. Ch. 3 pp.86-99

#### HTML Chapter 4:Links p. 74-93
*creating links between pages, linking to other sites, email links*
- Links are created using `<a>` element. 
- the `<a>` element uses the href attribute to indicate the page you are linking to. 
- If you are linking to a page within your own site, it is best to use relative links rather than qualified URLs. 
- You can create links to open email programs with an email address in the "to" field
- You can use the id attribute to target elements within a page that can be linked to. 

The text between the opening and closing a tag is known as *link text* 
Email links use mailto after the href 
To have link open in a new window use target attribute with value =_blank
You can link to specific part of the same page or to a specific part of anotther use using attribute values like top and bottom in parentheses

#### HTML Chapter 15: Layout p.358-404
- `<div>` elements are often used as containing elements to group together sections of a page.  
- Browsers display pages in normal flow unless you specify relative, absolute or fixed positioning
- The float property moves content to the left or right of the page and can be used to create multi-column layouts.  Floated items require a definted width. 
    * you ca also use the clear property which makes it so that nothing to the values-left, right, top, bottom of the element touches.  This helps when there are varying heights of elements 
- Pages can be fixed width or liquid aka stretchy, layouts. 
    * when using liquid you end up using percentages in the CSS to keep things coordinated
- Designers keep pages within 960-1000 pixels wide, and indicate what the site is about within the top 600 pixels.  This demonstrates its relevance without scrolling.
    * page 389 & 390 show possible 960 pixel wide 12 column grid layouts
- Grids help create professional and flexible designs. 
- CSS Frameworks provide rules for common tasks. 
- You can include multiple CSS files in one page. 
    * using @import or linking multiple css to the HTML. 

#### JS Chapter 3: Functions and Methods pg 86-99 only *does not include objects*
- Functions allow you to group a set of related statements together that represent a single task. 
    * If different parts of a script repeat the same task you can reuse the function; rather than repeating the same sets of statements, but if you do this you need to give your function a name.  When you ask it to performs its task it is known as *calling* the function
    * The pieces of information passed to function is known as the *parameters*
    * When you write a function and you expect it to provide you with an answer the response is known as a *return value* 
    * Functions have names and their values are the code block
    * **Declaring a Function**: to create a function, you give it a name and then write the statements needed to achieve its task inside the curly braces - this is known as a function declaration
        - Declare a function using the function keyword, give the function a name following by parenthes and then the statements that perform the task sit in a code block
    * **Declaring functions that need information v. Calling Functions that need information**
        - if a function needs information to work you indicate what it needs to know in parantehses after the function name - these are called the parameters of a function, inside the function those words act like variable names
        - when you call a function that has parameters, you specify the values it should use in the parantheses that follow its name.  The values are called *arguments* and can be provides as values or as variables.
        - declaring functions, parameters. calling functions, arguments
    * **Calling a function**: having declared the function you can then execute all of the statements between its curly braces with just one line of code.  This is known as *calling the function*
        - to run the code in the function, you use the function name followed by parantheses. 
        - In programmer speak you would say this code calls a function
        - you can call the same function as many times as you want within the same JavaScript file. 
    * You can get a single value out of a function or multiple values.  Functions that return more than one value use an array
- Functions can take parameters, aka information required to do their job, and  may return a value. 