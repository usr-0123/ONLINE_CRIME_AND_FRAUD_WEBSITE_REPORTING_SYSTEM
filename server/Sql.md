# SQL TABLES
## Users

``` sql
CREATE TABLE tbl_Users (
    UserID VARCHAR(255) PRIMARY KEY,
    Email_address VARCHAR(255),
    First_name VARCHAR(255),
    Last_name VARCHAR(255),
    Password VARCHAR(255),
    User_rank VARCHAR(255) DEFAULT 'User'
);

```

## Users onboarding

``` sql
CREATE TABLE onBoard (
    Email_address VARCHAR(255) PRIMARY KEY,
    First_name VARCHAR(255),
    Last_name VARCHAR(255),
    Subject VARCHAR(255),
    Comments VARCHAR(255)
)
```

## Categories

``` sql
CREATE TABLE Categories (
    CategoryID VARCHAR(255) PRIMARY KEY,
    CategoryName VARCHAR(255),
)
```

## Crime
- Media
- Anonimity status
- Response email with ref number

``` sql

CREATE TABLE Crime (
    CrimeID VARCHAR(255) PRIMARY KEY,
    CrimeDate VARCHAR(255),
    CrimeCategory VARCHAR(255),
	Involved_parties VARCHAR(999),
    Comment VARCHAR(255),
    Anonimity VARCHAR(255),
    UserID VARCHAR(255),
    -- Image
    FOREIGN KEY (UserID) REFERENCES tbl_Users (UserID)
)

```