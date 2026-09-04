# Development Rules and Standards
## Delicious Tomato Shop E-Commerce Platform

**Version**: 1.0  
**Created**: 2026-09-04  
**Document Owner**: Tech Lead  

---

## Golden Rules

### 1. **Code Quality First**
- Always write code as if you're writing for production day one
- Better to be slow than to be broken
- Code review is not optional - it's mandatory

### 2. **Security by Default**
- Never hardcode secrets
- Always validate input on server-side
- Use HTTPS/TLS everywhere
- Encrypt sensitive data at rest and in transit

### 3. **Test Early and Often**
- Write tests before or alongside code
- Minimum 80% coverage required
- Test critical user paths with E2E tests
- Performance and security testing mandatory

### 4. **Documentation is Code**
- If code is not documented, it doesn't exist
- Update documentation with every change
- Comments explain WHY, not WHAT
- Keep README and API docs in sync

### 5. **Communication Over Everything**
- Document design decisions
- Communicate blockers immediately
- Ask for help early, not late
- Pair program on complex features

---

## Naming Conventions

### Files and Directories
```
✅ CORRECT:
- components/product-card.tsx
- services/user-service.ts
- utils/helpers.ts
- styles/theme.ts

❌ WRONG:
- components/ProductCard.tsx (should be kebab-case)
- services/userService.ts (directory should be kebab-case)
- Utilities/Helpers.ts (wrong case)
```

### JavaScript/TypeScript Variables
```
✅ CORRECT:
const userId = 123;
let userName = "John Doe";
const MAX_ITEMS = 100;
function calculateTotal() { }
class UserService { }

❌ WRONG:
const user_id = 123;
let User_Name = "John Doe";
const max_items = 100;
function CalculateTotal() { }
class userservice { }
```

### React Components
```
✅ CORRECT:
export const ProductCard = () => { }
export const UserDashboard = () => { }
export const CheckoutForm = () => { }

❌ WRONG:
export const productCard = () => { }
export const user_dashboard = () => { }
export const checkoutForm = () => { }
```

### Database
```
✅ CORRECT:
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  created_at TIMESTAMP
);

❌ WRONG:
CREATE TABLE User (
  ID SERIAL PRIMARY KEY,
  Email VARCHAR(255) UNIQUE,
  CreatedAt TIMESTAMP
);
```

---

## Code Structure and Organization

### Frontend Structure
```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   └── Header.tsx
│   ├── layout/
│   │   ├── MainLayout.tsx
│   │   └── Footer.tsx
│   ├── product/
│   │   ├── ProductCard.tsx
│   │   ├── ProductDetail.tsx
│   │   └── ProductList.tsx
│   ├── cart/
│   │   ├── CartItem.tsx
│   │   └── CartSummary.tsx
│   └── auth/
│       ├── LoginForm.tsx
│       └── RegisterForm.tsx
├── pages/
│   ├── Home.tsx
│   ├── ProductPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   └── UserAccountPage.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useCart.ts
│   └── useFetch.ts
├── services/
│   ├── api.ts
│   ├── auth-service.ts
│   └── product-service.ts
├── store/
│   ├── slices/
│   │   ├── authSlice.ts
│   │   ├── cartSlice.ts
│   │   └── productSlice.ts
│   └── store.ts
├── types/
│   ├── index.ts
│   ├── product.ts
│   └── user.ts
├── utils/
│   ├── validation.ts
│   ├── formatting.ts
│   └── helpers.ts
├── styles/
│   ├── globals.css
│   └── theme.ts
└── app.tsx
```

### Backend Structure
```
src/
├── routes/
│   ├── auth.routes.ts
│   ├── products.routes.ts
│   ├── orders.routes.ts
│   └── users.routes.ts
├── controllers/
│   ├── auth.controller.ts
│   ├── product.controller.ts
│   ├── order.controller.ts
│   └── user.controller.ts
├── services/
│   ├── auth.service.ts
│   ├── product.service.ts
│   ├── order.service.ts
│   ├── payment.service.ts
│   └── email.service.ts
├── models/
│   ├── user.model.ts
│   ├── product.model.ts
│   └── order.model.ts
├── middleware/
│   ├── auth.middleware.ts
│   ├── error-handler.middleware.ts
│   └── validation.middleware.ts
├── validators/
│   ├── user.validator.ts
│   ├── product.validator.ts
│   └── order.validator.ts
├── utils/
│   ├── logger.ts
│   ├── crypto.ts
│   └── helpers.ts
├── config/
│   ├── database.ts
│   ├── env.ts
│   └── constants.ts
├── database/
│   ├── migrations/
│   └── seeds/
└── app.ts
```

