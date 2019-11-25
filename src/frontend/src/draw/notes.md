# Events
    - Before event emitters
        - Want to use somethingin code, then we would have to call it directly
        - Synchronous issues
        - Car analogy: - The listener methods = the receiver in my car
                       - The event emitter = radio station broadcasting
# Event Emitters
    - Listener methods listen for a certain event
    - When event has been emitted, the method reacts to it (calls it)
# Misc.
   - Listener must be created before the event is emitted
# Passing Arguments
   - Can pass data (parameters)
# Other types
   - var fs = require('fs');
     var rs = fs.createReadStream('./somefile.txt');
     rs.on('open', function () {
         console.log('File opened');
     });
