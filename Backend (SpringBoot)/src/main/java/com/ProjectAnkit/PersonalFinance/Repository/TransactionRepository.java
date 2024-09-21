package com.ProjectAnkit.PersonalFinance.Repository;

import com.ProjectAnkit.PersonalFinance.Entity.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TransactionRepository extends MongoRepository<Transaction, String> {

}