---

## Code Quality Standards

### TypeScript

#### Strict Mode Required
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

#### Type Definitions
```typescript
✅ CORRECT:
interface User {
  id: number;
  email: string;
  firstName: string;
  createdAt: Date;
}

type UserRole = 'admin' | 'staff' | 'customer' | 'guest';

function getUser(id: number): User | null { }

❌ WRONG:
interface User {
  id: any;
  email: any;
}

function getUser(id) { }  // no return type

const user: any = { };  // avoid any
```

#### Function Signatures
```typescript
✅ CORRECT:
async function fetchProducts(
  limit: number,
  offset: number
): Promise<Product[]> {
  // implementation
}

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.total, 0);
};

❌ WRONG:
function fetchProducts(limit, offset) {  // missing types
  // implementation
}

async function fetchProducts(limit: number, offset: number) {
  // missing return type
}
```

### React Components

#### Functional Components
```typescript
✅ CORRECT:
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart
}) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

❌ WRONG:
export const ProductCard = ({ product }) => {  // missing types
  // implementation
};

class ProductCard extends React.Component {  // avoid class components
  // implementation
}
```

#### Hooks Usage
```typescript
✅ CORRECT:
const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState<boolean>(false);

useEffect(() => {
  fetchProducts();
}, []);  // dependency array required

const memoizedProduct = useMemo(() => {
  return expensiveCalculation(products);
}, [products]);

❌ WRONG:
const [data] = useState();  // missing type

useEffect(() => {
  fetchProducts();
});  // missing dependency array

const { data } = useFetch();  // undefined behavior
```

### Error Handling

#### Always Handle Errors
```typescript
✅ CORRECT:
try {
  const user = await authService.login(email, password);
  setUser(user);
} catch (error) {
  if (error instanceof ValidationError) {
    setError(error.message);
  } else {
    setError('Login failed. Please try again.');
    logger.error('Login error:', error);
  }
}

❌ WRONG:
const user = await authService.login(email, password);  // no error handling

try {
  const user = await authService.login(email, password);
} catch (error) {
  // ignored error
}
```

#### Express Error Middleware
```typescript
✅ CORRECT:
app.use((err, req, res, next) => {
  logger.error(err);
  res.status(err.status || 500).json({
    error: err.message,
    status: err.status || 500
  });
});

❌ WRONG:
// No error handler middleware

app.get('/api/products', (req, res) => {
  const products = await Product.find();  // no error handling
  res.json(products);
});
```

---

## Testing Requirements

### Unit Tests
- **Coverage Target**: 80%+ for all services and utilities
- **Framework**: Jest
- **Pattern**: Arrange-Act-Assert

```typescript
describe('UserService', () => {
  it('should create a new user', async () => {
    // Arrange
    const userData = { email: 'test@example.com', password: 'pass123' };
    
    // Act
    const user = await userService.create(userData);
    
    // Assert
    expect(user.email).toBe(userData.email);
    expect(user.id).toBeDefined();
  });
});
```

### Integration Tests
- **Coverage**: API endpoints, database operations
- **Framework**: Jest + Supertest (backend), Jest + React Testing Library (frontend)
- **Pattern**: Set up test data, call API, verify response

### E2E Tests
- **Coverage**: Critical user paths (signup, browse, checkout)
- **Framework**: Playwright
- **Pattern**: User journey simulation

### Performance Tests
- **Tools**: k6, Apache JMeter
- **Targets**: 
  - Page load < 2 seconds
  - API response < 200ms (p95)
  - Support 5,000 concurrent users

---

## Git Workflow

### Branch Naming
```
✅ CORRECT:
- feature/user-authentication
- feature/product-search
- bugfix/cart-total-calculation
- hotfix/payment-processing

❌ WRONG:
- feature_user_auth
- new-feature
- fix
- temp
```

### Commit Messages
```
✅ CORRECT:
git commit -m "feat: Add user authentication with JWT"
git commit -m "fix: Correct cart total calculation"
git commit -m "docs: Update API documentation"
git commit -m "test: Add unit tests for auth service"

Format: <type>: <subject>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Code style (no functional change)
- test: Tests
- refactor: Code refactoring
- perf: Performance improvement
- ci: CI/CD changes
```

