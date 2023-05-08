
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bacakjsxoaapmjgutkdp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhY2FranN4b2FhcG1qZ3V0a2RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1MTM1OTIsImV4cCI6MTk5OTA4OTU5Mn0.fU1aMxjM3dctrThyLE6R6JBnZUXcsD0r9A-rHgo7rDI"

const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }