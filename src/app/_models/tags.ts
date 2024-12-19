
// export class Tag {
//     static readonly ANGULAR = new Tag('Angular', '#5a7581');
//     static readonly JAVA = new Tag('Java', '#5a7581');
//     static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
//     static readonly SPRINGSECURITY = new Tag('Spring Security', '#5a7581');
//     static readonly SPRINGJWT = new Tag('Spring JWT', '#5a7581');
//     static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
//     static readonly LOMBOK = new Tag('Lombok', '#5a7581');
//     static readonly JPA = new Tag('JPA', '#5a7581');
//     static readonly JDBC = new Tag('JDBC', '#5a7581');
//     static readonly POSTGRESQL = new Tag('PostgreSQL', '#355158')
//     static readonly SQL = new Tag('SQL', '#355158');
//     static readonly SQLALCHEMY = new Tag('SQLAlchemy', '#4a6a77');
//     static readonly PYTHON = new Tag('Python', '#4a6a77');
//     static readonly FLASK = new Tag('Flask', '#4a6a77');
//     static readonly BEAUTIFULSOUP = new Tag('Beautiful Soup', '#4a6a77');
//     static readonly PLAYWWRIGHT = new Tag('Playwright', '#4a6a77');
//     static readonly SELENIUM = new Tag('Selenium Driver', '#4a6a77');
//     static readonly PANDAS = new Tag('Pandas', '#4a6a77');
//     static readonly DASH = new Tag('Dash', '#4a6a77');
//     static readonly PLOTLY = new Tag('Plotly', '#4a6a77');
//     static readonly RESTAPI = new Tag('Rest API', '#355158');
//     static readonly INSOMNIA = new Tag('Insomnia', '#355158');
//     static readonly POSTMAN = new Tag('Postman', '#355158');
//     static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
//     static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
//     static readonly HTML5 = new Tag('HTML5', '#192129');
//     static readonly CSS3 = new Tag('CSS3', '#192129');
//     static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129');
//     static readonly PYTEST = new Tag('Pytest', '#4a6a77');
//     static readonly JUNIT = new Tag('JUnit', '#5a7581');
//     static readonly MOCKITO = new Tag('Mockito', '#5a7581');
//     static readonly DOCKER = new Tag('Docker', '#355158');
//     static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#355158');
//     static readonly VUEJS = new Tag('Vue.JS', '#192129');
//     static readonly HIBERNATE = new Tag('Hibernate', '#5a7581');
//     static readonly FASTAPI = new Tag('FastAPI', '#4a6a77');
//     static readonly SQLITE = new Tag('SQLite', '#355158');
//     static readonly PYDANTIC = new Tag('Pydantic', '##4a6a77');






//     private constructor(private readonly key: string, public readonly color: string) {
//     }

//     toString() {
//         return this.key;
//     }

// }
export class Tag {
    // Frontend
static readonly ANGULAR = new Tag('Angular', '#dd0031'); 
static readonly REACT = new Tag('React', '#dd0031'); 
static readonly CLOUDINARY = new Tag('Cloudinary', '#dd0031'); 
static readonly JAVASCRIPT = new Tag('Javascript', '#F0DB4F'); 
static readonly HTML5 = new Tag('HTML5', '#E34F26'); 
static readonly BOOTSTRAP = new Tag('Bootstrap', '#563D7C');
static readonly TAILWINDCSS = new Tag('Tailwind CSS', '#06B6D4');
static readonly SCSS = new Tag('SCSS', '#C6538C');
static readonly MATERIAL = new Tag('Angular Material', '#0277BD');
static readonly RXJS = new Tag('RxJS', '#B7178C');

// Backend
static readonly NODEJS = new Tag('Node.js', '#68a063'); 
static readonly EXPRESS = new Tag('Express', '#000000');
static readonly MONGODB = new Tag('MongoDB', '#47A248'); 
static readonly JWT = new Tag('JWT', '#006400'); 
static readonly RESTAPI = new Tag('REST API', '#4caf50'); 
static readonly GRAPHQL = new Tag('GraphQL', '#E10098');
static readonly NESTJS = new Tag('NestJS', '#E0234E');
static readonly WEBSOCKETS = new Tag('WebSockets', '#8CC84B');
static readonly APOLLO = new Tag('Apollo', '#311C87');
static readonly REDIS = new Tag('Redis', '#DC382D');
static readonly FASTAPI = new Tag('FastApi', '#DC382D');
static readonly SOCKET_IO = new Tag('Socket-io', '#DC382D');
static readonly STRIPE = new Tag('Stripe', '#dd0031'); 
static readonly CHARTJS = new Tag('Chartjs', '#dd0031');



// Databases
static readonly POSTGRESQL = new Tag('PostgreSQL', '#336791');
static readonly MYSQL = new Tag('MySQL', '#4479A1');
static readonly SQLITE = new Tag('SQLite', '#003B57'); 
static readonly FIREBASE = new Tag('Firebase', '#FFCA28');
static readonly ELASTICSEARCH = new Tag('Elasticsearch', '#005571');
static readonly RABBITMQ = new Tag('RabbitMQ', '#FF6600');
static readonly GRAPHDB = new Tag('GraphDB', '#990000');

// Testing
static readonly JEST = new Tag('JestTest', '#DC382D');
static readonly MOCHA = new Tag('Mocha', '#8D6748');
static readonly CHAI = new Tag('Chai', '#A30701');
static readonly CUCUMBER = new Tag('Cucumber', '#23D96C');
static readonly KARMA = new Tag('Karma', '#224955');
static readonly PROTRACTOR = new Tag('Protractor', '#E23237');

// DevOps/Tools
static readonly DOCKER = new Tag('Docker', '#0db7ed');
static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#0db7ed'); 
static readonly KUBERNETES = new Tag('Kubernetes', '#326CE5');
static readonly NGINX = new Tag('NGINX', '#269539');
static readonly GIT = new Tag('Git', '#F05032');
static readonly GITHUB = new Tag('GitHub', '#181717');
static readonly BITBUCKET = new Tag('Bitbucket', '#0052CC');
static readonly JIRA = new Tag('Jira', '#0052CC');

// Deployment/Hosting
static readonly HEROKU = new Tag('Heroku', '#430098');
static readonly NETLIFY = new Tag('Netlify', '#00C7B7');
static readonly AWS = new Tag('AWS', '#FF9900');
static readonly AZURE = new Tag('Azure', '#0089D6');
static readonly DIGITALOCEAN = new Tag('DigitalOcean', '#0080FF');
static readonly VERCEL = new Tag('Vercel', '#000000');

// CI/CD
static readonly JENKINS = new Tag('Jenkins', '#D24939');
static readonly CIRCLECI = new Tag('CircleCI', '#343434');
static readonly GITHUBACTIONS = new Tag('GitHub Actions', '#2088FF');

   



    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}