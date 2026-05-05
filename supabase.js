import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://nmkifukyxmmjgjkrfahj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ta2lmdWt5eG1tamdqa3JmYWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5NzgwNTEsImV4cCI6MjA5MzU1NDA1MX0.3WHqzeog6I2guvGmcJHTr2KFeGQDhzfSEtWCV5pjH-Y"
);
