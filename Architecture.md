# System Architecture Document
## LuxeLips - Luxury Lipstick E-Commerce Platform with AR

**Version**: 1.0  
**Created**: 2026-09-04  
**Document Owner**: Chief Architect  

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CLIENT LAYER                                   │
│  ┌──────────────────┐          ┌──────────────────┐                    │
│  │  React SPA       │          │  Mobile App      │                    │
│  │  (Web Browser)   │          │  (React Native)  │                    │
│  └────────┬─────────┘          └────────┬─────────┘                    │
└───────────┼──────────────────────────────┼──────────────────────────────┘
            │                              │
            │          HTTPS/TLS           │
            │      (API Gateway)           │
            │                              │
┌───────────┴──────────────────────────────┴──────────────────────────────┐
│                      APPLICATION LAYER                                   │
│                  ┌────────────────────────┐                             │
│                  │   API Gateway          │                             │
│                  │  (Auth, Rate Limit)    │                             │
│                  └────────────┬───────────┘                             │
│                               │                                          │
│  ┌────────────┐  ┌────────────┴──────────┐  ┌───────────┐             │
│  │ Product    │  │ User/Auth  │ Order    │  │ Checkout  │             │
│  │ Service    │  │ Service    │ Service  │  │ Service   │             │
│  └────────────┘  └────────────┴──────────┘  └───────────┘             │
│         │               │            │            │                    │
└─────────┼───────────────┼────────────┼────────────┼────────────────────┘
          │               │            │            │
          │    Database   │            │ Payment    │
┌─────────┴──────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                         │
│  ┌──────────────────────────────────────┐                             │
│  │  PostgreSQL Database (Primary)       │                             │
│  │  (Products, Users, Orders)           │                             │
│  └──────────────────────────────────────┘                             │
│  ┌──────────────────────────────────────┐                             │
│  │  Redis Cache                         │                             │
│  │  (Sessions, Carts, Cache)            │                             │
│  └──────────────────────────────────────┘                             │
│  ┌──────────────────────────────────────┐                             │
│  │  Elasticsearch                       │                             │
│  │  (Product Search)                    │                             │
│  └──────────────────────────────────────┘                             │
│  ┌──────────────────────────────────────┐                             │
│  │  S3/Cloud Storage                    │                             │
│  │  (Product Images, Files)             │                             │
│  └──────────────────────────────────────┘                             │
└─────────────────────────────────────────────────────────────────────────┘
          │
          │ Payment Provider
          │ (Stripe/Square)
          │
┌─────────┴─────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                                   │
│  Stripe, Email Service, Analytics, CDN, etc.                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

### Frontend
- **Framework**: React 18+ with TypeScript
- **State Management**: Redux Toolkit or Zustand
- **UI Components**: Material-UI or Tailwind CSS
- **HTTP Client**: Axios or Fetch API with interceptors
- **Build Tool**: Vite or Webpack
- **Testing**: Jest + Playwright (E2E)
- **Linting**: ESLint + Prettier

### Backend
- **Runtime**: Node.js 18+ or Python 3.11+
- **Framework**: Express.js or FastAPI
- **Database ORM**: Prisma or SQLAlchemy
- **Authentication**: Passport.js or JWT middleware
- **API Documentation**: Swagger/OpenAPI
- **Testing**: Jest + Supertest
- **Linting**: ESLint + TypeScript strict mode

### Database
- **Primary**: PostgreSQL 14+ (ACID, reliability)
- **Cache**: Redis 7+ (sessions, carts, real-time)
- **Search**: Elasticsearch 8+ (product search)
- **Backup**: AWS S3 or automated snapshots

### Infrastructure
- **Hosting**: AWS ECS/EKS, Heroku, or DigitalOcean
- **CDN**: CloudFlare or AWS CloudFront
- **Monitoring**: Datadog, New Relic, or CloudWatch
- **Logging**: ELK Stack or CloudWatch Logs
- **CI/CD**: GitHub Actions or GitLab CI

### Payment & External
- **Payment Gateway**: Stripe (primary), Square (backup)
- **Email**: SendGrid or AWS SES
- **SMS**: Twilio (optional for 2FA)
- **Analytics**: Google Analytics 4, Mixpanel
- **Error Tracking**: Sentry

---

## Service Architecture

### 1. API Gateway Service
**Purpose**: Entry point for all client requests

**Responsibilities**:
- Authentication and authorization
- Rate limiting and throttling
- Request routing to services
- Response transformation
- Logging and monitoring

**Endpoints**:
- `GET /api/health` - Health check
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Token refresh

### 2. Product Service
**Purpose**: Manage product catalog and search

**Responsibilities**:
- Product CRUD operations
- Product search and filtering
- Product recommendations
- Inventory management
- Category management

