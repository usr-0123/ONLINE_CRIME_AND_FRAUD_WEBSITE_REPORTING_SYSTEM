# SQL TABLES
## Users

``` sql
CREATE TABLE tbl_Users (
    Email_address VARCHAR(255) PRIMARY KEY,
    First_name VARCHAR(255),
    Last_name VARCHAR(255),
    Password VARCHAR(255),
    Rank VARCHAR(255)
)
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
    Comment VARCHAR(255),
    Email_address VARCHAR(255),
    FOREIGN KEY (Email_address) REFERENCES tbl_Users (Email_address)
)
```