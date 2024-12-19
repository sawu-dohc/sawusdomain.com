CREATE TABLE crypto_data (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each row
    currency_id VARCHAR(50) NOT NULL,  -- Cryptocurrency identifier (e.g., 'bitcoin', 'ethereum')
    timestamp DATETIME NOT NULL,       -- Time of the data
    price DECIMAL(18, 8) NOT NULL      -- Price of the cryptocurrency
);

DELETE FROM crypto_data;
ALTER TABLE crypto_data AUTO_INCREMENT = 1;
