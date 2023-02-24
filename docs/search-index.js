var searchIndex = JSON.parse('{\
"naughtyfy":{"doc":"","t":[0,0,0,0,3,11,11,11,11,11,11,11,11,11,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,7,3,8,10,11,11,5,11,5,5,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,3,3,3,12,12,11,11,11,11,11,11,12,11,11,11,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,12],"n":["errors","flags","low_api","structs","FanotifyInitError","borrow","borrow_mut","fmt","from","into","to_string","try_from","try_into","type_id","FANOTIFY_METADATA_VERSION","FAN_ACCESS","FAN_ACCESS_PERM","FAN_ALLOW","FAN_ALL_CLASS_BITS","FAN_ALL_EVENTS","FAN_ALL_INIT_FLAGS","FAN_ALL_MARK_FLAGS","FAN_ALL_OUTGOING_EVENTS","FAN_ALL_PERM_EVENTS","FAN_ATTRIB","FAN_AUDIT","FAN_CLASS_CONTENT","FAN_CLASS_NOTIF","FAN_CLASS_PRE_CONTENT","FAN_CLOEXEC","FAN_CLOSE","FAN_CLOSE_NOWRITE","FAN_CLOSE_WRITE","FAN_CREATE","FAN_DELETE","FAN_DELETE_SELF","FAN_DENY","FAN_ENABLE_AUDIT","FAN_EVENT_ON_CHILD","FAN_FS_ERROR","FAN_MARK_ADD","FAN_MARK_DONT_FOLLOW","FAN_MARK_EVICTABLE","FAN_MARK_FILESYSTEM","FAN_MARK_FLUSH","FAN_MARK_IGNORE","FAN_MARK_IGNORED_MASK","FAN_MARK_IGNORED_SURV_MODIFY","FAN_MARK_IGNORE_SURV","FAN_MARK_INODE","FAN_MARK_MOUNT","FAN_MARK_ONLYDIR","FAN_MARK_REMOVE","FAN_MODIFY","FAN_MOVE","FAN_MOVED_FROM","FAN_MOVED_TO","FAN_MOVE_SELF","FAN_NOFD","FAN_NONBLOCK","FAN_ONDIR","FAN_OPEN","FAN_OPEN_EXEC","FAN_OPEN_EXEC_PERM","FAN_OPEN_PERM","FAN_Q_OVERFLOW","FAN_RENAME","FAN_REPORT_DFID_NAME","FAN_REPORT_DFID_NAME_TARGET","FAN_REPORT_DIR_FID","FAN_REPORT_FID","FAN_REPORT_NAME","FAN_REPORT_PIDFD","FAN_REPORT_TARGET_FID","FAN_REPORT_TID","FAN_UNLIMITED_MARKS","FAN_UNLIMITED_QUEUE","FAN_EVENT_BUFFER_LEN","FAN_EVENT_METADATA_LEN","Path","as_os_str","borrow","borrow_mut","close_fd","deref","fanotify_init","fanotify_mark","fanotify_read","from","into","try_from","try_into","type_id","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","event_len","fanotify_event_info_header","fanotify_event_metadata","fanotify_response","fd","fd","fmt","fmt","fmt","from","from","from","info_type","into","into","into","len","mask","metadata_len","pad","pid","reserved","response","to_owned","to_owned","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","vers"],"q":["naughtyfy","","","","naughtyfy::errors","","","","","","","","","","naughtyfy::flags","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","naughtyfy::low_api","","","","","","","","","","","","","","","","naughtyfy::structs","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","1-1 mapping of all flags that fanotify.h has","Low level function mapping for fanotify","Contains all the necessary structs  needed for fanotify to …","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","Compare [<code>fanotify_event_metadata.vers</code>] to verify that the …","Create an event when a file or directory (but see BUGS) is …","An application wants to read a file or directory, for …","Allow the file operation.","","","","","","","Create an event when the metadata for a file or directory …","Bit mask to create audit record for result","This value allows the receipt of events notifying that a …","This is the default value.  It does not need to be …","This value allows the receipt of events notifying that a …","Set the close-on-exec flag (<code>FD_CLOEXEC</code>) on the new file …","Convenience macro - A file is closed (<code>FAN_CLOSE_WRITE</code>|…","Create an event when a read-only file or directory is …","Create an event when a writable file is closed.","A child file or directory was created in a watched parent.","A child file or directory was deleted in a watched parent.","A watched file or directory was deleted.","Deny the file operation.","Enable generation of audit log records about access …","Events for the immediate children of marked directories …","Represents filesystem error","The events in mask will be added to the mark mask (or to …","If pathname is a symbolic link, mark the link itself, …","","Mark the filesystem specified by pathname.  The filesystem …","Remove either all marks for filesystems, all marks for …","This bit is mutually exclusive with <code>FAN_MARK_IGNORED_MASK</code> …","The events in mask shall be added to or removed from the …","The ignore mask shall survive modify events.  If this flag …","Convenience macro - <code>FAN_MARK_IGNORE</code> requires …","","Mark the mount specified by pathname.  If pathname is not …","If the filesystem object to be marked is not a directory, …","The events in argument mask will be removed from the mark …","Create an event when a file is modified (write).","Convenience macro - A file or directory has been moved (…","Create an event when a file or directory has been moved …","A file or directory has been moved to a watched parent …","A watched file or directory was moved.","Indicates a queue overflow.","Enable the nonblocking flag (<code>O_NONBLOCK</code>) for the file …","Create events for directories—for example, when …","Create an event when a file or directory is opened.","A file was opened with the intent to be executed.  See …","An application wants to open a file for execution.  The …","Create an event when a permission to open a file or …","The event queue exceeded the limit of 16384 entries.  This …","Create an event when a file is renamed.","Convenience macro - <code>FAN_REPORT_NAME</code> requires …","Convenience macro - <code>FAN_REPORT_TARGET_FID</code> requires all …","","","","","","","Remove the limit of 8192 marks.  Use of this flag requires …","Remove the limit of 16384 events for the event queue.  Use …","Length of memory to be allocated for read buffer","Get current platform sizeof of fanotify_event_metadata.","Converts the implemented types to <code>std::ffi::OsStr</code> using …","","","","","","Initializes a new fanotify group and returns a file …","Adds, removes, or modifies an fanotify mark on a …","This function ateempts to read from a file descriptor …","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","This is the length of the data for the current event and …","In case of an fanotify group that identifies filesystem …","After a successful read(2), the read buffer contains the …","It is used to control file access.","This is an open file descriptor for the object being …","This is the file descriptor from the structure …","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","This is a bit mask describing the event (see below).","This is the length of the structure.  The field was …","","If flag <code>FAN_REPORT_TID</code> was set in fanotify_init(2), this is","This field is not used.","This field indicates whether or not the permission is to …","","","","","","","","","","","","This field holds a version number for the structure.  It …"],"i":[0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,9,9,0,9,0,0,0,9,9,9,9,9,14,16,17,14,16,17,14,16,14,16,14,0,0,0,14,17,14,16,17,14,16,17,16,14,16,17,16,14,14,16,14,14,17,14,16,14,16,17,14,16,17,14,16,17,14],"f":[0,0,0,0,0,[[]],[[]],[[1,2],3],[[]],[[]],[[],4],[[],5],[[],5],[[],6],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[],7],[[]],[[]],[8],[9,10],[[11,11],[[5,[8,12]]]],[[8,11,13,8],[[5,[12]]]],[8,[[5,[[15,[14]],12]]]],[[]],[[]],[[],5],[[],5],[[],6],[[]],[[]],[[]],[[]],[[]],[[]],[14,14],[16,16],[[]],[[]],0,0,0,0,0,0,[[14,2],3],[[16,2],3],[[17,2],3],[[]],[[]],[[]],0,[[]],[[]],[[]],0,0,0,0,0,0,0,[[]],[[]],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],6],[[],6],[[],6],0],"p":[[3,"FanotifyInitError"],[3,"Formatter"],[6,"Result"],[3,"String"],[4,"Result"],[3,"TypeId"],[3,"OsStr"],[15,"i32"],[3,"FAN_EVENT_METADATA_LEN"],[15,"usize"],[15,"u32"],[3,"Error"],[15,"u64"],[3,"fanotify_event_metadata"],[3,"Vec"],[3,"fanotify_event_info_header"],[3,"fanotify_response"],[8,"Path"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
