//start of the questions bank
const bank ={
   "networking":[ {
    "q": "What does OSI stand for?",
    "options": [
      "Open Systems Interconnection",
      "Open Security Interface",
      "Operating Systems Internet",
      "Open Switching Infrastructure"
    ],
    "answer": "Open Systems Interconnection"
  },
  {
    "q": "How many layers are in the OSI model?",
    "options": ["7", "5", "4", "8"],
    "answer": "7"
  },
  {
    "q": "Which OSI layer is responsible for routing packets?",
    "options": [
      "Network Layer",
      "Transport Layer",
      "Data Link Layer",
      "Session Layer"
    ],
    "answer": "Network Layer"
  },
  {
    "q": "Which protocol is used to resolve domain names into IP addresses?",
    "options": ["DNS", "DHCP", "ARP", "ICMP"],
    "answer": "DNS"
  },
  {
    "q": "What does DHCP provide to clients?",
    "options": [
      "IP Addresses",
      "Encryption Keys",
      "Web Pages",
      "Firewall Rules"
    ],
    "answer": "IP Addresses"
  },
  {
    "q": "What does TCP guarantee?",
    "options": [
      "Reliable Delivery",
      "Fastest Delivery",
      "Encrypted Delivery",
      "Wireless Delivery"
    ],
    "answer": "Reliable Delivery"
  },
  {
    "q": "Which protocol is connectionless?",
    "options": ["UDP", "TCP", "SSH", "FTP"],
    "answer": "UDP"
  },
  {
    "q": "What port does HTTP use by default?",
    "options": ["80", "443", "22", "53"],
    "answer": "80"
  },
  {
    "q": "What port does HTTPS use by default?",
    "options": ["443", "80", "25", "110"],
    "answer": "443"
  },
  {
    "q": "What does NAT stand for?",
    "options": [
      "Network Address Translation",
      "Network Access Tunnel",
      "Node Address Table",
      "Network Authentication Technology"
    ],
    "answer": "Network Address Translation"
  },
  {
    "q": "What is the purpose of a router?",
    "options": [
      "Connect Different Networks",
      "Store Files",
      "Encrypt Emails",
      "Create User Accounts"
    ],
    "answer": "Connect Different Networks"
  },
  {
    "q": "What is the purpose of a switch?",
    "options": [
      "Connect Devices Within a Network",
      "Route Internet Traffic",
      "Assign IP Addresses",
      "Filter Malware"
    ],
    "answer": "Connect Devices Within a Network"
  },
  {
    "q": "What does VLAN stand for?",
    "options": [
      "Virtual Local Area Network",
      "Verified LAN",
      "Virtual Link Access Network",
      "Virtual Layered Area Network"
    ],
    "answer": "Virtual Local Area Network"
  },
  {
    "q": "Which command tests reachability between hosts?",
    "options": ["ping", "traceroute", "ipconfig", "nslookup"],
    "answer": "ping"
  },
  {
    "q": "What protocol does ping use?",
    "options": ["ICMP", "TCP", "UDP", "ARP"],
    "answer": "ICMP"
  },
  {
    "q": "What is a subnet mask used for?",
    "options": [
      "Identify Network and Host Portions",
      "Encrypt Traffic",
      "Assign MAC Addresses",
      "Resolve DNS Queries"
    ],
    "answer": "Identify Network and Host Portions"
  },
  {
    "q": "Which device operates primarily at Layer 2?",
    "options": [
      "Switch",
      "Router",
      "Firewall",
      "Gateway"
    ],
    "answer": "Switch"
  },
  {
    "q": "What is the loopback IPv4 address?",
    "options": [
      "127.0.0.1",
      "192.168.1.1",
      "10.0.0.1",
      "172.16.0.1"
    ],
    "answer": "127.0.0.1"
  },
  {
    "q": "What is the default subnet mask for a Class C network?",
    "options": [
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.255"
    ],
    "answer": "255.255.255.0"
  },
  {
    "q": "What does ARP do?",
    "options": [
      "Maps IP Addresses to MAC Addresses",
      "Assigns IP Addresses",
      "Routes Packets",
      "Encrypts Traffic"
    ],
    "answer": "Maps IP Addresses to MAC Addresses"
  }
]
,

   "database":// database
[
  {
    "q": "What is a database?",
    "options": [
      "An organized collection of data",
      "A programming language",
      "An operating system",
      "A network protocol"
    ],
    "answer": "An organized collection of data"
  },
  {
    "q": "What does DBMS stand for?",
    "options": [
      "Database Management System",
      "Data Backup Management Service",
      "Database Monitoring Software",
      "Data Business Management System"
    ],
    "answer": "Database Management System"
  },
  {
    "q": "Which of the following is a DBMS?",
    "options": [
      "MySQL",
      "Chrome",
      "Linux",
      "Wireshark"
    ],
    "answer": "MySQL"
  },
  {
    "q": "What is a table?",
    "options": [
      "A collection of rows and columns",
      "A file system",
      "A server",
      "A query"
    ],
    "answer": "A collection of rows and columns"
  },
  {
    "q": "A row in a table is also called a?",
    "options": [
      "Record",
      "Constraint",
      "Index",
      "Schema"
    ],
    "answer": "Record"
  },
  {
    "q": "A column represents a?",
    "options": [
      "Field",
      "Database",
      "User",
      "Server"
    ],
    "answer": "Field"
  },
  {
    "q": "What does SQL stand for?",
    "options": [
      "Structured Query Language",
      "Simple Query Logic",
      "System Query Language",
      "Structured Question Language"
    ],
    "answer": "Structured Query Language"
  },
  {
    "q": "Which SQL statement retrieves data?",
    "options": [
      "SELECT",
      "INSERT",
      "DELETE",
      "UPDATE"
    ],
    "answer": "SELECT"
  },
  {
    "q": "Which SQL statement adds new records?",
    "options": [
      "INSERT",
      "ADD",
      "APPEND",
      "CREATE"
    ],
    "answer": "INSERT"
  },
  {
    "q": "Which SQL statement modifies existing data?",
    "options": [
      "UPDATE",
      "CHANGE",
      "ALTER",
      "MODIFY"
    ],
    "answer": "UPDATE"
  },
  {
    "q": "Which SQL statement removes rows?",
    "options": [
      "DELETE",
      "DROP",
      "REMOVE",
      "ERASE"
    ],
    "answer": "DELETE"
  },
  {
    "q": "Which clause filters records?",
    "options": [
      "WHERE",
      "ORDER BY",
      "GROUP BY",
      "LIMIT"
    ],
    "answer": "WHERE"
  },
  {
    "q": "Which clause sorts results?",
    "options": [
      "ORDER BY",
      "SORT",
      "GROUP BY",
      "INDEX"
    ],
    "answer": "ORDER BY"
  },
  {
    "q": "Which keyword limits returned rows?",
    "options": [
      "LIMIT",
      "TOP",
      "STOP",
      "MAX"
    ],
    "answer": "LIMIT"
  },
  {
    "q": "What is a primary key?",
    "options": [
      "A unique identifier",
      "A password",
      "A backup key",
      "A server key"
    ],
    "answer": "A unique identifier"
  },
  {
    "q": "Can a primary key contain NULL values?",
    "options": [
      "No",
      "Yes",
      "Sometimes",
      "Only in MySQL"
    ],
    "answer": "No"
  },
  {
    "q": "What is a foreign key?",
    "options": [
      "A field linking tables",
      "A backup key",
      "An encryption key",
      "A login key"
    ],
    "answer": "A field linking tables"
  },
  {
    "q": "What is a relationship between tables?",
    "options": [
      "A connection using keys",
      "A backup",
      "A query",
      "An index"
    ],
    "answer": "A connection using keys"
  },
  {
    "q": "Which join returns matching rows only?",
    "options": [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL JOIN"
    ],
    "answer": "INNER JOIN"
  },
  {
    "q": "Which join returns all rows from the left table?",
    "options": [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "CROSS JOIN"
    ],
    "answer": "LEFT JOIN"
  },
  {
    "q": "What is normalization?",
    "options": [
      "Reducing data redundancy",
      "Encrypting data",
      "Backing up data",
      "Deleting duplicates"
    ],
    "answer": "Reducing data redundancy"
  },
  {
    "q": "What is redundancy?",
    "options": [
      "Duplicate data",
      "Encrypted data",
      "Compressed data",
      "Missing data"
    ],
    "answer": "Duplicate data"
  },
  {
    "q": "What is an index used for?",
    "options": [
      "Speeding up queries",
      "Deleting rows",
      "Creating backups",
      "Encrypting records"
    ],
    "answer": "Speeding up queries"
  },
  {
    "q": "What is a transaction?",
    "options": [
      "A group of operations",
      "A backup",
      "A login",
      "A query result"
    ],
    "answer": "A group of operations"
  },
  {
    "q": "What does ACID stand for?",
    "options": [
      "Atomicity Consistency Isolation Durability",
      "Access Control Integration Data",
      "Automated Consistent Indexed Data",
      "Atomic Control Integrity Database"
    ],
    "answer": "Atomicity Consistency Isolation Durability"
  },
  {
    "q": "What is atomicity?",
    "options": [
      "All or nothing execution",
      "Fast execution",
      "Secure execution",
      "Parallel execution"
    ],
    "answer": "All or nothing execution"
  },
  {
    "q": "Why are database backups important?",
    "options": [
      "Prevent data loss",
      "Improve performance",
      "Increase RAM",
      "Reduce storage"
    ],
    "answer": "Prevent data loss"
  },
  {
    "q": "What is authentication?",
    "options": [
      "Verifying identity",
      "Backing up data",
      "Encrypting tables",
      "Deleting records"
    ],
    "answer": "Verifying identity"
  },
  {
    "q": "What is authorization?",
    "options": [
      "Controlling permissions",
      "Logging in",
      "Creating backups",
      "Creating tables"
    ],
    "answer": "Controlling permissions"
  },
  {
    "q": "What is NoSQL?",
    "options": [
      "A non-relational database approach",
      "A SQL command",
      "A backup method",
      "A query optimizer"
    ],
    "answer": "A non-relational database approach"
  }
]
,
   "linux"://linux
[
  {
    "q": "What command lists files and directories in Linux?",
    "options": ["ls", "dir", "show", "list"],
    "answer": "ls"
  },
  {
    "q": "What command changes the current directory?",
    "options": ["cd", "mv", "ls", "pwd"],
    "answer": "cd"
  },
  {
    "q": "What command shows the current working directory?",
    "options": ["pwd", "cwd", "where", "dir"],
    "answer": "pwd"
  },
  {
    "q": "What command copies files?",
    "options": ["cp", "mv", "copy", "clone"],
    "answer": "cp"
  },
  {
    "q": "What command moves or renames files?",
    "options": ["mv", "cp", "move", "rename"],
    "answer": "mv"
  },
  {
    "q": "What command removes files?",
    "options": ["rm", "del", "erase", "remove"],
    "answer": "rm"
  },
  {
    "q": "Which directory contains system configuration files?",
    "options": ["/etc", "/home", "/usr", "/tmp"],
    "answer": "/etc"
  },
  {
    "q": "Which directory contains user home folders?",
    "options": ["/home", "/root", "/var", "/opt"],
    "answer": "/home"
  },
  {
    "q": "What command displays the contents of a text file?",
    "options": ["cat", "show", "open", "display"],
    "answer": "cat"
  },
  {
    "q": "What command searches for text within files?",
    "options": ["grep", "find", "search", "scan"],
    "answer": "grep"
  },
  {
    "q": "What command displays running processes?",
    "options": ["ps", "jobs", "proc", "run"],
    "answer": "ps"
  },
  {
    "q": "What command terminates a process?",
    "options": ["kill", "stop", "end", "terminate"],
    "answer": "kill"
  },
  {
    "q": "What command shows system uptime?",
    "options": ["uptime", "time", "status", "runtime"],
    "answer": "uptime"
  },
  {
    "q": "What command displays disk usage?",
    "options": ["df", "du", "disk", "usage"],
    "answer": "df"
  },
  {
    "q": "What command displays file sizes in directories?",
    "options": ["du", "df", "ls", "size"],
    "answer": "du"
  },
  {
    "q": "What does chmod do?",
    "options": [
      "Changes file permissions",
      "Changes ownership",
      "Moves files",
      "Creates users"
    ],
    "answer": "Changes file permissions"
  },
  {
    "q": "What command changes file ownership?",
    "options": ["chown", "chmod", "owner", "perm"],
    "answer": "chown"
  },
  {
    "q": "Which user has the highest privileges in Linux?",
    "options": ["root", "admin", "system", "super"],
    "answer": "root"
  },
  {
    "q": "What command shows the current logged-in user?",
    "options": ["whoami", "user", "me", "id"],
    "answer": "whoami"
  },
  {
    "q": "What command creates a new directory?",
    "options": ["mkdir", "newdir", "createdir", "makedir"],
    "answer": "mkdir"
  },
  {
    "q": "What command removes an empty directory?",
    "options": ["rmdir", "rm", "deletedir", "erase"],
    "answer": "rmdir"
  },
  {
    "q": "What command displays network configuration information?",
    "options": ["ip", "network", "config", "route"],
    "answer": "ip"
  },
  {
    "q": "What command tests network connectivity?",
    "options": ["ping", "trace", "check", "probe"],
    "answer": "ping"
  },
  {
    "q": "What file contains user account information?",
    "options": [
      "/etc/passwd",
      "/etc/users",
      "/etc/account",
      "/etc/login"
    ],
    "answer": "/etc/passwd"
  },
  {
    "q": "What file stores password hashes?",
    "options": [
      "/etc/shadow",
      "/etc/passwd",
      "/etc/hash",
      "/etc/security"
    ],
    "answer": "/etc/shadow"
  }
],
   "Strategic thinking"://strategy
[
  {
    "q": "What is the first step in solving a complex problem?",
    "options": [
      "Understand the problem",
      "Take immediate action",
      "Ask others to solve it",
      "Ignore it"
    ],
    "answer": "Understand the problem"
  },
  {
    "q": "What is a strategy?",
    "options": [
      "A long-term plan to achieve a goal",
      "A random action",
      "A daily task list",
      "A shortcut"
    ],
    "answer": "A long-term plan to achieve a goal"
  },
  {
    "q": "What is a key benefit of planning?",
    "options": [
      "Reduces uncertainty",
      "Eliminates all risk",
      "Guarantees success",
      "Avoids responsibility"
    ],
    "answer": "Reduces uncertainty"
  },
  {
    "q": "When faced with multiple options, what should you compare?",
    "options": [
      "Costs and benefits",
      "Popularity",
      "Random choice",
      "First impression only"
    ],
    "answer": "Costs and benefits"
  },
  {
    "q": "What is risk assessment?",
    "options": [
      "Identifying and evaluating threats",
      "Ignoring problems",
      "Taking chances blindly",
      "Following others"
    ],
    "answer": "Identifying and evaluating threats"
  },
  {
    "q": "What does adaptability mean?",
    "options": [
      "Adjusting to change",
      "Avoiding change",
      "Repeating mistakes",
      "Sticking to one method forever"
    ],
    "answer": "Adjusting to change"
  },
  {
    "q": "Why is gathering information important?",
    "options": [
      "To make informed decisions",
      "To delay action",
      "To impress people",
      "To avoid thinking"
    ],
    "answer": "To make informed decisions"
  },
  {
    "q": "What is a common cause of poor decisions?",
    "options": [
      "Insufficient information",
      "Careful planning",
      "Risk analysis",
      "Learning from experience"
    ],
    "answer": "Insufficient information"
  },
  {
    "q": "What is the purpose of setting goals?",
    "options": [
      "Provide direction",
      "Create confusion",
      "Increase uncertainty",
      "Waste time"
    ],
    "answer": "Provide direction"
  },
  {
    "q": "What is a contingency plan?",
    "options": [
      "A backup plan",
      "A random guess",
      "A completed task",
      "A daily routine"
    ],
    "answer": "A backup plan"
  },
  {
    "q": "Why should you review outcomes?",
    "options": [
      "To learn from results",
      "To avoid responsibility",
      "To blame others",
      "To repeat mistakes"
    ],
    "answer": "To learn from results"
  },
  {
    "q": "What is opportunity cost?",
    "options": [
      "The value of the best alternative not chosen",
      "The cost of doing nothing",
      "The cost of failure",
      "The cost of success"
    ],
    "answer": "The value of the best alternative not chosen"
  },
  {
    "q": "What is a strategic objective?",
    "options": [
      "A measurable long-term goal",
      "A random wish",
      "A daily habit",
      "A short-term distraction"
    ],
    "answer": "A measurable long-term goal"
  },
  {
    "q": "Why is prioritization important?",
    "options": [
      "It focuses effort on what matters most",
      "It eliminates work",
      "It guarantees success",
      "It avoids planning"
    ],
    "answer": "It focuses effort on what matters most"
  },
  {
    "q": "What is a SWOT analysis used for?",
    "options": [
      "Evaluating strengths, weaknesses, opportunities, and threats",
      "Measuring network speed",
      "Writing code",
      "Creating passwords"
    ],
    "answer": "Evaluating strengths, weaknesses, opportunities, and threats"
  },
  {
    "q": "What is a common trait of strategic thinkers?",
    "options": [
      "They consider long-term consequences",
      "They act impulsively",
      "They avoid planning",
      "They ignore risks"
    ],
    "answer": "They consider long-term consequences"
  },
  {
    "q": "What should you do when a plan fails?",
    "options": [
      "Analyze and adapt",
      "Give up",
      "Blame others",
      "Ignore the failure"
    ],
    "answer": "Analyze and adapt"
  },
  {
    "q": "What is decision paralysis?",
    "options": [
      "Being unable to decide due to overthinking",
      "Making fast decisions",
      "Taking action immediately",
      "Following instructions"
    ],
    "answer": "Being unable to decide due to overthinking"
  },
  {
    "q": "Why is delegation useful?",
    "options": [
      "It allows focus on high-priority tasks",
      "It removes accountability",
      "It guarantees success",
      "It eliminates work"
    ],
    "answer": "It allows focus on high-priority tasks"
  },
  {
    "q": "What is the ultimate goal of strategic thinking?",
    "options": [
      "Making better decisions to achieve objectives",
      "Avoiding responsibility",
      "Taking random actions",
      "Following trends blindly"
    ],
    "answer": "Making better decisions to achieve objectives"
  }
]

,
   "Javascript"://javascript
[
  {
    "q": "What language runs in the browser?",
    "options": ["JavaScript", "Python", "Java", "C++"],
    "answer": "JavaScript"
  },
  {
    "q": "Which keyword declares a variable?",
    "options": ["let", "loop", "define", "varible"],
    "answer": "let"
  },
  {
    "q": "Which keyword creates a constant?",
    "options": ["const", "let", "static", "fixed"],
    "answer": "const"
  },
  {
    "q": "Which keyword was traditionally used for variables before ES6?",
    "options": ["var", "let", "const", "int"],
    "answer": "var"
  },
  {
    "q": "What does DOM stand for?",
    "options": [
      "Document Object Model",
      "Data Object Model",
      "Document Output Method",
      "Display Object Management"
    ],
    "answer": "Document Object Model"
  },
  {
    "q": "Which symbol starts a single-line comment?",
    "options": ["//", "#", "--", "**"],
    "answer": "//"
  },
  {
    "q": "Which data type represents true or false?",
    "options": ["Boolean", "String", "Number", "Array"],
    "answer": "Boolean"
  },
  {
    "q": "How do you write text to the browser console?",
    "options": [
      "console.log()",
      "print()",
      "echo()",
      "display()"
    ],
    "answer": "console.log()"
  },
  {
    "q": "Which function displays a popup alert?",
    "options": [
      "alert()",
      "popup()",
      "message()",
      "notify()"
    ],
    "answer": "alert()"
  },
  {
    "q": "What is an array?",
    "options": [
      "A list of values",
      "A function",
      "A loop",
      "A variable type"
    ],
    "answer": "A list of values"
  },
  {
    "q": "Which method adds an item to the end of an array?",
    "options": [
      "push()",
      "pop()",
      "shift()",
      "join()"
    ],
    "answer": "push()"
  },
  {
    "q": "Which method removes the last item from an array?",
    "options": [
      "pop()",
      "push()",
      "shift()",
      "slice()"
    ],
    "answer": "pop()"
  },
  {
    "q": "What is an object in JavaScript?",
    "options": [
      "A collection of key-value pairs",
      "A function",
      "A loop",
      "A data type only for numbers"
    ],
    "answer": "A collection of key-value pairs"
  },
  {
    "q": "Which operator checks equality without type conversion?",
    "options": ["===", "==", "=", "!="],
    "answer": "==="
  },
  {
    "q": "What keyword defines a function?",
    "options": [
      "function",
      "def",
      "func",
      "method"
    ],
    "answer": "function"
  },
  {
    "q": "How do you access an HTML element by ID?",
    "options": [
      "document.getElementById()",
      "document.find()",
      "document.select()",
      "document.query()"
    ],
    "answer": "document.getElementById()"
  },
  {
    "q": "What event occurs when a button is clicked?",
    "options": [
      "click",
      "hover",
      "load",
      "submit"
    ],
    "answer": "click"
  },
  {
    "q": "What does addEventListener() do?",
    "options": [
      "Attaches an event handler",
      "Creates an HTML element",
      "Loads a page",
      "Stores data"
    ],
    "answer": "Attaches an event handler"
  },
  {
    "q": "What is a loop used for?",
    "options": [
      "Repeating code",
      "Creating variables",
      "Styling pages",
      "Loading images"
    ],
    "answer": "Repeating code"
  },
  {
    "q": "Which loop is commonly used to iterate through arrays?",
    "options": [
      "for",
      "switch",
      "if",
      "try"
    ],
    "answer": "for"
  },
  {
    "q": "What does JSON stand for?",
    "options": [
      "JavaScript Object Notation",
      "Java Source Object Network",
      "JSON Object Name",
      "Java Syntax Object Notation"
    ],
    "answer": "JavaScript Object Notation"
  },
  {
    "q": "Which method converts JSON text into a JavaScript object?",
    "options": [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.load()",
      "JSON.convert()"
    ],
    "answer": "JSON.parse()"
  },
  {
    "q": "Which method converts an object into JSON text?",
    "options": [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.encode()",
      "JSON.objectify()"
    ],
    "answer": "JSON.stringify()"
  },
  {
    "q": "What keyword creates an asynchronous function?",
    "options": [
      "async",
      "await",
      "promise",
      "fetch"
    ],
    "answer": "async"
  },
  {
    "q": "What keyword waits for a Promise to complete?",
    "options": [
      "await",
      "async",
      "wait",
      "pause"
    ],
    "answer": "await"
  },
  {
    "q": "What does fetch() do?",
    "options": [
      "Makes HTTP requests",
      "Creates arrays",
      "Loops through objects",
      "Adds HTML elements"
    ],
    "answer": "Makes HTTP requests"
  },
  {
    "q": "What is a Promise?",
    "options": [
      "An object representing future completion of an async task",
      "A loop",
      "A variable",
      "A browser window"
    ],
    "answer": "An object representing future completion of an async task"
  },
  {
    "q": "Which method selects the first matching CSS element?",
    "options": [
      "querySelector()",
      "getElementById()",
      "findElement()",
      "selectOne()"
    ],
    "answer": "querySelector()"
  },
  {
    "q": "What is localStorage used for?",
    "options": [
      "Saving data in the browser",
      "Hosting websites",
      "Running JavaScript",
      "Encrypting passwords"
    ],
    "answer": "Saving data in the browser"
  },
  {
    "q": "Why is JavaScript important?",
    "options": [
      "It adds interactivity to web pages",
      "It replaces HTML",
      "It is only used on servers",
      "It is only used for databases"
    ],
    "answer": "It adds interactivity to web pages"
  }
],

   "python"://python
[
  {
    "q": "Which keyword is used to define a function in Python?",
    "options": ["def", "func", "function", "define"],
    "answer": "def"
  },
  {
    "q": "Which data type stores a collection of items in order?",
    "options": ["list", "set", "dict", "tuple"],
    "answer": "list"
  },
  {
    "q": "Which module is commonly used to interact with the operating system?",
    "options": ["os", "sys", "socket", "re"],
    "answer": "os"
  },
  {
    "q": "What function is used to read user input?",
    "options": ["input()", "read()", "get()", "scan()"],
    "answer": "input()"
  },
  {
    "q": "Which keyword handles exceptions?",
    "options": ["try", "catch", "throw", "handle"],
    "answer": "try"
  },
  {
    "q": "What module is used for regular expressions?",
    "options": ["re", "regex", "pattern", "search"],
    "answer": "re"
  },
  {
    "q": "Which Python module allows network communication?",
    "options": ["socket", "network", "requests", "urllib"],
    "answer": "socket"
  },
  {
    "q": "What does a dictionary store?",
    "options": [
      "Key-value pairs",
      "Ordered strings",
      "Only numbers",
      "Functions"
    ],
    "answer": "Key-value pairs"
  },
  {
    "q": "Which statement imports a module?",
    "options": [
      "import module",
      "include module",
      "using module",
      "load module"
    ],
    "answer": "import module"
  },
  {
    "q": "Which function opens a file?",
    "options": ["open()", "file()", "read()", "load()"],
    "answer": "open()"
  },
  {
    "q": "What method reads an entire file?",
    "options": [
      "read()",
      "readline()",
      "scan()",
      "open()"
    ],
    "answer": "read()"
  },
  {
    "q": "Which loop repeats while a condition is true?",
    "options": ["while", "for", "repeat", "loop"],
    "answer": "while"
  },
  {
    "q": "What library is often used to make HTTP requests?",
    "options": ["requests", "socket", "urllib3", "http"],
    "answer": "requests"
  },
  {
    "q": "Which function converts text to lowercase?",
    "options": [
      "lower()",
      "tolower()",
      "small()",
      "downcase()"
    ],
    "answer": "lower()"
  },
  {
    "q": "What is a common use of regular expressions in cybersecurity?",
    "options": [
      "Log analysis",
      "Drawing graphics",
      "Compiling kernels",
      "Database indexing"
    ],
    "answer": "Log analysis"
  },
  {
    "q": "What does JSON stand for?",
    "options": [
      "JavaScript Object Notation",
      "Java Structured Object Network",
      "JSON Object Naming",
      "Java System Object Notation"
    ],
    "answer": "JavaScript Object Notation"
  },
  {
    "q": "Which module is commonly used to parse JSON data?",
    "options": ["json", "js", "parse", "data"],
    "answer": "json"
  },
  {
    "q": "What is the purpose of the socket library in cybersecurity?",
    "options": [
      "Network communication",
      "Password storage",
      "Data encryption",
      "File compression"
    ],
    "answer": "Network communication"
  },
  {
    "q": "Which Python feature helps automate repetitive security tasks?",
    "options": [
      "Scripts",
      "Comments",
      "Strings",
      "Variables"
    ],
    "answer": "Scripts"
  },
  {
    "q": "Why is Python popular in cybersecurity?",
    "options": [
      "Fast development and automation",
      "Only used for hacking",
      "Built into routers",
      "Replaces operating systems"
    ],
    "answer": "Fast development and automation"
  }
]

}




















