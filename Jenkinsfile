pipeline {
    agent any
    stages {
        stage('Setup Git Safe Directory') {
            steps {
                bat 'git config --global --add safe.directory C:/Users/gnpav/Documents/cypress_framework/.git'
            }
        }
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test & Report') {
            steps {
                sh 'npm run test:report'
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