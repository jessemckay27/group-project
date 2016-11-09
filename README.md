# _inHouse_

#### _Universal in-house food order application, 11/4/16_

#### By _**Jacob Hixon, Jesse McKay, Justin Xu, Dave Denlow**_

## Description

_Allows every customer at a table to place their orders at once, therefore alleviating the need for a server to take orders, as well as shortening turn-over time for tables._

## Specifications

1. _Supports single orders_
  * _Example select: Okra - $8_
  * _Expected output: Okra - $8_

2. _Lists orders under name_
  * _Example input: jacob_
  * _Example select: Okra - $8_
  * _Expected output: JACOB Okra - $8_

3. _Supports multiple orders_
* _Example input #1: jacob_
* _Example select #1: Okra - $8_
* _Example input #2: dave_
* _Example select #2: Swordfish - $33_
* _Expected output: JACOB Okra - $8, DAVE Swordfish - $33_

4. _Displays total for all orders_
  * _Example order #1: JACOB Okra - $8_
  * _Expected order #1: Okra - $8_
  * _Example order #2: dave_
  * _Example order #2: Swordfish - $33_
  * _Expected output: JACOB Okra - $8, DAVE Swordfish - $33, Total: $41_

5. _Supports additional order submissions after initial submissions_


## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_

### License

*MIT*

Copyright (c) 2016 **_Jacob Hixon, Jesse McKay, Justin Xu, Dave Denlow_**