// end of the questions bank














































































let questions =[
    
];

const question = document.getElementById("question");
const options = document.getElementById("options");
const nextbtn = document.getElementById("next-btn")

question.innerText = "What i can access you in js";
let currentIndex = 0;
let score = 0;
function startQuiz(){
        score = 0;
         loadQuestion();
}


// loading questions 
function loadQuestion(){
     clearOpt();
       console.log("this subject contains " + questions.length)
      const currentQuestion = questions[currentIndex];
      question.innerText =`${currentIndex+1}.${currentQuestion.q}`;
      // function to make options change places like it should be abit dynamic
      let currentOptions = opt(currentQuestion.options);
      currentOptions.forEach(answer=>{
        const btn = document.createElement("button");
        btn.innerText = answer;
        btn.onclick =()=>{
             nextbtn.hidden = false;
             nextbtn.disabled = false;
             if(btn.innerText == currentQuestion.answer){
                btn.style.backgroundColor = "green";
                score++;
             }
             else{
                btn.style.backgroundColor = "red";
             }
             // adding the correct class
             Array.from(options.children).forEach(child =>{
                  if(child.innerText == currentQuestion.answer){
                      child.style.backgroundColor = 'green';
                  }
                  child.disabled = true;
             })
        //    console.log(btn.innerText);
         
        }
        options.appendChild(btn);
      }) 
}

