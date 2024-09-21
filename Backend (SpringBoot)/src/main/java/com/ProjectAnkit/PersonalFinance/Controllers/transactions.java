package com.ProjectAnkit.PersonalFinance.Controllers;


import com.ProjectAnkit.PersonalFinance.Entity.Transaction;
import com.ProjectAnkit.PersonalFinance.Services.TransactionServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/transactions")
public class transactions {

    @Autowired
    private TransactionServices transactionServices;

    @GetMapping("/")
    public ResponseEntity getAllTrasactions(){
        List<Transaction> transactions = transactionServices.getAllTransactions();
        return new ResponseEntity(transactions, HttpStatus.OK);
    }

    @GetMapping("/getSavings")
    public ResponseEntity getSavingsLeftInAccount(){
        double savingsLeft = transactionServices.getSavingsLeftInAccount();
        return new ResponseEntity(savingsLeft, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity createNewTransaction(@RequestBody Transaction transaction){
        Transaction transaction1 = transactionServices.createTransaction(transaction);
        return new ResponseEntity(transaction1 ,HttpStatus.CREATED);
    }

    @DeleteMapping("/{trans_id}")
    public ResponseEntity deleteTransaction(@PathVariable String trans_id){
        String response = transactionServices.deleteTransactionById(trans_id);
        if(response == null){
            return new ResponseEntity(response,HttpStatus.NOT_FOUND);
        }else{
            return new ResponseEntity(response,HttpStatus.NO_CONTENT);
        }
    }

    @DeleteMapping("/all")
    public ResponseEntity deleteAllTransaction(){
        String response = transactionServices.deleteAllTransactions();
        return new ResponseEntity(response,HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{trans_id}")
    public ResponseEntity updateTransaction(@PathVariable String trans_id,@RequestBody Transaction transaction){
        Transaction transaction1 = transactionServices.setTransaction(transaction,trans_id);
        if(transaction1 != null){
            return new ResponseEntity(transaction1,HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/{date}")
    public ResponseEntity getTransactionByDate(@PathVariable LocalDate date){
        List<Transaction> transactionList = transactionServices.getTransactionsByDate(date);
        return new ResponseEntity(transactionList, HttpStatus.OK);
    }
}
