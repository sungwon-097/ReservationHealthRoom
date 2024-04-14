pipeline {
    agent any
    stages {
        stage('Build image') {
            steps {
                script {
                    docker.build("csw2757/reservationhealthroom:${env.BUILD_ID}")
                    docker.push("csw2757/reservationhealthroom:${env.BUILD_ID}")
                }
            }
        }
    }
}