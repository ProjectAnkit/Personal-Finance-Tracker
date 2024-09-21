package com.ProjectAnkit.PersonalFinance.Entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "budgetEntries")
@Data
@NoArgsConstructor
public class Budget {
    @Id
    private String id;
    @NonNull
    @Indexed(unique = true)
    private String category;
    @NonNull
    private int budgetPrice;
    private LocalDateTime startDate;
}
