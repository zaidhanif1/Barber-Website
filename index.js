var cssLink = document.createElement("link");
cssLink.href = "style.css"; 
cssLink.rel = "stylesheet"; 
cssLink.type = "text/css"; 
frames['iframe1'].document.head.appendChild(cssLink);