# Project Memory & Knowledge Base
## LuxeLips - Luxury Lipstick E-Commerce Platform

**Version**: 1.0  
**Created**: 2026-09-04  
**Document Owner**: Engineering Team  

---

## Key Project Information

### Business Context
- **Brand**: LuxeLips - Premium Luxury Lipstick Collection
- **Project**: E-commerce platform with AR virtual try-on
- **Launch Target**: Q4 2026 (January 2027)
- **Market**: Premium beauty segment, luxury lipstick enthusiasts
- **Differentiation**: AR virtual try-on technology (key competitive advantage)

### Project Constraints
- **Timeline**: 12 weeks from start to launch
- **Budget**: [TBD - to be determined]
- **Team Size**: 8-10 people (product, design, engineering, QA, AR specialist)
- **Scope**: MVP with 40+ premium lipstick shades, AR try-on, shopping

### Success Definition
- Launch with 40+ luxury lipstick shades
- 1,500+ sign-ups in first month
- 4%+ conversion rate with AR feature
- AR try-on success rate: 60%+ visitor engagement
- 99.95% uptime
- 65% customer retention

---

## Technology Stack (Finalized)

### Frontend
- **Framework**: React 18 with TypeScript
- **State Management**: Redux Toolkit + Zustand
- **UI Library**: Tailwind CSS + Headless UI
- **AR/3D**: Three.js + Face-api.js (lip detection)
- **API Client**: Axios
- **Build Tool**: Vite
- **Testing**: Jest + Playwright
- **Deployment**: Vercel or AWS S3 + CloudFront

### Backend
- **Runtime**: Node.js 18 LTS
- **Framework**: Express.js + TypeScript
- **Database**: PostgreSQL 14
- **Cache**: Redis 7
- **Search**: PostgreSQL FTS (upgrade to Elasticsearch in Phase 2)
- **ORM**: Prisma
- **Testing**: Jest + Supertest
- **AR Backend**: ML model serving (TensorFlow.js or similar)
- **Deployment**: AWS ECS or Heroku

### AR/ML Stack
- **Lip Detection**: Face-api.js or TensorFlow.js
- **3D Rendering**: Three.js or Babylon.js
- **Shade Visualization**: Custom AR filters
- **Performance**: WebGL for efficient rendering
- **Mobile Support**: WebRTC for camera access

### Infrastructure
- **Cloud Provider**: AWS (primary)
- **CDN**: CloudFlare for assets + Stripe for payment
- **AR Delivery**: CloudFront for model files
- **Monitoring**: Datadog + Sentry
- **Logging**: CloudWatch + ELK Stack
- **CI/CD**: GitHub Actions

---

## Key Decisions Made

### 1. MVP First Approach ✅
**Decision**: Launch MVP with core e-commerce features only  
**Rationale**: Faster time to market, validate business model, gather user feedback  
**Impact**: Simpler initial architecture, can add features post-launch  
**Status**: APPROVED

### 2. Technology Stack Selection ✅
**Decision**: Node.js + React (both JavaScript)  
**Rationale**: Single language ecosystem, fast development, large community, talent pool  
**Alternative Considered**: Python backend (rejected - larger team needed)  
**Status**: APPROVED

### 3. Database Design ✅
**Decision**: PostgreSQL + Redis (no microservices initially)  
**Rationale**: Simpler, proven, ACID compliance, can scale later  
**Status**: APPROVED

### 4. Payment Processing ✅
**Decision**: Stripe API (primary), Square (backup)  
**Rationale**: Industry standard, PCI compliant, good developer experience  
**Status**: APPROVED

### 5. Hosting Strategy ✅
**Decision**: AWS with ECS for containers  
**Rationale**: Scalable, reliable, good DevOps tools  
**Status**: APPROVED

---

## Architectural Patterns

### API Design
- **Style**: RESTful with consistent conventions
- **Versioning**: URL path versioning (v1, v2)
- **Response Format**: Wrapper with data, error, meta properties
- **Error Handling**: Standardized error codes and messages
- **Authentication**: JWT tokens in Authorization header

### Database
- **Schema Design**: Normalized with strategic denormalization
- **Indexing**: Composite indexes for common queries
- **Migrations**: Version controlled, backward compatible
- **Backups**: Daily incremental, weekly full, 30-day retention

### Frontend
- **Component Architecture**: Functional components + hooks
- **State Management**: Context for theme/auth, Redux for app state
- **Code Splitting**: Lazy loading for routes and heavy components
- **Performance**: Memo, useMemo, useCallback for optimization

---

## Known Issues and Workarounds

### None Currently
- Project in early stages (Phase 1)

### Lessons Learned
- Starting fresh, no legacy code issues
- Well-defined requirements from start

---

## Common Tasks & Procedures

### How to Add a New Product Feature
1. Create feature branch from develop
2. Implement according to architecture and style guides
3. Add unit tests (target >80% coverage)
4. Update API documentation
5. Create PR with detailed description
6. Code review + testing
7. Merge to develop, test in staging
8. Deploy to production with feature flag

### How to Deploy
1. Merge to main branch
2. Run full test suite
3. Build and test Docker image
4. Deploy to staging first
5. Run smoke tests
6. Deploy to production
7. Monitor metrics for 30 minutes
8. Rollback if needed

### How to Handle Production Issues
1. Create incident ticket with timestamp
2. Assess severity (critical/high/medium/low)
3. If critical: immediate rollback or hotfix
4. Post-incident: root cause analysis
5. Document learnings and improvements

