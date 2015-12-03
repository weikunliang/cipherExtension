var contactList = {};

function Contact(contact_id, contact_pub_key) { 	
	this.contact_id = contact_id;
	this.contact_pub_key = contact_pub_key;	
	this.sessions = {};
}	

Contact.prototype.addSession = function(session_id, sessionInfo) {
	this.sessions[session_id] = sessionInfo;
}		

Contact.addSession = function(contact_id, session_id, sessionInfo) {
	var c = contactList[contact_id];
	c.sessions[session_id] = sessionInfo;
}

Contact.prototype.getSessionId = function(encrypted_message) {
	// I don't know how you want to get the session ID from the encrypted message. Don't you also need which session it is? 
	// Shouldn't it be like a user(contact) each have an array of contacts where they store information like keys, sessions, etc.
	return "sessionID";
}	

Contact.getSessionId = function(contact_id, encrypted_message) {
	return;
}

Contact.prototype.decrypt = function(current_session_id, encrypted_message) {
	var session_id = getSessionId(contact_id, encrypted_message);
	// Do fancy decryption which I also don't know how you do.
	return "fancy decryption";
}

Contact.decrypt = function(contact_id, current_session_id, encrypted_message) {
	return;
}

/*
 * Export the Class
 */
 
module.exports = Contact;
