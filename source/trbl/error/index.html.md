---
title: Error Codes
---

Nanobox automates complex tasks through "sequences" - processes that do everything from deploying code and installing environment variables to migrating data. On occasion, sequences do error. When errors occur, Nanobox will output an error code specific to the issue that caused the failure to occur.

## Error Information
Each error will include an error code with a link to the corresponding doc, meta information with details pertinent to the error, and the error stack trace. These are all helpful when troubleshooting the error. The error meta and stack trace can be viewed by clicking on the "View Full Stack Trace" link in your sequence viewer.

![Error Code Information](/assets/images/error/code-meta.png)

## Error Codes
The following docs outline what each error code means as well as potential solutions to the problem:

### 1xxx Provider Errors
[1000 Provider Unreachable](/trbl/error/1000/)  
[1001 Provider Rejected](/trbl/error/1001/)  
[1004 Network Error](/trbl/error/1004/)  
[1100 Provider Host Unreachable](/trbl/error/1100/)  
[1101 Provider Host Not Active](/trbl/error/1101/)  
[1102 Provider Host Bootstrap Error](/trbl/error/1102/)  

### 2xxx NanoAgent Errors
[2000 NanoAgent Unreachable](/trbl/error/2000/)  
[2001 NanoAgent Rejected](/trbl/error/2001/)  
[2002 NanoAgent Rejected Job](/trbl/error/2002/)  
[2003 NanoAgent No Such Image](/trbl/error/2003/)  

### 3xxx Platform Errors
[3000 Platform](/trbl/error/3000/)  

### 4xxx Hook Errors
[4000 General Hook Failure](/trbl/error/4000/)  
[4001 Plan](/trbl/error/4001/)  
[4002 Update](/trbl/error/4002/)  

#### Code Hooks
[4100 Code - Configure](/trbl/error/4100/)  
[4101 Code - Fetch](/trbl/error/4101/)  
[4102 Code - Start](/trbl/error/4102/)  
[4103 Code - Stop](/trbl/error/4103/)  
[4104 Code - Before Live](/trbl/error/4104/)  
[4105 Code - After Live](/trbl/error/4105/)  

#### Data Hooks
[4200 Data - Configure](/trbl/error/4200/)  
[4201 Data - Import Prep](/trbl/error/4201/)  
[4202 Data - Import Live](/trbl/error/4202/)  
[4203 Data - Import Final](/trbl/error/4203/)  
[4204 Data - Import Clean](/trbl/error/4204/)  
[4205 Data - Export Prep](/trbl/error/4205/)  
[4206 Data - Export Live](/trbl/error/4206/)  
[4207 Data - Export Final](/trbl/error/4207/)  
[4208 Data - Export Clean](/trbl/error/4208/)  
[4209 Data - Start](/trbl/error/4209/)  
[4210 Data - Stop](/trbl/error/4210/)  
[4211 Data - Backup](/trbl/error/4211/)  
[4212 Data - Restore](/trbl/error/4212/)  

### 5xxx SSL Errors
[5000 SSL](/trbl/error/5000/)  
[5100 SSL - LetsEncrypt Challenge Pending](/trbl/error/5100/)  
[5101 SSL - LetsEncrypt Challenge Invalid](/trbl/error/5101/)  