---

## Team Roles & Responsibilities

### Product Manager
- Owns PRD and roadmap
- Gathers user feedback
- Prioritizes features
- Defines success metrics

### System Architect
- Owns system design and technology choices
- Ensures scalability and reliability
- Reviews technical proposals
- Performance optimization

### UX/UI Designer
- Owns design system and component library
- Creates wireframes and mockups
- Ensures accessibility compliance
- Conducts UX testing

### Backend Developers (2-3)
- Implement API services
- Database design and optimization
- Integration with third-party services
- Server-side security and validation

### Frontend Developers (2-3)
- Implement React components
- Client-side state management
- Performance optimization
- Browser compatibility

### QA Engineer
- Test case creation and execution
- Automated testing (unit, integration, E2E)
- Security and performance testing
- Regression testing before releases

### Security Engineer
- Threat modeling and risk assessment
- Code security reviews
- Compliance verification (PCI DSS)
- Incident response planning

---

## Communication Channels

### Synchronous
- **Daily Standup**: 10:00 AM (15 minutes)
  - What we did yesterday
  - What we're doing today
  - Blockers and help needed
- **Weekly Planning**: Monday 2:00 PM (1 hour)
- **Weekly Review**: Friday 4:00 PM (1 hour)
- **Sprint Retro**: Friday 3:00 PM (45 minutes)

### Asynchronous
- **Slack**: Day-to-day communication
- **GitHub Issues**: Feature tracking and bug reports
- **GitHub Discussions**: Architecture/design decisions
- **Documentation**: Source of truth

### Document Updates
- Continuous: Team can update anytime
- Weekly: Project manager reviews and updates high-level status

---

## Performance Targets

| Metric | Target | Tool | Frequency |
|--------|--------|------|-----------|
| Page Load Time | < 2 sec | Lighthouse | Per build |
| API Response Time | < 200ms (p95) | DataDog | Continuous |
| Uptime | > 99.95% | CloudWatch | Continuous |
| Code Coverage | > 80% | Jest | Per PR |
| Lighthouse Score | > 85 | Lighthouse | Per release |
| Dependency Vulnerability | 0 critical | npm audit | Weekly |

---

## Third-Party Services

| Service | Purpose | Status | Owner |
|---------|---------|--------|-------|
| Stripe | Payment Processing | Contract signed | Product |
| SendGrid | Email Delivery | Account setup | Ops |
| Datadog | Monitoring | Setup in progress | DevOps |
| CloudFlare | CDN & Security | Setup in progress | DevOps |
| GitHub | Code Repository | Repository created | DevOps |
| AWS | Hosting & Infrastructure | Account setup | DevOps |

---

## Useful Resources

### Documentation
- [React Docs](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)
- [Prisma ORM](https://www.prisma.io/docs)
- [Stripe API Docs](https://stripe.com/docs/api)

### Design References
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref)
- [Material Design](https://material.io/design)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Best Practices
- [Clean Code - Robert Martin](https://www.oreilly.com/library/view/clean-code/9780136083238)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [REST API Design Rulebook](https://www.oreilly.com/library/view/rest-api-design/9781449317905)

---

## Important Contacts

| Role | Name | Email | Phone |
|------|------|-------|-------|
| Product Manager | [TBD] | [TBD] | [TBD] |
| CTO | [TBD] | [TBD] | [TBD] |
| Architect | [TBD] | [TBD] | [TBD] |
| Lead Designer | [TBD] | [TBD] | [TBD] |

---

## File Structure Quick Reference

```
perfume/
├── file.md                          # Original scope document
├── PRD.md                           # Product requirements
├── Architecture.md                  # System architecture
├── Design.md                        # Design system
├── Phases.md                        # Project phases & status
├── Memory.md                        # This file
├── .ai-company/
│   ├── agents/                      # Agent profiles
│   │   ├── product-manager.md
│   │   ├── architect.md
│   │   ├── designer.md
│   │   ├── security.md
│   │   └── qa.md
│   └── knowledge/                   # Knowledge base
│       ├── engineering-standards.md
│       ├── ux-principles.md
│       └── security-rules.md
├── src/                             # Application code (TBD)
├── tests/                           # Test files (TBD)
├── docs/                            # Additional documentation (TBD)
└── .github/                         # GitHub workflows (TBD)
```

---

## Quick Links

- **Repository**: [GitHub URL - TBD]
- **Project Board**: [Jira/GitHub Projects URL - TBD]
- **Staging Environment**: [URL - TBD]
- **Production Environment**: [URL - TBD]
- **Monitoring Dashboard**: [DataDog URL - TBD]

---

## Glossary

| Term | Definition |
|------|-----------|
| MVP | Minimum Viable Product - core features for launch |
| PRD | Product Requirements Document - feature specifications |
| UX | User Experience - how users interact with product |
| WCAG | Web Content Accessibility Guidelines - accessibility standards |
| SOLID | Software design principles (Single responsibility, etc.) |
| JWT | JSON Web Token - stateless authentication |
| REST | Representational State Transfer - API architecture style |
| PCI DSS | Payment Card Industry Data Security Standard |
| SLA | Service Level Agreement - uptime commitment |
| KPI | Key Performance Indicator - success metric |

---

**Document Status**: Living document - Updated as project progresses  
**Last Updated**: 2026-09-04  
**Next Review**: Weekly with team
