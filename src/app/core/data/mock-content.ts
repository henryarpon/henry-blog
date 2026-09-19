import { ContentItem } from '../models/content.model';

// Realistic but placeholder content. Dates are recent ISO strings.
export const MOCK_CONTENT: ContentItem[] = [
  // Posts (5)
  {
    id: 'post-1',
    type: 'post',
    title: 'Designing resilient APIs',
    slug: 'designing-resilient-apis',
    date: '2026-08-15T10:00:00.000Z',
    tags: ['cs/architecture', 'dotnet/apis'],
    summary: 'Thoughts on building APIs that tolerate failures and evolve safely.',
    body: `# Designing resilient APIs

Resilience is a combination of simplicity and good defaults. Below are a few practical tactics:

- Keep contracts small and backward compatible.
- Prefer idempotent operations when possible.
- Use retries with exponential backoff.

## Example: retry helper

">
">
">

default retry(promise) {
  // pseudocode
}

[Read more](https://example.com)
`
  },
  {
    id: 'post-2',
    type: 'post',
    title: 'Shaping a small team',
    slug: 'shaping-a-small-team',
    date: '2026-07-05T09:00:00.000Z',
    tags: ['career/management'],
    summary: 'Practical notes on running a small engineering team and lightweight processes.',
    body: `# Shaping a small team

Start with clarity of purpose. Use short async updates, and protect deep work time.

- Weekly demos.
- Biweekly planning.


you can replace this copy later.
`
  },
  {
    id: 'post-3',
    type: 'post',
    title: 'A note on observability',
    slug: 'a-note-on-observability',
    date: '2026-06-10T12:00:00.000Z',
    tags: ['cs/observability'],
    summary: 'What I look for in traces and logs when debugging production issues.',
    body: `# Observability

Signals matter: latency, error rates, saturation.


you can measure with lightweight tooling and correlate across services.
`
  },
  {
    id: 'post-4',
    type: 'post',
    title: 'Deploying with confidence',
    slug: 'deploying-with-confidence',
    date: '2026-05-02T08:30:00.000Z',
    tags: ['devops/deployments'],
    summary: 'A checklist to reduce deployment anxiety for small teams.',
    body: `# Deploy checklist

1. Run smoke tests
2. Monitor errors for 10 minutes
3. Be ready to roll back
`
  },
  {
    id: 'post-5',
    type: 'post',
    title: 'Why small changes win',
    slug: 'why-small-changes-win',
    date: '2026-04-01T07:00:00.000Z',
    tags: ['cs/product'],
    summary: 'Small, reversible changes are the fastest path to learning.',
    body: `# Small changes

Prefer defaults that are easy to change. Ship the smallest thing that could possibly work.
`
  },

  // Notes (8)
  {
    id: 'note-1',
    type: 'note',
    title: 'Reading: hexagonal architecture',
    slug: 'reading-hex-arch',
    date: '2026-09-01T14:20:00.000Z',
    tags: ['cs/architecture'],
    body: `Reading Martin Fowler's notes on ports and adapters. Key idea: keep application core independent of frameworks.`
  },
  {
    id: 'note-2',
    type: 'note',
    title: 'Prototype: serverless worker',
    slug: 'prototype-serverless-worker',
    date: '2026-08-22T11:10:00.000Z',
    tags: ['dotnet/azure-functions'],
    body: `Started a small Azure Functions prototype. Using Durable Functions for orchestration.`
  },
  {
    id: 'note-3',
    type: 'note',
    title: 'Idea: weekly reading list',
    slug: 'idea-weekly-reading',
    date: '2026-08-18T09:00:00.000Z',
    tags: ['career/writing'],
    body: `Maybe publish a short weekly list of interesting articles.`
  },
  {
    id: 'note-4',
    type: 'note',
    title: 'Debugging slow queries',
    slug: 'debugging-slow-queries',
    date: '2026-08-10T16:45:00.000Z',
    tags: ['cs/database'],
    body: `Found that an index was missing on a join column. Added index and latency dropped.`
  },
  {
    id: 'note-5',
    type: 'note',
    title: 'Onboarding checklist tweaks',
    slug: 'onboarding-checklist-tweaks',
    date: '2026-07-20T10:00:00.000Z',
    tags: ['career/ops'],
    body: `Shortened the checklist to focus on first-week outcomes.`
  },
  {
    id: 'note-6',
    type: 'note',
    title: 'Meeting notes: infra',
    slug: 'meeting-notes-infra',
    date: '2026-07-02T15:30:00.000Z',
    tags: ['infra'],
    body: `Discussed migration plan for the search index.`
  },
  {
    id: 'note-7',
    type: 'note',
    title: 'CLI tool idea',
    slug: 'cli-tool-idea',
    date: '2026-06-25T12:00:00.000Z',
    tags: ['tools/cli'],
    body: `A small CLI to scaffold consistent repo layouts.`
  },
  {
    id: 'note-8',
    type: 'note',
    title: 'Conference: takeaways',
    slug: 'conference-takeaways',
    date: '2026-06-02T18:00:00.000Z',
    tags: ['career'],
    body: `Notes from the conference: invest in slow work and mentorship.`
  },

  // Videos (6)
  {
    id: 'video-1',
    type: 'video',
    title: 'Deploying Azure Functions at scale',
    videoId: 'dQw4w9WgXcQ',
    date: '2026-08-28T10:00:00.000Z',
    tags: ['dotnet/azure-functions'],
    description: 'Short walkthrough of scaling considerations for Azure Functions.'
  },
  {
    id: 'video-2',
    type: 'video',
    title: 'Intro to Observability',
    videoId: 'kXYiU_JCYtU',
    date: '2026-08-20T09:00:00.000Z',
    tags: ['cs/observability'],
    description: 'High-level overview of traces, metrics and logs.'
  },
  {
    id: 'video-3',
    type: 'video',
    title: 'Angular signals in production',
    videoId: 'eVTXPUF4Oz4',
    date: '2026-07-30T12:00:00.000Z',
    tags: ['angular'],
    description: 'Using signals effectively in Angular applications.'
  },
  {
    id: 'video-4',
    type: 'video',
    title: 'Effective code reviews',
    videoId: '9bZkp7q19f0',
    date: '2026-07-10T11:00:00.000Z',
    tags: ['career/review'],
    description: 'A short talk on giving useful feedback.'
  },
  {
    id: 'video-5',
    type: 'video',
    title: 'Testing strategies',
    videoId: '3JZ_D3ELwOQ',
    date: '2026-06-12T08:00:00.000Z',
    tags: ['testing'],
    description: 'Balancing unit, integration and e2e tests.'
  },
  {
    id: 'video-6',
    type: 'video',
    title: 'Designing for accessibility',
    videoId: 'L_jWHffIx5E',
    date: '2026-05-22T07:00:00.000Z',
    tags: ['accessibility'],
    description: 'Practical accessibility checks you can do today.'
  },

  // Links (12)
  {
    id: 'link-1',
    type: 'link',
    title: 'Martin Fowler — Hexagonal Architecture',
    url: 'https://martinfowler.com/bliki/HexagonalArchitecture.html',
    source: 'martinfowler.com',
    date: '2026-09-02T10:00:00.000Z',
    tags: ['cs/architecture']
  },
  {
    id: 'link-2',
    type: 'link',
    title: 'Azure Functions documentation',
    url: 'https://learn.microsoft.com/azure/azure-functions/',
    source: 'learn.microsoft.com',
    date: '2026-08-25T09:00:00.000Z',
    tags: ['dotnet/azure-functions']
  },
  {
    id: 'link-3',
    type: 'link',
    title: 'Observability best practices',
    url: 'https://example.com/observability',
    source: 'example.com',
    date: '2026-08-21T12:00:00.000Z',
    tags: ['cs/observability']
  },
  {
    id: 'link-4',
    type: 'link',
    title: 'Angular Signals RFC',
    url: 'https://angular.io/guide/signals',
    source: 'angular.io',
    date: '2026-07-29T10:00:00.000Z',
    tags: ['angular']
  },
  {
    id: 'link-5',
    type: 'link',
    title: 'Designing reliable systems',
    url: 'https://example.com/reliability',
    source: 'example.com',
    date: '2026-07-12T09:00:00.000Z',
    tags: ['cs/architecture']
  },
  {
    id: 'link-6',
    type: 'link',
    title: 'Effective code review tips',
    url: 'https://example.com/code-review',
    source: 'example.com',
    date: '2026-06-15T08:00:00.000Z',
    tags: ['career/review']
  },
  {
    id: 'link-7',
    type: 'link',
    title: 'Testing pyramid explained',
    url: 'https://example.com/testing-pyramid',
    source: 'example.com',
    date: '2026-06-05T07:00:00.000Z',
    tags: ['testing']
  },
  {
    id: 'link-8',
    type: 'link',
    title: 'Accessibility checklist',
    url: 'https://example.com/accessibility',
    source: 'example.com',
    date: '2026-05-28T07:00:00.000Z',
    tags: ['accessibility']
  },
  {
    id: 'link-9',
    type: 'link',
    title: 'Writing better READMEs',
    url: 'https://example.com/readmes',
    source: 'example.com',
    date: '2026-05-20T06:00:00.000Z',
    tags: ['docs']
  },
  {
    id: 'link-10',
    type: 'link',
    title: 'Career advice for engineers',
    url: 'https://example.com/career-advice',
    source: 'example.com',
    date: '2026-04-18T06:00:00.000Z',
    tags: ['career']
  },
  {
    id: 'link-11',
    type: 'link',
    title: 'CLI patterns',
    url: 'https://example.com/cli-patterns',
    source: 'example.com',
    date: '2026-04-03T06:00:00.000Z',
    tags: ['tools/cli']
  },
  {
    id: 'link-12',
    type: 'link',
    title: 'Deploy rollback strategies',
    url: 'https://example.com/rollback',
    source: 'example.com',
    date: '2026-03-22T06:00:00.000Z',
    tags: ['devops/deployments']
  }
];
