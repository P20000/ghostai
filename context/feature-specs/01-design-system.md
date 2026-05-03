Read `AGENTS.md` before starting.

we're adding the design system and UI primitive components. 

Install and configure `shadcn ui`.

Add these shadcn components:
- Button 
- Card 
- Dialog
- Input
- Tabs 
- Textarea
- ScrollArea

Do not modify the generated `components/ui/ui/*` files after installation.

also install `lucide-react`.

create `lib/utils.ts` with a reusable `cn()` helper for merging Tailwind classes.

Ensure all components match the existing dark theme in `globals.css`.

### Check when done

- All components import without errors.
- `cn()` works properly.
- no default light styling appears. 