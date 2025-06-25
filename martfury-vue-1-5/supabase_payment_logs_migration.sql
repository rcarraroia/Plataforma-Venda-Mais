CREATE TABLE payment_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  transaction_id text,
  status text,
  error_message text,
  created_at timestamp DEFAULT now()
);

CREATE TABLE seller_asaas_credentials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id uuid REFERENCES sellers(id),
  api_key text NOT NULL,
  wallet_id text NOT NULL
);