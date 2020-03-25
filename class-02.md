<!-- HTML Chapter 2 pp. 40-61: Text 
HTML Chapter 10 pp. 226-245: 
JS Chapter 2 pp. 53-84:
JS Chapter 4 pp. 145-162:  -->
### Borrowed from Taylor Thornton
#### HTML Chapter 2: Text 
- HTML elements are used to describe the structure of the page.  For example, headings, subheadings and paragraphs 
- They also provide semantic information.  For example, where emphasis should be placed, the definition of any acronyms used, when given text is a quotation

- `<p>` = paragraph 
- `<b>` = bold 
- `<i>` = italic 
- `<sup>` = superscript 
- `<sub>` = subscript
- `<br>` = line break 
- `<hr />` = horizontal line break 
- `<strong>` = default shows elements in bold 
- `<em>` = defaults shows all in italic 
- `<blockquote>` = used for quotes that take up entire paragraph 
- `<q>` = quotes that sit within a paragraph 
- `<abbr>` = a title attribute used within the opening tag is used to specify the full term being used 
- `<cite>` = indicates where a citation is from 
- `<dfn>` = used to idnicate the defining instance of a new term 
- `<address>` = author details - contains contact detail of author of page 
- `<ins>` = shows content inserted into a document 
- `<del>` = shows content that has been deleted from it 
- `<s>` = indicates something no longer relevant or needed, visually content will be displayedwith a line thru the center; strikeout 

#### HTML Chapter 10: Introducing CSS 
- CSS treats each HTML element as if it appears inside its own box and uses rules to indicate how that element should look. 
- Rules are made up of selectors.  Selectors specify the elements te rule applies to and declarations.  Declarations indicate what these elements should look like.
- Different types of selectors allow you to target your rules at different elements. 
- Declarations are made up of two parts: the properties of the element that you want to change, and the values of those properties.  For example, the font-family property sets the choice of font, and the value arial specifies Arial as the preferred typeface. 
- CSS rules usually appear in a separate document, although they may appear within an HTML page. 

**CSS associates style rules with HTML elements** CSS works by associating rules with HTML elements.  These rules govern how the content of specified elements should be displayed.  A CSS rule containts two parts: a *selector* and a *declaration* 
`p {
    font-family: Arial;
}`

p = selector 
info inside curley brackets = declaration 

**CSS properties affect how elements are displayed** CSS declarations sit inside curly brackets and each is made up of two parts a *property* and a *value*, separated by a colon. You can specify several properties in one declaration, eahch separated by a semi-colon. 

`h1, h2, h3 {
    font-family: arial;
    color: yellow;}` 

Font-family & color are properties.  Arial and yellow are values. 

Listing of common CSS selectors are on page 238. 

#### JS Chapter 2 pp. 53-84 
- A script is made up of a series of statements.  Each statement is like a step in a recipe. 
- Scripts contain very precise instructions.  For example, you might specify that a value must be remembered before creating a calculation using that value. 
- Variables are used to temporarily store pieces of infomration use in a script. 
- Arrays are special types of varialbes that storemore than on epiece of related information. 
- JavaScript distinguishes between numbers, strings and Boolean values. 
- Expressions evaluate into a single value. 
- Expressions rely on operators to calculate value. 

**Statements** Each individual instruction or step in a script. WWhere a script is a series of instructions that a computer follows.  Statements end with a semicolon

/* allows for multiline comment // allows for single line comments 

A script will have to temporarily store the bits of info it needs to do its job.  It stores this data in *variables* 

**Variables** 
- How to declare a variable: 
    1. Announce that you want to use it. Requires creating the variable and giving it a name. This is called declaring the variable. 
        - Looks like `var quantity;` where var = variable keyword quantity = variable name
- How to assign variables a value: 
    1. `quantity = 3;` 
        - Where quantity is variable name and 3 is the variable value.  The equal sign is necessecary 
- You can use variables to store numbers, strings, quotes inside a string, boolean and change the value of a variable 

**Variable Names Rules**
1. Can't start with a number 
1. Can start with letter, $ or _ 
1. Can't use - or . in the name 
1. Don't keywords or js words for example var 
1. Variables are case sensitive! score is different from Score 
1. If variable is more than one word, camel it -- firstName 

**Arrays** are a special variable.  It doesn't store one value it stores a list of values. 
- Consider using arrays when working with a *list of values* that are *related to each other* use hard brackets to define an array literal. 

***Expressions** evalute into, or results in, a single value.  Broadly speaking they are two types of expressions. 
1. Expressions that assign a variable 
1. Expressions that use two or more values to return a single value

Expressions rely on things called **operators** which allow programmers to create a single value from one or more values. 

*There are assignment operators, arithmetic operators, string operators, comparison operators, and logical operators.* 

#### JS Chapter 4 pp. 145-162: Decisions and Loops 
- Conditional statements allow your code to make decisions about what to do next. 
- Comparison operators are used to compare two operands. 
- Logical operators allow you to combine more than one set of comparison operators. 
- if...else statements allow you to run one set o fcode if a condition is tru and another if it is false 
- switch statements allow you to compare a value against possible outcomes and also provides a default option if none match 
- Data types can be coerced from one type to another
- all values evaluate to either truthy or falsy 
- there are three types of loops: for, while and do...while.  Each repeats a set of statements. 

**Comparison Operators: Evaluating Conditions:**
1. == equal to 
1. != not equal to 
1. === strict equal to 
1. 1== strict not equal to 
1. `>` greather than 
1. < less than 
1. `>=` greater than or equal to 
1. `<=` less than or equal to 

`(score >= pass)` where score & pass are operands and `>=` is the comparison operator. Operans can also be expressions p.154 

**Logical operators** allow you to compare the results of more than one comparison operator 
1. && logical and.  This operator tests more than one condition
    - where true && true returns true 
    - true && false returns false 
    - false && true returns false 
    - falst && false return false 
1. || logical or.  This operator tests at least one condition. 
    - where, true || true returns true 
    - true || false returns true 
    - false || true returns true 
    - false || false returns falso 
1. ! logical not.  This operator takes a single boolean value and inverts it. 
    - where, !true returns false 
    - !false returns true 