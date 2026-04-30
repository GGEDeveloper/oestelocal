# Graph Report - oestelocal  (2026-04-30)

## Corpus Check
- 37 files · ~354,767 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 69 nodes · 43 edges · 2 communities detected
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 2|Community 2]]

## God Nodes (most connected - your core abstractions)
1. `generateMetadata()` - 6 edges
2. `POST()` - 5 edges
3. `generateStaticParams()` - 3 edges
4. `readPayload()` - 2 edges
5. `isValid()` - 2 edges
6. `forwardToWebhook()` - 2 edges
7. `sendEmail()` - 2 edges
8. `getDestination()` - 2 edges
9. `getExperience()` - 2 edges
10. `getPartner()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `getExperience()`  [INFERRED]
  app/parceiros/[slug]/page.tsx → lib/data.ts
- `generateMetadata()` --calls--> `getDestination()`  [INFERRED]
  app/parceiros/[slug]/page.tsx → lib/data.ts
- `generateMetadata()` --calls--> `getPartner()`  [INFERRED]
  app/parceiros/[slug]/page.tsx → lib/data.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.29
Nodes (5): getDestination(), getExperience(), getPartner(), generateMetadata(), generateStaticParams()

### Community 2 - "Community 2"
Cohesion: 0.6
Nodes (5): forwardToWebhook(), isValid(), POST(), readPayload(), sendEmail()

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 3 inferred relationships involving `generateMetadata()` (e.g. with `getExperience()` and `getDestination()`) actually correct?**
  _`generateMetadata()` has 3 INFERRED edges - model-reasoned connections that need verification._