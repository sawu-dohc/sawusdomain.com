function validateSQLInjection() {
    const sqlKeywords = [
        "SELECT", "FROM", "WHERE", "GROUP BY", "HAVING", "ORDER BY", "LIMIT", "OFFSET", "DISTINCT",
        "INSERT", "INTO", "VALUES", "UPDATE", "SET", "DELETE", "CREATE", "TABLE", "DATABASE",
        "VIEW", "INDEX", "ALTER", "ADD", "DROP", "TRUNCATE", "COLUMN", "CONSTRAINT", "GRANT", 
        "REVOKE", "BEGIN", "COMMIT", "ROLLBACK", "SAVEPOINT", "SET TRANSACTION", "INNER JOIN",
        "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "CROSS JOIN", "AND", "OR", "NOT", "BETWEEN",
        "LIKE", "IN", "IS NULL", "IS NOT NULL", "COUNT", "SUM", "AVG", "MIN", "MAX", "EXISTS", 
        "ANY", "ALL", "AS", "UNION", "UNION ALL", "INTERSECT", "EXCEPT", "CASE", "WHEN", "THEN", 
        "ELSE", "END", "PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "DEFAULT", "CHECK", "INT", 
        "VARCHAR", "TEXT", "DATE", "TIMESTAMP", "BOOLEAN", "DECIMAL", "FLOAT", "CHAR", "BLOB"
    ];

    const formFields = document.querySelectorAll("input, textarea"); // Get all input fields and textareas in the form

    for (const field of formFields) {
        const value = field.value;
        if (sqlKeywords.some(keyword => value.includes(keyword))) {
            alert("Quit trying to SQL inject stuff!");
            return false;
        }
    }

    return true;
}
