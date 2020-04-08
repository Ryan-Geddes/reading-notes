JS Chapter 3: Object Literals p. 100-105
JS Chapter 5: Document Object Model p. 183-242

#### JS Chapter 3: Object Literals p. 100-105
- An object is a series of variables and functions that represent something from the world aroud you. 
- In an object, variables are known as properties of the object; functions are known as methods of the object 
- Web browsers implement objects that represent both the broswer window and the document loaded into the browser window. 
- page 102 for how to create and how to access properties or methods of an object 

#### JS Chapter 5: Document Object Mondel p. 183-242
- The browser represents the page using a DOM tree
- DOM trees have four types of nodes: document nodes, element nodes, attribute nodes and text nodes
- You can select an element by their id or class attributes, by tag name, or using CSS selector syntax
- Whenever a DOM query can return more than one node, it will always return a NodeList
- From an element node, you can access and updte its content using properties such as textContent and innerHTML or using DOM manipulation techniques. 
- An element node can contain multiple text nodes and child elements that are siblings of each other. 
- In older browsers, implementation of the DOM is inconsistent.  And is a popular reason for using jQuery 
- Browsers offer tools for viewing the DOM tree. 

- DOM tree is a model of a web page and is made up of: 
    - Element nodes
    - Attribute nodes
    - Text nodes 
- DOM is its own set of rules separate from HTML or JavaScript 

Methods that find elements in the DOM tree are called DOM queries.  If you need to work with an element more than once you should store it as a variable. The variable stores a **reference** to the object in the DOM tree.  It is storing the *location* of the node. 
*Working with the DOM tree* you can: 
- Select an individual element node 
    * `getElementId()`
        * EXAMPLE `document.getElementById('one)`
        * document = object 
        * getElementById('one') = method  
    * `querySelector()` 
- Select multiple elements `(NodeList)`
    * NodeList is a DOM query that returns more than one element 
    * Live v. static NodeLists- live seems preferable 
    * EXAMPLES of different DOM queries that return NodeList: getElementsByTagName(), getElementsByClassName(), querySelectorAll(). 
    * To select an element from a NodeList you can, 
        1. use the item() method 
            * var elements = document.getElementsByClasName('hot')
            if (elelents.length >=1){
                var firstItem = elements.item(0);
            }
        1. PREFERRED array syntax because its faster which is basically the same syntax as above but hard brackets around the zero assigned to var firstItem
    * NodeList is stored in a variable called elements in these examples
    * You can select elements using: class attributes, tag name, CSS selectors
- Traverse between nodes 
    * When you have an element node you can select another element in relation to it using these 5 properties, known as traversing the DOM: 
        1. parentNode
        1. previousSibling or nextSibling 
        1. firstChild or lastChild 
- Access/Update Nodes 
    * To access and change a text node 
        1. var itemTwo = document.getElementById('two'); THIS WILL get second list item 
        1. var elText = itemTwo.firstchild.nodeValue; THIS WILL get its text content 
        1. elText = elText.replace('pine nuts', 'kale'); THIS WILL change pine nuts to kale
        1. itemTwo.firstChild.nodeValue = elText; THIS WILL update the list item (page 215) 
    * Can also access and update text with textcontent (& innertext) p. 216
    * Can also access text ONLY 
    * Can access and update text and markup with innerHTML
    * Can add elements by using DOM manipulation 
        1. create element createElement()    --> var newEl = document.createElement('li') --> creates new element and stores in a variable 
        1. Give it content createTextNode() --> var newText = document.createTextNode('quinoa') --> create text node and store it in a variable
        1. PLUS                             --> var position = document.getElementsByTagName('ul) [0] --> find the position where new element should be added.                                        
        1. Add it to the DOM appendChild() --> position.appendChild(newEl) --> insert the new element into its position
    * Can add element to a DOM tree document.create 
- Work with HTML Content 
    * You can add and remove HTML content, innerHTML property versus. DOM manipulation methods 
    * 
- Access or update attribute values 

**To repeat actions for an entire NodeList** loop thru each node in the collection and apply the same statements to each (p. 204) 