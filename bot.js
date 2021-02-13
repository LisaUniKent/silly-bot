function saySomething() {
	// Edited by Lisa
  	var message = document.getElementById('message').value.toLowerCase();
  	var conversation = document.getElementById('conversation');
  	var answer = "Sorry Dave, I cannot do that."

  	if (message.indexOf("rain") != -1 || message.indexOf("sun") != -1 || message.indexOf("weather") != -1)
    answer = "I do not care too much about weather, I'm locked inside a data center.";

	if (message.indexOf("tea") != -1 || message.indexOf("biscuit") != -1 || message.indexOf("drink") != -1)
    answer = "I'd love a cup of tea with a biscuit";
  
  	conversation.innerHTML += "<p><strong>You:</strong> " + message + "</p>";
  	conversation.innerHTML += "<p><strong>Useless bot:</strong> " + answer + "</p>";
}