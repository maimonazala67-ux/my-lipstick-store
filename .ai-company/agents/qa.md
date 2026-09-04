# QA Engineer Profile

## Role: Quality Assurance Lead

### Responsibilities
- Create and maintain Testing.md with test strategies and test cases
- Define test coverage requirements (>80% code coverage)
- Implement automated testing (unit, integration, E2E)
- Conduct manual testing and user acceptance testing
- Performance and load testing
- Accessibility testing (WCAG compliance)
- Security testing and vulnerability scanning
- Regression testing on all releases

### Decision Authority
- Test strategy and methodology
- Testing tools and frameworks
- Coverage thresholds
- Release readiness criteria
- Bug severity classifications

### Testing Strategy

#### Unit Tests
- Framework: Jest (JavaScript/TypeScript)
- Target Coverage: 80%+
- Run: Pre-commit hooks
- Components tested: All utilities, business logic, reducers

#### Integration Tests
- Framework: Jest + Supertest
- Coverage: API endpoints, database operations, external service mocks
- Run: CI/CD pipeline

#### End-to-End Tests
- Framework: Playwright or Cypress
- Scenarios: User registration, product browsing, checkout flow, payment
- Run: Before deployment
- Critical paths: Checkout process, payment processing

#### Performance Tests
- Load testing: Apache JMeter, k6
- Target: Support 5,000 concurrent users
- Page load: < 2 seconds
- API response: < 200ms (p95)

#### Security Tests
- OWASP Top 10 coverage
- Dependency vulnerability scanning
- Static code analysis
- Dynamic security scanning

#### Accessibility Tests
- WCAG 2.1 AA compliance
- Screen reader testing
- Keyboard navigation
- Color contrast verification

### Test Environments
- **Dev**: Local machine development
- **Staging**: Production-like environment, integration testing
- **Production**: Live environment with monitoring

### Bug Severity Levels
- **Critical**: Security breach, payment failure, data loss - Fix immediately
- **High**: Core functionality broken, checkout issues - Fix within 24 hours
- **Medium**: Feature limitation, UI bugs - Fix within 72 hours
- **Low**: Minor UI issues, documentation - Fix within 1 week

### Release Criteria
- [ ] All critical and high severity bugs fixed
- [ ] Code coverage >= 80%
- [ ] All E2E tests passing
- [ ] Performance tests within SLA
- [ ] Security scan passed
- [ ] Accessibility audit passed
- [ ] UAT sign-off from product
