# Engineering Standards

## Code Quality Standards

### Naming Conventions
- **Files**: kebab-case (e.g., product-card.tsx, user-service.ts)
- **Directories**: kebab-case (e.g., components, utils, services)
- **JavaScript/TypeScript Variables**: camelCase (e.g., userName, productId)
- **Classes/Interfaces**: PascalCase (e.g., UserService, ProductCard)
- **Constants**: UPPER_SNAKE_CASE (e.g., MAX_ITEMS, API_BASE_URL)
- **React Components**: PascalCase (e.g., ProductCard, UserDashboard)

### Code Structure

#### Frontend (React/TypeScript)
```
src/
├── components/
│   ├── common/           # Reusable components
│   ├── layout/           # Layout components
│   ├── product/          # Product-specific components
│   ├── cart/             # Cart-related components
│   └── auth/             # Authentication components
├── pages/                # Page-level components
├── hooks/                # Custom React hooks
├── contexts/             # React contexts for state
├── services/             # API service layer
├── utils/                # Utility functions
├── types/                # TypeScript types and interfaces
├── styles/               # Global styles and theme
└── app.tsx               # Root component
```

#### Backend (Node.js/Express or Python)
```
src/
├── routes/               # Route definitions
├── controllers/          # Request handlers
├── services/             # Business logic
├── models/               # Database models
├── middleware/           # Middleware functions
├── utils/                # Utility functions
├── config/               # Configuration files
├── database/             # Database setup and migrations
├── validators/           # Input validation schemas
└── app.ts                # Express app setup
```

### TypeScript Standards
- Use strict mode: `"strict": true`
- No implicit any types: `"noImplicitAny": true`
- Explicit return types on functions
- Interface for public APIs, Type for internal usage
- Avoid `any` - use `unknown` if necessary

### React Best Practices
- Functional components with hooks
- Use `React.memo()` for expensive components
- Lift state up appropriately
- Use custom hooks for logic reuse
- Proper dependency arrays on useEffect
- Key prop for lists (never use index)
- Lazy loading for code splitting

### API Design Standards
- RESTful endpoints following conventions
- Semantic HTTP methods and status codes
- Consistent response format (wrapper with data, error, meta)
- Pagination with limit and offset
- API versioning (v1, v2)
- Comprehensive API documentation

### Error Handling
- Try-catch blocks in all async operations
- Custom error classes for different error types
- Structured error responses
- Proper HTTP status codes
- Logging all errors with context

### Performance Standards
- Lighthouse score >= 85
- Page load time < 2 seconds
- API response time < 200ms (p95)
- Database query time < 50ms (p95)
- Images optimized (WebP, proper sizing)
- Code splitting and lazy loading
- Minified and compressed assets

### Testing Standards
- Unit test coverage >= 80%
- All public APIs tested
- Critical user flows in E2E tests
- Performance tests for APIs
- Security tests for sensitive operations

## Code Review Checklist
- [ ] Code follows naming conventions and structure
- [ ] No hardcoded secrets or sensitive data
- [ ] Proper error handling and validation
- [ ] Sufficient tests with good coverage
- [ ] Performance impact assessed
- [ ] Security implications reviewed
- [ ] Type safety maintained
- [ ] Documentation updated
- [ ] Accessibility requirements met
- [ ] No console errors or warnings
