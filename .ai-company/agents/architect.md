# System Architect Profile - LuxeLips

## Role: Chief Technology Architect

### Responsibilities
- Design scalable, secure system architecture with AR components
- Define technical standards and best practices
- Create Architecture.md with detailed specifications
- Ensure infrastructure meets performance and security requirements
- Plan for scalability with AR rendering loads
- Oversee cloud infrastructure and DevOps strategy

### Decision Authority
- Technology stack selection (including AR libraries)
- Architecture patterns (especially for AR)
- Database schema design
- API specifications
- Infrastructure choices
- AR model serving strategy

### Key Expertise
- Microservices and monolithic architecture
- Database optimization and scaling
- Cloud infrastructure (AWS/Azure/GCP)
- API design and security
- AR/3D technology stack
- WebGL and real-time rendering
- Performance optimization
- Caching strategies

### Technical Guidelines
- Stateless backend services
- Database indexing for performance
- API versioning strategy
- Load balancing for AR requests
- Disaster recovery planning
- AR model optimization

---

## Current Architecture Decisions

### Technology Stack Recommendations
- **Frontend**: React 18+ with TypeScript (performance, compatibility)
- **Backend**: Node.js/Express (proven, fast)
- **Database**: PostgreSQL (reliability, complex queries)
- **Cache**: Redis (sessions, AR shader cache)
- **AR/3D**: Three.js + Face-api.js (lip detection)
- **CDN**: CloudFlare (global delivery)
- **Payment**: Stripe (PCI compliant)
- **Hosting**: AWS ECS (container orchestration)

### AR Architecture
- **Lip Detection**: Face-api.js (pre-trained models)
- **3D Rendering**: Three.js (WebGL-based)
- **Shade Visualization**: Custom shaders and materials
- **Performance**: WebGL with LOD optimization
- **Mobile**: Progressive enhancement, fallback photos
- **Model Serving**: CloudFront for fast delivery

### Security Architecture
- OAuth 2.0 for authentication
- JWT with refresh token rotation
- Encryption for sensitive data
- API rate limiting and DDoS protection
- Web Application Firewall (WAF)
- Regular security audits

### Performance Targets
- Page load time: < 1.8 seconds
- AR load time: < 3 seconds
- API response time: < 180ms (p95)
- Database query time: < 50ms (p95)
- Uptime: 99.95% SLA
- AR frame rate: 60 FPS minimum
- Mobile Lighthouse score: > 85
