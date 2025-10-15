npm run dev

> dev
> turbo run dev

╭──────────────────────────────────────────────────────────────────────────╮
│                                                                          │
│                     Update available v2.5.4 ≫ v2.5.8                     │
│    Changelog: https://github.com/vercel/turborepo/releases/tag/v2.5.8    │
│             Run "npx @turbo/codemod@latest update" to update             │
│                                                                          │
│          Follow @turborepo for updates: https://x.com/turborepo          │
╰──────────────────────────────────────────────────────────────────────────╯
turbo 2.5.4

• Packages in scope: admin, db, shared, vite, web
• Running dev in 5 packages
• Remote caching disabled
admin:dev: cache bypass, force executing a3e5b11641db9167
web:dev: cache bypass, force executing cf1d3ecbad00a5ba
db:dev: cache bypass, force executing 13e10ed6cefc89a0
shared:dev: cache bypass, force executing e959d19269485803
vite:dev: cache bypass, force executing df4e0cd70e62326c
vite:dev: npm warn config ignoring workspace config at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/vite/.npmrc
shared:dev: 
shared:dev: > shared@1.0.0 dev
shared:dev: > echo 'Shared package - no dev server needed'
shared:dev: 
admin:dev: 
admin:dev: > admin@0.1.0 dev
admin:dev: > next dev --turbopack --port 3001
admin:dev: 
db:dev: 
db:dev: > db@1.0.0 dev
db:dev: > echo 'DB package - no dev server needed'
db:dev: 
web:dev: 
web:dev: > web@0.1.0 dev
web:dev: > next dev --turbopack
web:dev: 
vite:dev: 
vite:dev: > vite@1.0.0 dev
vite:dev: > vite --port 3002
vite:dev: 
DB package - no dev server needed
Shared package - no dev server needed



vite:dev:   VITE v7.0.0  ready in 400 ms
vite:dev: 
vite:dev:   ➜  Local:   http://localhost:3002/
vite:dev:   ➜  Network: use --host to expose
vite:dev:   ➜  press h + enter to show help
vite:dev: (!) Failed to run dependency scan. Skipping dependency pre-bundling. Error: The following dependencies are imported but could not be resolved:
vite:dev: 
vite:dev:   lucide-react (imported by /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/vite/src/components/ui/dropdown-menu.jsx)
vite:dev: 
vite:dev: Are they installed?
vite:dev:     at file:///Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/vite/dist/node/chunks/dep-Bsx9IwL8.js:11238:33
vite:dev:     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
vite:dev:     at async file:///Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/vite/dist/node/chunks/dep-Bsx9IwL8.js:34671:15
   ▲ Next.js 15.3.4 (Turbopack)
admin:dev:    - Local:        http://localhost:3001
admin:dev:    - Network:      http://192.168.8.178:3001
admin:dev: 
admin:dev:  ✓ Starting...
   ▲ Next.js 15.3.4 (Turbopack)
