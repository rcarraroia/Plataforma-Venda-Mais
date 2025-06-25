CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  affiliate_id uuid NULL,
  total_amount numeric,
  payment_status text CHECK (payment_status IN ('Pending', 'Paid', 'Cancelled', 'Refunded')) DEFAULT 'Pending',
  order_status text CHECK (order_status IN ('Pending Payment', 'Processing', 'Completed', 'Cancelled')) DEFAULT 'Pending Payment',
  created_at timestamp DEFAULT now()
);

CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  product_id uuid REFERENCES products(id),
  seller_id uuid REFERENCES sellers(id),
  unit_price numeric,
  quantity int,
  total_price numeric,
  commission_affiliate numeric
);

CREATE TABLE commissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  affiliate_id uuid REFERENCES users(id),
  commission_amount numeric,
  status text CHECK (status IN ('Pending Release', 'Released', 'Cancelled')),
  release_date timestamp
);