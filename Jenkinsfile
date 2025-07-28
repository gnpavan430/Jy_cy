pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm ci'
                    } else {
                        bat 'npm ci'
                    }
                }
            }
        }
        stage('Test & Report') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm run test:report'
                    } else {
                        bat 'npm run test:report'
                    }
                }
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
