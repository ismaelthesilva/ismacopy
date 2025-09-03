# Temporary Demo Access Instructions

To quickly test the dashboard without setting up Supabase authentication:

1. Go to: http://localhost:3000/dashboard/countries
2. The page will redirect to login due to authentication middleware

To bypass this temporarily, you can:
- Comment out the authentication check in the dashboard pages
- Or set up Supabase credentials (recommended)

For production use, please set up Supabase authentication following the setup guide.