**Database Tables**:
```
products (id, name, description, price, image_url, category_id, created_at, updated_at)
categories (id, name, description)
product_reviews (id, product_id, user_id, rating, comment, created_at)
inventory (id, product_id, quantity_on_hand, reorder_level)
```

**API Endpoints**:
```
GET /api/products                    - List products (paginated)
GET /api/products/:id                - Get product details
GET /api/products/search             - Search products
GET /api/products/:id/reviews        - Get product reviews
GET /api/categories                  - List categories
```

### 3. User & Authentication Service
**Purpose**: Handle user accounts and authentication

**Responsibilities**:
- User registration and profile management
- Password hashing and reset
- JWT token generation and validation
- Multi-factor authentication
- User preferences and settings

**Database Tables**:
```
users (id, email, password_hash, first_name, last_name, phone, created_at, updated_at)
user_addresses (id, user_id, type, street, city, state, zip, country)
user_preferences (id, user_id, newsletter, notification_settings)
refresh_tokens (id, user_id, token, expires_at)
```

**API Endpoints**:
```
POST /api/auth/register              - User registration
POST /api/auth/login                 - User login
POST /api/auth/logout                - User logout
POST /api/auth/refresh               - Refresh token
GET /api/users/:id                   - Get user profile
PUT /api/users/:id                   - Update user profile
PUT /api/users/:id/password          - Change password
POST /api/users/:id/mfa/enable       - Enable MFA
```

### 4. Cart Service
**Purpose**: Manage shopping carts

**Responsibilities**:
- Add/remove items from cart
- Update quantities
- Calculate totals and taxes
- Apply discount codes
- Persist cart state

**Storage**: Redis (fast, temporary)

**Cache Schema**:
```
cart:{user_id} = {
  items: [
    { product_id, quantity, price_at_add },
    ...
  ],
  total: number,
  tax: number,
  discount: number,
  expires_at: timestamp
}
```

**API Endpoints**:
```
GET /api/cart                        - Get cart contents
POST /api/cart/items                 - Add item to cart
PUT /api/cart/items/:id              - Update cart item
DELETE /api/cart/items/:id           - Remove item from cart
POST /api/cart/apply-coupon          - Apply discount code
DELETE /api/cart                     - Clear cart
```

### 5. Order Service
**Purpose**: Process and manage orders

**Responsibilities**:
- Order creation and status tracking
- Order history retrieval
- Refund management
- Order confirmation and notifications
- Integration with payment service

**Database Tables**:
```
orders (id, user_id, order_number, status, total, tax, shipping_cost, created_at)
order_items (id, order_id, product_id, quantity, unit_price)
order_tracking (id, order_id, status, tracking_number, carrier, estimated_delivery)
shipments (id, order_id, tracking_number, carrier, shipped_at, delivered_at)
```

**Order Statuses**: `pending` → `payment_processing` → `confirmed` → `processing` → `shipped` → `delivered`

**API Endpoints**:
```
GET /api/orders                      - List user's orders
GET /api/orders/:id                  - Get order details
POST /api/orders                     - Create order
PUT /api/orders/:id/cancel           - Cancel order
GET /api/orders/:id/tracking         - Get tracking info
POST /api/orders/:id/review          - Submit order review
```

### 6. Payment Service
**Purpose**: Handle payment processing

**Responsibilities**:
- Payment gateway integration (Stripe)
- Payment validation and verification
- Webhook handling for payment events
- PCI DSS compliance
- Fraud detection

**API Endpoints**:
```
POST /api/payments/initialize        - Initialize payment
POST /api/payments/confirm           - Confirm payment
POST /api/payments/webhook           - Stripe webhook handler
GET /api/payments/:id/status         - Get payment status
POST /api/payments/refund            - Process refund
```

**Webhook Events**:
- `charge.succeeded` - Payment successful
- `charge.failed` - Payment failed
- `charge.refunded` - Refund processed
- `charge.dispute.created` - Chargeback initiated

### 7. Notification Service
**Purpose**: Send email and other notifications

**Responsibilities**:
- Email delivery (SendGrid)
- SMS notifications (optional)
- Push notifications
- Email template rendering
- Notification tracking

**Notification Types**:
- User registration confirmation
- Order confirmation
- Order shipping notification
- Order delivery notification
- Promotional emails
- Password reset emails

**API Endpoints**:
```
POST /api/notifications/send         - Send notification
GET /api/notifications/history       - Get notification history
PUT /api/notifications/:id/unsubscribe - Unsubscribe from emails
```

---

## Database Schema

### Core Tables

#### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  profile_image_url TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  mfa_enabled BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE INDEX idx_users_email ON users(email);
```

#### Products Table
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  long_description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  cost DECIMAL(10, 2),
  category_id INTEGER REFERENCES categories(id),
  image_url TEXT,
  images JSON, -- Array of image URLs
  sku VARCHAR(100) UNIQUE,
  rating DECIMAL(3, 2),
  review_count INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_active ON products(active);
```

