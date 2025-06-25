import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function handler(event) {
  // Buscar comissões pendentes com release_date <= hoje
  const { data: commissions, error } = await supabase
    .from('affiliate_commissions_pending')
    .select('*')
    .lte('release_date', new Date().toISOString().split('T')[0])
    .eq('status', 'Pending');

  if (error) {
    console.error('Erro ao buscar comissões pendentes:', error);
    return new Response('Erro interno', { status: 500 });
  }

  for (const commission of commissions) {
    // Atualizar status para Released
    const { error: updateError } = await supabase
      .from('affiliate_commissions_pending')
      .update({ status: 'Released' })
      .eq('id', commission.id);

    if (updateError) {
      console.error('Erro ao atualizar comissão:', updateError);
      continue;
    }

    // Aqui pode-se adicionar lógica para notificar usuário, etc.
  }

  return new Response('Comissões liberadas com sucesso', { status: 200 });
}