web:dev:    - Local:        http://localhost:3000
web:dev:    - Network:      http://192.168.8.178:3000
web:dev: 
web:dev:  ✓ Starting...
web:dev:  ✓ Compiled middleware in 152ms
admin:dev:  ✓ Ready in 919ms
web:dev:  ✓ Ready in 1097ms
admin:dev:  ○ Compiling / ...
web:dev:  ○ Compiling / ...
admin:dev:  ✓ Compiled / in 2.4s
web:dev: Error: Can't resolve 'tailwindcss' in '/Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/app'
web:dev:     [at finishWithoutResolve (/Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/Resolver.js:567:18)]
web:dev:     [at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/Resolver.js:659:14]
web:dev:     [at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/Resolver.js:720:5]
web:dev:     [at eval (eval at create (/Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)]
web:dev:     [at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/Resolver.js:720:5]
web:dev:     [at eval (eval at create (/Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)]
web:dev:     [at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:89:43]
web:dev:     [at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/Resolver.js:720:5]
web:dev:     [at eval (eval at create (/Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)]
web:dev:     [at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/Resolver.js:720:5] {
web:dev:   details: "resolve 'tailwindcss' in '/Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/app'\n" +
web:dev:     '  Parsed request is a module\n' +
web:dev:     '  using description file: /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/package.json (relative path: ./app)\n' +
web:dev:     '    resolve as module\n' +
web:dev:     "      /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/app/node_modules doesn't exist or is not a directory\n" +
web:dev:     '      looking for modules in /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/node_modules\n' +
web:dev:     '        single file module\n' +
web:dev:     '          using description file: /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/package.json (relative path: ./node_modules/tailwindcss)\n' +
web:dev:     '            no extension\n' +
web:dev:     "              /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/node_modules/tailwindcss doesn't exist\n" +
web:dev:     '            .css\n' +
web:dev:     "              /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/node_modules/tailwindcss.css doesn't exist\n" +
web:dev:     "        /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/node_modules/tailwindcss doesn't exist\n" +
web:dev:     "      /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/node_modules doesn't exist or is not a directory\n" +
web:dev:     '      looking for modules in /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules\n' +
web:dev:     '        single file module\n' +
web:dev:     '          using description file: /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/package.json (relative path: ./node_modules/tailwindcss)\n' +
web:dev:     '            no extension\n' +
web:dev:     '              /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tailwindcss is not a file\n' +
web:dev:     '            .css\n' +
web:dev:     "              /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tailwindcss.css doesn't exist\n" +
web:dev:     '        existing directory /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tailwindcss\n' +
web:dev:     '          using description file: /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tailwindcss/package.json (relative path: .)\n' +
web:dev:     '            using description file: /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/package.json (relative path: ./node_modules/tailwindcss)\n' +
web:dev:     '              no extension\n' +
web:dev:     '                /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tailwindcss is not a file\n' +
web:dev:     '              .css\n' +
web:dev:     "                /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tailwindcss.css doesn't exist\n" +
web:dev:     '              as directory\n' +
web:dev:     '                existing directory /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tailwindcss\n' +
web:dev:     '                  using description file: /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tailwindcss/package.json (relative path: .)\n' +
web:dev:     '                    using path: /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tailwindcss/index\n' +
web:dev:     '                      using description file: /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tailwindcss/package.json (relative path: ./index)\n' +
web:dev:     '                        no extension\n' +
web:dev:     "                          /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tailwindcss/index doesn't exist\n" +
web:dev:     '                        .css\n' +
web:dev:     "                          /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tailwindcss/index.css doesn't exist\n" +
web:dev:     "      /Users/ismaelsilva/Dev-Mini/ismaHOST/node_modules doesn't exist or is not a directory\n" +
web:dev:     "      /Users/ismaelsilva/Dev-Mini/node_modules doesn't exist or is not a directory\n" +
web:dev:     '      looking for modules in /Users/ismaelsilva/node_modules\n' +
web:dev:     '        single file module\n' +
web:dev:     '          using description file: /Users/ismaelsilva/package.json (relative path: ./node_modules/tailwindcss)\n' +
web:dev:     '            no extension\n' +
web:dev:     "              /Users/ismaelsilva/node_modules/tailwindcss doesn't exist\n" +
web:dev:     '            .css\n' +
web:dev:     "              /Users/ismaelsilva/node_modules/tailwindcss.css doesn't exist\n" +
web:dev:     "        /Users/ismaelsilva/node_modules/tailwindcss doesn't exist\n" +
web:dev:     "      /Users/node_modules doesn't exist or is not a directory\n" +
web:dev:     "      /node_modules doesn't exist or is not a directory"
web:dev: }
admin:dev:  GET / 200 in 2789ms
web:dev:  ✓ Compiled / in 2.1s
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev: 
web:dev: ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ○ Compiling /_error ...
web:dev:  ✓ Compiled /_error in 684ms
web:dev:  GET / 500 in 2941ms
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:5:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   3 | import * as React from "react"
web:dev:   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev: > 5 | import { XIcon } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev:   8 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:5:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   3 | import * as React from "react"
web:dev:   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev: > 5 | import { XIcon } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev:   8 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:5:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   3 | import * as React from "react"
web:dev:   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev: > 5 | import { XIcon } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev:   8 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:5:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   3 | import * as React from "react"
web:dev:   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev: > 5 | import { XIcon } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev:   8 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ○ Compiling middleware ...
web:dev:  ✓ Compiled middleware in 13.4s
web:dev:  ✓ Compiled middleware in 4ms
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ✓ Compiled in 20.5s
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev: 
web:dev: ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev: 
web:dev: ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  GET / 500 in 303ms
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/react-remove-scroll/dist/es2015/UI.js:4:1
web:dev: Module not found: Can't resolve 'use-callback-ref'
web:dev:   2 | import * as React from 'react';
web:dev:   3 | import { fullWidthClassName, zeroRightClassName } from 'react-remove-scroll-bar/constants';
web:dev: > 4 | import { useMergeRefs } from 'use-callback-ref';
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { effectCar } from './medium';
web:dev:   6 | var nothing = function () {
web:dev:   7 |     return;
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/react-remove-scroll/dist/es2015/UI.js:4:1
web:dev: Module not found: Can't resolve 'use-callback-ref'
web:dev:   2 | import * as React from 'react';
web:dev:   3 | import { fullWidthClassName, zeroRightClassName } from 'react-remove-scroll-bar/constants';
web:dev: > 4 | import { useMergeRefs } from 'use-callback-ref';
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { effectCar } from './medium';
web:dev:   6 | var nothing = function () {
web:dev:   7 |     return;
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/react-remove-scroll/dist/es2015/UI.js:4:1
web:dev: Module not found: Can't resolve 'use-callback-ref'
web:dev:   2 | import * as React from 'react';
web:dev:   3 | import { fullWidthClassName, zeroRightClassName } from 'react-remove-scroll-bar/constants';
web:dev: > 4 | import { useMergeRefs } from 'use-callback-ref';
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { effectCar } from './medium';
web:dev:   6 | var nothing = function () {
web:dev:   7 |     return;
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/react-remove-scroll/dist/es2015/UI.js:4:1
web:dev: Module not found: Can't resolve 'use-callback-ref'
web:dev:   2 | import * as React from 'react';
web:dev:   3 | import { fullWidthClassName, zeroRightClassName } from 'react-remove-scroll-bar/constants';
web:dev: > 4 | import { useMergeRefs } from 'use-callback-ref';
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { effectCar } from './medium';
web:dev:   6 | var nothing = function () {
web:dev:   7 |     return;
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
admin:dev: 
admin:dev: -----
admin:dev: FATAL: An unexpected Turbopack error occurred. A panic log has been written to /var/folders/hr/j3pcj2g16799bhjswnpvt8140000gn/T/next-panic-c54b9c51cb130ef9847ad1f7aa42de03.log.
admin:dev: 
admin:dev: To help make Turbopack better, report this error by clicking here: https://github.com/vercel/next.js/discussions/new?category=turbopack-error-report&title=Turbopack%20Error%3A%20Next.js%20package%20not%20found&body=Turbopack%20version%3A%20%60v15.3.3-3-gf9e98b9ce%60%0A%0AError%20message%3A%0A%60%60%60%0ATurbopack%20Error%3A%20Next.js%20package%20not%20found%0A%60%60%60&labels=Turbopack,Turbopack%20Panic%20Backtrace
admin:dev: -----
admin:dev: 
admin:dev: [Error [TurbopackInternalError]: Next.js package not found
admin:dev: 
admin:dev: Debug info:
admin:dev: - Execution of get_entrypoints_with_issues_operation failed
admin:dev: - Execution of EntrypointsOperation::new failed
admin:dev: - Execution of Project::entrypoints failed
admin:dev: - Execution of AppProject::routes failed
admin:dev: - Execution of directory_tree_to_entrypoints_internal failed
admin:dev: - Execution of directory_tree_to_loader_tree failed
admin:dev: - Execution of get_next_package failed
admin:dev: - Next.js package not found]
admin:dev: 

web:dev: Error: Can't resolve 'tw-animate-css' in '/Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/app'
web:dev:     [at finishWithoutResolve (/Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/Resolver.js:567:18)]
web:dev:     [at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/Resolver.js:659:14]
web:dev:     [at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/Resolver.js:720:5]
web:dev:     [at eval (eval at create (/Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)]
web:dev:     [at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/Resolver.js:720:5]
web:dev:     [at eval (eval at create (/Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)]
web:dev:     [at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:89:43]
web:dev:     [at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/Resolver.js:720:5]
web:dev:     [at eval (eval at create (/Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)]
web:dev:     [at /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules/enhanced-resolve/lib/Resolver.js:720:5] {
web:dev:   details: "resolve 'tw-animate-css' in '/Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/app'\n" +
web:dev:     '  Parsed request is a module\n' +
web:dev:     '  using description file: /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/package.json (relative path: ./app)\n' +
web:dev:     '    resolve as module\n' +
web:dev:     "      /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/app/node_modules doesn't exist or is not a directory\n" +
web:dev:     '      looking for modules in /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/node_modules\n' +
web:dev:     '        single file module\n' +
web:dev:     '          using description file: /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/package.json (relative path: ./node_modules/tw-animate-css)\n' +
web:dev:     '            no extension\n' +
web:dev:     "              /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/node_modules/tw-animate-css doesn't exist\n" +
web:dev:     '            .css\n' +
web:dev:     "              /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/node_modules/tw-animate-css.css doesn't exist\n" +
web:dev:     "        /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/web/node_modules/tw-animate-css doesn't exist\n" +
web:dev:     "      /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/apps/node_modules doesn't exist or is not a directory\n" +
web:dev:     "      /Users/ismaelsilva/Dev-Mini/ismaHOST/ismacopy/node_modules doesn't exist or is not a directory\n" +
web:dev:     "      /Users/ismaelsilva/Dev-Mini/ismaHOST/node_modules doesn't exist or is not a directory\n" +
web:dev:     "      /Users/ismaelsilva/Dev-Mini/node_modules doesn't exist or is not a directory\n" +
web:dev:     '      looking for modules in /Users/ismaelsilva/node_modules\n' +
web:dev:     '        single file module\n' +
web:dev:     '          using description file: /Users/ismaelsilva/package.json (relative path: ./node_modules/tw-animate-css)\n' +
web:dev:     '            no extension\n' +
web:dev:     "              /Users/ismaelsilva/node_modules/tw-animate-css doesn't exist\n" +
web:dev:     '            .css\n' +
web:dev:     "              /Users/ismaelsilva/node_modules/tw-animate-css.css doesn't exist\n" +
web:dev:     "        /Users/ismaelsilva/node_modules/tw-animate-css doesn't exist\n" +
web:dev:     "      /Users/node_modules doesn't exist or is not a directory\n" +
web:dev:     "      /node_modules doesn't exist or is not a directory"
web:dev: }
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../error'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../error'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../error'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../next-url'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../next-url'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../utils'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../utils'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../utils'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve './cookies'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve './cookies'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/promise-queue.js:16:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/promise-queue.js:16:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:11:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:11:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/promise-queue.js:17:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/promise-queue.js:17:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:12:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:12:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/app-index.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/app-router.js:32:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/app-router.js:32:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/error-boundary.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/error-boundary.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/errors/root-error-boundary.js:12:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/errors/root-error-boundary.js:12:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/layout-router.js:15:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/lib/console.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/lib/console.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/client-entry.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/intercept-console-error.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js:35:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js:35:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/use-error-handler.js:31:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/use-error-handler.js:31:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/format-webpack-messages.js:33:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/format-webpack-messages.js:33:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/app-dir/link.js:33:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/app-dir/link.js:33:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/app-index.js:12:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/app-router.js:33:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/app-router.js:33:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js:12:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js:12:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/layout-router.js:16:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/redirect-boundary.js:24:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/redirect-boundary.js:24:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/render-from-template-context.js:12:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/use-action-queue.js:23:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/use-action-queue.js:23:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/utils/format-url.js:48:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/utils/format-url.js:48:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/utils/format-url.js:48:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js:24:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/utils.ts:1:1
web:dev: Module not found: Can't resolve 'clsx'
web:dev: > 1 | import { type ClassValue, clsx } from "clsx";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | import { twMerge } from "tailwind-merge";
web:dev:   3 |
web:dev:   4 | export function cn(...inputs: ClassValue[]) {
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/utils.ts:1:1
web:dev: Module not found: Can't resolve 'clsx'
web:dev: > 1 | import { type ClassValue, clsx } from "clsx";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | import { twMerge } from "tailwind-merge";
web:dev:   3 |
web:dev:   4 | export function cn(...inputs: ClassValue[]) {
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/utils.ts:1:1
web:dev: Module not found: Can't resolve 'clsx'
web:dev: > 1 | import { type ClassValue, clsx } from "clsx";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | import { twMerge } from "tailwind-merge";
web:dev:   3 |
web:dev:   4 | export function cn(...inputs: ClassValue[]) {
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/utils.ts:1:1
web:dev: Module not found: Can't resolve 'clsx'
web:dev: > 1 | import { type ClassValue, clsx } from "clsx";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | import { twMerge } from "tailwind-merge";
web:dev:   3 |
web:dev:   4 | export function cn(...inputs: ClassValue[]) {
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:5:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   3 | import * as React from "react"
web:dev:   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev: > 5 | import { XIcon } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev:   8 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:5:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   3 | import * as React from "react"
web:dev:   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev: > 5 | import { XIcon } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev:   8 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:5:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   3 | import * as React from "react"
web:dev:   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev: > 5 | import { XIcon } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev:   8 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:5:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   3 | import * as React from "react"
web:dev:   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev: > 5 | import { XIcon } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev:   8 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/postcss/lib/input.js:6:18
web:dev: Module not found: Can't resolve 'nanoid/non-secure'
web:dev:   4 | let { fileURLToPath, pathToFileURL } = require('url')
web:dev:   5 | let { isAbsolute, resolve } = require('path')
web:dev: > 6 | let { nanoid } = require('nanoid/non-secure')
web:dev:     |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   7 |
web:dev:   8 | let terminalHighlight = require('./terminal-highlight')
web:dev:   9 | let CssSyntaxError = require('./css-syntax-error')
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/postcss/lib/css-syntax-error.js:3:12
web:dev: Module not found: Can't resolve 'picocolors'
web:dev:   1 | 'use strict'
web:dev:   2 |
web:dev: > 3 | let pico = require('picocolors')
web:dev:     |            ^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | let terminalHighlight = require('./terminal-highlight')
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/postcss/lib/terminal-highlight.js:3:12
web:dev: Module not found: Can't resolve 'picocolors'
web:dev:   1 | 'use strict'
web:dev:   2 |
web:dev: > 3 | let pico = require('picocolors')
web:dev:     |            ^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | let tokenizer = require('./tokenize')
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/app/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/app/page.tsx <module evaluation>",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/app/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/app/page.tsx <module evaluation>",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/app/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/app/page.tsx",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/app/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/app/page.tsx",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ClientWrapper.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/components/ClientWrapper.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/components/ClientWrapper.tsx <module evaluation>",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ClientWrapper.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/components/ClientWrapper.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/components/ClientWrapper.tsx <module evaluation>",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ClientWrapper.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/components/ClientWrapper.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/components/ClientWrapper.tsx",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ClientWrapper.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/components/ClientWrapper.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/components/ClientWrapper.tsx",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/error-boundary.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/error-boundary.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/client-page.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/client-page.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/client-segment.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/client-segment.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/layout-router.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/layout-router.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/metadata/async-metadata.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/metadata/async-metadata.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/render-from-template-context.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/render-from-template-context.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/lib/framework/boundary-components.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/lib/framework/boundary-components.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/lib/metadata/generate/icon-mark.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/lib/metadata/generate/icon-mark.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/next-devtools/userspace/app/segment-explorer-node.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/next-devtools/userspace/app/segment-explorer-node.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/postcss/lib/input.js:3:49
web:dev: Module not found: Can't resolve 'source-map-js'
web:dev:   1 | 'use strict'
web:dev:   2 |
web:dev: > 3 | let { SourceMapConsumer, SourceMapGenerator } = require('source-map-js')
web:dev:     |                                                 ^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 | let { fileURLToPath, pathToFileURL } = require('url')
web:dev:   5 | let { isAbsolute, resolve } = require('path')
web:dev:   6 | let { nanoid } = require('nanoid/non-secure')
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/postcss/lib/map-generator.js:3:49
web:dev: Module not found: Can't resolve 'source-map-js'
web:dev:   1 | 'use strict'
web:dev:   2 |
web:dev: > 3 | let { SourceMapConsumer, SourceMapGenerator } = require('source-map-js')
web:dev:     |                                                 ^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 | let { dirname, relative, resolve, sep } = require('path')
web:dev:   5 | let { pathToFileURL } = require('url')
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/postcss/lib/previous-map.js:3:49
web:dev: Module not found: Can't resolve 'source-map-js'
web:dev:   1 | 'use strict'
web:dev:   2 |
web:dev: > 3 | let { SourceMapConsumer, SourceMapGenerator } = require('source-map-js')
web:dev:     |                                                 ^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 | let { existsSync, readFileSync } = require('fs')
web:dev:   5 | let { dirname, join } = require('path')
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../error'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../error'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../error'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../next-url'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../next-url'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../utils'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../utils'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve '../utils'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve './cookies'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/dist/esm/server/web/spec-extension/request.js
web:dev: Module not found: Can't resolve './cookies'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/avatar.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-avatar'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "../../lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dialog'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 | import { XIcon } from "lucide-react"
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-dropdown-menu'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/label.tsx:4:1
web:dev: Module not found: Can't resolve '@radix-ui/react-label'
web:dev:   2 |
web:dev:   3 | import * as React from "react"
web:dev: > 4 | import * as LabelPrimitive from "@radix-ui/react-label"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   5 |
web:dev:   6 | import { cn } from "@/lib/utils"
web:dev:   7 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:2:1
web:dev: Module not found: Can't resolve '@radix-ui/react-slot'
web:dev:   1 | import * as React from "react"
web:dev: > 2 | import { Slot } from "@radix-ui/react-slot"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/auth-helpers.ts:3:1
web:dev: Module not found: Can't resolve '@supabase/supabase-js'
web:dev:   1 | 'use client'
web:dev:   2 |
web:dev: > 3 | import { createClient } from '@supabase/supabase-js'
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
web:dev:   6 | const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/promise-queue.js:16:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/promise-queue.js:16:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:11:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:11:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/promise-queue.js:17:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/promise-queue.js:17:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:12:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:12:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/app-index.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/app-router.js:32:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/app-router.js:32:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/error-boundary.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/error-boundary.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/errors/root-error-boundary.js:12:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/errors/root-error-boundary.js:12:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/layout-router.js:15:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/lib/console.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/lib/console.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/client-entry.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/intercept-console-error.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js:35:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js:35:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/use-error-handler.js:31:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/use-error-handler.js:31:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/format-webpack-messages.js:33:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/format-webpack-messages.js:33:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/app-dir/link.js:33:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/app-dir/link.js:33:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/app-index.js:12:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/app-router.js:33:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/app-router.js:33:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js:12:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js:12:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/layout-router.js:16:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/redirect-boundary.js:24:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/redirect-boundary.js:24:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/render-from-template-context.js:12:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/use-action-queue.js:23:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/use-action-queue.js:23:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/utils/format-url.js:48:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/utils/format-url.js:48:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/utils/format-url.js:48:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js:24:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/badge.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/button.tsx:3:1
web:dev: Module not found: Can't resolve 'class-variance-authority'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import { Slot } from "@radix-ui/react-slot"
web:dev: > 3 | import { cva, type VariantProps } from "class-variance-authority"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/utils.ts:1:1
web:dev: Module not found: Can't resolve 'clsx'
web:dev: > 1 | import { type ClassValue, clsx } from "clsx";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | import { twMerge } from "tailwind-merge";
web:dev:   3 |
web:dev:   4 | export function cn(...inputs: ClassValue[]) {
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/utils.ts:1:1
web:dev: Module not found: Can't resolve 'clsx'
web:dev: > 1 | import { type ClassValue, clsx } from "clsx";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | import { twMerge } from "tailwind-merge";
web:dev:   3 |
web:dev:   4 | export function cn(...inputs: ClassValue[]) {
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/utils.ts:1:1
web:dev: Module not found: Can't resolve 'clsx'
web:dev: > 1 | import { type ClassValue, clsx } from "clsx";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | import { twMerge } from "tailwind-merge";
web:dev:   3 |
web:dev:   4 | export function cn(...inputs: ClassValue[]) {
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/lib/utils.ts:1:1
web:dev: Module not found: Can't resolve 'clsx'
web:dev: > 1 | import { type ClassValue, clsx } from "clsx";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | import { twMerge } from "tailwind-merge";
web:dev:   3 |
web:dev:   4 | export function cn(...inputs: ClassValue[]) {
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx:10:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:    8 | import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
web:dev:    9 | import { useLanguage } from '../contexts/LanguageContext';
web:dev: > 10 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 11 |   ArrowRight, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 12 |   CheckCircle, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 13 |   Play, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 14 |   Star, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 15 |   TrendingUp, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 16 |   Users, 
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 17 |   Zap,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 18 |   Target,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 19 |   FileText,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 20 |   Video,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 21 |   Image as ImageIcon,
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 22 |   Globe
web:dev:      | ^^^^^^^^^^^^^^
web:dev: > 23 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   24 |
web:dev:   25 | export default function Home() {
web:dev:   26 |   const { t } = useLanguage();
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/Navbar.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { useLanguage } from '../contexts/LanguageContext';
web:dev:   16 | import LoginModal from './auth/LoginModal';
web:dev: > 17 | import { 
web:dev:      | ^^^^^^^^^
web:dev: > 18 |   Moon, 
web:dev:      | ^^^^^^^^
web:dev: > 19 |   Sun, 
web:dev:      | ^^^^^^^^
web:dev: > 20 |   Globe, 
web:dev:      | ^^^^^^^^
web:dev: > 21 |   Menu, 
web:dev:      | ^^^^^^^^
web:dev: > 22 |   X,
web:dev:      | ^^^^^^^^
web:dev: > 23 |   ChevronDown 
web:dev:      | ^^^^^^^^
web:dev: > 24 | } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   25 |
web:dev:   26 | const Navbar = () => {
web:dev:   27 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/auth/LoginModal.tsx:17:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   15 | import { Label } from '../ui/label';
web:dev:   16 | import { signInWithEmail, signUpWithEmail } from '../../lib/auth-helpers';
web:dev: > 17 | import { LogIn, Eye, EyeOff, Loader2 } from 'lucide-react';
web:dev:      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   18 |
web:dev:   19 | export default function LoginModal() {
web:dev:   20 |   const [isOpen, setIsOpen] = useState(false);
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:5:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   3 | import * as React from "react"
web:dev:   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev: > 5 | import { XIcon } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev:   8 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:5:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   3 | import * as React from "react"
web:dev:   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev: > 5 | import { XIcon } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev:   8 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:5:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   3 | import * as React from "react"
web:dev:   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev: > 5 | import { XIcon } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev:   8 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dialog.tsx:5:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   3 | import * as React from "react"
web:dev:   4 | import * as DialogPrimitive from "@radix-ui/react-dialog"
web:dev: > 5 | import { XIcon } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   6 |
web:dev:   7 | import { cn } from "@/lib/utils"
web:dev:   8 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ui/dropdown-menu.tsx:3:1
web:dev: Module not found: Can't resolve 'lucide-react'
web:dev:   1 | import * as React from "react"
web:dev:   2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
web:dev: > 3 | import { Check, ChevronRight, Circle } from "lucide-react"
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | import { cn } from "../../lib/utils"
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/postcss/lib/input.js:6:18
web:dev: Module not found: Can't resolve 'nanoid/non-secure'
web:dev:   4 | let { fileURLToPath, pathToFileURL } = require('url')
web:dev:   5 | let { isAbsolute, resolve } = require('path')
web:dev: > 6 | let { nanoid } = require('nanoid/non-secure')
web:dev:     |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   7 |
web:dev:   8 | let terminalHighlight = require('./terminal-highlight')
web:dev:   9 | let CssSyntaxError = require('./css-syntax-error')
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/postcss/lib/css-syntax-error.js:3:12
web:dev: Module not found: Can't resolve 'picocolors'
web:dev:   1 | 'use strict'
web:dev:   2 |
web:dev: > 3 | let pico = require('picocolors')
web:dev:     |            ^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | let terminalHighlight = require('./terminal-highlight')
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/postcss/lib/terminal-highlight.js:3:12
web:dev: Module not found: Can't resolve 'picocolors'
web:dev:   1 | 'use strict'
web:dev:   2 |
web:dev: > 3 | let pico = require('picocolors')
web:dev:     |            ^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 |
web:dev:   5 | let tokenizer = require('./tokenize')
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/app/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/app/page.tsx <module evaluation>",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/app/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/app/page.tsx <module evaluation>",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/app/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/app/page.tsx",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/app/page.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/app/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/app/page.tsx",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ClientWrapper.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/components/ClientWrapper.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/components/ClientWrapper.tsx <module evaluation>",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ClientWrapper.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/components/ClientWrapper.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/components/ClientWrapper.tsx <module evaluation>",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ClientWrapper.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/components/ClientWrapper.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/components/ClientWrapper.tsx",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/components/ClientWrapper.tsx/proxy.mjs:1:1
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: > 1 | import { registerClientReference } from "react-server-dom-turbopack/server.edge";
web:dev:     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   2 | export default registerClientReference(
web:dev:   3 |     function() { throw new Error("Attempted to call the default export of [project]/apps/web/components/ClientWrapper.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
web:dev:   4 |     "[project]/apps/web/components/ClientWrapper.tsx",
web:dev: 
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/error-boundary.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/components/error-boundary.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/client-page.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/client-page.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/client-segment.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/client-segment.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/layout-router.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/layout-router.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/metadata/async-metadata.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/metadata/async-metadata.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/render-from-template-context.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/client/components/render-from-template-context.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/lib/framework/boundary-components.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/lib/framework/boundary-components.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/lib/metadata/generate/icon-mark.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/lib/metadata/generate/icon-mark.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/next-devtools/userspace/app/segment-explorer-node.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/next-devtools/userspace/app/segment-explorer-node.js/proxy.cjs:1:37
web:dev: Module not found: Can't resolve 'react-server-dom-turbopack/server.edge'
web:dev: Import map: aliased to module "next" with subpath '/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge' inside of [project]/apps/web
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:2:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/server'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/collect-segment-data.js:5:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/esm/server/app-render/entry-base.js:4:1
web:dev: Module not found: Can't resolve 'react-server-dom-webpack/static'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/postcss/lib/input.js:3:49
web:dev: Module not found: Can't resolve 'source-map-js'
web:dev:   1 | 'use strict'
web:dev:   2 |
web:dev: > 3 | let { SourceMapConsumer, SourceMapGenerator } = require('source-map-js')
web:dev:     |                                                 ^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 | let { fileURLToPath, pathToFileURL } = require('url')
web:dev:   5 | let { isAbsolute, resolve } = require('path')
web:dev:   6 | let { nanoid } = require('nanoid/non-secure')
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/postcss/lib/map-generator.js:3:49
web:dev: Module not found: Can't resolve 'source-map-js'
web:dev:   1 | 'use strict'
web:dev:   2 |
web:dev: > 3 | let { SourceMapConsumer, SourceMapGenerator } = require('source-map-js')
web:dev:     |                                                 ^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 | let { dirname, relative, resolve, sep } = require('path')
web:dev:   5 | let { pathToFileURL } = require('url')
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/postcss/lib/previous-map.js:3:49
web:dev: Module not found: Can't resolve 'source-map-js'
web:dev:   1 | 'use strict'
web:dev:   2 |
web:dev: > 3 | let { SourceMapConsumer, SourceMapGenerator } = require('source-map-js')
web:dev:     |                                                 ^^^^^^^^^^^^^^^^^^^^^^^^
web:dev:   4 | let { existsSync, readFileSync } = require('fs')
web:dev:   5 | let { dirname, join } = require('path')
web:dev:   6 |
web:dev: 
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ✓ Compiled in 4.8s
web:dev:  ⨯ ./node_modules/next/app.js
web:dev: Module not found: Can't resolve './dist/pages/_app'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/app.js
web:dev: Module not found: Can't resolve './dist/pages/_app'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:11:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:12:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-middleware-client.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/pages/hot-reloader-pages.js:55:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/on-demand-entries-client.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/index.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/next-dev-turbopack.js:6:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/page-bootstrap.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/page-loader.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/route-announcer.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/route-loader.js:31:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/router.js:40:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/script.js:28:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/tracing/tracer.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/with-router.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/shared/react-18-hydration-error.js:27:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js:35:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-error-boundary.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/constants.js:287:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/format-webpack-messages.js:33:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/router.js:28:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/script.js:29:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/adapters.js:31:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/router.js:29:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/utils/format-url.js:48:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/react-dom/cjs/react-dom.development.js:27:17
web:dev: Module not found: Can't resolve 'scheduler'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/app.js
web:dev: Module not found: Can't resolve './dist/pages/_app'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/app.js
web:dev: Module not found: Can't resolve './dist/pages/_app'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:11:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:12:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-middleware-client.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/pages/hot-reloader-pages.js:55:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/on-demand-entries-client.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/index.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/next-dev-turbopack.js:6:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/page-bootstrap.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/page-loader.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/route-announcer.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/route-loader.js:31:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/router.js:40:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/script.js:28:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/tracing/tracer.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/with-router.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/shared/react-18-hydration-error.js:27:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js:35:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-error-boundary.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/constants.js:287:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/format-webpack-messages.js:33:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/router.js:28:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/script.js:29:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/adapters.js:31:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/router.js:29:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/utils/format-url.js:48:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/react-dom/cjs/react-dom.development.js:27:17
web:dev: Module not found: Can't resolve 'scheduler'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/app.js
web:dev: Module not found: Can't resolve './dist/pages/_app'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/app.js
web:dev: Module not found: Can't resolve './dist/pages/_app'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:11:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:12:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-middleware-client.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/pages/hot-reloader-pages.js:55:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/on-demand-entries-client.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/index.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/next-dev-turbopack.js:6:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/page-bootstrap.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/page-loader.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/route-announcer.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/route-loader.js:31:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/router.js:40:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/script.js:28:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/tracing/tracer.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/with-router.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/shared/react-18-hydration-error.js:27:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js:35:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-error-boundary.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/constants.js:287:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/format-webpack-messages.js:33:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/router.js:28:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/script.js:29:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/adapters.js:31:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/router.js:29:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/utils/format-url.js:48:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/react-dom/cjs/react-dom.development.js:27:17
web:dev: Module not found: Can't resolve 'scheduler'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/error.js
web:dev: Module not found: Can't resolve './dist/pages/_error'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/error.js
web:dev: Module not found: Can't resolve './dist/pages/_error'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:11:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:12:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-middleware-client.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/pages/hot-reloader-pages.js:55:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/on-demand-entries-client.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/index.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/next-dev-turbopack.js:6:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/page-bootstrap.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/page-loader.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/route-announcer.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/route-loader.js:31:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/router.js:40:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/script.js:28:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/tracing/tracer.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/with-router.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/shared/react-18-hydration-error.js:27:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js:35:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-error-boundary.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/pages/_app.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/constants.js:287:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/constants.js:287:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/format-webpack-messages.js:33:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/router.js:28:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/script.js:29:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/adapters.js:31:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/router.js:29:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/utils/format-url.js:48:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/react-dom/cjs/react-dom.development.js:27:17
web:dev: Module not found: Can't resolve 'scheduler'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/error.js
web:dev: Module not found: Can't resolve './dist/pages/_error'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/error.js
web:dev: Module not found: Can't resolve './dist/pages/_error'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:11:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:12:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-middleware-client.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/pages/hot-reloader-pages.js:55:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/on-demand-entries-client.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/index.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/next-dev-turbopack.js:6:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/page-bootstrap.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/page-loader.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/route-announcer.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/route-loader.js:31:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/router.js:40:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/script.js:28:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/tracing/tracer.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/with-router.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/shared/react-18-hydration-error.js:27:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js:35:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-error-boundary.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/pages/_app.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/constants.js:287:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/constants.js:287:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/format-webpack-messages.js:33:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/router.js:28:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/script.js:29:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/adapters.js:31:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/router.js:29:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/utils/format-url.js:48:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/react-dom/cjs/react-dom.development.js:27:17
web:dev: Module not found: Can't resolve 'scheduler'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/error.js
web:dev: Module not found: Can't resolve './dist/pages/_error'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./node_modules/next/error.js
web:dev: Module not found: Can't resolve './dist/pages/_error'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:11:41
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_base'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_base' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js:12:40
web:dev: Module not found: Can't resolve '@swc/helpers/_/_class_private_field_loose_key'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_class_private_field_loose_key' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-middleware-client.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/hot-reloader/pages/hot-reloader-pages.js:55:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/dev/on-demand-entries-client.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/index.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/next-dev-turbopack.js:6:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/page-bootstrap.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/page-loader.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js:24:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/route-announcer.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/route-loader.js:31:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/router.js:40:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/script.js:28:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/tracing/tracer.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/with-router.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/shared/react-18-hydration-error.js:27:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js:35:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-error-boundary.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup.js:23:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/pages/_app.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js:36:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/constants.js:287:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/constants.js:287:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/format-webpack-messages.js:33:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router-context.shared-runtime.js:11:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/router.js:28:34
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_default'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_default' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/client/script.js:29:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/adapters.js:31:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/router.js:29:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/next/dist/shared/lib/router/utils/format-url.js:48:35
web:dev: Module not found: Can't resolve '@swc/helpers/_/_interop_require_wildcard'
web:dev: Import map: aliased to module "@swc/helpers" with subpath '/_/_interop_require_wildcard' inside of [project]/apps/web/node_modules/next
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ⨯ ./apps/web/node_modules/react-dom/cjs/react-dom.development.js:27:17
web:dev: Module not found: Can't resolve 'scheduler'
web:dev: 
web:dev: 
web:dev: https://nextjs.org/docs/messages/module-not-found
web:dev: 
web:dev: 
web:dev:  ✓ Compiled in 5ms
web:dev: 
web:dev: -----
web:dev: FATAL: An unexpected Turbopack error occurred. A panic log has been written to /var/folders/hr/j3pcj2g16799bhjswnpvt8140000gn/T/next-panic-fd09c9d2cbc1e49cff4e3678a3c80c20.log.
web:dev: 
web:dev: To help make Turbopack better, report this error by clicking here: https://github.com/vercel/next.js/discussions/new?category=turbopack-error-report&title=Turbopack%20Error%3A%20Next.js%20package%20not%20found&body=Turbopack%20version%3A%20%60v15.3.3-3-gf9e98b9ce%60%0A%0AError%20message%3A%0A%60%60%60%0ATurbopack%20Error%3A%20Next.js%20package%20not%20found%0A%60%60%60&labels=Turbopack,Turbopack%20Panic%20Backtrace
web:dev: -----
web:dev: 
web:dev: [Error [TurbopackInternalError]: Next.js package not found
web:dev: 
web:dev: Debug info:
web:dev: - Execution of get_entrypoints_with_issues_operation failed
web:dev: - Execution of EntrypointsOperation::new failed
web:dev: - Execution of Project::entrypoints failed
web:dev: - Execution of AppProject::routes failed
web:dev: - Execution of directory_tree_to_entrypoints_internal failed
web:dev: - Execution of directory_tree_to_loader_tree failed
web:dev: - Execution of get_next_package failed
web:dev: - Next.js package not found]
web:dev: 