### Pull Request Process
1. Create feature branch from `develop`
2. Make changes with meaningful commits
3. Push to remote
4. Create pull request with description
5. Request code review (minimum 2 reviewers)
6. Address review comments
7. Merge to `develop` once approved
8. Delete feature branch

### Branch Protection Rules
- Require pull request reviews (minimum 2)
- Require status checks to pass
- Require branches to be up to date
- Dismiss stale pull request approvals
- No force pushes to main/develop

---

## Security Requirements

### Secrets Management
```
❌ NEVER:
- Hardcode API keys, passwords, tokens
- Commit .env files
- Store secrets in comments
- Share credentials in Slack/email

✅ DO:
- Use environment variables
- Store secrets in .env (git ignored)
- Use environment variable validation
- Rotate secrets regularly
```

### Input Validation
```typescript
✅ CORRECT:
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
};

const user = await userService.create({ email, password });

❌ WRONG:
const user = await userService.create({ email, password });  // no validation

const email = req.body.email;  // unsanitized input
```

### SQL Injection Prevention
```typescript
✅ CORRECT:
const user = await db.query(
  'SELECT * FROM users WHERE email = $1',
  [email]
);

❌ WRONG:
const user = await db.query(
  `SELECT * FROM users WHERE email = '${email}'`
);
```

### CORS Configuration
```typescript
✅ CORRECT:
app.use(cors({
  origin: ['https://delicioustomatoshop.com', 'https://www.delicioustomatoshop.com'],
  credentials: true
}));

❌ WRONG:
app.use(cors({
  origin: '*'  // Allow all origins
}));
```

---

## Performance Standards

### Frontend Performance
- Use React.memo for expensive components
- Implement code splitting with dynamic imports
- Optimize images (WebP, responsive sizes)
- Use lazy loading for lists
- Monitor bundle size

### Backend Performance
- Add database indexes for frequently queried columns
- Use connection pooling
- Implement caching (Redis)
- Query optimization (N+1 prevention)
- Pagination for large result sets

### Database Performance
- Avoid SELECT * queries
- Use appropriate indexes
- Denormalize strategically (not prematurely)
- Regular query analysis
- Backup performance monitoring

---

## Do's and Don'ts

### DO
- ✅ Write small, focused functions
- ✅ DRY - Don't Repeat Yourself
- ✅ KISS - Keep It Simple, Stupid
- ✅ Single Responsibility Principle
- ✅ Test edge cases
- ✅ Use descriptive variable names
- ✅ Keep functions pure
- ✅ Handle errors explicitly
- ✅ Document complex logic
- ✅ Code review thoroughly

### DON'T
- ❌ Create god objects (too many responsibilities)
- ❌ Copy-paste code (refactor to DRY)
- ❌ Ignore warnings or linting errors
- ❌ Mix concerns (separation of concerns)
- ❌ Use magic numbers without explanation
- ❌ Commit commented-out code
- ❌ Skip error handling
- ❌ Use global variables
- ❌ Ignore performance (until proven necessary)
- ❌ Merge code without tests

---

## Code Review Checklist

- [ ] Code follows naming conventions and structure
- [ ] TypeScript strict mode compliant (no `any`)
- [ ] All functions have type definitions
- [ ] Error handling implemented
- [ ] Input validation on server-side
- [ ] No hardcoded secrets or sensitive data
- [ ] Tests written and passing (>80% coverage)
- [ ] No console.log statements in production code
- [ ] Comments explain WHY, not WHAT
- [ ] Performance impact assessed
- [ ] Security implications reviewed
- [ ] Documentation updated
- [ ] Database migrations tested
- [ ] No linting errors
- [ ] No package.lock or yarn.lock conflicts

---

## Tools and Linting

### ESLint Configuration
```json
{
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "rules": {
    "no-var": "error",
    "prefer-const": "error",
    "no-console": "warn",
    "no-debugger": "error",
    "eqeqeq": ["error", "always"]
  }
}
```

### Prettier Configuration
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2
}
```

---

**Document Status**: Living standard - Updated as team grows  
**Last Updated**: 2026-09-04  
**Review Frequency**: Quarterly
