class BankAcc {
    constructor(nickName, bankName, accNo){
        this._nickName = nickName;
        this._bankName = bankName;
        this._accNo = accNo;
        this._balance = 0;
    }
    deposit(amount){
        this._balance += amount;
        console.log(`Transaksi deposit RM ${amount} berjaya.\nBaki terkini selepas deposit ialah RM ${acc._balance}`)
        return this._balance
    }
    withdrawal(amount){
        if (amount <= this._balance){
            this._balance -= amount;
            console.log(`Transaksi pengeluaran RM ${amount} berjaya.\nBaki terkini selepas pengeluaran ialah RM ${acc._balance}`)
            return this._balance
        } else {
            console.log(`Harap maaf.\nTransaksi pengeluaran tidak berjaya.\nBaki akaun ialah RM ${acc._balance}`)
        }
    }
    checkBalance(){
        console.log(`Baki akaun ialah RM ${acc._balance}`)
    }
}

let acc = new BankAcc(`Kerol`,`CIMB`,`7071193389`,100)

console.log(acc._balance)

acc.deposit(200);
acc.withdrawal(200);
acc.deposit(300);
acc.withdrawal(500);
acc.checkBalance();