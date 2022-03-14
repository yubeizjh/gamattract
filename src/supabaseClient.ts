import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://yheumjehjtqixrgmdvnw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZXVtamVoanRxaXhyZ21kdm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYwNDU1MzEsImV4cCI6MTk2MTYyMTUzMX0.ma7ocFuAIOUus7fCDH0aBNfdXfsNlVDNF50Bs_PUpUo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)