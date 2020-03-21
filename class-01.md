<!-- HTML Intro pp. 2-11
HTML Chapter 1: Structure pp. 12-39
HTML Chapter 8: Extra Mark Up pp. 176-199
HTML Chapter 17: HTML5 Layout pp. 428-451
HTML Chapter 18: Process & Design pp. 452-475
JS Chapter 1: ABC of Programming pp. 11-52 -->

<!-- HTML Intro pp. 2-11
HTML Chapter 1: Structure pp. 12-39
HTML Chapter 8: Extra Mark Up pp. 176-199
HTML Chapter 17: HTML5 Layout pp. 428-451
HTML Chapter 18: Process & Design pp. 452-475
JS Chapter 1: ABC of Programming pp. 11-52 -->

# Notes used from Taylor Thornton's GitHub Repo.  She is a much better note taker than I am!

# CHAPTER 1: Structure pp. 12-39 
### Chapter Summary: 
* HTML pages are text documents
* HTML uses tags. Tags are characters thta sit inside angled brackets.  To give the information they surround special meaning. 
* Tags are often referred to as elements 
* Tags usually come in pairs.  The opening tag denotes the start of a piece of content; the closing tag denotes the end. 
* Opening tags can carry attributes, which tell us more abou the content of that element. 
* Attributes require a name and a value. 
* To learn HTML you need to know what tags are available for you to use, what they do, and where they can go. 

### HTML, ELEMENTS & STRUCTURES 
* HTML uses elements to describe the structure of pages. 
* Tags act like containers, they tell you something about the information that lies between their opening and closing tags. 

### ATTRIBUTES p. 26 
* Attributes tell us more about elements 
* attributes provide additional info about the *contents* of an element 
* Attributes appear on the opening tag of the element and are made up of two parts: a *name* and a *value*, separated by an equals sign 
* Most attribute values are either pre-defined or follow a stipulated format
* The majority of attributes can only be used on certain elements though a few attributes can appear on any element
* The value is the informatio or setting for the attribute.  It should be placed in *double* quotes
* Different attributes can have different values 

# CHAPTER 8: Extra Mark Up pp. 176-199
### Chapter Summary 
* DOCTYPES tell browsers which version of HTML you are using
* You can add comments to your code between the `<-- and -->` markers. 
* The id and class attributes allow you to identify particular elements. 
* The `<div>` and `<span>` elements allow you to group block-level and inline elements together 
* `<iframes>` cut windows into your web pages thru which other pages can be displayed. 
* The `<meta>` tag allows you to supply all kinds of information about your web page. 
* Escape characters are used to include special characters in your pages such as <, > and copyright symbols 

### ID ATTRIBUTE 
* Every HTML element can carry the id attribute.  It is used to uniquely identify that element from other elements on the page
    - Its value should start with a letter or underscore and not a number or any other character
    - No two elements on the same page should have the same value for their id attributes otherwise, the value is no longer unique
* Using a unique attribute, like id, allows you to style it differently, using CSS, from any other instance of the same element on the page 
* The id attribute is known as a global attribute because it can be used on any element 

### CLASS ATTRIBUTE 
* Every HTML element can also carry a class attribute. 
* Unlike the id attribute, the class attribute on any element can share the same value. 

### BLOCK ELEMENTS 
* Examples of block elements are `<h1>`, `<p>`, `<ul>` and `<li>`
* Block level elements will always appear to start on a new line in the browser window 

### INLINE ELEMENTS 
* Examples of inline elements are `<a>` `<b>` `<em>` and `<img>`
* In Line Elements will always appear to continue on the same line as their neighbouring elements. 

### GROUPING TEXT AND ELEMENTS IN A BLOCK 
* `<div>` allows you to group a set of elements together in one block-level box 
* For ex, you may create a div element to contain all of the elements for the header of your site or you might create a div element to contain comments from visitors. 
* in a browser, the contents of the div element will start on a new line, but other than this it will make no difference to the presentation of the page
* using the id or class attribute on the div element, however, means that you can create CSS style rules to indicate how much space the div element should occupy on the screen and change the appearance of all the elements contained within it. 

### GROUPING TEXT AND ELEMENTS INLINE
* `<span>` acts like an inline equivalent of the `<div>` element.  It is used to either: 
    1.  contain a section of text where there is no other suitable element to differentiate it from its surrounding text 
    1. Contain a number of inline elements 
* Most common reason to use span is so to control the appearance of the content of these elements using CSS
* You usually see that a class or id attribute is used with span elements in order to explain the purpose of this span element so that CSS styles can be applied to elements that have specific values for these attributes

