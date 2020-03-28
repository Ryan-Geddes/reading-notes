<!-- HTML Ch. 3 pp. 62-73
HTML Ch. 13 pp. 300-329 
JS Ch. 4 pp. 162-182  -->

**HTML Ch. 3: Lists**
- There are three types of HTML lists: ordered, unordered and definition 
- Ordered lists use numbers. 
- Unorderes lists bullets. 
- Definition lists are used to define terminology. 
- List can be nested inside one another. 

Definition lists: 
- `<dl>` definition list, sim to ul or ol 
- `<dt>` term 
- `<dd>` definition
- all have closing tags 

**HTML Ch. 13: Boxes**
- CSS treats each HTML element as if it has its own box. 
- You can use CSS to control the dimensions of a box.
- You can control the borders, margins and padding for each box with CSS. 
- It is possible to hide elements using the display and visibility properties. 
- Block-level boxes can be made into inline boxes, and inline boxes made into block-level boxes. 
- Legibility can be improved by controlling the width of boxes containing text and the leading. 
- CSS3 has introducted the ability to create image borders and rounded borders. 

*Boxes*
- If content doesn't fit in the box dimensions set then it will overflow - this is ugly and bad for legibility. And so there is a overflow content css fix where it hides the overflow content or scrolls. 
- Margins and paddings will make boxes look separate/independant from each other 
    - margins: sit outside the edge of the border. You can set width of margin to create a gap between the borders of two adjacent boxes. 
    - padding: space between the border of a box and any content contained within it. Adding padding can increase readability. 

*Borders*
- Can select different sides of a box to adjust width  
- Border styles: solid, dotted, dashed, double, groove, ridge, inset, outset, hidden/none. Can also select border-top-style etc. with top, left, right, bottom. 
- same kind of thing - like selecting bottom, top, right, left with padding & margins. 
- Border radius will change make squares rounded --> circles/ellipses

**JavaScript Ch. 4: Switch Statements p. 164-182** 
- Switch statements allow you to compare a value against possible outcomes.  This also provides a default option if none match. 
- Data types can be coerced frmom one type to another. 
- All values evaluate to either truthy or falsy 
- There are three types of loop: for, while and do...while.  Each repeats of a set of statements. 

*Type Coercion* JavaScript can convert data types behind the scenes to complete an operation.  For example, if you use a data type JavaScript did not expect, it tries to make sense of it rather than report an error. For example a string 1 could be converted into the number 1. BUT ITS BETTER TO USE STRICT EQUALS OPERATORS BECAUSE TYPE COERCION CAN CAUSE PROBLEMS. 

*But* due type coercion every value in JavaScript can be treated as if it were true or false which leads to some interesting things...like truthy and falsy values 

FALSY VALUES: false, 0, empty string, 10/'score' which is NaN, or a variable with no value assigned to it 
TRUTHY VALUES: true, 1, strings with content, nubmer calculations, true writtin as a string, 0 written as a string, false written as a string. 

Truthy and falsy values can be used to check for the existence of an element within a page.  

Logical operators are processed left to right.  They short-circuit or stop as soon as they have a result - but they return the value that stopped the processing which is not necessarily true or false. 

*Loops* check a condition.  If it returns true a code block will run.  Then the condition will be checked again and if it still returns true, the code block will run again.  It repeats until the condition returns false.  There are three common types of loops: 
- For: use if you need to run code a specific number of times. In this loop the condition is usually a counter which is used to tell how many times the loop should run 
- While: if you don't know how  many times the code should run, use while loop.  hre, the condition can be something other than a counter and the code will continue to loop for as long as the condition is true 
- Do...while: similar to while loop but has one key difference, it will always run the statements inside the curly braces at least once even if the condition evaluates to false. 

*Keywords*
- *break* caues termination of the loop and tells interpreter to go on to the next loops 
- *continue* tells the interpreter to stop the current iteration, and then update and check the condition again.  If it is true the code runs again. 

*Loops & Arrays - Key Loop Concepts* Loops are helpful when dealing with arrays if you want to run the same code for each item in the array.  