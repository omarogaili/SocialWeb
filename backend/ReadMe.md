# `VibeNest API` :
as i mentioned before VibeNest use ASP.NET to build the API. so you need to have .NET on your machine.
to download .Net u may use the following command:<br>
**Linux** 
```bash
sudo apt install -y dotnet-sdk-7.0
```
**Windows** 
```bash
[Download .NEt](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) for Windows. 
```
For Datebase so we use Entity Framework Core for Mysql: 

[Download MySql](https://dev.mysql.com/downloads/installer/)<br>
**Linux** 
```bash
sudo apt install mysql-server
sudo systemctl start mysql
```
**Windows** 
```bash
dotnet add package Pomelo.EntityFrameworkCore.MySql
```


## ↔️ `ConnectionString`
under appsettings.json you will find the connectionString. you need to replace your password instead of the 
"*". <br>
**_Update your database_**  by running the following command:
```bash 
database update
```
## ☑️  `Run the API`:

to run the API so can use the following commands:

**Linux**

```bash
dotnet run --launch-profile https
```
**Windows**
```bash
dotnet run
```
