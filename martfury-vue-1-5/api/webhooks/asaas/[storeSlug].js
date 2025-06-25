'use strict';

import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req, res) {
  const { storeSlug } = req.params;

  // Passo 2 - Validar loja existente
  const { data: seller, error: sellerError } = await supabase
    .from('sellers')
    .select('*')
    .eq('slug', storeSlug)
    .single();

  if (sellerError || !seller) {
    return res.status(404).json({ error: 'Loja não encontrada' });
  }

  // Passo 3 - Validar assinatura Asaas
  const signature = req.headers['x-signature'];
  const secret = seller.asaas_api_key; // Usar API Key como segredo para assinatura

  const payload = JSON.stringify(req.body);
  const hash = crypto.createHmac('sha256', secret).update(payload).digest('hex');

  if (hash !== signature) {
    return res.status(401).json({ error: 'Assinatura inválida' });
  }

  // Passo 4 - Gravar log do webhook
  const { error: logError } = await supabase.from('asaas_webhook_logs').insert([{
    store_slug: storeSlug,
    event_type: req.body.event,
    payload: req.body,
    received_at: new Date().toISOString(),
  }]);

  if (logError) {
    return res.status(500).json({ error: 'Erro ao salvar log do webhook' });
  }

  // Passo 5 - Processar evento (a implementar futuramente)

  return res.status(200).json({ message: 'Webhook recebido com sucesso' });
}
