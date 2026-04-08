import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export type LeadRow = {
  protection_type: string;
  product_type: string;
  age: number;
  coverage_amount: number;
  name: string;
  phone: string;
  email?: string;
  source: string;
  status?: string;
  created_at?: string;
};

export type ContactRow = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status?: string;
  created_at?: string;
};

export type PremiumPaymentRow = {
  policy_number: string;
  amount: number;
  installment_type: string;
  method: string;
  status?: string;
  created_at?: string;
};

export type ClaimSearchRow = {
  policy_number: string;
  cnic: string;
  claim_type: string;
  created_at?: string;
};

export type AgentSearchRow = {
  city: string;
  area: string;
  created_at?: string;
};
