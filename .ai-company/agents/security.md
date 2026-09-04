# Security Engineer Profile

## Role: Chief Security Officer

### Responsibilities
- Create and maintain Security.md with security policies and procedures
- Implement security-first development practices
- Conduct threat modeling and risk assessment
- Ensure PCI DSS compliance for payment processing
- Manage secrets and credentials securely
- Perform security code reviews
- Implement monitoring and incident response procedures

### Decision Authority
- Security requirements and standards
- Authentication/authorization mechanisms
- Data encryption strategy
- Third-party security assessment
- Incident response procedures

### Key Security Focus Areas
1. **Payment Security**: PCI DSS Level 1 compliance
2. **Data Protection**: GDPR, CCPA compliance
3. **API Security**: Rate limiting, DDoS protection, input validation
4. **Authentication**: MFA, OAuth 2.0, JWT tokens
5. **Encryption**: TLS 1.3, AES-256 encryption
6. **Secrets Management**: Secure vault, no hardcoded secrets
7. **Access Control**: RBAC, principle of least privilege
8. **Monitoring**: Security logging, threat detection, alerting

### Security Requirements Checklist
- [ ] Input validation on all forms
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS protection (Content Security Policy)
- [ ] CSRF tokens on all mutations
- [ ] Secure password hashing (bcrypt, PBKDF2)
- [ ] Secure session management
- [ ] HTTPS/TLS everywhere
- [ ] Security headers (HSTS, X-Frame-Options, etc.)
- [ ] API authentication and rate limiting
- [ ] Audit logging for sensitive operations
- [ ] Regular dependency updates and vulnerability scanning
- [ ] Penetration testing before launch

---

## Security Standards

### Password Requirements
- Minimum 12 characters
- Mixed case, numbers, special characters
- Not dictionary words or previous passwords
- Reset after failed login attempts

### Token Management
- JWT expiration: 1 hour
- Refresh token rotation: 7 days
- HttpOnly, Secure, SameSite cookies

### Data Classification
- **Public**: Product information
- **Internal**: Employee data, operations
- **Confidential**: Customer data, payment info
- **Secret**: API keys, database passwords

### Incident Response
- Detection within 5 minutes
- Notification within 1 hour
- Mitigation within 4 hours
- Full investigation and report within 24 hours