### IFRAMES 
* `<iframe>` is a window in your page that allows you to see another page.  The term is an abbreviation of inline frame
* example of a common use is to embed google maps into the page.  The content of an iframe can be any html page located on the same server or elsewhere on the web. 
* Attributes used with iframe = 
    - src : specifies the url of the page to show in the frame 
    - height : height of iframe in pixels 
    - width : width of iframe in pixels 
    - scrolling : not supported in HTML5. But, in HTML4 and XHTML it indicates whether the the iframe should be scrollbars or not
        - Uses one of three values: yes, no and auto.
    - Frameborder : not supported in HTML5. But, in HTML4 and XHTML indicates whether iframe should have a border or not
        - Values used : 1 = border shown or 0 = no border shown 
    - Seamless : Used in HTML5 does not need a value 

### ESCAPE CHARACTERS PAGE 194 

# Chapter 17: HTML5 Layout pp. 428-451
### CHAPTER SUMMARY 
- The new HTML5 elements indicate the purpose of different parts of a wb page and help to describe its structure
- The new elements provide a clearer code - compared with using multiple div elements 
- Older browsers that do not understand HTML5 elements need to be told which elements are block-level elements
- To make HTML5 elements work in IE8 and older versions of IE extra JavaScript is needed which is available free from google. 

### NEW HTML5 LAYOUT ELEMENTS 
- Basically drop the div + attribute that breaks pages into sections and replace with just the attributes. 
    - old: `<div id="header">` 
    - new: `<header>`
- Helps to describe the structure of the page 

## Other elements used in HTML5: 
- `<header>` contains site name and main navigation
- `<footer>` contains copyright info 
- `<nav>` contains major navigational parts of page
- `<article>` acts as container for any section of a page that could stand alone and potentially be syndicated.  Can be nested within each other. 
- `<aside>` when used inside an article element it should contain info that is related to the article but not esential to its overall meaning.  When used outsite of an article element it acts as a container for content that is related to the entire page 
- `<sections>` groups related content together. typically each section would have their own header.  this should be used as a wrapper for the entire page. 
- `<hgroup>` purpose is to group together a group of header elements so that they are treated as one single heading
-  `<figure>` examples of usage: images, videos, graphs, diagrams, code samples, text that supports the main body of an article 
    - should also contain  `<figcaption>`
- `<div>` where there is no suitable element to group a set of elements div will be used 
- `<a>` allows you to turn an entire block into a link 

#### *EXAMPLE LAYOUTS ON PP445-448*

# CHAPTER 18: Process & Design pp. 452-475 

### CHAPTER SUMMARY 
- It's important to understand who your target audience is, why they would come to your site, what information they want to find and when they are likely to return 
- Site maps allow you to plan the structure of a site 
- Wireframes allow you to organize the information that will need to go on each page 
- Design is about communication.  Visual hierarchy helps visitors understand what you are trying to tell them 
- You can differentiate between pieces of information using size, color and style
- You can use grouping and similarity to help simplify the information you present 

# CHAPTER 1: ABC of Programming pp. 11-42

### CHAPTER SUMMARY: 
- A script is a series of instructions that the computer can follow in order to achieve a goal
- Each time the script runs ir might only use a subset of all the instructions. 
- Computers approach tasks in a different way than humans, so your instructions must let the computer solve the task programmatically. 
- To approach writing a script, break down your goal into a series of tasks and then work out each step needed to complete that task - a flowchart can help
- Computers create models of the world using data. 
- The models use objects to represent physical things.  Objects can have: properties that tell us about the object; methods that perform tasks using the properties of that object; events which are triggered when a user interacts with the computer. 
- Programmers can write code to say " When this event occurs, run that code " 
- Web browsers use HTML markup to create a model of the web page. Eaach element creates its own node which is a kind of object. 
- To mak web pages interactie you write code that uses the browser's model of the web page. 
- It is best to keep JavaScript code in its own Javascript file. 
- JavaScript files are text files like HTML pages and CSS style sheets but they have the .js extension 
- The HTML `<script>` element is used in HTML pages to tell the browser to load the JavaScript file.  Rather like the `<link>` element can be used to load a CSS file 
- If you view the source code of the page in the browser, the JavaScript will not have the changed the HTML, because the script works with the model of the web page that the browser has created. 

### OBJECTS, PROPERTIES AND EVENTS 
- **Objects** are physical things that can be represented in the world. Objects are often referred to as instances by programmers.  
- Each object can have its own 
    - Properties
    - Events 
    - Methods 
- And, all together they create a working model of that object 
- **Properties** aka characteristics.  Each property has a ame and a value and each of the name/value pairs tells you something about each individual instance of the object 
- **Events** script often use different events to trigger different types of functionality.  A script will state which events the programmer wants to respond to and what part of the script should be run when each of those events occur. 
- **Methods** methods are like questions and instructions that tell you something about that object or change the value of one or more of that object's properties
