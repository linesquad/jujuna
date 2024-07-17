import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cwrjyllvaciukillikvs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3cmp5bGx2YWNpdWtpbGxpa3ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyMzA0MDIsImV4cCI6MjAzNjgwNjQwMn0.4nHkIYXysVQsH6C6crWxUCpLbohmvuAyJb07GEG4WOk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
