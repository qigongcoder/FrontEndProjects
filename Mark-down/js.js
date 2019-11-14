"use strict";

var example=`# Heading One
## Heading Two
A link [links](https://www.freecodecamp.com)
Inline code \`<div></div>\`.
\`\`\`
//code:
let x=3;
for(let i=0;i<5;i++){
    x++;
}
\`\`\`

1. List Item One
2. List Item Two
> Block Quote
![alt text][logo]
Strong emphasis, aka bold, with **asterisks** or __underscores__.
Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
`;

function first_bit() {

    document.getElementById('editor').innerHTML = example;
    document.getElementById('preview').innerHTML = marked(example);

}


function check() {

    var text = document.getElementById("editor").value;
    document.getElementById('preview').innerHTML = marked(text);

}


