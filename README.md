# Employee Directory 
## People Search

Backend uses Express web server and SQLite database.

## Setup
For Windows install of sqlite3 use Admin Powershell

    choco install sqlite3

Create SQLite db from command line:
    
    sqlite3 emps.db

Create table:

```
CREATE TABLE emps (
    employee_id text NOT NULL,
    supervisor_id text NULL,
    first_name text NULL,
    last_name text NULL,
    email text NULL
);

.read load_emps.sql;
```

