CREATE TABLE affiliate_commissions_pending (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  affiliate_id uuid REFERENCES users(id),
  sale_id uuid REFERENCES orders(id),
  amount numeric,
  sale_date date,
  release_date date,
  status text CHECK (status IN ('Pending', 'Released', 'Cancelled')) DEFAULT 'Pending',
  cancel_reason text
);