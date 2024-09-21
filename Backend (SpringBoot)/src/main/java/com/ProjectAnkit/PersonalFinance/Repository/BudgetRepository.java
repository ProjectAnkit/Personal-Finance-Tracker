package com.ProjectAnkit.PersonalFinance.Repository;

import com.ProjectAnkit.PersonalFinance.Entity.Budget;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BudgetRepository extends MongoRepository<Budget, String> {
       public Budget findBudgetByCategory(String category);
       public void deleteBudgetByCategory(String category);
}
