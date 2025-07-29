pipeline {
    agent any
    tools {
        nodejs 'Node_jenkins'
    }
    stages {
        stage('Install') {
            steps {
                bat 'npm ci'
            }
        }
        stage('Test & Report') {
            steps {
                bat 'npm run test:report'
            }
        }
        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'cypress/reports/mochawesome/*.html', fingerprint: true
            }
        }
    }
    post {
        always {
            publishHTML(target: [
                reportDir: 'cypress/reports/mochawesome',
                reportFiles: 'index.html',
                reportName: 'Mochawesome Report'
            ])
        }
    }
}
