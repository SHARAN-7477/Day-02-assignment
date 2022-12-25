Question :
write a blog on different between documents and windows object ?

Properties of document: ( I have listed few points only)

activeElement: It returns the currently active elements in the document.
body: It returns the contents of the body element.
anchors: It returns all <a> elements that have a name attribute.
baseURI: It returns a string value that represents the base URI of the document.
cookie: It returns the cookie of the current document. 

methods of Document: ( I have listed few points only)

The lists of most commonly used methods are listed below:

addEventListener(): It is used to attach an event handler to the specified element.
adoptNode(): It is used to adopt a node from another document and it returns a node object, representing the adopted node.
close(): It is used to close the output stream.
createAttribute(): It is used to create an attribute node with the specified name and returns the attribute object.
createComment(): It is used to create a comment node with some text.
createDocumentFragment(): It is used to create the document fragment to change the content of the document.

    output
i have run the code on HTML page:
and output is 
geeksforgeeks

Properties of the window:

Closed: It holds a Boolean value that represents whether the window is closed or not.
console: It returns a reference to the console object which provides access to the browser’s debugging console.
defaultStatus: It is used to define the default message that will be displayed in the status bar when no activity is carried on by the browser.
controllers: It returns the XUL controller objects for the current Chrome window.
customElements: It returns a reference to the CustomElementRegistry object, which can be used to register new custom elements and also get information about already registered custom elements.
crypto: It returns the browser crypto object.
devicePixelRatio: It returns the ratio between physical pixels and device-independent pixels in the current display.
Document: It returns a reference to the document object of that window.
DOMMatrix: It returns a reference to a DOMMatrix object, which represents 4×4 matrices, suitable for 2D and 3D operations.

document	:
 * It represents any HTML document or web page that is loaded in the browser.	   
 * It is loaded inside the window.	
 * It is the object of window property.	
 * All the tags, elements with attributes in HTML are part of the document.	
 * We can access the document from a window using the window. document	
 * The document is part of BOM (browser object model) and dom (Document object model)	
 * Properties of document objects such as title, body, cookies, etc can also be accessed by a window like this window. document.title	
syntax:
      document.propertyname;	
example:
     document.title :  will return the title of the document

window
 * It represents a browser window or frame that displays the contents of the webpage.
 * It is the very first object that is loaded in the browser.
 * It is the object of the browser.
 * Global objects, functions, and variables of JavaScript are members of the window object.
 * We can access the window from the window only. i.e. window.window
 * The window is part of BOM, not DOM.
 * Properties of the window object cannot be accessed by the document object.
 * syntax: 
       window.propertyname;
 * example:
        window.innerHeight : will return the height of the content area of the browser