#### Orders Table
```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  order_number VARCHAR(50) UNIQUE NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  subtotal DECIMAL(10, 2),
  tax DECIMAL(10, 2),
  shipping_cost DECIMAL(10, 2),
  discount DECIMAL(10, 2) DEFAULT 0,
  total DECIMAL(10, 2),
  shipping_address JSONB,
  billing_address JSONB,
  payment_method_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);
```

---

## Security Architecture

### Authentication Flow
```
1. User submits email + password
2. Backend hashes password and compares with DB
3. If match, generate JWT token (1 hour expiry)
4. Generate refresh token (7 days expiry, stored in DB)
5. Return both tokens to client
6. Client stores tokens (JWT in memory, refresh in httpOnly cookie)
7. Include JWT in Authorization header for protected requests
```

### Authorization Model
```
User
├── Role: Admin, Staff, Customer, Guest
│   ├── Admin: Full system access
│   ├── Staff: Content management
│   ├── Customer: Own account and purchases
│   └── Guest: Browse only
├── Permissions: Dynamic based on role
└── Scope: Resource-level access control
```

### Data Encryption
- **In Transit**: TLS 1.3 (HTTPS everywhere)
- **At Rest**: AES-256 for sensitive fields
- **Database**: Encrypted connections with SSL
- **Backups**: Encrypted storage with key rotation

### API Security
- Rate limiting: 1000 req/hour per IP
- CORS: Whitelist only known domains
- CSRF protection: Token validation
- SQL Injection: Parameterized queries
- XSS Protection: Input sanitization, CSP headers

---

## Scalability and Performance

### Horizontal Scaling
- **Stateless API Services**: Deploy multiple instances behind load balancer
- **Database Replication**: Read replicas for read-heavy operations
- **Caching**: Redis for sessions, frequently accessed data
- **CDN**: CloudFlare/CloudFront for static assets

### Performance Optimization
- **Code Splitting**: React lazy loading
- **Image Optimization**: WebP format, responsive images
- **Database**: Proper indexing, query optimization
- **Caching Strategy**: 
  - Cache-Control headers for static assets
  - Redis for API responses
  - Browser caching for images

### Load Testing Targets
- Support 5,000 concurrent users
- Handle 10,000 requests/second
- Page load time < 2 seconds
- API response < 200ms (p95)

---

## Monitoring and Observability

### Key Metrics
- **Availability**: Uptime percentage
- **Latency**: API response time, page load time
- **Error Rate**: 5xx and 4xx responses
- **Business Metrics**: Conversion rate, AOV, revenue

### Logging Strategy
- **Application Logs**: Info, warning, error levels
- **Audit Logs**: User actions, data changes
- **API Logs**: Request/response, latency
- **Security Logs**: Failed logins, unauthorized access

### Alerting
- API response time > 500ms
- Error rate > 1%
- Uptime < 99.9%
- Database connection pool exhausted
- Redis memory usage > 80%

---

## Disaster Recovery

### Backup Strategy
- Database: Daily incremental, weekly full backups
- Files: S3 with versioning and replication
- Configuration: Version controlled
- Retention: 30 days of daily backups, 1 year of weekly

### Recovery Plans
- **RTO** (Recovery Time Objective): 1 hour
- **RPO** (Recovery Point Objective): 1 hour
- **Failover**: Automated to standby infrastructure
- **Testing**: Monthly DR drills

### Monitoring and Alerting
- Backup success/failure tracking
- Alert on backup failures
- Regular restore testing

---

## Deployment Architecture

### CI/CD Pipeline
```
Code Push → Lint & Test → Build → Deploy to Staging → Integration Tests → Deploy to Production
```

### Deployment Strategy
- **Blue-Green Deployment**: Zero-downtime updates
- **Canary Releases**: Gradual rollout to subset of users
- **Feature Flags**: Control feature availability
- **Rollback**: Automated rollback on health check failure

### Environments
- **Development**: Local, continuous updates
- **Staging**: Production replica, integration testing
- **Production**: Live environment with monitoring

---

## Future Considerations

### Scalability Improvements
- Event-driven architecture (message queues)
- Microservices decomposition
- GraphQL for flexible querying
- API Gateway versioning

### Technology Upgrades
- Server-side rendering for SEO
- Real-time notifications (WebSocket)
- Mobile app (React Native)
- Multi-region deployment

---

## Sign-Off

| Role | Name | Date |
|------|------|------|
| Chief Architect | [TBD] | 2026-09-04 |
| CTO | [TBD] | 2026-09-04 |
| Security Lead | [TBD] | 2026-09-04 |

---

**Document Status**: Ready for implementation  
**Last Updated**: 2026-09-04
