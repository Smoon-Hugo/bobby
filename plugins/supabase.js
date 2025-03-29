import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ecjsccowoaftseuvbdcm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjanNjY293b2FmdHNldXZiZGNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNDI1NTUsImV4cCI6MjA1ODgxODU1NX0.4-azWcM9gyAR1CwaTPIAfKONibln_tZKRd-rc0-Q3jM"; // Remplace avec ta clé anonyme

export const supabase = createClient(supabaseUrl, supabaseKey);