nextbtn.onclick= ()=>{
    if(currentIndex < questions.length - 1){
   //     console.log(questions.length);
         currentIndex++;
         loadQuestion();
    }
    else{
        clearOpt();
        alert("final score is: "+score);
        question.hidden = true;
        const play_again = document.createElement('button');

        play_again.innerText = "play again";
        play_again.id = "play";
        
        play_again.onclick = ()=>{
            app.removeChild(app.lastChild);
            currentIndex = 0;
            startQuiz();
            question.hidden = false;
          
        }
        
        const app = document.getElementById("app");
        app.appendChild(play_again);
        //display score
        
    } 
   
   nextbtn.hidden = true;

   
}

// to clear last answers
function clearOptions(el){
      while(el.firstChild){
          el.removeChild(el.firstChild);
       }
}

function clearOpt(){
   while(options.firstChild){
       options.removeChild(options.firstChild);
   }
}

const opt = (elements)=>{
  let ar = [];
  while(ar.length < elements.length){
    const index= Math.round(Math.random() * (elements.length - 1));
    if(!ar.includes(index)){
        
        ar.push(index);
    }
 
  //  console.log(index);
  }
  let newArr = [];
   for(let i of ar){
    newArr.push(elements[i]);
   }
//   console.log(newArr);
  return newArr;
}

// dealing with subject menu
const subjects = ["networking", "database", "linux", "Strategic thinking", "Javascript", "python"];
const subjects_menu = document.getElementById("subjects-menu")
// create the buttons 
function create(){
     subjects.forEach(element => {
           const subject = document.createElement("button");
           subject.innerText = element;
           subject.onclick =()=>{
            clearOptions(subjects_menu);
            questions = select_questions(element);
            Starting();
            //alert( element + " has been clicked");
             // display the questions of the selected subject
             
             
           }
           subjects_menu.appendChild(subject);
     });  
}
create();


//loading by default
//startQuiz();


function select_questions(type){
  let q = bank[type];
  return q;
}

//function to let the user decide to start the quiz
function Starting(){
   
     const btnStart = document.createElement("button");
     btnStart.innerText = "Start the quiz";
     btnStart.onclick=()=>{
       app.hidden = false;
       document.getElementById("menu").hidden = true; 
             //loading the questions
             startQuiz();
      
             
     }
     subjects_menu.appendChild(btnStart);
}