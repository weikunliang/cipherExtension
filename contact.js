function Contact(contact_id, contact_pub_key) { 	
	this.contact_id = contact_id;
	this.contact_pub_key = contact_pub_key;	
	this.sessions = {};
}	

Contact.prototype.addSession = function(contact_id, session_id, sessionInfo) {
	contact_id = contact_id || this.contact_id;
	this.sessions[session_id] = sessionInfo;
}		

Contact.prototype.getSessionId = function(contact_id, encrypted_message) {
	contact_id = contact_id || this.contact_id;
	// I don't know how you want to get the session ID from the encrypted message. Don't you also need which session it is? 
	// Shouldn't it be like a user(contact) each have an array of contacts where they store information like keys, sessions, etc.
	return "sessionID";
}	

Contact.prototype.decrypt = function(contact_id, current_session_id, encrypted_message) {
	contact_id = contact_id || this.contact_id;
	var session_id = getSessionId(contact_id, encrypted_message);
	// Do fancy decryption which I also don't know how you do.
	return "fancy decryption";
}

/*
 * Export the Class
 */
 
module.exports = Contact;


