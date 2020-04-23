---
title: Accounts and Payroll
---

# Accounts and Payroll

How to:

- [run daily takings](./how-to-run-daily-takings)
- [create a bank reconciliation](./how-to-create-a-bank-reconciliation)
- [integrate with a payroll solution](./how-to-integrate-with-your-payroll-solution)
- [pay your staff commission](./how-to-pay-staff-commission)

Note: _Gensolve **does not offer** a full payroll system_

## Operations Overview

@flowstart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend

## Related

- [Receiving Payment](../receiving-payment/)
