# Security Rules and Guidelines

## Authentication and Authorization

### User Authentication
- Implement OAuth 2.0 with JWT tokens
- Session timeout: 30 minutes of inactivity
- Concurrent session limit: 3 active sessions per user
- Force logout on suspicious activity

### Password Policy
- Minimum length: 12 characters
- Requires: uppercase, lowercase, numbers, special characters
- No dictionary words or user information
- Password history: Cannot reuse last 5 passwords
- Expiration: 90 days (remind at 30 days)

### Multi-Factor Authentication (MFA)
- Available for all users
- Required for admin/staff accounts
- Supported methods: TOTP, SMS, email
- Backup codes: Generate 10 recovery codes

### Authorization
- Role-Based Access Control (RBAC)
- Roles: Admin, Staff, Customer, Guest
- Principle of least privilege
- Regular access reviews quarterly

### Roles and Permissions
- **Admin**: Full system access, user management, financial reports
- **Staff**: Content management, order fulfillment, customer support
- **Customer**: View own account, orders, preferences
- **Guest**: Browse products, read reviews (no checkout)

## Data Protection

### Data Classification
- **Public**: Product info, general blog content, public reviews
- **Internal**: Employee data, internal communications
- **Confidential**: Customer PII, order history, preferences
- **Secret**: API keys, database passwords, payment tokens

### Encryption Standards
- **In Transit**: TLS 1.3 minimum, HSTS header
- **At Rest**: AES-256 for sensitive data
- **Database**: Encrypted connections, encrypted columns for PII
- **Backups**: Encrypted storage with key rotation

### PII Data Protection
- Customer email: Hashed for lookups
- Phone number: Encrypted
- Address: Encrypted
- Payment info: Tokenized via Stripe (never stored)
- Passwords: Bcrypt with salt

### Data Retention
- User account data: Until deletion or 5 years inactive
- Order records: 7 years (tax compliance)
- Payment logs: 3 years (PCI compliance)
- Personal data: Deleted upon user request (30-day retention)
- Audit logs: 1 year

### Data Deletion
- User can request account deletion
- All personal data deleted within 30 days
- Backups retain anonymized order data only
- Audit trail preserved for compliance

## API Security

### Authentication
- All API calls require JWT token or API key
- API keys: Scoped to specific resources
- Token expiration: 1 hour
- Refresh token: 7 days, rotates on use

### Authorization
- Verify permissions on every request
- Use HTTP method + resource approach
- Deny by default, whitelist access

### Rate Limiting
- Global: 1000 requests per hour per IP
- Per user: 500 requests per hour
- Auth endpoints: 10 attempts per 5 minutes
- Stripe webhook: Unlimited (IP whitelisted)

### Input Validation
- Validate all inputs on server-side
- Type checking (required, format)
- Length limits (max 1000 chars for strings)
- Sanitize special characters
- Reject unknown fields

### Output Encoding
- JSON escape all user-provided data
- HTML encode in templates
- URL encode in query parameters
- No sensitive data in error messages

### CORS Policy
- Whitelist only known domains
- No wildcard (*) origin
- Include credentials only for same-origin
- Pre-flight requests validated

## Code Security

### Secrets Management
- Never hardcode secrets
- Use environment variables (.env)
- Rotate API keys quarterly
- Use secure vaults (AWS Secrets Manager, HashiCorp Vault)

### Dependency Security
- Regular npm/pip audit
- Automated vulnerability scanning
- Update critical patches immediately
- Use lock files (package-lock.json)

### Code Review Security
- All code reviewed by 2+ developers
- Security checklist before merge
- Automated security scanning (SAST)
- No direct production deployments

### Secure Coding Practices
- No hardcoded passwords or API keys
- Use parameterized queries (SQL injection prevention)
- Validate and sanitize all inputs
- Proper error handling (no stack traces to clients)
- Secure random number generation (crypto module)
- Use HTTPS/TLS everywhere

## Payment Security

### PCI DSS Compliance
- Level 1 compliance requirement
- Never store card numbers
- Use Stripe tokenization
- Tokenize before transmission
- Encrypted connections mandatory

### Payment Processing
- Always use HTTPS
- Validate all payment information
- Implement 3D Secure for fraud prevention
- Webhook signature validation
- Idempotent payment endpoints (prevent duplicates)

### Fraud Prevention
- Monitor suspicious patterns (high-value orders, unusual locations)
- Implement CVV verification
- Address verification (AVS)
- Velocity checks (multiple attempts)
- User behavior analysis

## Monitoring and Logging

### Security Logging
- All authentication attempts (success/failure)
- All authorization failures
- All data access to sensitive records
- All changes to user permissions
- All API calls to payment endpoints

### Audit Trail
- Who: User ID or system process
- What: Action performed
- When: Timestamp with timezone
- Where: IP address, endpoint
- Result: Success or failure

### Monitoring Alerts
- Failed login attempts (5+ in 10 minutes)
- Unauthorized access attempts
- Unusual data access patterns
- Payment processing failures
- Performance degradation
- Certificate expiration (30 days before)

### Incident Response
- Detection threshold: Automated alerts
- Escalation: Email to security team
- Response time: Critical < 1 hour
- Investigation: Full audit trail review
- Communication: Notification within 72 hours if data compromised

## Compliance

### GDPR Compliance
- User consent for data collection
- Right to access personal data
- Right to be forgotten
- Data portability in standard formats
- Privacy by design

### CCPA Compliance
- User opt-out for data sales
- Right to know what data is collected
- Right to delete personal information
- Do not sell personal information

### HIPAA Compliance (if applicable)
- Encrypt all health-related data
- Audit access logs
- Business Associate Agreements (BAA)
- Breach notification procedures

## Regular Security Activities
- [ ] Monthly: Dependency updates and vulnerability scans
- [ ] Quarterly: Security code review, access reviews
- [ ] Semi-annually: Penetration testing, security audit
- [ ] Annually: Disaster recovery testing, security training
