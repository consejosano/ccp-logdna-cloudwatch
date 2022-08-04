const scanner = require('sonarqube-scanner');
const cp = require('child_process');

const version = (process.env.APP_TAG) ? 
                    process.env.APP_TAG : 
                    cp.execSync('git rev-parse HEAD').toString().trim()


scanner(
  {
    serverUrl : process.env.SONAR_URL,
    token : process.env.SONAR_TOKEN,
    options: {
      'sonar.projectName': 'ccp-logdna-cloudwatch',
      'sonar.sources': './',
      'sonar.projectVersion': version
    }
  },
  () => process.exit()
)