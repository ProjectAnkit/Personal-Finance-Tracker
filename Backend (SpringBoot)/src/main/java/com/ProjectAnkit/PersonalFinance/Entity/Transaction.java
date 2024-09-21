package com.ProjectAnkit.PersonalFinance.Entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "transactions")
@NoArgsConstructor
public class Transaction {
    @Id
    private String id;
    @NonNull
    private String type;
    @NonNull
    private String category;
    @NonNull
    private double amount;
    private LocalDateTime dateTime;
}
